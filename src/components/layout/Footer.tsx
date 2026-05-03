import { Github, BookOpen, Mail } from "lucide-react";

const PDF_URL =
  "https://ssh.iiitd.ac.in/old1/gallery/SSSEWINTER25/SSSE_Winter%202025_SICKLE.pdf";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-heading font-bold text-brand-green text-base">SICKLE+</span>
          <p className="text-xs">© 2025 SICKLE++ Project · IIIT Delhi</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs hover:text-gray-200 transition-colors"
            aria-label="GitHub"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs hover:text-gray-200 transition-colors"
            aria-label="Paper"
          >
            <BookOpen size={14} />
            Paper
          </a>
          <a
            href="mailto:contact@iiitd.ac.in"
            className="flex items-center gap-1.5 text-xs hover:text-gray-200 transition-colors"
            aria-label="Contact"
          >
            <Mail size={14} />
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
