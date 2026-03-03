"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GIFS, COURT_DOCUMENT } from "@/lib/constants";

interface Props {
  onComplete: () => void;
}

export default function TypewriterPhase({ onComplete }: Props) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(COURT_DOCUMENT.slice(0, i + 1));
      i++;
      if (i >= COURT_DOCUMENT.length) {
        clearInterval(interval);
        setTimeout(onComplete, 600);
      }
    }, 22);
    return () => clearInterval(interval);
  }, [onComplete]);

  const progress = Math.round((typedText.length / COURT_DOCUMENT.length) * 100);

  return (
    <motion.div
      key="typewriter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 w-full max-w-[400px]"
    >
      {/* header */}
      <div className="flex items-center gap-3 mb-4 px-1">
        <img
          src={GIFS.typing}
          alt=""
          className="w-11 h-11 rounded-lg object-cover"
          style={{ border: "1px solid rgba(255,255,255,0.05)" }}
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.15)" }}>
              Nihar v. Ankita Didi · Case No. 143/2025
            </p>
            <p className="text-[10px] tabular-nums" style={{ color: "rgba(255,255,255,0.1)" }}>
              {progress}%
            </p>
          </div>
          <p className="text-[12px] font-medium mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
            Court of Mutual Feelings
          </p>
        </div>
      </div>

      {/* progress bar */}
      <div className="h-px w-full mb-4 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: "rgba(244,114,182,0.25)" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* document */}
      <div
        className="rounded-2xl p-6"
        style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p
          className="text-[13px] leading-[1.8] whitespace-pre-wrap"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {typedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-[1.5px] h-3.5 ml-0.5 align-text-bottom"
            style={{ background: "rgba(244,114,182,0.4)" }}
          />
        </p>
      </div>
    </motion.div>
  );
}
