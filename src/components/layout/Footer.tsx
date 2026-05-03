import { Github, BookOpen, Mail, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-heading font-bold text-brand-green text-base">SICKLE++</span>
          <p className="text-xs">© 2026 SICKLE++ · Research to Platform</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://openaccess.thecvf.com/content/WACV2024/html/Sani_SICKLE_A_Multi-Sensor_Satellite_Imagery_Dataset_Annotated_With_Multiple_Key_WACV_2024_paper.html" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs hover:text-gray-200"><BookOpen size={14}/>Paper</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs hover:text-gray-200"><Github size={14}/>GitHub</a>
          <a href="mailto:contact@iiitd.ac.in" className="flex items-center gap-1.5 text-xs hover:text-gray-200"><Mail size={14}/>Contact</a>
          <span className="flex items-center gap-1.5 text-xs"><Users size={14}/>Authors</span>
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
