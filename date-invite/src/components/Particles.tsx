"use client";

import { useEffect, useState } from "react";
import ReactParticles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Particles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <ReactParticles
      id="tsparticles"
      className="fixed inset-0 z-0 pointer-events-none"
      options={{
        fullScreen: false,
        particles: {
          number: { value: 20, density: { enable: true } },
          color: { value: ["#f9a8d4", "#f472b6"] },
          shape: { type: "circle" },
          opacity: { value: { min: 0.03, max: 0.08 } },
          size: { value: { min: 1, max: 2.5 } },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out",
          },
          links: { enable: false },
        },
        detectRetina: true,
      }}
    />
  );
}
