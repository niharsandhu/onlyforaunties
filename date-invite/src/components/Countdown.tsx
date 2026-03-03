"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function getNextSaturday7PM(): Date {
  const now = new Date();
  const day = now.getDay();
  const daysUntilSat = (6 - day + 7) % 7 || 7;
  const target = new Date(now);
  target.setDate(now.getDate() + daysUntilSat);
  target.setHours(19, 0, 0, 0);
  return target;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const units = ["days", "hours", "minutes", "seconds"] as const;

export default function Countdown() {
  const [target] = useState(getNextSaturday7PM);
  const [time, setTime] = useState<TimeLeft>(calcTimeLeft(target));

  useEffect(() => {
    const interval = setInterval(() => setTime(calcTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <p
        className="text-[10px] tracking-widest uppercase mb-3 text-center"
        style={{ color: "rgba(255,255,255,0.15)" }}
      >
        ⏱ Time until court is in session
      </p>
      <div className="flex justify-center gap-3">
        {units.map((unit) => (
          <div key={unit} className="flex flex-col items-center">
            <motion.div
              key={time[unit]}
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-semibold"
              style={{
                background: "rgba(244,114,182,0.06)",
                border: "1px solid rgba(244,114,182,0.1)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {String(time[unit]).padStart(2, "0")}
            </motion.div>
            <span
              className="text-[9px] mt-1.5 uppercase tracking-wider"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              {unit}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
