"use client";

import { motion } from "framer-motion";

interface GifCardProps {
  src: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  animate?: boolean;
}

const sizes = {
  sm: "w-10 h-10 rounded-lg",
  md: "w-32 h-32 rounded-xl",
  lg: "w-40 h-40 rounded-xl",
};

export default function GifCard({ src, size = "md", className = "", animate = true }: GifCardProps) {
  return (
    <motion.img
      src={src}
      alt=""
      className={`object-cover ${sizes[size]} ${className}`}
      initial={animate ? { scale: 0.9, opacity: 0 } : undefined}
      animate={animate ? { scale: 1, opacity: 1 } : undefined}
      transition={{ type: "spring", stiffness: 150, damping: 16 }}
      style={{
        border: "1px solid rgba(255,255,255,0.05)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.15)",
      }}
    />
  );
}
