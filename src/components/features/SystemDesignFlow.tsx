import { useEffect, useRef } from "react";
import { Database, Cpu, BarChart2, Download, CheckSquare, FileText } from "lucide-react";

const cards = [
  {
    icon: Database,
    title: "Data",
    desc: "Raw satellite imagery and agricultural datasets ingested into the system.",
    delay: 0,
  },
  {
    icon: Cpu,
    title: "Model",
    desc: "Execution of multi-task machine learning models across diverse datasets.",
    delay: 100,
  },
  {
    icon: BarChart2,
    title: "Metrics",
    desc: "Calculation of precision, recall, F1 scores, and domain-specific agricultural KPIs.",
    delay: 200,
  },
  {
    icon: Download,
    title: "Loader",
    desc: "Efficient batch processing and loading mechanisms tailored for large-scale geospatial data.",
    delay: 300,
  },
  {
    icon: CheckSquare,
    title: "Evaluator",
    desc: "Comprehensive assessment against established benchmarks using automated frameworks.",
    delay: 400,
  },
  {
    icon: FileText,
    title: "Reports",
    desc: "Generation of automated summaries and visual insights for decision-making.",
    delay: 500,
  },
];

export default function SystemDesignFlow() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".flow-card");
            cards.forEach((card) => {
              const delay = (card as HTMLElement).dataset.delay || "0";
              setTimeout(() => {
                card.classList.add("animate-fade-up");
                card.classList.remove("opacity-0");
              }, parseInt(delay));
            });
            observer.unobserve(entry.target);
          }
        });
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
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy-900 mb-4">
            System Design Flow
          </h2>
          <p className="text-gray-500 text-base">The end-to-end architecture pipeline.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isBottomRow = index >= 3;
            const isLastInRow = (index + 1) % 3 === 0;
            return (
              <div
                key={card.title}
                data-delay={card.delay}
                className={`flow-card opacity-0 group p-8 border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default
                  ${!isLastInRow ? "border-r" : ""}
                  ${!isBottomRow ? "border-b" : ""}
                `}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon
                    size={20}
                    className="text-brand-green flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="font-semibold text-navy-900 text-base">{card.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>

                {/* Down arrow for top row */}
                {!isBottomRow && (
                  <div className="mt-6 flex justify-start">
                    <svg width="12" height="16" viewBox="0 0 12 16" className="text-gray-300">
                      <path
                        d="M6 0v12M1 7l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
