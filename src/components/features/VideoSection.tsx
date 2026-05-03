import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white border-t border-b border-gray-100 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        {/* SICKLE site-like card wrapper */}
        <div
          className={`rounded-2xl border border-gray-200 shadow-xl overflow-hidden transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Mini browser chrome */}
          <div className="bg-navy-900 px-5 py-3 flex items-center justify-between">
            <span className="font-heading font-bold text-white text-sm tracking-wide">SICKLE</span>
            <div className="flex gap-2">
              <span className="text-gray-400 text-xs">Home</span>
              <span className="text-gray-400 text-xs ml-3">Download</span>
            </div>
          </div>

          {/* Content area */}
          <div className="bg-white px-8 py-10">
            <h3 className="text-center text-navy-900 font-semibold text-xl mb-6">
              Video Presentation
            </h3>

            {/* YouTube embed placeholder */}
            <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video max-w-2xl mx-auto group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=450&fit=crop"
                alt="SICKLE Dataset presentation"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
              />
              {/* Overlay text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#0f172a">
                      <circle cx="12" cy="12" r="10" fill="#FF0000" />
                      <polygon points="10,8 16,12 10,16" fill="white" />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-medium">SICKLE Dataset | WACV 2024 | Oral Presentation</span>
                </div>
                <p className="text-brand-green font-heading font-bold text-lg leading-snug">
                  SICKLE: A Multi-Sensor Satellite Imagery Dataset<br />
                  Annotated with Multiple Key Cropping Parameters
                </p>
                <p className="text-gray-300 text-xs mt-3">
                  Depanshu Sani, Sandeep Mahato, Sourabh Saini, Harsh Kumar Agarwal,<br />
                  Charu Chandra Devshali, Saket Anand, Gaurav Arora, Thigarajan Jayaraman
                </p>
              </div>

              {/* Play button */}
              <button
                className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 border border-white/30"
                aria-label="Play video"
              >
                <Play size={16} className="text-white ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
