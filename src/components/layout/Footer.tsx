export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-heading font-bold text-brand-green text-base">SICKLE++ © 2026</span>
        <div className="flex items-center gap-6 text-xs">
          <a href="#" className="hover:text-gray-200">Terms</a>
          <a href="https://openaccess.thecvf.com/content/WACV2024/html/Sani_SICKLE_A_Multi-Sensor_Satellite_Imagery_Dataset_Annotated_With_Multiple_Key_WACV_2024_paper.html" target="_blank" rel="noreferrer" className="hover:text-gray-200">Citation</a>
          <a href="#" className="hover:text-gray-200">API Docs</a>
        </div>
      </div>
    </footer>
  );
}
