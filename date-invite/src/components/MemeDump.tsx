"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MEME_GIFS = [
  "https://media.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif",
  "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif",
  "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
  "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  "https://media.giphy.com/media/l0MYt5jPR6QX5APm0/giphy.gif",
  "https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif",
  "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif",
  "https://media.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif",
  "https://media.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif",
  "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
  "https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif",
  "https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif",
  "https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif",
  "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
  "https://media.giphy.com/media/BEob5qhfT4devIF4kM/giphy.gif",
  "https://media.giphy.com/media/w9t0aFMjahdxpKKvzN/giphy.gif",
  "https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif",
  "https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif",
  "https://media.giphy.com/media/3oz8xZvvOZRmKay4xy/giphy.gif",
  "https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif",
  "https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
  "https://media.giphy.com/media/ule4vhcY1xEKQ/giphy.gif",
  "https://media.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif",
];

interface MemeItem {
  id: number;
  src: string;
  x: number;
  y: number;
  size: number;
  rotate: number;
  delay: number;
}

export default function MemeDump() {
  const [memes, setMemes] = useState<MemeItem[]>([]);

  useEffect(() => {
    // Create a grid-ish layout that fills the screen
    const cols = 5;
    const rows = 6;
    const items: MemeItem[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = (r * cols + c) % MEME_GIFS.length;
        items.push({
          id: r * cols + c,
          src: MEME_GIFS[idx],
          x: (c / cols) * 100 + (Math.random() - 0.5) * 8,
          y: (r / rows) * 100 + (Math.random() - 0.5) * 6,
          size: 70 + Math.random() * 40,
          rotate: (Math.random() - 0.5) * 25,
          delay: Math.random() * 0.8,
        });
      }
    }
    setMemes(items);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* dark overlay so content is still readable */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "rgba(9,9,11,0.82)" }}
      />

      {/* meme grid */}
      {memes.map((m) => (
        <motion.img
          key={m.id}
          src={m.src}
          alt=""
          className="absolute rounded-lg object-cover"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            width: m.size,
            height: m.size,
            rotate: `${m.rotate}deg`,
            border: "2px solid rgba(255,255,255,0.04)",
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 0.35, 0.25],
            scale: [0.6, 1, 1],
          }}
          transition={{
            duration: 1.2,
            delay: m.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* subtle animated glow spots over the memes */}
      <motion.div
        className="absolute rounded-full z-[2]"
        style={{
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(244,114,182,0.06), transparent 60%)",
          top: "20%", left: "10%",
        }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full z-[2]"
        style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(168,85,247,0.04), transparent 60%)",
          bottom: "10%", right: "5%",
        }}
        animate={{ x: [0, -40, 0], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
