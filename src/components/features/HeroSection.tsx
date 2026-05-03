import { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const children = el.querySelectorAll(".hero-animate");
    children.forEach((child, i) => {
      (child as HTMLElement).style.animationDelay = `${i * 150}ms`;
      child.classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0a0f1a 0%, #0f2018 30%, #1a3828 52%, #c8d9c8 78%, #f1f5f2 100%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={heroRef} className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Phase Tag */}
        <div className="hero-animate opacity-0 inline-flex items-center mb-8">
          <span className="border border-brand-green/60 text-brand-green text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
            PHASE 2
          </span>
        </div>

        {/* Title */}
        <h1 className="hero-animate opacity-0 font-heading font-bold text-6xl sm:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
          SICKLE++
        </h1>

        {/* Subtitle */}
        <p className="hero-animate opacity-0 text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-4 leading-relaxed">
          A unified multi-task evaluation framework for multi-sensor agricultural remote sensing.
        </p>

        {/* Highlight */}
        <p className="hero-animate opacity-0 text-brand-green text-sm font-medium italic">
          Extending Sickle: Zero-Shot Inference on Paddy Fields
        </p>

        {/* Scroll indicator */}
        <div className="hero-animate opacity-0 mt-16 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
