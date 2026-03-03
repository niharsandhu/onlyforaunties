"use client";

import { motion } from "framer-motion";
import GifCard from "@/components/GifCard";
import Label from "@/components/Label";
import Countdown from "@/components/Countdown";
import EvidenceGallery from "@/components/EvidenceGallery";
import { GIFS } from "@/lib/constants";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 16 } },
};

export default function AcceptedPhase() {
  return (
    <motion.div
      key="accepted"
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      variants={stagger}
      className="relative z-10 w-full max-w-[400px] flex flex-col gap-4 pb-16"
    >
      {/* ── verdict card ── */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl p-7 text-center"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.05)",
          boxShadow: "0 1px 40px rgba(0,0,0,0.2)",
        }}
      >
        <div className="flex justify-center mb-5">
          <GifCard src={GIFS.celebrate} size="lg" />
        </div>

        <Label>Judgment Entered</Label>

        <h1 className="text-[26px] mb-2 font-semibold tracking-tight" style={{ color: "#fafafa" }}>
          Let&apos;s gooo 🤝
        </h1>

        <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.35)" }}>
          Ankita Didi has accepted. This is now legally binding. No take-backs.
        </p>
      </motion.div>

      {/* ── schedule card ── */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl p-6"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <p className="text-[10px] tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.12)" }}>
          Schedule of Performance
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: "📅", label: "When", value: "This Saturday" },
            { icon: "🕖", label: "Time", value: "Afternoon-ish" },
            { icon: "📍", label: "Where", value: "You pick, I'll show up" },
            { icon: "☕", label: "Vibe", value: "Coffee + good chat" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-3.5"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.03)" }}
            >
              <span className="text-lg">{item.icon}</span>
              <p className="text-[10px] mt-1.5 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.12)" }}>
                {item.label}
              </p>
              <p className="text-[13px] font-medium mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── countdown card ── */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl p-6"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <Countdown />
      </motion.div>

      {/* ── evidence gallery ── */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl p-6"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <EvidenceGallery />
      </motion.div>

      {/* ── footer ── */}
      <motion.div variants={fadeUp} className="text-center pt-2">
        <div className="flex items-center justify-center gap-2.5 mb-3">
          <GifCard src={GIFS.happy} size="sm" animate={false} />
          <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.12)" }}>
            This order is final. No appeals. — Nihar 🐱
          </p>
        </div>
        <div className="h-px w-16 mx-auto mb-3" style={{ background: "rgba(255,255,255,0.04)" }} />
        <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.08)" }}>
          Filed by Nihar · Court of Finally Meeting Your Friends
        </p>
      </motion.div>
    </motion.div>
  );
}
