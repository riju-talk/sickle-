import { useEffect, useRef, useState } from "react";

const Tag = ({ label }: { label: string }) => (
  <span className="inline-block border border-gray-300 text-gray-500 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-sm mr-2 mb-2">
    {label}
  </span>
);

export default function KeyContributions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-sage-50 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy-900 mb-3">
            Key Contributions
          </h2>
          <p className="text-gray-500 text-base">
            Advancements introduced in the SICKLE++ phase.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — 01 */}
          <div
            className={`transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-brand-green text-sm font-semibold mb-2">01</p>
            <h3 className="font-heading font-bold text-2xl text-navy-900 mb-3">
              Dual Dataset Support
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Seamless integration and parallel processing capabilities for diverse spatial units.
            </p>
            <div className="flex flex-wrap">
              <Tag label="Cell-based" />
              <Tag label="Plot-based" />
            </div>
          </div>

          {/* Right — 02 */}
          <div
            className={`transition-all duration-700 delay-300 lg:pt-12 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-brand-green text-sm font-semibold mb-2">02</p>
            <h3 className="font-heading font-bold text-2xl text-navy-900 mb-3">
              Evaluation Framework
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Robust methodology for cross-comparing model performance and task efficiency.
            </p>
            <div className="flex flex-wrap">
              <Tag label="Multi-task" />
              <Tag label="Multi-model" />
              <Tag label="Automated summaries" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
