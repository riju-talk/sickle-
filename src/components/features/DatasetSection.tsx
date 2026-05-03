import { useEffect, useRef, useState } from "react";
import { Satellite, Layers, Target, TrendingUp, Calendar } from "lucide-react";

const stats = [
  { value: "200K+", label: "Satellite Images", icon: Satellite },
  { value: "2,370", label: "Season-wise Samples", icon: Layers },
  { value: "21", label: "Crop Types", icon: Target },
  { value: "4", label: "Districts in Delta", icon: TrendingUp },
  { value: "3", label: "Benchmark Tasks", icon: Calendar },
];

const sensors = [
  {
    name: "Landsat-8",
    desc: "30m resolution multispectral imagery for broad-scale land cover mapping.",
    band: "OLI + TIRS",
    res: "30m",
  },
  {
    name: "Sentinel-1",
    desc: "C-band SAR data providing cloud-penetrating backscatter measurements.",
    band: "SAR C-Band",
    res: "10m",
  },
  {
    name: "Sentinel-2",
    desc: "High-resolution multispectral optical imagery for precise crop monitoring.",
    band: "MSI 13-band",
    res: "10m",
  },
];

const tasks = [
  { label: "Crop Type Classification", color: "bg-brand-green/20 text-brand-greenDark" },
  { label: "Yield Prediction", color: "bg-blue-100 text-blue-700" },
  { label: "Phenology Tracking", color: "bg-amber-100 text-amber-700" },
];

export default function DatasetSection() {
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
    <section id="dataset" className="py-20 lg:py-28 bg-sage-50 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-brand-green text-xs font-semibold tracking-widest uppercase">
            SICKLE Dataset
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy-900 mt-2 mb-3">
            Dataset Overview
          </h2>
          <p className="text-gray-500 text-base max-w-xl">
            Multi-sensor satellite imagery annotated with multiple key cropping parameters.
            Published at WACV 2024.
          </p>
        </div>

        {/* Stats row */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14 transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-xl border border-gray-100 p-5 text-center hover:border-brand-green/30 hover:shadow-md transition-all duration-300"
              >
                <Icon size={18} className="text-brand-green mx-auto mb-2" />
                <p className="font-heading font-bold text-2xl text-navy-900">{stat.value}</p>
                <p className="text-gray-500 text-xs mt-1 leading-snug">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Sensors */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {sensors.map((sensor) => (
            <div
              key={sensor.name}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:border-brand-green/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-navy-900 text-base">{sensor.name}</h4>
                <span className="text-[10px] bg-sage-100 text-brand-greenDark font-semibold px-2 py-0.5 rounded-full">
                  {sensor.res}
                </span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">{sensor.desc}</p>
              <span className="text-[10px] text-gray-400 font-mono">{sensor.band}</span>
            </div>
          ))}
        </div>

        {/* Tasks */}
        <div
          className={`transition-all duration-700 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Benchmark Tasks</p>
          <div className="flex flex-wrap gap-2">
            {tasks.map((task) => (
              <span
                key={task.label}
                className={`text-xs font-semibold px-4 py-2 rounded-full ${task.color}`}
              >
                {task.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
