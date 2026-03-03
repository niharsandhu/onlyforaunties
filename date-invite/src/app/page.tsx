"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import MemeDump from "@/components/MemeDump";
import IntroPhase from "@/components/phases/IntroPhase";
import TypewriterPhase from "@/components/phases/TypewriterPhase";
import FlashPhase from "@/components/phases/FlashPhase";
import QuestionPhase from "@/components/phases/QuestionPhase";
import AcceptedPhase from "@/components/phases/AcceptedPhase";

type Phase = "intro" | "typewriter" | "flash" | "question" | "accepted";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("intro");

  useEffect(() => {
    if (phase === "intro") {
      const t = setTimeout(() => setPhase("typewriter"), 3200);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const handleTypewriterDone = useCallback(() => setPhase("flash"), []);
  const handleFlashDone = useCallback(() => setPhase("question"), []);

  const handleAccept = useCallback(() => {
    setPhase("accepted");
    const colors = ["#f9a8d4", "#f472b6", "#ec4899", "#fbbf24", "#c084fc", "#fda4af"];
    confetti({ particleCount: 200, spread: 120, origin: { y: 0.5 }, colors, startVelocity: 50 });
    const end = Date.now() + 4000;
    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }, []);

  return (
    <main className="min-h-dvh flex items-center justify-center px-6 py-8 relative overflow-hidden">
      <MemeDump />

      <AnimatePresence mode="wait">
        {phase === "intro" && <IntroPhase />}
        {phase === "typewriter" && <TypewriterPhase onComplete={handleTypewriterDone} />}
        {phase === "flash" && <FlashPhase onComplete={handleFlashDone} />}
        {phase === "question" && <QuestionPhase onAccept={handleAccept} />}
        {phase === "accepted" && <AcceptedPhase />}
      </AnimatePresence>
    </main>
  );
}
