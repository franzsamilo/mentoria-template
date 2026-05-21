/**
 * GoHighLevel integration layer.
 *
 * Sending paths (first non-empty wins):
 *   1. GHL_WEBHOOK_URL  — POST raw JSON to a workflow webhook trigger
 *   2. GHL_API_TOKEN + GHL_LOCATION_ID — POST to the v2 Contacts API
 *
 * Custom-field mapping is driven by env vars: each touchpoint payload key
 * has a matching GHL_FIELD_<KEY> env var that holds the GHL custom-field
 * id. Empty env vars are skipped so you only populate the fields that
 * exist in your sub-account.
 */

export type Touchpoint = "hero" | "final" | "schools";

export interface LeadPayload {
  email: string;
  touchpoint: Touchpoint;
  // optional human-entered fields (the schools modal collects these)
  name?: string;
  phone?: string;
  organization?: string;
  child_age?: string;
  parent_role?: string;
  // automatic context
  page_url?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

interface GhlCustomField {
  id: string;
  field_value: string;
}

/**
 * Map from LeadPayload key → env var that holds the corresponding
 * GHL custom-field id. Add a row here when wiring a new field.
 */
const FIELD_ENV_KEYS: Record<string, string> = {
  touchpoint: "GHL_FIELD_SOURCE_SECTION",
  page_url: "GHL_FIELD_PAGE_URL",
  referrer: "GHL_FIELD_REFERRER",
  utm_source: "GHL_FIELD_UTM_SOURCE",
  utm_medium: "GHL_FIELD_UTM_MEDIUM",
  utm_campaign: "GHL_FIELD_UTM_CAMPAIGN",
  utm_term: "GHL_FIELD_UTM_TERM",
  utm_content: "GHL_FIELD_UTM_CONTENT",
  child_age: "GHL_FIELD_CHILD_AGE",
  parent_role: "GHL_FIELD_PARENT_ROLE",
  organization: "GHL_FIELD_CHILD_NAME",
};

function buildCustomFields(payload: LeadPayload): GhlCustomField[] {
  const out: GhlCustomField[] = [];
  for (const [payloadKey, envKey] of Object.entries(FIELD_ENV_KEYS)) {
    const fieldId = process.env[envKey];
    const value = (payload as Record<string, string | undefined>)[payloadKey];
    if (fieldId && value) {
      out.push({ id: fieldId, field_value: value });
    }
  }
  return out;
}

function buildTags(touchpoint: Touchpoint): string[] {
  const base = (process.env.GHL_BASE_TAGS ?? "mentoria-landing")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  return [...base, `mentoria-${touchpoint}`];
}

function splitName(name?: string): { firstName?: string; lastName?: string } {
  if (!name) return {};
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0] };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

export type GhlResult =
  | { ok: true; path: "webhook" | "api" | "logged" }
  | { ok: false; status: number; body: string };

export async function submitToGhl(payload: LeadPayload): Promise<GhlResult> {
  const tags = buildTags(payload.touchpoint);

  if (process.env.GHL_WEBHOOK_URL) {
    const res = await fetch(process.env.GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, tags, source: `mentoria-${payload.touchpoint}` }),
    });
    if (!res.ok) return { ok: false, status: res.status, body: await res.text() };
    return { ok: true, path: "webhook" };
  }

  if (process.env.GHL_API_TOKEN && process.env.GHL_LOCATION_ID) {
    const { firstName, lastName } = splitName(payload.name);
    const body = {
      email: payload.email,
      phone: payload.phone,
      firstName,
      lastName,
      locationId: process.env.GHL_LOCATION_ID,
      source: `mentoria-${payload.touchpoint}`,
      tags,
      customFields: buildCustomFields(payload),
    };
    const res = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GHL_API_TOKEN}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) return { ok: false, status: res.status, body: await res.text() };
    return { ok: true, path: "api" };
  }

  // No credentials wired — log so the form still feels alive in dev.
  console.warn("[ghl] no credentials set; lead logged only:", payload);
  return { ok: true, path: "logged" };
}
