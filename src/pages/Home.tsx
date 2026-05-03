import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SICKLE_URL = "https://sites.google.com/iiitd.ac.in/sickle/home";

const timeline = [
  ["2018–2021", "Satellite Data Collection (Tamil Nadu)"],
  ["2021–2022", "Ground Surveys + Annotation"],
  ["2023", "Dataset Construction"],
  ["2024", "WACV Acceptance (Oral Presentation)"],
  ["2024", "Benchmark Models: U-TAE, ConvLSTM, U-Net3D"],
  ["2025 (Phase 1++)", "Benchmark Extension: Andhra Pradesh (Sentinel-1)"],
  ["2025–2026", "SICKLE++ Development"],
  ["2026", "Web Platform + Automated Pipeline"],
];

export default function Home() {
  return (
    <div className="min-h-screen bg-sage-50 text-navy-900">
      <Navbar />
      <main className="pt-14">
        <section id="hero" className="px-4 py-20 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold mb-4">SICKLE → SICKLE++</h1>
            <h2 className="text-2xl text-gray-700 mb-4">From Multi-Sensor Agricultural Dataset to Scalable AI Platform</h2>
            <p className="text-gray-500 mb-8">Multi-task. Multi-sensor. Real-world agricultural intelligence.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={SICKLE_URL} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-brand-green text-white font-semibold">Register for Dataset</a>
              <a href="/coming-soon" className="px-6 py-3 rounded-full border border-navy-900 font-semibold">Launch Web App</a>
            </div>
          </div>
        </section>

        <section id="problem" className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">The Data Bottleneck in Agricultural AI</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Machine learning performance depends on high-quality labeled datasets.</li>
              <li>In agriculture, satellite data is abundant, but labels are scarce.</li>
            </ul>
            <blockquote className="border-l-4 border-brand-green pl-4 my-6 text-lg font-medium">
              Despite widespread earth observation data, lack of curated labeled datasets limits ML performance in agriculture.
            </blockquote>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Ground surveys are expensive, labor-intensive, and hard to scale.</li>
              <li>Multi-sensor fusion remains complex and inconsistent.</li>
            </ul>
          </div>
        </section>

        <section id="dataset" className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto space-y-8">
            <h3 className="text-3xl font-heading font-bold">SICKLE: A Multi-Sensor Agricultural Dataset</h3>
            <p className="text-gray-600">SICKLE is a time-series multi-sensor dataset designed for agricultural modeling.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-sage-50 rounded-xl p-5">
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  <li>Sensors: Sentinel-1 (SAR), Sentinel-2 (Optical), Landsat-8 (Thermal)</li>
                  <li>Time span: January 2018 to March 2021</li>
                  <li>2,370 samples, 388 plots, ~209,000 satellite images</li>
                </ul>
              </div>
              <div className="bg-sage-50 rounded-xl p-5">
                <h4 className="font-semibold mb-2">Tasks & Innovation</h4>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  <li>Crop classification, phenology prediction, and yield prediction</li>
                  <li>Multi-task learning on one dataset</li>
                  <li>Multi-resolution annotations: 3m, 10m, and 30m</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-4">Dataset Deep Dive</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Time-series sequences are aligned with regional cropping cycles.</li>
              <li>Data is multi-modal: optical, thermal, and microwave.</li>
              <li>Annotations are polygon-based and derived from farmer surveys + GPS coordinates.</li>
              <li>Collection quality depends heavily on farmer recall and survey quality.</li>
            </ul>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-4">Limitations of Existing Dataset</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Manual annotation bottleneck</li>
              <li>Limited geographic coverage (Tamil Nadu)</li>
              <li>No real-time data ingestion</li>
              <li>No standardized evaluation system</li>
              <li>Static dataset, not scalable</li>
            </ul>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-6">Evolution of SICKLE → SICKLE++</h3>
            <div className="space-y-4">
              {timeline.map(([year, event]) => (
                <div key={year + event} className="border-l-2 border-brand-green pl-4">
                  <p className="text-sm text-brand-green font-semibold">{year}</p>
                  <p className="text-gray-700">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto space-y-6">
            <h3 className="text-3xl font-heading font-bold">SICKLE++: From Dataset to Platform</h3>
            <p className="text-lg">Transform static dataset into a dynamic AI system.</p>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Benchmark expansion in Andhra Pradesh with Sentinel-1 experimentation</li>
              <li>Multi-sensor scaling across Sentinel-2, Landsat-8, and fusion pipelines</li>
              <li>Automation layer with mask generation to reduce manual dependency</li>
              <li>Systemization of workflow: Dataset → Benchmark → Platform</li>
            </ul>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto space-y-8">
            <h3 className="text-3xl font-heading font-bold">System Overview</h3>
            <p className="font-mono text-sm bg-gray-100 p-4 rounded">Data → Preprocessing → Model → Evaluation → Results</p>
            <h3 className="text-3xl font-heading font-bold">Automated Data Pipeline</h3>
            <p className="font-mono text-sm bg-gray-100 p-4 rounded whitespace-pre-line">Satellite Data
↓
Preprocessing
↓
Mask Generation (Automated)
↓
Dataset Structuring
↓
Model Inference
↓
Evaluation</p>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-4">Real-Time Agricultural Intelligence</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Live satellite data fetching</li>
                <li>On-demand inference</li>
                <li>Multi-model evaluation (U-TAE, ConvLSTM, 3D U-Net)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-heading font-bold mb-4">SICKLE++ Web Interface</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Input: coordinates or region</li>
                <li>Output: crop class, phenology stage, yield estimate</li>
                <li>Status: 🚧 Under Development</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 text-center">
          <h3 className="text-3xl font-heading font-bold mb-3">Get Started</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={SICKLE_URL} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-brand-green text-white font-semibold">Register for Dataset</a>
            <a href="/coming-soon" className="px-6 py-3 rounded-full border border-navy-900 font-semibold">Launch Web App</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
