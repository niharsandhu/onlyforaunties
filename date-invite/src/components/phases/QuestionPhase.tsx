"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import GifCard from "@/components/GifCard";
import Label from "@/components/Label";
import { GIFS, NO_STAGES, OBJECTION_TEXTS } from "@/lib/constants";

interface Props {
  onAccept: () => void;
}

export default function QuestionPhase({ onAccept }: Props) {
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);
  const [catGif, setCatGif] = useState<string>(GIFS.thinking);
  const cardRef = useRef<HTMLDivElement>(null);
  const noRef = useRef<HTMLButtonElement>(null);

  const dodgeNo = useCallback(() => {
    setNoCount((c) => {
      const next = Math.min(c + 1, NO_STAGES.length - 1);
      setCatGif(NO_STAGES[next].gif);
      return next;
    });
    if (!cardRef.current || !noRef.current) return;
    const card = cardRef.current.getBoundingClientRect();
    const btn = noRef.current.getBoundingClientRect();
    setNoPos({
      x: Math.random() * (card.width - btn.width - 20),
      y: Math.random() * 160,
    });
  }, []);

  const objectionText =
    noCount >= 5 ? OBJECTION_TEXTS[2] : noCount >= 3 ? OBJECTION_TEXTS[1] : OBJECTION_TEXTS[0];

  return (
    <motion.div key="question" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Card ref={cardRef} className="text-center">
        <div className="flex justify-center mb-5">
          <GifCard src={catGif} size="md" key={catGif} />
        </div>

        <Label>Per Donoghue v Stevenson [1932] — duty of care established</Label>

        <h1 className="text-[22px] mb-1.5 font-semibold tracking-tight" style={{ color: "#fafafa" }}>
          Coffee this Saturday?
        </h1>
        <p className="text-[12px] mb-7" style={{ color: "rgba(255,255,255,0.2)" }}>
          We&apos;ve been texting forever. Time to actually meet, no?
        </p>

        {/* ── buttons ── */}
        <div className="relative flex gap-4 justify-center items-center min-h-[80px]">

          {/* ===== ACCEPT ===== */}
          <motion.button
            onClick={onAccept}
            whileTap={{ scale: 0.93 }}
            animate={{ scale: [1 + noCount * 0.03, 1.02 + noCount * 0.03, 1 + noCount * 0.03] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative group px-8 py-3.5 rounded-xl font-medium text-[14px] overflow-hidden cursor-pointer"
            style={{ color: "#fff" }}
          >
            {/* base gradient bg */}
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #ec4899, #db2777, #be185d)",
              }}
            />

            {/* animated gradient overlay on hover */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
              style={{
                background: "linear-gradient(135deg, #f472b6, #ec4899, #c026d3)",
                transition: "opacity 0.4s ease",
              }}
            />

            {/* shimmer sweep */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.12) 50%, transparent 65%)",
                backgroundSize: "250% 100%",
              }}
              animate={{ backgroundPosition: ["250% 0", "-250% 0"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />

            {/* top edge highlight */}
            <div
              className="absolute top-0 left-[10%] right-[10%] h-px rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)" }}
            />

            {/* glow underneath */}
            <div
              className="absolute -bottom-2 left-[15%] right-[15%] h-8 rounded-full blur-xl opacity-50 group-hover:opacity-80"
              style={{
                background: "#ec4899",
                transition: "opacity 0.4s ease",
              }}
            />

            {/* outer ring on hover */}
            <motion.div
              className="absolute -inset-[2px] rounded-xl pointer-events-none opacity-0 group-hover:opacity-100"
              style={{
                border: "1px solid rgba(244,114,182,0.3)",
                transition: "opacity 0.3s ease",
              }}
            />

            <span className="relative z-10 flex items-center gap-2">
              <span>I Accept</span>
            </span>
          </motion.button>

          {/* ===== DECLINE ===== */}
          <motion.button
            ref={noRef}
            onMouseEnter={dodgeNo}
            onTouchStart={(e) => { e.preventDefault(); dodgeNo(); }}
            animate={
              noPos
                ? { left: noPos.x, top: noPos.y, scale: Math.max(1 - noCount * 0.04, 0.5) }
                : {}
            }
            transition={{ type: "spring", stiffness: 500, damping: 18 }}
            className="relative group px-6 py-3.5 rounded-xl font-medium text-[12px] overflow-hidden cursor-pointer"
            style={{
              position: noPos ? "absolute" : "relative",
              zIndex: 2,
              whiteSpace: "nowrap",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            {/* glass bg */}
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            />

            {/* subtle inner glow pulse */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              animate={{
                boxShadow: [
                  "inset 0 0 12px rgba(255,255,255,0.01)",
                  "inset 0 0 20px rgba(255,255,255,0.03)",
                  "inset 0 0 12px rgba(255,255,255,0.01)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* top edge highlight */}
            <div
              className="absolute top-0 left-[15%] right-[15%] h-px rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
            />

            <span className="relative z-10">{NO_STAGES[noCount].text}</span>
          </motion.button>
        </div>

        {noCount > 0 && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 text-[11px]"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            {objectionText}
          </motion.p>
        )}
      </Card>
    </motion.div>
  );
}
