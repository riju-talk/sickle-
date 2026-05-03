import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const GITHUB_URL = "https://github.com/your-org/sickle-plus-plus";

const phase1TamilNaduRows = [
  {
    task: "Crop Type (SI)",
    metric: "IoU (%)",
    l8: "47.73% +/- 1.77%",
    s2: "54.87% +/- 3.08%",
    s1: "64.35% +/- 4.82%",
    fusion: "-",
  },
  {
    task: "Crop Type",
    metric: "IoU (%)",
    l8: "56.04% +/- 5.84%",
    s2: "78.12% +/- 3.48%",
    s1: "81.77% +/- 6.60%",
    fusion: "81.07% +/- 5.77%",
  },
  {
    task: "Sow Date",
    metric: "MAE (days)",
    l8: "2.66 +/- 0.961",
    s2: "2.30 +/- 0.611",
    s1: "3.61 +/- 0.898",
    fusion: "2.33 +/- 0.639",
  },
  {
    task: "Transplant Date",
    metric: "MAE (days)",
    l8: "6.20 +/- 1.030",
    s2: "6.36 +/- 2.164",
    s1: "7.23 +/- 0.779",
    fusion: "6.16 +/- 1.770",
  },
  {
    task: "Harvest Date",
    metric: "MAE (days)",
    l8: "9.86 +/- 0.736",
    s2: "8.83 +/- 1.520",
    s1: "10.08 +/- 0.561",
    fusion: "10.75 +/- 3.389",
  },
  {
    task: "Crop Yield (SI)",
    metric: "MAPE (%)",
    l8: "46.74% +/- 3.82%",
    s2: "60.44% +/- 14.50%",
    s1: "48.35% +/- 7.64%",
    fusion: "-",
  },
  {
    task: "Crop Yield (RS)",
    metric: "MAPE (%)",
    l8: "54.00% +/- 9.67%",
    s2: "72.38% +/- 8.74%",
    s1: "71.81% +/- 17.27%",
    fusion: "70.35% +/- 13.75%",
  },
  {
    task: "Crop Yield (AS)",
    metric: "MAPE (%)",
    l8: "59.38% +/- 14.75%",
    s2: "73.59% +/- 9.81%",
    s1: "65.66% +/- 16.24%",
    fusion: "64.56% +/- 13.77%",
  },
];

const phase1CropTypeRows = [
  {
    model: "U-TAE",
    overallF1: "0.7259",
    overallAcc: "0.8028",
    overallIoU: "0.5904",
    paddyF1: "0.5806",
    paddyAcc: "0.7670",
    paddyIoU: "0.4091",
  },
  {
    model: "UNet3D",
    overallF1: "0.9163",
    overallAcc: "0.9474",
    overallIoU: "0.8496",
    paddyF1: "0.8653",
    paddyAcc: "0.9489",
    paddyIoU: "0.7626",
  },
  {
    model: "ConvLSTM",
    overallF1: "0.9163",
    overallAcc: "0.9474",
    overallIoU: "0.8496",
    paddyF1: "0.8653",
    paddyAcc: "0.9489",
    paddyIoU: "0.7626",
  },
];

const phase1SowingRows = [
  { model: "U-TAE", rmse: "8.5669", mae: "5.8880", mape: "0.0322" },
  { model: "UNet3D", rmse: "3.2568", mae: "2.7558", mape: "0.0151" },
  { model: "ConvLSTM", rmse: "3.2568", mae: "2.7558", mape: "0.0151" },
];

const phase1TransplantRows = [
  { model: "U-TAE", rmse: "3.3659", mae: "2.5914", mape: "0.0142" },
  { model: "UNet3D", rmse: "3.3942", mae: "2.5186", mape: "0.0138" },
  { model: "ConvLSTM", rmse: "3.3942", mae: "2.5186", mape: "0.0138" },
];

const phase1HarvestRows = [
  { model: "U-TAE", rmse: "12.9196", mae: "11.6916", mape: "0.0639" },
  { model: "UNet3D", rmse: "13.7296", mae: "12.3700", mape: "0.0676" },
  { model: "ConvLSTM", rmse: "13.7296", mae: "12.3700", mape: "0.0676" },
];

const phase1YieldRows = [
  { model: "U-TAE", rmse: "720.7391", mae: "562.2070", mape: "0.3552" },
  { model: "UNet3D", rmse: "735.4064", mae: "561.4650", mape: "0.3741" },
  { model: "ConvLSTM", rmse: "735.4064", mae: "561.4650", mape: "0.3741" },
];

const phase2BestRows = [
  {
    task: "Crop Type",
    sensor: "S1",
    model: "ConvLSTM",
    metric: "Accuracy",
    score: "94.01%",
    delta: "similar",
  },
  {
    task: "Crop Type",
    sensor: "S1",
    model: "ConvLSTM",
    metric: "F1 (Paddy)",
    score: "96.91%",
    delta: "similar",
  },
  {
    task: "Crop Type",
    sensor: "S1",
    model: "ConvLSTM",
    metric: "IoU",
    score: "94.01%",
    delta: "up 13 pts",
  },
  {
    task: "Sowing Date",
    sensor: "S2",
    model: "UNet3D",
    metric: "MAE (days)",
    score: "159.62",
    delta: "down 157 days",
  },
  {
    task: "Sowing Date",
    sensor: "S2",
    model: "UNet3D",
    metric: "MAPE (%)",
    score: "87.22%",
    delta: "down 85 pts",
  },
  {
    task: "Transplanting",
    sensor: "Fusion",
    model: "ConvLSTM",
    metric: "MAE (days)",
    score: "34.72",
    delta: "down 29 days",
  },
  {
    task: "Transplanting",
    sensor: "Fusion",
    model: "ConvLSTM",
    metric: "MAPE (%)",
    score: "18.97%",
    delta: "down 69 pts",
  },
  {
    task: "Harvesting",
    sensor: "S1",
    model: "ConvLSTM",
    metric: "MAE (days)",
    score: "81.97",
    delta: "down 73 days",
  },
  {
    task: "Harvesting",
    sensor: "S1",
    model: "ConvLSTM",
    metric: "MAPE (%)",
    score: "44.79%",
    delta: "down 46 pts",
  },
  {
    task: "Crop Yield",
    sensor: "L8",
    model: "ConvLSTM",
    metric: "MAPE (%)",
    score: "89.13%",
    delta: "down 25 pts",
  },
];

const comparisonRows = [
  {
    task: "Crop Type",
    status: "Good",
    reason: "Structural signatures (SAR) are region-invariant",
  },
  {
    task: "Sowing Date",
    status: "Poor",
    reason: "Hyperlocal climate and farmer decisions",
  },
  {
    task: "Transplanting",
    status: "Moderate (with fusion)",
    reason: "Visual flooding signals transfer partially",
  },
  {
    task: "Harvesting",
    status: "Poor",
    reason: "Socio-economic factors dominate timing",
  },
  {
    task: "Crop Yield",
    status: "Poor",
    reason: "Requires unobserved agronomic variables",
  },
];

const recommendationBlocks = [
  {
    title: "For Crop Type Classification",
    body:
      "Best: Sentinel-1 + ConvLSTM\n- Accuracy: 94.01%\n- F1 (Paddy): 96.91%\n- Robust to cloud cover and geographic shift",
  },
  {
    title: "For Sowing Date Prediction",
    body:
      "No model generalizes well zero-shot\n- Best available: Sentinel-2 + UNet3D (MAE: 159 days)\n- Recommendation: fine-tune on target region with minimal labels",
  },
  {
    title: "For Transplanting Date Prediction",
    body:
      "Best: Multi-sensor fusion + ConvLSTM\n- MAE: 34.72 days, MAPE: 18.97%\n- Only regression task with usable zero-shot performance\n- Leverages optical + SAR + thermal signals",
  },
  {
    title: "For Harvesting Date Prediction",
    body:
      "High uncertainty across all models\n- Best available: Sentinel-1 + ConvLSTM (MAE: 82 days)\n- Recommendation: combine with farmer-reported calendars",
  },
  {
    title: "For Crop Yield Prediction",
    body:
      "Not recommended for zero-shot deployment\n- Best available: Landsat-8 + ConvLSTM (MAPE: 89%)\n- Recommendation: integrate ground-based agronomic data",
  },
  {
    title: "Overall Best Architecture",
    body:
      "Best overall: ConvLSTM with multi-sensor input\n- Most consistent across tasks\n- Handles temporal dependencies effectively\n- Robust to missing data and sensor gaps",
  },
];

const appendixCropRows = [
  { sensor: "S1", model: "ConvLSTM", accuracy: "94.01%", f1Overall: "48.46%", f1Paddy: "96.91%", iou: "94.01%" },
  { sensor: "S1", model: "UNet3D", accuracy: "68.61%", f1Overall: "40.71%", f1Paddy: "81.38%", iou: "68.60%" },
  { sensor: "S1", model: "U-TAE", accuracy: "51.95%", f1Overall: "34.20%", f1Paddy: "68.38%", iou: "51.95%" },
  { sensor: "S2", model: "ConvLSTM", accuracy: "53.97%", f1Overall: "35.08%", f1Paddy: "70.10%", iou: "53.96%" },
  { sensor: "S2", model: "UNet3D", accuracy: "9.46%", f1Overall: "8.65%", f1Paddy: "17.26%", iou: "9.44%" },
  { sensor: "S2", model: "U-TAE", accuracy: "0.02%", f1Overall: "0.02%", f1Paddy: "0.00%", iou: "0.00%" },
  { sensor: "L8", model: "ConvLSTM", accuracy: "66.82%", f1Overall: "40.07%", f1Paddy: "80.11%", iou: "66.82%" },
  { sensor: "L8", model: "UNet3D", accuracy: "25.89%", f1Overall: "20.58%", f1Paddy: "41.12%", iou: "25.88%" },
  { sensor: "L8", model: "U-TAE", accuracy: "0.02%", f1Overall: "0.02%", f1Paddy: "0.00%", iou: "0.00%" },
  { sensor: "Fusion", model: "ConvLSTM", accuracy: "16.58%", f1Overall: "14.23%", f1Paddy: "28.43%", iou: "16.57%" },
  { sensor: "Fusion", model: "UNet3D", accuracy: "46.05%", f1Overall: "31.55%", f1Paddy: "63.05%", iou: "46.04%" },
  { sensor: "Fusion", model: "U-TAE", accuracy: "74.15%", f1Overall: "42.60%", f1Paddy: "85.16%", iou: "74.15%" },
];

const appendixPhenologyRows = [
  { task: "Sowing", sensor: "S2", model: "UNet3D", rmse: "162.38", mae: "159.62", mape: "87.22%" },
  { task: "Transplanting", sensor: "Fusion", model: "ConvLSTM", rmse: "41.64", mae: "34.72", mape: "18.97%" },
  { task: "Harvesting", sensor: "S1", model: "ConvLSTM", rmse: "144.06", mae: "81.97", mape: "44.79%" },
];

const appendixYieldRows = [
  { sensor: "L8", model: "ConvLSTM", rmse: "5,250.83", mae: "5,133.43", mape: "89.13%" },
  { sensor: "L8", model: "UNet3D", rmse: "5,740.86", mae: "5,633.67", mape: "98.33%" },
  { sensor: "L8", model: "U-TAE", rmse: "5,751.41", mae: "5,644.06", mape: "98.51%" },
  { sensor: "S1", model: "ConvLSTM", rmse: "5,624.44", mae: "5,515.03", mape: "96.15%" },
  { sensor: "S1", model: "UNet3D", rmse: "5,743.89", mae: "5,636.75", mape: "98.39%" },
  { sensor: "S1", model: "U-TAE", rmse: "5,718.89", mae: "5,611.71", mape: "97.94%" },
  { sensor: "S2", model: "ConvLSTM", rmse: "5,721.36", mae: "5,615.19", mape: "98.01%" },
  { sensor: "S2", model: "UNet3D", rmse: "5,677.57", mae: "5,570.30", mape: "97.19%" },
  { sensor: "S2", model: "U-TAE", rmse: "5,692.92", mae: "5,584.98", mape: "97.44%" },
  { sensor: "Fusion", model: "ConvLSTM", rmse: "5,637.09", mae: "5,528.32", mape: "96.40%" },
  { sensor: "Fusion", model: "UNet3D", rmse: "5,705.04", mae: "5,595.02", mape: "97.55%" },
  { sensor: "Fusion", model: "U-TAE", rmse: "5,730.26", mae: "5,622.47", mape: "98.11%" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-sage-50 text-navy-900">
      <Navbar />
      <main className="pt-14">
        <section
          id="hero"
          className="relative overflow-hidden text-white"
          style={{
            backgroundImage:
              "linear-gradient(160deg, rgba(10,15,26,0.78) 0%, rgba(15,32,24,0.78) 35%, rgba(26,56,40,0.72) 55%, rgba(200,217,200,0.55) 80%, rgba(241,245,242,0.45) 100%), url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,197,94,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.25) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-green/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-12 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase">
                SICKLE++
              </p>
              <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl mt-4">
                SICKLE++
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 mt-5 leading-relaxed">
                A Unified Multi-Task Evaluation Framework for Multi-Sensor Agricultural Remote Sensing
              </p>
              <p className="text-brand-greenLight text-xs sm:text-sm font-semibold mt-4 uppercase tracking-widest">
                Zero-Shot Inference on Paddy Fields: From Tamil Nadu to Andhra Pradesh
              </p>
              <p className="text-gray-200 mt-6 text-sm sm:text-base leading-relaxed">
                Built on top of SICKLE (WACV 2024), SICKLE++ transforms static datasets into scalable
                evaluation pipelines. Now benchmarking geographic generalization across Indian
                agricultural regions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-brand-green text-white font-semibold hover:bg-brand-greenDark transition-colors"
                >
                  View GitHub Repository <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="px-4 py-20 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
                The Missing Layer in Agricultural AI
              </h2>
              <p className="text-gray-600 text-base">
                Remote sensing has revolutionized our ability to observe agriculture at scale. Yet
                despite petabytes of satellite imagery, agricultural AI remains stuck in pilot mode.
              </p>
              <p className="text-gray-700 mt-4">
                The bottleneck is not data availability - it is
                <span className="font-semibold text-navy-900">
                  {" "}
                  usable, structured, learning-ready data systems that generalize across regions
                </span>
                .
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-sage-50 border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">Labeled Datasets Are Scarce</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  High-quality ground truth annotations remain expensive and labor-intensive. Field
                  surveys require physical interaction with farmers, complex manual annotation, and
                  significant financial resources.
                </p>
              </div>
              <div className="bg-sage-50 border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">Fragmented Across Tasks</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Current approaches treat crop classification, yield prediction, and phenology
                  detection as isolated problems. But agriculture is inherently multi-task.
                </p>
              </div>
              <div className="bg-sage-50 border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">No Geographic Generalization</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Models trained in one region fail elsewhere. A system built for Tamil Nadu cannot
                  automatically generalize to Andhra Pradesh's semi-arid regions.
                </p>
              </div>
              <div className="bg-sage-50 border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">Temporal Complexity Ignored</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Most datasets capture static snapshots. Real agriculture unfolds over months, with
                  critical phenological stages tracked across multiple satellite modalities.
                </p>
              </div>
            </div>

            <blockquote className="mt-10 border-l-4 border-brand-green pl-5 text-gray-700 italic text-lg">
              "Agriculture is not a single-task classification problem. It is a temporal,
              multi-variable, multi-sensor system that demands unified evaluation frameworks."
            </blockquote>
          </div>
        </section>

        <section id="existing" className="px-4 py-20 bg-sage-50">
          <div className="max-w-6xl mx-auto">
            <p className="text-brand-green text-xs font-semibold tracking-widest uppercase">
              Existing Work
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
              SICKLE Foundation
            </h2>
            <p className="text-gray-600 max-w-3xl">
              SICKLE (WACV 2024) is the foundational multi-sensor dataset. Phase 1 is a separate
              inference-only benchmark on Andhra Pradesh using Sentinel-1 data.
            </p>

            <div className="grid lg:grid-cols-2 gap-6 mt-10">
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-3">SICKLE (WACV 2024)</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                  <li>Region: Cauvery Delta, Tamil Nadu (Mayiladuthurai, Thiruvarur, Thanjavur, Nagapattinam).</li>
                  <li>Multi-sensor integration: Sentinel-1 (SAR), Sentinel-2 (optical), Landsat-8 (thermal).</li>
                  <li>2,370 samples across 388 plots with 2018-2021 coverage.</li>
                  <li>Five tasks: crop type, sowing, transplanting, harvesting, yield.</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-3">
                  Phase 1: Andhra Pradesh Benchmark (Inference-Only)
                </h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                  <li>Benchmarking on Andhra Pradesh using Sentinel-1 only.</li>
                  <li>Runs inference with the same SICKLE models (no retraining).</li>
                  <li>Zero-shot evaluation to measure geographic generalization.</li>
                  <li>Focused on SAR robustness under domain shift.</li>
                  <li>Produces task-level metrics for classification and phenology.</li>
                  <li>Time range: 2018 Rabi season.</li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-10">
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-navy-900 mb-2">Video Overview</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  YouTube walkthrough of the SICKLE pipeline, data sources, and workflow. with models, evlautions, all the initial ground on which sickle++ was developed.
                </p>
                <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg border border-gray-200">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/2p4BDVLrmdw"
                    title="SICKLE Dataset | WACV 2024 | Oral Presentation"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-navy-900 mb-2">Presentation PDF</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  View the SICKLE presentation deck directly below.
                </p>
                <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-200">
                  <iframe
                    className="w-full h-full"
                    src="/SICKLE_compressed.pdf#view=FitH"
                    title="SICKLE presentation PDF"
                    loading="lazy"
                  />
                </div>
                <a
                  href="/SICKLE_compressed.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex mt-3 text-xs font-semibold text-brand-green hover:text-brand-greenDark"
                >
                  Open PDF in new tab
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="phase1-results" className="px-4 py-20 bg-sage-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Baseline Performance: Tamil Nadu Benchmark
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Benchmarking three state-of-the-art temporal models - ConvLSTM, U-TAE, and UNet3D - on
              the original SICKLE dataset revealed clear performance patterns.
            </p>

            <div className="mt-8 overflow-x-auto border border-gray-200 rounded-xl bg-white">
              <table className="min-w-[900px] w-full text-left text-xs sm:text-sm">
                <thead className="bg-sage-100 text-gray-600 text-xs uppercase tracking-widest">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Task</th>
                    <th className="px-4 py-3 font-semibold">Metric</th>
                    <th className="px-4 py-3 font-semibold">L8</th>
                    <th className="px-4 py-3 font-semibold">S2</th>
                    <th className="px-4 py-3 font-semibold">S1</th>
                    <th className="px-4 py-3 font-semibold">Fusion</th>
                  </tr>
                </thead>
                <tbody>
                  {phase1TamilNaduRows.map((row) => (
                    <tr key={`${row.task}-${row.metric}`} className="border-t border-gray-100">
                      <td className="px-4 py-3 font-medium text-navy-900">{row.task}</td>
                      <td className="px-4 py-3 text-gray-600">{row.metric}</td>
                      <td className="px-4 py-3 text-gray-600">{row.l8}</td>
                      <td className="px-4 py-3 text-gray-600">{row.s2}</td>
                      <td className="px-4 py-3 text-gray-600">{row.s1}</td>
                      <td className="px-4 py-3 text-gray-600">{row.fusion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Phase 1 Detailed Metrics</h3>
                <p className="text-gray-600 text-sm">
                  Per-model results from the Tamil Nadu benchmark.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-navy-900 mb-3">Crop Type Classification</h4>
                <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
                  <table className="min-w-[860px] w-full text-left text-xs sm:text-sm">
                    <thead className="bg-sage-100 text-gray-600 text-xs uppercase tracking-widest">
                      <tr>
                        <th className="px-4 py-3 font-semibold" rowSpan={2}>Model</th>
                        <th className="px-4 py-3 font-semibold text-center" colSpan={3}>Overall</th>
                        <th className="px-4 py-3 font-semibold text-center" colSpan={3}>Paddy</th>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <th className="px-4 py-3 font-semibold">F1</th>
                        <th className="px-4 py-3 font-semibold">Acc</th>
                        <th className="px-4 py-3 font-semibold">IoU</th>
                        <th className="px-4 py-3 font-semibold">F1</th>
                        <th className="px-4 py-3 font-semibold">Acc</th>
                        <th className="px-4 py-3 font-semibold">IoU</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phase1CropTypeRows.map((row) => (
                        <tr key={row.model} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-medium text-navy-900">{row.model}</td>
                          <td className="px-4 py-3 text-gray-600">{row.overallF1}</td>
                          <td className="px-4 py-3 text-gray-600">{row.overallAcc}</td>
                          <td className="px-4 py-3 text-gray-600">{row.overallIoU}</td>
                          <td className="px-4 py-3 text-gray-600">{row.paddyF1}</td>
                          <td className="px-4 py-3 text-gray-600">{row.paddyAcc}</td>
                          <td className="px-4 py-3 text-gray-600">{row.paddyIoU}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-navy-900 mb-3">Sowing Date Prediction</h4>
                <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
                  <table className="min-w-[520px] w-full text-left text-xs sm:text-sm">
                    <thead className="bg-sage-100 text-gray-600 text-xs uppercase tracking-widest">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Model</th>
                        <th className="px-4 py-3 font-semibold">RMSE</th>
                        <th className="px-4 py-3 font-semibold">MAE</th>
                        <th className="px-4 py-3 font-semibold">MAPE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phase1SowingRows.map((row) => (
                        <tr key={row.model} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-medium text-navy-900">{row.model}</td>
                          <td className="px-4 py-3 text-gray-600">{row.rmse}</td>
                          <td className="px-4 py-3 text-gray-600">{row.mae}</td>
                          <td className="px-4 py-3 text-gray-600">{row.mape}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-navy-900 mb-3">Transplanting Date Prediction</h4>
                <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
                  <table className="min-w-[520px] w-full text-left text-xs sm:text-sm">
                    <thead className="bg-sage-100 text-gray-600 text-xs uppercase tracking-widest">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Model</th>
                        <th className="px-4 py-3 font-semibold">RMSE</th>
                        <th className="px-4 py-3 font-semibold">MAE</th>
                        <th className="px-4 py-3 font-semibold">MAPE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phase1TransplantRows.map((row) => (
                        <tr key={row.model} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-medium text-navy-900">{row.model}</td>
                          <td className="px-4 py-3 text-gray-600">{row.rmse}</td>
                          <td className="px-4 py-3 text-gray-600">{row.mae}</td>
                          <td className="px-4 py-3 text-gray-600">{row.mape}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-navy-900 mb-3">Harvesting Date Prediction</h4>
                <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
                  <table className="min-w-[520px] w-full text-left text-xs sm:text-sm">
                    <thead className="bg-sage-100 text-gray-600 text-xs uppercase tracking-widest">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Model</th>
                        <th className="px-4 py-3 font-semibold">RMSE</th>
                        <th className="px-4 py-3 font-semibold">MAE</th>
                        <th className="px-4 py-3 font-semibold">MAPE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phase1HarvestRows.map((row) => (
                        <tr key={row.model} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-medium text-navy-900">{row.model}</td>
                          <td className="px-4 py-3 text-gray-600">{row.rmse}</td>
                          <td className="px-4 py-3 text-gray-600">{row.mae}</td>
                          <td className="px-4 py-3 text-gray-600">{row.mape}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-navy-900 mb-3">Crop Yield Prediction</h4>
                <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
                  <table className="min-w-[520px] w-full text-left text-xs sm:text-sm">
                    <thead className="bg-sage-100 text-gray-600 text-xs uppercase tracking-widest">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Model</th>
                        <th className="px-4 py-3 font-semibold">RMSE</th>
                        <th className="px-4 py-3 font-semibold">MAE</th>
                        <th className="px-4 py-3 font-semibold">MAPE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phase1YieldRows.map((row) => (
                        <tr key={row.model} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-medium text-navy-900">{row.model}</td>
                          <td className="px-4 py-3 text-gray-600">{row.rmse}</td>
                          <td className="px-4 py-3 text-gray-600">{row.mae}</td>
                          <td className="px-4 py-3 text-gray-600">{row.mape}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Crop Type Classification: Strong Performance</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>UNet3D and ConvLSTM tie at 0.9163 F1 and 0.8496 IoU (overall).</li>
                  <li>Paddy-specific IoU reaches 0.7626 with UNet3D/ConvLSTM.</li>
                  <li>U-TAE trails with 0.5904 IoU overall.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Early Phenology (Sowing): Excellent Accuracy</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>Best MAE is 2.7558 days (UNet3D/ConvLSTM) with MAPE 0.0151.</li>
                  <li>U-TAE is higher at 5.8880 days MAE.</li>
                  <li>Temporal patterns for sowing are consistent and learnable.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">
                  Late Phenology (Transplanting/Harvest): Moderate Challenge
                </h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>Transplanting: best MAE is 2.5186 days (UNet3D/ConvLSTM) with MAPE 0.0138.</li>
                  <li>Harvesting: best MAE is 11.6916 days with U-TAE (MAPE 0.0639).</li>
                  <li>Late-season predictions are more sensitive to regional variations.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Crop Yield: Open Research Problem</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>Best MAPE is 0.3552 with U-TAE (RMSE 720.7391).</li>
                  <li>UNet3D/ConvLSTM are slightly higher at MAPE 0.3741.</li>
                  <li>Yield depends on factors beyond satellite imagery.</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 bg-white border border-gray-100 rounded-xl p-6">
              <p className="text-gray-700 font-medium">
                Critical insight: Model performance is task-dependent, not universal. UNet3D and
                ConvLSTM lead on classification and early phenology, while U-TAE is strongest on
                harvesting and yield. Yield estimation remains challenging across all architectures.
              </p>
            </div>
          </div>
        </section>

        <section id="gap" className="px-4 py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Testing Geographic Generalization
            </h2>
            <p className="text-gray-600 max-w-3xl">
              SICKLE established strong baselines in Tamil Nadu, but critical questions remained
              unanswered.
            </p>
            <blockquote className="mt-6 border-l-4 border-brand-green pl-5 text-gray-700 italic text-lg">
              "Can models trained on Tamil Nadu's humid delta generalize to Andhra Pradesh's semi-arid
              regions without any retraining?"
            </blockquote>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-sage-50 border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">Why This Matters</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                  <li>Tamil Nadu: high rainfall, intensive irrigation, standardized rice practices.</li>
                  <li>Andhra Pradesh: variable rainfall, diverse cropping patterns, different soils.</li>
                  <li>Real-world deployment requires models that work across boundaries.</li>
                </ul>
              </div>
              <div className="bg-sage-50 border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">Our Approach</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                  <li>Training data: SICKLE (Tamil Nadu, 2018-2021)</li>
                  <li>Test data: Andhra Pradesh (2018 Rabi season), zero-shot inference</li>
                  <li>Goal: measure performance degradation and identify which tasks generalize</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="phase2" className="px-4 py-20 bg-sage-50">
          <div className="max-w-6xl mx-auto">
            <p className="text-brand-green text-xs font-semibold tracking-widest uppercase">Phase 2</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-3">
              Zero-Shot Inference in Andhra Pradesh
            </h2>
            <p className="text-gray-600 text-base mb-8">
              First cross-region benchmark for multi-task agricultural AI.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">New Geographic Domain</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                  <li>Region: Andhra Pradesh, India</li>
                  <li>Climate: semi-arid to arid, contrasting with Tamil Nadu</li>
                  <li>Crop distribution: Rice (65%), Cotton (14%), Maize (10%), Others (11%)</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">Annotation Pipeline</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                  <li>Source: CIMMYT CSISA farmer field survey dataset (45,643 fields)</li>
                  <li>Andhra subset: 1,744 fields with coordinates and phenology dates</li>
                  <li>Manual annotation: 150+ plots using Google Earth Pro</li>
                  <li>Quality control: two-step verification with 50-60m radius search</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">Data Processing</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                  <li>SentinelHub API for automated satellite retrieval</li>
                  <li>Multi-sensor time series: Sentinel-1, Sentinel-2, Landsat-8</li>
                  <li>Sentinel-2 coverage: 2016-2022</li>
                  <li>Grid transformation: 330m x 330m cells matching SICKLE format</li>
                  <li>Final validated samples: 730 plots with complete metadata</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">Dataset Quality Metrics</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                  <li>Mask rasterization success: 100% (730/730)</li>
                  <li>Data completeness: 100% for all phenology dates and yield</li>
                  <li>Imagery availability: 100% for all three satellites</li>
                  <li>Crop yield range: 1,977-9,884 kg/ha (mean: 5,435 kg/ha)</li>
                  <li>Plots overlap partially across sensors</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="px-4 py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Zero-Shot Performance: Tamil Nadu to Andhra Pradesh
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Testing SICKLE-trained models on Andhra Pradesh reveals the challenges and
              opportunities of geographic generalization.
            </p>

            <div className="mt-6 bg-sage-50 border border-gray-100 rounded-xl p-5 text-sm text-gray-700">
              <p className="font-semibold text-navy-900 mb-2">Phase alignment note</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Phase 1: Sentinel-1 only, same models, 2018 Rabi season.</li>
                <li>Phase 2: multi-sensor evaluation; Sentinel-2 spans 2016-2022.</li>
                <li>Plots overlap partially across sensors.</li>
              </ul>
            </div>

            <div className="mt-8 overflow-x-auto border border-gray-200 rounded-xl bg-white">
              <table className="min-w-[900px] w-full text-left text-xs sm:text-sm">
                <thead className="bg-sage-100 text-gray-600 text-xs uppercase tracking-widest">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Task</th>
                    <th className="px-4 py-3 font-semibold">Sensor</th>
                    <th className="px-4 py-3 font-semibold">Best Model</th>
                    <th className="px-4 py-3 font-semibold">Metric</th>
                    <th className="px-4 py-3 font-semibold">Phase 2 Score</th>
                    <th className="px-4 py-3 font-semibold">vs. Phase 1</th>
                  </tr>
                </thead>
                <tbody>
                  {phase2BestRows.map((row, index) => (
                    <tr key={`${row.task}-${row.metric}-${index}`} className="border-t border-gray-100">
                      <td className="px-4 py-3 font-medium text-navy-900">{row.task}</td>
                      <td className="px-4 py-3 text-gray-600">{row.sensor}</td>
                      <td className="px-4 py-3 text-gray-600">{row.model}</td>
                      <td className="px-4 py-3 text-gray-600">{row.metric}</td>
                      <td className="px-4 py-3 text-navy-900 font-semibold">{row.score}</td>
                      <td className="px-4 py-3 text-gray-600">{row.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900">
              <p className="font-semibold mb-2">Important note on sample sizes</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Classification tasks: 76,800 pixel-level predictions</li>
                <li>Phenology regression: 76,800 pixel-level predictions</li>
                <li>Yield regression: 75 plot-level predictions (limited ground truth)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="analysis" className="px-4 py-20 bg-sage-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Detailed Task Analysis</h2>

            <div className="grid lg:grid-cols-2 gap-6">
              <article className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 text-lg mb-2">
                  Crop Type Classification: Generalizes Well
                </h3>
                <p className="text-sm text-gray-600 mb-4">Best configuration: Sentinel-1 + ConvLSTM</p>
                <dl className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div>
                    <dt className="text-gray-500">Accuracy</dt>
                    <dd className="font-semibold text-navy-900">94.01%</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">F1 (overall)</dt>
                    <dd className="font-semibold text-navy-900">48.46%*</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">F1 (Paddy)</dt>
                    <dd className="font-semibold text-navy-900">96.91%</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">IoU</dt>
                    <dd className="font-semibold text-navy-900">94.01%</dd>
                  </div>
                </dl>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>Binary crop classification transfers well across regions.</li>
                  <li>Sentinel-1 (SAR) proves robust to geographic domain shift.</li>
                  <li>ConvLSTM maintains strong zero-shot performance.</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  Why it works: paddy fields have distinct structural and moisture signatures
                  detectable by SAR, consistent across regions.
                </p>
              </article>

              <article className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 text-lg mb-2">
                  Sowing Date Prediction: Significant Degradation
                </h3>
                <p className="text-sm text-gray-600 mb-4">Best configuration: Sentinel-2 + UNet3D</p>
                <dl className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div>
                    <dt className="text-gray-500">MAE</dt>
                    <dd className="font-semibold text-navy-900">159.62 days</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">MAPE</dt>
                    <dd className="font-semibold text-navy-900">87.22%</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">RMSE</dt>
                    <dd className="font-semibold text-navy-900">162.38 days</dd>
                  </div>
                </dl>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>About 160-day error indicates poor zero-shot generalization.</li>
                  <li>Sowing depends on local climate and farmer decisions.</li>
                  <li>Tamil Nadu's calendar does not transfer to Andhra patterns.</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  Why it fails: sowing timing is driven by hyperlocal factors (monsoon onset,
                  irrigation access, market timing).
                </p>
              </article>

              <article className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 text-lg mb-2">
                  Transplanting Date Prediction: Fusion Shows Promise
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Best configuration: Multi-sensor fusion (S2+L8+S1) + ConvLSTM
                </p>
                <dl className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div>
                    <dt className="text-gray-500">MAE</dt>
                    <dd className="font-semibold text-navy-900">34.72 days</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">MAPE</dt>
                    <dd className="font-semibold text-navy-900">18.97%</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">RMSE</dt>
                    <dd className="font-semibold text-navy-900">41.64 days</dd>
                  </div>
                </dl>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>Moderate performance, better than other phenology tasks.</li>
                  <li>Fusion of optical, SAR, and thermal provides complementary signals.</li>
                  <li>Transplanting has clearer visual signatures (field flooding, canopy).</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  Key finding: this is the only regression task where fusion significantly outperforms
                  single-sensor baselines in zero-shot setting.
                </p>
              </article>

              <article className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 text-lg mb-2">
                  Harvesting Date Prediction: High Error Rates
                </h3>
                <p className="text-sm text-gray-600 mb-4">Best configuration: Sentinel-1 + ConvLSTM</p>
                <dl className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div>
                    <dt className="text-gray-500">MAE</dt>
                    <dd className="font-semibold text-navy-900">81.97 days</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">MAPE</dt>
                    <dd className="font-semibold text-navy-900">44.79%</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">RMSE</dt>
                    <dd className="font-semibold text-navy-900">144.06 days</dd>
                  </div>
                </dl>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>About 82-day error is too large for practical decision support.</li>
                  <li>Harvest timing depends on market conditions and labor availability.</li>
                  <li>Late-season predictions accumulate errors from earlier stages.</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  Why it is hard: harvest decisions involve socio-economic factors beyond remote
                  sensing observables.
                </p>
              </article>

              <article className="bg-white border border-gray-100 rounded-xl p-6 lg:col-span-2">
                <h3 className="font-semibold text-navy-900 text-lg mb-2">
                  Crop Yield Prediction: Remains an Open Challenge
                </h3>
                <p className="text-sm text-gray-600 mb-4">Best configuration: Landsat-8 + ConvLSTM</p>
                <dl className="grid sm:grid-cols-3 gap-2 text-sm mb-4">
                  <div>
                    <dt className="text-gray-500">MAPE</dt>
                    <dd className="font-semibold text-navy-900">89.13%</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">MAE</dt>
                    <dd className="font-semibold text-navy-900">5,133 kg/ha</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">RMSE</dt>
                    <dd className="font-semibold text-navy-900">5,251 kg/ha</dd>
                  </div>
                </dl>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>About 89% error indicates yield cannot be predicted from imagery alone.</li>
                  <li>Small sample size (n=75) limits statistical power.</li>
                  <li>Yield depends on soil quality, fertilizer, pests, and weather.</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  Critical insight: yield prediction requires integration of satellite data with
                  ground-based agronomic variables, weather forecasts, and farmer management records.
                </p>
              </article>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              * Low overall F1 reflects extreme class imbalance (12 paddy pixels vs. 76,788
              non-paddy pixels). Paddy-specific F1 of 96.91% is the meaningful metric.
            </p>
          </div>
        </section>

        <section id="comparison" className="px-4 py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Generalizes? What Does Not?
            </h2>

            <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-sage-100 text-gray-600 text-xs uppercase tracking-widest">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Task</th>
                    <th className="px-4 py-3 font-semibold">Generalization Status</th>
                    <th className="px-4 py-3 font-semibold">Key Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.task} className="border-t border-gray-100">
                      <td className="px-4 py-3 font-medium text-navy-900">{row.task}</td>
                      <td className="px-4 py-3 text-gray-600">{row.status}</td>
                      <td className="px-4 py-3 text-gray-600">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-sage-50 border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">What Transfers Well</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                  <li>Binary classification tasks with clear visual signatures.</li>
                  <li>SAR-based features (moisture, structure, texture).</li>
                  <li>Early-season phenological markers with strong spectral signals.</li>
                </ul>
              </div>
              <div className="bg-sage-50 border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">What Does Not Transfer</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                  <li>Regression tasks dependent on local decision-making.</li>
                  <li>Late-season predictions that accumulate temporal errors.</li>
                  <li>Yield estimation requiring unobserved agronomic variables.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white border border-gray-100 rounded-xl p-6">
              <p className="text-gray-700 font-medium">
                Fusion advantage: multi-sensor fusion (S2+L8+S1) with ConvLSTM shows the most
                consistent zero-shot performance, particularly for transplanting prediction.
              </p>
            </div>
          </div>
        </section>

        <section id="recommendations" className="px-4 py-20 bg-sage-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Which Model Should You Use?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {recommendationBlocks.map((block) => (
                <div key={block.title} className="bg-white border border-gray-100 rounded-xl p-6">
                  <h3 className="font-semibold text-navy-900 mb-3">{block.title}</h3>
                  <pre className="text-xs text-gray-700 whitespace-pre-line font-mono bg-sage-50 p-4 rounded-lg border border-gray-100">
                    {block.body}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="limitations" className="px-4 py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Understanding the Boundaries
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-sage-50 border border-gray-100 rounded-xl p-6 space-y-5">
                <h3 className="font-semibold text-navy-900">Data Limitations</h3>
                <div>
                  <h4 className="font-semibold text-navy-900 text-sm">Sentinel-2 Band Availability</h4>
                  <p className="text-gray-600 text-sm">
                    Some atmospheric correction bands (AOT, WVP, SCL) required workarounds. Cloud
                    masking reduced usable observations during monsoon. Mitigation: fallback to
                    Sentinel-1 SAR for all-weather coverage.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 text-sm">Landsat-8 Band Ambiguity</h4>
                  <p className="text-gray-600 text-sm">
                    Multiple processing levels yield similar outputs; selection required expert
                    judgment. Thermal bands were not consistently available. Mitigation: prioritize
                    surface reflectance products with documented provenance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 text-sm">Annotation Challenges</h4>
                  <p className="text-gray-600 text-sm">
                    Plot area mismatches and ambiguous coordinates required 50-60m search. Mitigation:
                    focus on location accuracy over area precision and use one-to-one mapping.
                  </p>
                </div>
              </div>

              <div className="bg-sage-50 border border-gray-100 rounded-xl p-6 space-y-5">
                <h3 className="font-semibold text-navy-900">Methodological Limitations</h3>
                <div>
                  <h4 className="font-semibold text-navy-900 text-sm">Zero-Shot Protocol</h4>
                  <p className="text-gray-600 text-sm">
                    No fine-tuning or domain adaptation applied. This tests upper bound transferability,
                    not practical deployment. Mitigation: future work will explore few-shot adaptation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 text-sm">Temporal Window Selection</h4>
                  <p className="text-gray-600 text-sm">
                    Used standard Rabi season (Aug-Dec) rather than plot-specific growing periods.
                    Mitigation: future pipeline will infer plot-specific seasons from phenology signals.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 text-sm">Yield Prediction Methodology</h4>
                  <p className="text-gray-600 text-sm">
                    Per-pixel yield assignment from irregular polygons introduces edge effects and
                    about 7% error from polygon-to-grid conversion. Mitigation: higher-resolution masks
                    and probabilistic yield modeling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contributions" className="px-4 py-20 bg-sage-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              What SICKLE++ Adds to Agricultural AI
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">First Cross-Region Benchmark</h3>
                <p className="text-gray-600 text-sm">
                  Quantified zero-shot generalization performance across 5 tasks, 3 sensors, and 3
                  model architectures.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">Task-Specific Generalization Insights</h3>
                <p className="text-gray-600 text-sm">
                  Identified which agricultural tasks transfer well (crop type) versus poorly (yield).
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">Fusion Model Validation</h3>
                <p className="text-gray-600 text-sm">
                  Demonstrated that multi-sensor fusion with ConvLSTM provides the most robust zero-shot
                  performance, especially for phenology.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">Production-Ready Pipeline</h3>
                <p className="text-gray-600 text-sm">
                  Delivered automated data retrieval, preprocessing, and evaluation scripts that scale
                  from district to state-level coverage.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6 md:col-span-2">
                <h3 className="font-semibold text-navy-900 mb-2">Open Benchmark Dataset</h3>
                <p className="text-gray-600 text-sm">
                  Released 730 annotated plots from Andhra Pradesh with multi-sensor time series,
                  enabling reproducible research on geographic generalization.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="future" className="px-4 py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Roadmap: Improving Generalization
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-brand-green pl-5">
                <h3 className="font-semibold text-navy-900">Priority 1: Few-Shot Domain Adaptation</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>Fine-tune Tamil Nadu models with 10-50 labeled Andhra plots.</li>
                  <li>Measure performance gains vs. annotation cost.</li>
                  <li>Target: reduce phenology MAE by 50% with minimal labels.</li>
                </ul>
              </div>
              <div className="border-l-4 border-brand-green pl-5">
                <h3 className="font-semibold text-navy-900">Priority 2: Multi-Region Training</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>Jointly train on Tamil Nadu, Andhra Pradesh, and additional states.</li>
                  <li>Learn region-invariant features for better zero-shot transfer.</li>
                  <li>Target: 10+ regions, 10,000+ plots by 2027.</li>
                </ul>
              </div>
              <div className="border-l-4 border-brand-green pl-5">
                <h3 className="font-semibold text-navy-900">Priority 3: Yield Prediction Breakthrough</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>Integrate satellite data with weather, soil, and management variables.</li>
                  <li>Explore process-based crop model + deep learning hybrids.</li>
                  <li>Target: reduce yield MAPE from 89% to under 40%.</li>
                </ul>
              </div>
              <div className="border-l-4 border-brand-green pl-5">
                <h3 className="font-semibold text-navy-900">Priority 4: Automated Annotation</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>Weak supervision and active learning to reduce manual labeling.</li>
                  <li>Leverage high-resolution imagery for automatic plot detection.</li>
                  <li>Target: 80% reduction in annotation time.</li>
                </ul>
              </div>
              <div className="border-l-4 border-brand-green pl-5">
                <h3 className="font-semibold text-navy-900">Priority 5: Real-Time Inference API</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                  <li>Deploy trained models as scalable prediction services.</li>
                  <li>Support batch processing for district-scale analysis.</li>
                  <li>Target: sub-hour latency for state-wide inference.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="conclusions" className="px-4 py-20 bg-sage-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Key Takeaways</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">What Works</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                  <li>Binary crop classification generalizes well across rice-growing regions.</li>
                  <li>Sentinel-1 provides robust, weather-invariant features.</li>
                  <li>ConvLSTM handles temporal dependencies effectively.</li>
                  <li>Multi-sensor fusion improves phenology prediction in zero-shot settings.</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">What Needs Work</h3>
                <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                  <li>Regression tasks degrade without region-specific adaptation.</li>
                  <li>Yield prediction remains unsolved with satellite data alone.</li>
                  <li>Late-season predictions accumulate errors from earlier stages.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white border border-gray-100 rounded-xl p-6">
              <h3 className="font-semibold text-navy-900 mb-3">Practical Recommendations</h3>
              <ol className="list-decimal ml-5 text-gray-600 text-sm space-y-2">
                <li>For crop mapping: deploy Sentinel-1 + ConvLSTM zero-shot with confidence.</li>
                <li>For phenology tracking: use fusion models, but expect 30-80 day errors.</li>
                <li>For yield estimation: do not rely on zero-shot satellite models alone.</li>
                <li>For new regions: start with few-shot fine-tuning using 10-50 labeled plots.</li>
              </ol>
            </div>

            <blockquote className="mt-8 border-l-4 border-brand-green pl-5 text-gray-700 italic text-lg">
              "SICKLE++ demonstrates that agricultural AI systems must be evaluated holistically
              across tasks, sensors, and geographies. While some capabilities transfer well, others
              require region-specific adaptation. The path forward is not universal models, but
              adaptive systems that learn continuously from new data."
            </blockquote>
          </div>
        </section>

        <section id="pipeline" className="px-4 py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-brand-green text-xs font-semibold tracking-widest uppercase">
                Pipeline
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
                SICKLE++ Pipeline Overview
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                The SICKLE++ system transforms raw satellite data into task-ready benchmarks through
                automated ingestion, preprocessing, and evaluation. This end-to-end pipeline is built
                for multi-sensor fusion and scalable regional expansion.
              </p>
              <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2 mt-5">
                <li>Automated data retrieval across Sentinel-1, Sentinel-2, and Landsat-8.</li>
                <li>Mask generation and grid alignment for consistent plot-level samples.</li>
                <li>Multi-task model inference for classification, phenology, and yield.</li>
                <li>Standardized evaluation with reproducible metrics and summaries.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <span className="bg-sage-50 border border-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  Data Ingestion
                </span>
                <span className="bg-sage-50 border border-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  Preprocessing
                </span>
                <span className="bg-sage-50 border border-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  Masking
                </span>
                <span className="bg-sage-50 border border-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  Modeling
                </span>
                <span className="bg-sage-50 border border-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  Evaluation
                </span>
              </div>
            </div>

            <figure className="bg-sage-50 border border-gray-100 rounded-2xl p-4 shadow-sm">
              <img
                src="/pipeline.png"
                alt="SICKLE++ pipeline and system overview"
                className="w-full rounded-xl border border-gray-200"
              />
              <figcaption className="text-xs text-gray-500 mt-3">
                Pipeline and system overview for multi-sensor agricultural benchmarking.
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="appendix" className="px-4 py-20 bg-sage-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Full Results: All Models, All Sensors, All Tasks
            </h2>
            <p className="text-gray-600 mb-8">
              For researchers requiring complete benchmark data.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Crop Type Classification (All Configurations)</h3>
                <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
                  <table className="min-w-[900px] w-full text-left text-xs sm:text-sm">
                    <thead className="bg-sage-100 text-gray-600 text-xs uppercase tracking-widest">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Sensor</th>
                        <th className="px-4 py-3 font-semibold">Model</th>
                        <th className="px-4 py-3 font-semibold">Accuracy</th>
                        <th className="px-4 py-3 font-semibold">F1 (Overall)</th>
                        <th className="px-4 py-3 font-semibold">F1 (Paddy)</th>
                        <th className="px-4 py-3 font-semibold">IoU</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appendixCropRows.map((row, index) => (
                        <tr key={`${row.sensor}-${row.model}-${index}`} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-medium text-navy-900">{row.sensor}</td>
                          <td className="px-4 py-3 text-gray-600">{row.model}</td>
                          <td className="px-4 py-3 text-gray-600">{row.accuracy}</td>
                          <td className="px-4 py-3 text-gray-600">{row.f1Overall}</td>
                          <td className="px-4 py-3 text-gray-600">{row.f1Paddy}</td>
                          <td className="px-4 py-3 text-gray-600">{row.iou}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Phenology Regression (Best Configuration per Task)</h3>
                <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
                  <table className="min-w-[720px] w-full text-left text-xs sm:text-sm">
                    <thead className="bg-sage-100 text-gray-600 text-xs uppercase tracking-widest">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Task</th>
                        <th className="px-4 py-3 font-semibold">Sensor</th>
                        <th className="px-4 py-3 font-semibold">Model</th>
                        <th className="px-4 py-3 font-semibold">RMSE (days)</th>
                        <th className="px-4 py-3 font-semibold">MAE (days)</th>
                        <th className="px-4 py-3 font-semibold">MAPE (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appendixPhenologyRows.map((row) => (
                        <tr key={row.task} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-medium text-navy-900">{row.task}</td>
                          <td className="px-4 py-3 text-gray-600">{row.sensor}</td>
                          <td className="px-4 py-3 text-gray-600">{row.model}</td>
                          <td className="px-4 py-3 text-gray-600">{row.rmse}</td>
                          <td className="px-4 py-3 text-gray-600">{row.mae}</td>
                          <td className="px-4 py-3 text-gray-600">{row.mape}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-navy-900 mb-3">
                  Crop Yield Regression (All Configurations, n=75 plots)
                </h3>
                <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
                  <table className="min-w-[720px] w-full text-left text-xs sm:text-sm">
                    <thead className="bg-sage-100 text-gray-600 text-xs uppercase tracking-widest">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Sensor</th>
                        <th className="px-4 py-3 font-semibold">Model</th>
                        <th className="px-4 py-3 font-semibold">RMSE (kg/ha)</th>
                        <th className="px-4 py-3 font-semibold">MAE (kg/ha)</th>
                        <th className="px-4 py-3 font-semibold">MAPE (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appendixYieldRows.map((row, index) => (
                        <tr key={`${row.sensor}-${row.model}-${index}`} className="border-t border-gray-100">
                          <td className="px-4 py-3 font-medium text-navy-900">{row.sensor}</td>
                          <td className="px-4 py-3 text-gray-600">{row.model}</td>
                          <td className="px-4 py-3 text-gray-600">{row.rmse}</td>
                          <td className="px-4 py-3 text-gray-600">{row.mae}</td>
                          <td className="px-4 py-3 text-gray-600">{row.mape}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Note: yield metrics computed on plot-level aggregates (n=75), while other tasks use
                  pixel-level predictions (n=76,800).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
