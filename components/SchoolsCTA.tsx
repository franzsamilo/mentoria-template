"use client";

import { useEffect, useRef, useState } from "react";

interface UtmContext {
  page_url?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

function readContext(): UtmContext {
  if (typeof window === "undefined") return {};
  const ctx: UtmContext = {
    page_url: window.location.href,
    referrer: document.referrer || undefined,
  };
  const params = new URLSearchParams(window.location.search);
  for (const k of UTM_KEYS) {
    const v = params.get(k);
    if (v) (ctx as Record<string, string>)[k] = v;
  }
  return ctx;
}

export default function SchoolsCTA() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    parent_role: "School operator",
  });
  const ctxRef = useRef<UtmContext>({});

  useEffect(() => {
    ctxRef.current = readContext();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending" || state === "ok") return;
    setState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          touchpoint: "schools",
          ...ctxRef.current,
        }),
      });
      setState(res.ok ? "ok" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <>
      <button
        type="button"
        className="cta"
        onClick={() => {
          setState("idle");
          setOpen(true);
        }}
      >
        Book a 20-minute walkthrough →
      </button>

      {open && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="schools-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="modal">
            <button
              type="button"
              className="close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3 id="schools-modal-title">Book a walkthrough</h3>
            <p>20 minutes. We&apos;ll show the operator view + how cohort tags flow to your GHL.</p>

            {state === "ok" ? (
              <p style={{ color: "var(--accent)", fontWeight: 600 }}>
                ✓ Booked. We&apos;ll email you a calendar link shortly.
              </p>
            ) : (
              <form onSubmit={onSubmit} data-ghl-touchpoint="schools">
                <label htmlFor="schools-name">YOUR NAME</label>
                <input
                  id="schools-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  autoComplete="name"
                />

                <label htmlFor="schools-email">WORK EMAIL</label>
                <input
                  id="schools-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  autoComplete="email"
                />

                <label htmlFor="schools-org">SCHOOL / ORGANIZATION</label>
                <input
                  id="schools-org"
                  type="text"
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  autoComplete="organization"
                />

                <label htmlFor="schools-phone">PHONE (OPTIONAL)</label>
                <input
                  id="schools-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  autoComplete="tel"
                />

                <label htmlFor="schools-role">YOUR ROLE</label>
                <select
                  id="schools-role"
                  value={form.parent_role}
                  onChange={(e) => setForm({ ...form, parent_role: e.target.value })}
                >
                  <option>School operator</option>
                  <option>Homeschool co-op</option>
                  <option>Agency / reseller</option>
                  <option>District / network</option>
                  <option>Other</option>
                </select>

                <button type="submit" disabled={state === "sending"}>
                  {state === "sending" ? "Sending…" : "Request walkthrough"}
                </button>
                {state === "error" && (
                  <p className="lead-form-error">Something went wrong. Try again?</p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
