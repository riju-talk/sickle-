import { useEffect, useRef, useState } from "react";
import { ExternalLink, FileText } from "lucide-react";

const PDF_URL =
  "https://ssh.iiitd.ac.in/old1/gallery/SSSEWINTER25/SSSE_Winter%202025_SICKLE.pdf";

export default function PresentationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [ripple, setRipple] = useState(false);

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

  const handleClick = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 400);
    window.open(PDF_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="presentation" className="py-20 lg:py-28 bg-white border-t border-gray-100 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-brand-green text-xs font-semibold tracking-widest uppercase">
            Project Presentation
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy-900 mt-3 mb-4">
            View Full Presentation
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Access the complete SICKLE++ Winter 2025 project presentation in PDF format.
          </p>
        </div>

        {/* Preview Card */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-sage-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card header */}
            <div className="bg-navy-900 px-6 py-4 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-gray-400 text-xs font-mono flex-1 text-center">
                SSSE_Winter_2025_SICKLE.pdf
              </span>
            </div>

            {/* Card body */}
            <div className="p-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 border border-brand-green/20">
                <FileText size={36} className="text-brand-green" />
              </div>

              <h3 className="font-heading font-bold text-xl text-navy-900 mb-2">
                SSSE Winter 2025 — SICKLE++
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                Full slide deck covering methodology, results, and contributions.
              </p>
              <p className="text-gray-400 text-xs font-mono mb-8">
                ssh.iiitd.ac.in/old1/gallery/SSSEWINTER25/
              </p>

              {/* CTA Button */}
              <button
                onClick={handleClick}
                className={`relative overflow-hidden inline-flex items-center gap-2.5 bg-brand-green hover:bg-brand-greenDark text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-green/30 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2`}
              >
                {/* Ripple effect */}
                {ripple && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="animate-ping absolute w-full h-full rounded-full bg-white opacity-20" />
                  </span>
                )}
                View Full Presentation
                <ExternalLink size={15} />
              </button>

              <p className="mt-4 text-gray-400 text-xs">Opens in a new tab · PDF format</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
