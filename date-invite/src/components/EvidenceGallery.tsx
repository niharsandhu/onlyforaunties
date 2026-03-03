"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import confetti from "canvas-confetti";
import { EVIDENCE_EXHIBITS } from "@/lib/constants";

function ExhibitCard({ exhibit, index }: { exhibit: (typeof EVIDENCE_EXHIBITS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [fired, setFired] = useState(false);

  useEffect(() => {
    if (isInView && !fired) {
      setFired(true);
      setTimeout(() => {
        confetti({
          particleCount: 12,
          spread: 30,
          origin: { x: 0.5, y: 0.75 },
          colors: ["#f9a8d4", "#f472b6"],
          gravity: 1.4,
          scalar: 0.7,
        });
      }, 200);
    }
  }, [isInView, fired]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 80, damping: 16, delay: index * 0.06 }}
      className="rounded-xl p-4 flex gap-4 items-start"
      style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.03)" }}
    >
      <motion.img
        src={exhibit.gif}
        alt=""
        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
        style={{ border: "1px solid rgba(255,255,255,0.04)" }}
        whileHover={{ scale: 1.03 }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-[9px] tracking-[0.2em] uppercase mb-0.5" style={{ color: "rgba(244,114,182,0.3)" }}>
          Exhibit {exhibit.id}
        </p>
        <p className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
          {exhibit.title}
        </p>
        <p className="text-[11px] leading-relaxed mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>
          {exhibit.subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export default function EvidenceGallery() {
  return (
    <div>
      <p className="text-[10px] tracking-widest uppercase mb-4 text-center" style={{ color: "rgba(255,255,255,0.12)" }}>
        📂 Supporting Evidence
      </p>
      <div className="flex flex-col gap-2.5">
        {EVIDENCE_EXHIBITS.map((exhibit, i) => (
          <ExhibitCard key={exhibit.id} exhibit={exhibit} index={i} />
        ))}
      </div>
    </div>
  );
}
