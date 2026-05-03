import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SICKLE_URL = "https://sites.google.com/iiitd.ac.in/sickle/home";
const PAPER_URL = "https://openaccess.thecvf.com/content/WACV2024/html/Sani_SICKLE_A_Multi-Sensor_Satellite_Imagery_Dataset_Annotated_With_Multiple_Key_WACV_2024_paper.html";

export default function Home() {
  return (
    <div className="min-h-screen bg-sage-50 text-navy-900">
      <Navbar />
      <main className="pt-14">
        <section id="hero" className="px-4 py-20 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold mb-4">SICKLE++</h1>
            <h2 className="text-2xl text-gray-700 mb-3">A unified multi-task evaluation framework for multi-sensor agricultural remote sensing</h2>
            <p className="text-brand-green font-medium mb-4">Extending SICKLE beyond datasets into real-world agricultural intelligence systems</p>
            <p className="text-gray-500 mb-8">Built on top of SICKLE (WACV 2024), SICKLE++ transforms static datasets into scalable evaluation and deployment pipelines.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={SICKLE_URL} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-brand-green text-white font-semibold">Register for Dataset</a>
              <a href="/coming-soon" className="px-6 py-3 rounded-full border border-navy-900 font-semibold">Open Web App</a>
            </div>
          </div>
        </section>

        <section id="problem" className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">The Missing Layer in Agricultural AI</h3>
            <p className="text-gray-700 mb-4">Remote sensing has made it possible to observe agriculture at scale. Satellite data provides continuous coverage across regions, seasons, and environmental conditions.</p>
            <p className="text-gray-700 mb-4">However, the real bottleneck is not data availability — it is <strong>usable, structured, learning-ready data systems</strong>.</p>
            <ul className="list-disc ml-5 text-gray-700 space-y-2 mb-5">
              <li>Labeled datasets are scarce.</li>
              <li>Annotations are expensive.</li>
              <li>Datasets are fragmented across tasks.</li>
            </ul>
            <blockquote className="border-l-4 border-brand-green pl-4 my-6 text-lg font-medium">Models exist. Data exists. Systems do not.</blockquote>
            <div className="bg-white border border-brand-green/30 rounded-xl p-5 text-gray-700">Agriculture is not a single-task problem. It is a <strong>temporal, multi-variable, multi-sensor system problem</strong>.</div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">Where Current Approaches Break</h3>
            <p className="text-gray-700 mb-4">Most work in agricultural remote sensing focuses on isolated problems like crop classification, yield prediction, or segmentation. In reality, these tasks are connected.</p>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>No unified datasets combining crop type, phenology, and yield.</li>
              <li>No temporal consistency across data.</li>
              <li>No generalization across regions.</li>
              <li>Heavy dependence on manual annotation.</li>
              <li>No standardized evaluation frameworks.</li>
            </ul>
            <p className="mt-5 font-semibold">Agricultural intelligence cannot be built on fragmented pipelines.</p>
          </div>
        </section>

        <section id="dataset" className="px-4 py-16">
          <div className="max-w-5xl mx-auto space-y-8">
            <h3 className="text-3xl font-heading font-bold">SICKLE: A Multi-Sensor Agricultural Dataset</h3>
            <p className="text-gray-700">SICKLE introduced one of the first structured datasets integrating multiple satellite modalities with key agricultural parameters.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h4 className="font-semibold mb-2">Dataset Facts</h4>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  <li>Sensors: Sentinel-1 (SAR), Sentinel-2 (Optical), Landsat-8 (Thermal)</li>
                  <li>Time-series: 2018 to 2021</li>
                  <li>Region: Cauvery Delta, Tamil Nadu</li>
                  <li>2,370 samples, 388 plots, ~209,000 images</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h4 className="font-semibold mb-2">Tasks</h4>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  <li>Crop type classification</li>
                  <li>Phenology: sowing, transplanting, harvesting</li>
                  <li>Yield prediction</li>
                </ul>
                <p className="mt-4 font-medium">SICKLE reframed agriculture as a multi-task learning problem.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">Baseline Learnings from SICKLE</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>ConvLSTM performs well on classification.</li>
              <li>U-TAE dominates temporal prediction and yield.</li>
              <li>3D U-Net is unstable for temporal predictions.</li>
              <li>No model performs uniformly across tasks.</li>
            </ul>
            <p className="mt-5 font-semibold">Model performance is task-dependent — not universal.</p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">From Dataset to Reality</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>SICKLE is region-specific.</li>
              <li>It remains static and annotation-heavy.</li>
              <li>It has no real-time deployment layer.</li>
            </ul>
            <blockquote className="border-l-4 border-brand-green pl-4 my-6 text-lg font-medium">Can we move from datasets to systems?</blockquote>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">SICKLE++: Extending to Real-World Deployment</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>New region: Andhra Pradesh with distinct climate and cropping patterns.</li>
              <li>Zero-shot evaluation: models trained on Tamil Nadu applied to Andhra Pradesh.</li>
              <li>Dataset creation: 150+ annotated plots from survey and satellite alignment.</li>
              <li>Sentinel-1 focused SAR-based inference pipeline.</li>
            </ul>
            <p className="mt-5 font-semibold">SICKLE++ tests whether agricultural models can generalize beyond their origin.</p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-4">From Data to Decision</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Data ingestion</li>
                <li>Model execution</li>
                <li>Evaluation engine</li>
                <li>Metrics computation</li>
                <li>Report generation</li>
              </ul>
              <p className="mt-4 font-medium">This is not just training — this is an end-to-end pipeline.</p>
            </div>
            <div>
              <h3 className="text-3xl font-heading font-bold mb-4">Automating the Data Stack</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Satellite data retrieval (SentinelHub)</li>
                <li>GeoJSON region extraction + bounding boxes</li>
                <li>Band stacking and normalization</li>
                <li>Mask generation from annotations</li>
                <li>Grid transformation and dataset structuring</li>
              </ul>
              <p className="mt-4 text-sm bg-gray-100 p-3 rounded">Satellite Data → Preprocessing → Mask Generation → Dataset Structuring → Model → Evaluation</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">Cross-Region Benchmarking</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Performance drops across tasks on Andhra Pradesh.</li>
              <li>ConvLSTM remains strongest for crop classification.</li>
              <li>Yield prediction remains unstable; U-TAE leads but with high error.</li>
              <li>Temporal predictions are sensitive to missing/noisy observations.</li>
            </ul>
            <p className="mt-5 font-semibold">Generalization is the real bottleneck in agricultural AI.</p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">What SICKLE++ Adds</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border rounded-xl p-4"><strong>Dual Dataset Support</strong><p className="text-sm text-gray-600">Cell-based + plot-based formats.</p></div>
              <div className="bg-white border rounded-xl p-4"><strong>Evaluation Framework</strong><p className="text-sm text-gray-600">Standardized benchmarking and reporting.</p></div>
              <div className="bg-white border rounded-xl p-4"><strong>Pipeline Refinement</strong><p className="text-sm text-gray-600">Structured, semi-automated data processing.</p></div>
              <div className="bg-white border rounded-xl p-4"><strong>Engineering Fixes</strong><p className="text-sm text-gray-600">Scalability and compatibility improvements.</p></div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">Towards Agricultural Intelligence Systems</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Continuous satellite ingestion</li>
              <li>Dynamic model updates</li>
              <li>Real-time insights for farmers and policymakers</li>
            </ul>
            <p className="mt-5 font-semibold">Agriculture should be monitored like a live system, not studied like a static dataset.</p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-5">Future Work</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Multi-region scaling</li>
              <li>Fully automated mask generation</li>
              <li>Integration with weather and soil data</li>
              <li>Real-time inference APIs</li>
              <li>Human-in-the-loop training</li>
            </ul>
          </div>
        </section>

        <section className="px-4 py-16 bg-white border-t border-gray-100 text-center">
          <h3 className="text-3xl font-heading font-bold mb-3">Access the System</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 text-left mb-6">
            <div className="border rounded-xl p-5">
              <h4 className="font-semibold mb-2">Register for SICKLE Dataset</h4>
              <p className="text-gray-600 text-sm">Access curated multi-sensor agricultural data and benchmarking tools.</p>
            </div>
            <div className="border rounded-xl p-5">
              <h4 className="font-semibold mb-2">SICKLE++ Web Platform</h4>
              <p className="text-gray-600 text-sm">Live evaluation, visualization, and inference. Status: Under Construction.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={SICKLE_URL} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-brand-green text-white font-semibold">Register</a>
            <a href="/coming-soon" className="px-6 py-3 rounded-full border border-navy-900 font-semibold">Open Web App</a>
          </div>
          <p className="mt-8 text-2xl font-heading font-bold">SICKLE was a dataset. SICKLE++ is a system.</p>
          <p className="mt-3 text-sm text-gray-500">References: <a className="underline" href={PAPER_URL} target="_blank" rel="noreferrer">WACV 2024 Open Access Paper</a></p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
