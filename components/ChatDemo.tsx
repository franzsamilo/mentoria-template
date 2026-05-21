"use client";

import { useEffect, useRef, useState } from "react";

type Sender = "sage" | "alex";

interface Msg {
  from: Sender;
  text: string;
}

const SCRIPT: Msg[] = [
  { from: "sage", text: "Hi Alex. Yesterday you helped Mrs. Tan with her groceries. How did that feel?" },
  { from: "alex", text: "kinda strong" },
  { from: "sage", text: "Strong how? Strong like a tree, strong like a hug, strong like something else?" },
  { from: "alex", text: "like a quiet thing. nobody saw" },
  { from: "sage", text: "Beautiful. That's a kind of strong most people never name." },
  { from: "sage", text: "Want to try something tomorrow at lunch?" },
  { from: "alex", text: "ok" },
  { from: "sage", text: "Do one quiet strong thing. Don't tell anyone. Come back and tell me. 🌱" },
];

const ADVANCE_MS = 2400;
const TYPING_MS = 900;

export default function ChatDemo() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [typing, setTyping] = useState(false);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const atEnd = step >= SCRIPT.length - 1;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [step, typing]);

  useEffect(() => {
    if (!playing || atEnd) {
      setTyping(false);
      return;
    }
    const next = SCRIPT[step + 1];
    if (next) {
      typingTimer.current = setTimeout(() => setTyping(true), ADVANCE_MS - TYPING_MS);
      advanceTimer.current = setTimeout(() => {
        setTyping(false);
        setStep((s) => s + 1);
      }, ADVANCE_MS);
    }
    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current);
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, [step, playing, atEnd]);

  const visible = SCRIPT.slice(0, step + 1);
  const nextSender = SCRIPT[step + 1]?.from;

  const goNext = () => {
    setPlaying(false);
    setTyping(false);
    setStep((s) => Math.min(s + 1, SCRIPT.length - 1));
  };
  const goPrev = () => {
    setPlaying(false);
    setTyping(false);
    setStep((s) => Math.max(s - 1, 0));
  };
  const restart = () => {
    setStep(0);
    setPlaying(true);
  };
  const togglePlay = () => setPlaying((p) => !p);

  return (
    <div className="chat-demo">
      <div className="chat-screen">
        <div className="chat-head">
          <span className="chat-eye">▮ MENTORIA · PLAZA · L9</span>
          <span className="chat-live"><span className="chat-live-dot" /> live</span>
        </div>
        <div className="chat-body" ref={scrollRef}>
          {visible.map((m, i) => (
            <div key={i} className={`chat-msg from-${m.from}`}>
              <div className={`chat-ava chat-ava-${m.from}`}>{m.from === "sage" ? "S" : "A"}</div>
              <div className="chat-bubble">{m.text}</div>
            </div>
          ))}
          {typing && nextSender && (
            <div className={`chat-msg from-${nextSender} chat-typing-row`}>
              <div className={`chat-ava chat-ava-${nextSender}`}>{nextSender === "sage" ? "S" : "A"}</div>
              <div className="chat-bubble chat-typing">
                <span /><span /><span />
              </div>
            </div>
          )}
        </div>
        <div className="chat-foot">
          <span>{atEnd ? "real-world quest unlocked" : `message ${step + 1} of ${SCRIPT.length}`}</span>
          <span className="chat-foot-xp">+{(step + 1) * 15} XP</span>
        </div>
      </div>

      <div className="chat-controls">
        <button
          type="button"
          className="chat-btn"
          onClick={goPrev}
          disabled={step === 0}
          aria-label="Previous message"
        >
          ←
        </button>
        <div className="chat-dots" aria-hidden="true">
          {SCRIPT.map((_, i) => (
            <span key={i} className={`chat-dot${i <= step ? " is-on" : ""}`} />
          ))}
        </div>
        {atEnd ? (
          <button type="button" className="chat-btn chat-btn-primary" onClick={restart}>
            ↻ Replay
          </button>
        ) : (
          <button
            type="button"
            className="chat-btn chat-btn-primary"
            onClick={playing ? togglePlay : goNext}
          >
            {playing ? "⏸ Pause" : "Next →"}
          </button>
        )}
      </div>

      <div className="chat-caption">
        A real session is shaped by your child&apos;s personality + CEFR level.
        This one is sped up for the preview.
      </div>
    </div>
  );
}
