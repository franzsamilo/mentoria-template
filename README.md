# Mentoria Landing — Next.js + GoHighLevel

The original `mentoria-landing.html` ported to a Next.js (App Router, TS) project with lead-capture forms wired to GoHighLevel.

## Setup

```bash
npm install
cp .env.example .env.local
# fill in GHL credentials (see below)
npm run dev
```

Visit `http://localhost:3000`.

## GHL touchpoints

Three lead-capture touchpoints are wired:

| Touchpoint | Where on the page | Source tag |
|---|---|---|
| `hero` | Top fold form | `mentoria-hero` |
| `final` | Final CTA form | `mentoria-final` |
| `schools` | "Book a walkthrough" CTA | `mentoria-schools` |

Each submission posts to `/api/lead`, which forwards to GHL with:

- standard fields: `email`, `source`, `locationId`
- tags: `GHL_BASE_TAGS` + `mentoria-<touchpoint>`
- custom fields (only those whose env var is set): `source_section`, `page_url`, `referrer`, `utm_*`, `child_age`, etc.

## Wiring GHL

Two paths are supported — pick one:

### A. Direct Contacts API (recommended)

1. In GHL: **Settings > Private Integrations > Create**. Grant `contacts.write` and `contacts.readonly`.
2. Copy the token into `GHL_API_TOKEN`.
3. Copy your Location ID (**Settings > Business Profile**) into `GHL_LOCATION_ID`.

### B. Workflow Webhook (no-code path)

1. In GHL: **Automation > Workflows > New > Inbound Webhook trigger**.
2. Save and copy the webhook URL into `GHL_WEBHOOK_URL`.
3. Inside the workflow add a "Create/Update Contact" action and map the fields from the JSON body.

If both A and B are set, the webhook (B) takes precedence.

## Custom field IDs

For each field you want stored, create it in **Settings > Custom Fields**, then paste its ID into the matching `GHL_FIELD_*` env var in `.env.local`. Any field with an empty env var is silently skipped.

## Adding a new touchpoint

1. Drop a `<LeadForm source="my-cta" />` anywhere in `app/page.tsx`.
2. The API route will tag the contact with `mentoria-my-cta`.

## Adding a new field

1. Add the env var to `.env.local` (e.g. `GHL_FIELD_CHILD_GRADE=`).
2. Add the field to the `fieldMap` in `lib/ghl.ts`.
3. Pass the value from the form payload.

## Troubleshooting

**`npm install` fails with `UNABLE_TO_VERIFY_LEAF_SIGNATURE`** — your machine has a TLS-intercepting proxy (corporate AV, VPN, Zscaler etc.). Pick one:

- Point npm at your corp CA bundle: `npm config set cafile "C:\path\to\corp-ca.pem"` then re-run install.
- Set the env var: `setx NODE_EXTRA_CA_CERTS "C:\path\to\corp-ca.pem"` (new shell).
- As a last resort and only on a trusted network: `npm config set strict-ssl false` — turn back on after install.

## Notes on the original HTML

`mentoria-landing.html` is kept at the project root as a design reference. It is not served by Next.js. Delete it when you no longer need it.
