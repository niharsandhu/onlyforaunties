"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import GifCard from "@/components/GifCard";
import { GIFS } from "@/lib/constants";

interface Props {
  onComplete: () => void;
}

export default function FlashPhase({ onComplete }: Props) {
  useEffect(() => {
    const t = setTimeout(onComplete, 1400);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      key="flash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4"
      style={{ background: "#09090b" }}
    >
      <GifCard src={GIFS.love} size="lg" />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[12px]"
        style={{ color: "rgba(255,255,255,0.15)" }}
      >
        now for the important part...
      </motion.p>
    </motion.div>
  );
}
