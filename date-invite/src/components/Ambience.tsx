"use client";

import { motion } from "framer-motion";

export default function Ambience() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(244,114,182,0.04), transparent 70%)",
          top: "-10%", left: "-10%",
        }}
        animate={{ x: [0, 30, 0], y: [0, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 350, height: 350,
          background: "radial-gradient(circle, rgba(168,85,247,0.03), transparent 70%)",
          bottom: "-8%", right: "-8%",
        }}
        animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
