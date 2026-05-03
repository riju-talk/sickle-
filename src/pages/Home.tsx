import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SICKLE_URL = "https://sites.google.com/iiitd.ac.in/sickle/home";
const GITHUB_URL = "https://github.com/";

const stats = [
  "2,370 samples",
  "388 plots",
  "~209,000 satellite images",
  "2018–2021 temporal coverage",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-sage-50 text-navy-900">
      <Navbar />
      <main className="pt-14">
        <section id="hero" className="px-4 py-20 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold mb-4">SICKLE++</h1>
            <h2 className="text-2xl text-gray-700 mb-3">A Unified Multi-Task Evaluation Framework for Multi-Sensor Agricultural Remote Sensing</h2>
            <p className="text-brand-green font-medium mb-4">Extending SICKLE: Zero-Shot Inference on Paddy Fields in Andhra Pradesh</p>
            <p className="text-gray-500 mb-8">Built on top of SICKLE (WACV 2024), SICKLE++ transforms static datasets into scalable evaluation and deployment pipelines for real-world agricultural intelligence.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={SICKLE_URL} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-brand-green text-white font-semibold">Register for Dataset Access</a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-navy-900 font-semibold">Explore GitHub Repository</a>
              <button disabled className="px-6 py-3 rounded-full border border-gray-300 text-gray-400 font-semibold cursor-not-allowed" title="Launching Q3 2026">Web Platform (Coming Q3 2026)</button>
            </div>
          </div>
        </section>

        <section id="problem" className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">The Missing Layer in Agricultural AI</h3>
            <p className="text-gray-700 mb-3">Remote sensing has revolutionized our ability to observe agriculture at scale. Satellites provide continuous coverage across regions, seasons, and environmental conditions. Yet despite this abundance of Earth observation data, agricultural AI remains stuck in pilot mode.</p>
            <p className="text-gray-700 mb-4">The bottleneck is <strong>usable, structured, learning-ready data systems</strong>.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ["📉 Labeled Datasets Are Scarce", "High-quality ground truth remains expensive and labor-intensive."],
                ["🔀 Fragmented Across Tasks", "Crop type, phenology, and yield are treated separately."],
                ["🌍 No Geographic Generalization", "Models trained in one region often fail in another."],
                ["⏱️ Temporal Complexity Ignored", "Agriculture unfolds over months, but many datasets are static."],
              ].map(([title, body]) => (
                <div key={title} className="bg-white rounded-xl border border-gray-100 p-4">
                  <h4 className="font-semibold mb-1">{title}</h4>
                  <p className="text-sm text-gray-600">{body}</p>
                </div>
              ))}
            </div>
            <blockquote className="mt-6 border-l-4 border-brand-green pl-4 text-lg font-medium">"Agriculture is not a single-task classification problem. It is a temporal, multi-variable, multi-sensor system that demands unified evaluation frameworks."</blockquote>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">Where Existing Work Breaks Down</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>No multi-task consistency across crop type, phenology, and yield.</li>
              <li>Single-sensor limitations under cloud cover or low spectral detail.</li>
              <li>Severe domain shift across climate, soil, and farmer practices.</li>
              <li>Manual annotation bottlenecks that do not scale.</li>
              <li>No standardized benchmarks and reproducible evaluation protocols.</li>
            </ul>
            <p className="mt-5 font-semibold">Agricultural intelligence cannot be built on fragmented pipelines. We need systems, not just datasets.</p>
          </div>
        </section>

        <section id="dataset" className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-3">SICKLE: The Foundation</h3>
            <p className="text-gray-700 mb-5">A Multi-Sensor Satellite Imagery Dataset Annotated with Multiple Key Cropping Parameters, published at WACV 2024.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="bg-white border rounded-xl p-4">
                <h4 className="font-semibold mb-2">Dataset Specifications</h4>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  <li>Region: Cauvery Delta, Tamil Nadu</li>
                  <li>Districts: Mayiladuthurai, Thiruvarur, Thanjavur, Nagapattinam</li>
                  <li>Sensors: Sentinel-1, Sentinel-2, Landsat-8</li>
                  <li>Tasks: Crop type, sowing, transplanting, harvesting, yield</li>
                </ul>
              </div>
              <div className="bg-white border rounded-xl p-4">
                <h4 className="font-semibold mb-2">Scale</h4>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  {stats.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </div>
            <p className="font-medium">SICKLE reframed agriculture as a multi-task learning problem with unified temporal supervision.</p>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">Baseline Learnings from SICKLE</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>ConvLSTM and UNet3D dominate crop classification (F1 ≈ 0.916).</li>
              <li>UNet3D is strongest on sowing-date prediction (MAE ≈ 2.33 days).</li>
              <li>Harvest remains challenging (MAE ~9–10 days).</li>
              <li>Yield prediction remains high-variance (MAPE often &gt; 35%).</li>
            </ul>
            <p className="mt-5 font-semibold">Model performance is task-dependent, not universal.</p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">From Dataset to Reality</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Region-specific scope limits transfer.</li>
              <li>Static dataset cannot ingest continuously.</li>
              <li>Manual annotation burden blocks scaling.</li>
              <li>No production-ready inference/deployment layer.</li>
            </ul>
            <blockquote className="mt-6 border-l-4 border-brand-green pl-4 text-lg font-medium">Can models trained in one region generalize to new geographies without retraining?</blockquote>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-3">SICKLE++: Extending to Real-World Deployment</h3>
            <p className="text-gray-700 mb-5">Zero-shot inference on Andhra Pradesh to test geographic generalization.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-sage-50 rounded-xl p-4">
                <h4 className="font-semibold mb-2">What Changed</h4>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  <li>New domain: Andhra Pradesh (semi-arid contrasts)</li>
                  <li>150+ manually annotated plots</li>
                  <li>730 curated samples with full target completeness</li>
                  <li>Zero-shot protocol (Tamil Nadu train → AP test)</li>
                </ul>
              </div>
              <div className="bg-sage-50 rounded-xl p-4">
                <h4 className="font-semibold mb-2">Quality & Curation Highlights</h4>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  <li>100% rasterization success on curated set</li>
                  <li>Automated outlier and sequence-violation reports</li>
                  <li>Sentinel-1/2 + Landsat-8 aligned time-series stack</li>
                  <li>Tabular + plot/grid compatible dataset structure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-4">From Data to Decision: Architecture</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Data ingestion layer (SentinelHub + geometry parsing)</li>
                <li>Preprocessing pipeline (band stacking, QC, metadata)</li>
                <li>Model execution engine (ConvLSTM, UNet3D, U-TAE)</li>
                <li>Evaluation framework (F1/IoU + RMSE/MAE/MAPE)</li>
                <li>Results/reporting and reproducible logs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-heading font-bold mb-4">Automating the Data Stack</h3>
              <p className="text-sm bg-gray-100 rounded p-4 mb-3">Satellite API → GeoJSON/KML → Mask Generation → Grid Transformation → Structured Dataset → Model Evaluation</p>
              <p className="text-gray-700">SICKLE++ transitions from manual annotation-heavy workflows to semi-automated, scalable data pipelines.</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-4">Cross-Region Benchmarking: Andhra Pradesh</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Classification transfers relatively well (small performance drop).</li>
              <li>Early phenology remains moderate-to-strong under transfer.</li>
              <li>Late phenology degrades more strongly due to domain shift.</li>
              <li>Yield remains the hardest task with high variance.</li>
            </ul>
            <blockquote className="mt-6 border-l-4 border-brand-green pl-4 text-lg font-medium">Generalization is the real bottleneck in agricultural AI.</blockquote>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-4">What SICKLE++ Adds</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {[
                ["Dual Dataset Support", "Cell-based + plot-based compatible formats."],
                ["Standardized Evaluation", "Unified scripts and metrics for reproducible benchmarks."],
                ["Pipeline Refinement", "Automated retrieval, stacking, QC, and reports."],
                ["Engineering Fixes", "Scalability + compatibility upgrades across the stack."],
                ["Zero-Shot Study", "Empirical cross-region transfer diagnostics."],
                ["Open Source", "Full model/pipeline/reports codebase for reuse."],
              ].map(([t, d]) => (
                <div key={t} className="bg-white border rounded-xl p-4"><strong>{t}</strong><p className="text-gray-600 mt-1">{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-4">Vision & Future Work</h3>
            <p className="text-gray-700 mb-3">Towards continuous, adaptive agricultural intelligence systems serving farmers, policymakers, and researchers.</p>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Multi-region scaling across India and South Asia</li>
              <li>Automated mask generation and active-learning loops</li>
              <li>Weather/soil/topography integration</li>
              <li>Real-time inference APIs + web platform launch (Q3 2026)</li>
              <li>Human-in-the-loop model improvement</li>
            </ul>
          </div>
        </section>

        <section className="px-4 py-16 text-center">
          <h3 className="text-3xl font-heading font-bold mb-3">Access the System</h3>
          <p className="text-gray-600 mb-6">SICKLE++ is open-source and open-data. Join the community building real-world agricultural AI.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a href={SICKLE_URL} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-brand-green text-white font-semibold">Register for Dataset Access</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-navy-900 font-semibold">View on GitHub</a>
            <button disabled className="px-6 py-3 rounded-full border border-gray-300 text-gray-400 font-semibold">Web Platform (Coming Soon)</button>
          </div>
          <p className="text-2xl font-heading font-bold">SICKLE was a dataset. SICKLE++ is a system.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
