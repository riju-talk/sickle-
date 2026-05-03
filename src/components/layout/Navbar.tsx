import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Presentation", href: "#presentation" },
  { label: "SICKLE", href: "#dataset" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Overview");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-md shadow-lg"
          : "bg-navy-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="#"
            className="font-heading font-bold text-lg text-brand-green tracking-wide hover:text-brand-greenLight transition-colors"
          >
            SICKLE+
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.label, link.href)}
                className={`text-xs font-semibold tracking-widest uppercase transition-colors pb-0.5 ${
                  activeLink === link.label
                    ? "text-brand-green border-b-2 border-brand-green"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <button
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-200 transition-colors rounded-full hover:bg-white/10 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <button
              className="hidden md:flex w-8 h-8 items-center justify-center text-gray-400 hover:text-gray-200 transition-colors rounded-full hover:bg-white/10"
              aria-label="Menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-3 space-y-1">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.label, link.href)}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeLink === link.label
                    ? "text-brand-green bg-brand-green/10"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
