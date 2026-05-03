import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  { label: "RAW", color: "text-gray-600" },
  { label: "CLEAN", color: "text-gray-600" },
  { label: "VALIDATE", color: "text-gray-600" },
  { label: "STRUCTURE", color: "text-gray-600" },
  { label: "TABULAR/GEO", color: "text-brand-green" },
];

export default function DataPipeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const interval = setInterval(() => {
      setActiveStep(i);
      i++;
      if (i >= steps.length) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section className="py-20 bg-white border-t border-gray-100 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-brand-green text-sm font-semibold mb-2">03</p>
          <h3 className="font-heading font-bold text-2xl text-navy-900">
            Data Pipeline Refinement
          </h3>
        </div>

        {/* Pipeline flow */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-1">
            {steps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-2 sm:gap-1">
                <span
                  className={`font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-500 ${
                    index <= activeStep
                      ? step.color + " opacity-100"
                      : "text-gray-300 opacity-50"
                  }`}
                >
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <ArrowRight
                    size={14}
                    className={`flex-shrink-0 transition-all duration-500 ${
                      index < activeStep ? "text-gray-400" : "text-gray-200"
                    } animate-arrow-move`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-px bg-gray-100 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-brand-green transition-all duration-1000"
              style={{
                width: visible
                  ? `${((activeStep + 1) / steps.length) * 100}%`
                  : "0%",
              }}
            />
          </div>

          <p className="mt-4 text-gray-400 text-xs">
            End-to-end data transformation pipeline for geospatial agricultural datasets.
          </p>
        </div>
      </div>
    </section>
  );
}
