import { NextResponse } from "next/server";
import { submitToGhl, type LeadPayload, type Touchpoint } from "@/lib/ghl";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TOUCHPOINTS: readonly Touchpoint[] = ["hero", "final", "schools"] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STRING_KEYS = [
  "email",
  "name",
  "phone",
  "organization",
  "child_age",
  "parent_role",
  "page_url",
  "referrer",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

function pickString(raw: unknown, key: string): string | undefined {
  if (typeof raw !== "object" || raw === null) return undefined;
  const v = (raw as Record<string, unknown>)[key];
  return typeof v === "string" && v.length > 0 ? v.slice(0, 500) : undefined;
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const email = pickString(raw, "email");
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const touchpoint = pickString(raw, "touchpoint") as Touchpoint | undefined;
  if (!touchpoint || !TOUCHPOINTS.includes(touchpoint)) {
    return NextResponse.json({ error: "invalid_touchpoint" }, { status: 400 });
  }

  const extras: Record<string, string> = {};
  for (const key of STRING_KEYS) {
    if (key === "email") continue;
    const v = pickString(raw, key);
    if (v) extras[key] = v;
  }
  const payload: LeadPayload = { email, touchpoint, ...extras };

  const result = await submitToGhl(payload);
  if (!result.ok) {
    console.error("[ghl] submission failed", result.status, result.body);
    return NextResponse.json({ error: "ghl_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, path: result.path });
}
