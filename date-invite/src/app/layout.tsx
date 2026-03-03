import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "⚖️ Ankita Didi, You've Been Served",
  description: "A legal summons from Nihar — time to actually meet",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
