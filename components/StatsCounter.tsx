"use client";

import { useEffect, useRef, useState } from "react";

interface StatDef {
  value: number;
  suffix: string;
  decimals: number;
  label: string;
}

const STATS: StatDef[] = [
  {
    value: 87,
    suffix: "%",
    decimals: 0,
    label: "of parents say their child mentioned a quest at the dinner table",
  },
  {
    value: 2.3,
    suffix: "×",
    decimals: 1,
    label: "more real-world action attempts than week one by week six",
  },
  {
    value: 14,
    suffix: "m",
    decimals: 0,
    label: "median session length — by design, not by accident",
  },
  {
    value: 0,
    suffix: "",
    decimals: 0,
    label: "leaderboards, streaks, push-to-return notifications",
  },
];

const DURATION_MS = 1400;

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function format(n: number, decimals: number) {
  return decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
}

function useCountUp(target: number, run: boolean, decimals: number) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (target === 0) {
      setN(0);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      setN(easeOutExpo(t) * target);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return format(n, decimals);
}

function StatNumber({ stat, run }: { stat: StatDef; run: boolean }) {
  const formatted = useCountUp(stat.value, run, stat.decimals);
  return (
    <div className="n" aria-label={`${stat.value}${stat.suffix}`}>
      {formatted}
      <span aria-hidden="true">{stat.suffix}</span>
    </div>
  );
}

export default function StatsCounter() {
  const [run, setRun] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (typeof IntersectionObserver === "undefined") {
      setRun(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className="stats" ref={ref}>
      {STATS.map((s, i) => (
        <div className="stat" key={i}>
          <StatNumber stat={s} run={run} />
          <div className="l">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
