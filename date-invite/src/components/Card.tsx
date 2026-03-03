"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className = "" }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 70, damping: 16 }}
      className={`relative z-10 w-full max-w-[400px] rounded-2xl p-7 ${className}`}
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.05)",
        boxShadow: "0 1px 40px rgba(0,0,0,0.2)",
      }}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = "Card";
export default Card;
