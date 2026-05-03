export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300 px-4 pt-10 pb-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 border-b border-white/10 pb-8">
        <div>
          <h4 className="font-heading font-bold text-brand-green mb-2">SICKLE++</h4>
          <p className="text-sm">A Unified Multi-Task Evaluation Framework for Multi-Sensor Agricultural Remote Sensing</p>
          <p className="text-xs mt-2 text-gray-400">Built on SICKLE (WACV 2024) · Extending to Real-World Deployment</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Quick Links</h5>
          <ul className="text-sm space-y-1">
            <li><a href="#dataset" className="hover:text-white">Register for Dataset</a></li>
            <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub Repository</a></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">API Reference</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Legal</h5>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">Data Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">License</a></li>
            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-5 text-xs text-gray-400 flex flex-col md:flex-row justify-between gap-2">
        <p>© 2026 SICKLE++ Project. All rights reserved. Last updated: May 2026.</p>
        <p>If you use SICKLE/SICKLE++, please cite the WACV 2024 paper.</p>
      </div>
    </footer>
  );
}
