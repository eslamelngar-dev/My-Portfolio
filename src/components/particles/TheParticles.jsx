"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function TheParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: {
            value: 18,
            density: { enable: true, area: 900 },
          },

          color: { value: "#3edcf4" },

          shape: {
            type: "circle",
          },

          opacity: {
            value: 0.35,
            random: true,
          },

          size: {
            value: { min: 20, max: 25 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 4,
              sync: false,
            },
          },

          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },

          shadow: {
            enable: true,
            color: "#3edcf4",
            blur: 15,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
