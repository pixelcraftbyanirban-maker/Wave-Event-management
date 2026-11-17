"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING ACOUSTIC PHYSICS");
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Disable body scroll while preloading
    document.body.style.overflow = "hidden";

    const statuses = [
      "INITIALIZING ACOUSTIC PHYSICS",
      "CALIBRATING SPATIAL FREQUENCIES",
      "SYNCHRONIZING DMX LIGHTING ARRAYS",
      "SYSTEM ARMED // LIVE CONCERT PRODUCTION",
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        setStatus("SYSTEM ARMED // LIVE CONCERT PRODUCTION");
        clearInterval(interval);

        setTimeout(() => {
          setIsLoaded(true);
          document.body.style.overflow = "";
          setTimeout(() => {
            setShouldRender(false);
          }, 800);
        }, 350);
      } else {
        setProgress(current);
        const statusIdx = Math.min(
          Math.floor((current / 100) * statuses.length),
          statuses.length - 1
        );
        setStatus(statuses[statusIdx]);
      }
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050716] text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isLoaded
          ? "opacity-0 pointer-events-none scale-105"
          : "opacity-100 pointer-events-auto scale-100"
      }`}
      aria-hidden={isLoaded}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#ff2d55]/10 via-[#3fc7f5]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Center Branding & Progress */}
      <div className="relative z-10 flex flex-col items-center max-w-[420px] w-full px-6">
        {/* WAVE Logo */}
        <div className="relative w-[180px] h-[56px] mb-8 animate-pulse">
          <Image
            src="/images/wave-nav-logo.png"
            alt="WAVE Logo"
            fill
            priority
            className="object-contain brand-logo drop-shadow-[0_0_20px_rgba(104,211,255,0.4)]"
          />
        </div>

        {/* Audio Equalizer Frequency Bars */}
        <div className="flex items-center gap-[6px] h-[36px] mb-8">
          {[40, 75, 50, 95, 60, 85, 45, 90, 65, 80].map((h, i) => (
            <div
              key={i}
              className="w-[3px] bg-gradient-to-t from-[#ff2d55] to-[#3fc7f5] rounded-full transition-all duration-150"
              style={{
                height: `${Math.max(12, (h * progress) / 100)}%`,
                opacity: 0.6 + ((i * 4) % 40) / 100,
                animation: `bounce 1s ease-in-out infinite alternate ${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Progress Track & Bar */}
        <div className="w-full bg-[#161933] border border-[rgba(104,211,255,0.2)] rounded-full h-[3px] overflow-hidden mb-4 relative shadow-[0_0_15px_rgba(104,211,255,0.15)]">
          <div
            className="h-full bg-gradient-to-r from-[#ff2d55] via-[#3fc7f5] to-[#68d3ff] transition-all duration-75 ease-out shadow-[0_0_12px_#3fc7f5]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status & Counter */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-[1.5px] uppercase">
          <span className="text-[#8b90a0] truncate pr-2">{status}</span>
          <span className="text-[#3fc7f5] font-bold shrink-0">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
