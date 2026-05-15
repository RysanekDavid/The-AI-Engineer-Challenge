"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Add empty assistant message that we'll stream into
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) throw new Error("Backend error");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) throw new Error("No stream");

      let done = false;
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const updated = [...prev];
            const last = updated[updated.length - 1];
            updated[updated.length - 1] = {
              ...last,
              content: last.content + chunk,
            };
            return updated;
          });
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content:
            "Connection failed. Make sure the backend is running on port 8000.",
        };
        return updated;
      });
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Top bar */}
      <div className="border-b border-[var(--border)] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="GainzGPT"
            width={44}
            height={44}
            className="rounded-lg"
          />
          <span className="text-lg font-bold text-[var(--foreground)]">
            GainzGPT
          </span>
        </div>
        <span className="text-xs text-[var(--muted)]">YOU WANNA GAINZ?</span>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
              <Image
                src={logo}
                alt="GainzGPT"
                width={160}
                height={160}
                className="rounded-2xl"
              />
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                Ready to crush it?
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Give me a push day workout",
                  "How do I break a plateau?",
                  "Best pre-workout meal?",
                  "Motivate me to go to the gym",
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                      inputRef.current?.focus();
                    }}
                    className="px-4 py-2 text-sm rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--muted)] hover:bg-[var(--surface)] transition-all cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className="animate-fade-in">
              {msg.role === "user" ? (
                <div className="flex justify-end">
                  <div className="max-w-[75%] px-4 py-3 rounded-2xl rounded-br-sm bg-[var(--accent)] text-white text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </div>
                </div>
              ) : (
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#e5e5e5] p-0.5">
                    <Image
                      src={logo}
                      alt="GainzGPT"
                      width={28}
                      height={28}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm leading-relaxed text-[var(--foreground)] whitespace-pre-wrap min-h-[2rem] flex items-center">
                    {msg.content || (
                      <span className="flex items-center gap-1">
                        <span
                          className="w-1.5 h-1.5 bg-[var(--muted)] rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 bg-[var(--muted)] rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 bg-[var(--muted)] rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-[var(--border)] p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 focus-within:border-[var(--accent)] transition-colors">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask GainzGPT anything..."
              rows={1}
              className="flex-1 resize-none bg-transparent text-sm outline-none placeholder:text-[var(--muted)] max-h-36 leading-relaxed"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="p-2 rounded-lg bg-[var(--accent)] text-white disabled:opacity-25 disabled:cursor-not-allowed hover:brightness-110 transition-all cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p className="text-[11px] text-[var(--muted)] text-center mt-2">
            Enter to send · Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}
