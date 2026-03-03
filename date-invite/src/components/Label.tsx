"use client";

export default function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] tracking-[0.25em] uppercase mb-2"
      style={{ color: "rgba(255,255,255,0.2)" }}
    >
      {children}
    </p>
  );
}
