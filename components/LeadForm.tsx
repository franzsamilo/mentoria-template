"use client";

import { useEffect, useRef, useState } from "react";

type Touchpoint = "hero" | "final" | "schools";

interface LeadFormProps {
  touchpoint: Touchpoint;
  placeholder?: string;
  buttonLabel?: string;
  successLabel?: string;
  className?: string;
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

interface Context {
  page_url?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

function readContext(): Context {
  if (typeof window === "undefined") return {};
  const ctx: Context = {
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

export default function LeadForm({
  touchpoint,
  placeholder = "your@email.com — start the free week",
  buttonLabel = "Begin",
  successLabel = "✓ Check inbox",
  className,
}: LeadFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const ctxRef = useRef<Context>({});

  useEffect(() => {
    ctxRef.current = readContext();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending" || state === "ok") return;
    setState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, touchpoint, ...ctxRef.current }),
      });
      setState(res.ok ? "ok" : "error");
    } catch {
      setState("error");
    }
  }

  const label =
    state === "ok"
      ? successLabel
      : state === "sending"
        ? "…"
        : state === "error"
          ? "Try again"
          : buttonLabel;

  return (
    <form
      className={["lead-form", className].filter(Boolean).join(" ")}
      onSubmit={onSubmit}
      data-ghl-touchpoint={touchpoint}
    >
      <input
        type="email"
        name="email"
        placeholder={placeholder}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={state === "ok"}
        autoComplete="email"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={state === "sending" || state === "ok"}
        style={state === "ok" ? { background: "var(--accent)" } : undefined}
      >
        {label}
      </button>
    </form>
  );
}
