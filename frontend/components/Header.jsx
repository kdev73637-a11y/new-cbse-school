import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/admissions", label: "Admissions" },
  { href: "/academics", label: "Academics" },
  { href: "/mandatory-disclosure", label: "Disclosure" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/faculty", label: "Faculty" },
  { href: "/results", label: "Results" },
  { href: "/student-life", label: "Student Life" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"}`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 animate-fade-in-down">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +91 XXXXXXXXXX
            </span>
            <span className="hidden md:flex items-center gap-1.5 animate-fade-in-down stagger-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              info@school.com
            </span>
          </div>
          <Link href="/admissions" className="btn-shine bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-5 py-1.5 rounded-full font-semibold text-sm transition shadow-lg shadow-amber-500/30">
            Apply Now
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3.5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-105">
            S
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-700 transition-colors">CBSE School</h1>
            <p className="text-xs text-gray-500 tracking-wide">Excellence in Education</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-lg transition-colors duration-200 group">
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
            <span className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`lg:hidden border-t bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="px-4 py-3 space-y-1">
          {navLinks.map((link, i) => (
            <li key={link.href} className={`animate-fade-in-up stagger-${Math.min(i + 1, 6)}`}>
              <Link href={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all font-medium">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
