"use client";

import React, { Suspense, lazy } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

type GalaxyHeroBackgroundProps = {
  height?: string;
  interactive?: boolean;
};

function GalaxyHeroBackground({
  height = "100vh",
  interactive = true,
}: GalaxyHeroBackgroundProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        pointerEvents: interactive ? "auto" : "none",
        overflow: "hidden",
      }}
    >
      <Suspense
        fallback={
          <div
            className="w-full"
            style={{
              height,
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(123,97,255,0.15) 0%, rgba(0,212,170,0.05) 40%, #0A0A0F 70%)",
            }}
          />
        }
      >
        <Spline
          style={{
            width: "100%",
            height,
            pointerEvents: interactive ? "auto" : "none",
          }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      {/* Edge fade overlays */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height,
          background: `
            radial-gradient(circle at 30% 50%, rgba(10, 10, 15, 0) 0%, rgba(10, 10, 15, 0.4) 100%),
            linear-gradient(to right, rgba(10, 10, 15, 0.85), transparent 30%, transparent 70%, rgba(10, 10, 15, 0.85)),
            linear-gradient(to bottom, transparent 40%, rgba(10, 10, 15, 0.95))
          `,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export { GalaxyHeroBackground };
