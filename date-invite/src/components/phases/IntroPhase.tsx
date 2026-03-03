"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GifCard from "@/components/GifCard";
import { GIFS } from "@/lib/constants";

export default function IntroPhase() {
  const [tapCount, setTapCount] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);

  const handleTap = () => {
    const next = tapCount + 1;
    setTapCount(next);
    if (next >= 5 && !easterEgg) setEasterEgg(true);
  };

  return (
    <motion.div
      key="intro"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-8"
      style={{ background: "#09090b" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div onClick={handleTap} className="cursor-pointer mb-6">
        <GifCard src={GIFS.judge} size="md" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-[11px] tracking-[0.3em] uppercase"
        style={{ color: "rgba(255,255,255,0.2)" }}
      >
        Notice to Appear
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="text-[26px] mt-3 text-center font-semibold tracking-tight"
        style={{ color: "#fafafa" }}
      >
        Ankita Didi, You&apos;ve Been Served.
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="mt-4 h-px w-24"
        style={{ background: "linear-gradient(90deg, transparent, rgba(244,114,182,0.3), transparent)" }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-3 text-[12px]"
        style={{ color: "rgba(255,255,255,0.15)" }}
      >
        (relax, it&apos;s just Nihar being extra)
      </motion.p>

      <AnimatePresence>
        {easterEgg && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 px-4 py-2.5 rounded-xl text-center"
            style={{ background: "rgba(244,114,182,0.04)", border: "1px solid rgba(244,114,182,0.08)" }}
          >
            <p className="text-[11px]" style={{ color: "rgba(244,114,182,0.4)" }}>
              🐱 psst... Nihar spent way too long making this instead of studying
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
