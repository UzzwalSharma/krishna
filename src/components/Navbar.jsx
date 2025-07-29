import { useState, useEffect } from "react";
import { Mail, Phone, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

// --- Top Banner Component ---
export function TopBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white text-xs sm:text-sm py-2 px-2 sm:px-4 flex flex-col sm:flex-row items-center justify-between gap-2 z-40 relative">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <span className="flex items-center gap-1 font-semibold">
          <Mail size={16} className="text-white" /> info@academicaedu.com
        </span>
        <span className="hidden sm:inline-block border-l border-white h-4 mx-2 opacity-40" />
        <span className="flex items-center gap-1 font-semibold">
          <Phone size={16} className="text-white" /> +91 9876543210
        </span>
      </div>
      <div className="flex gap-2">
        {[Facebook, Youtube, Linkedin, Instagram].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="bg-white/90 hover:bg-white text-blue-600 hover:text-green-600 p-1.5 rounded-full transition"
            aria-label="Social Link"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  );
}

// --- Navbar Component ---
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Sticky effect: header overlaps banner on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper for react-scroll
  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
    activeClass: "text-green-700"
  };

  return (
    <>
      <TopBanner />
      <nav
        className={`bg-white shadow-md w-full z-50 transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0"
            : "relative"
        }`}
        style={isSticky ? {} : { top: 0 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Academica Logo" className="h-10 w-auto rounded shadow" />
            <span className="text-green-600 font-extrabold text-xl tracking-wide">ACADEMICA</span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-base font-semibold text-gray-700 items-center">
            <li>
              <ScrollLink to="home" {...scrollProps} className="cursor-pointer text-green-600 hover:text-green-700 transition">
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" {...scrollProps} className="cursor-pointer hover:text-green-600 transition">
                About Us
              </ScrollLink>
            </li>
            <li className="group relative cursor-pointer flex items-center">
              <span className="hover:text-green-600 transition flex items-center gap-1">
                Course
                <svg className="w-4 h-4 text-green-600 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-2 mt-2 text-sm rounded min-w-[120px]">
                <ScrollLink to="ca" {...scrollProps} className="hover:bg-green-50 px-3 py-1 rounded transition block cursor-pointer">
                  CA
                </ScrollLink>
                <ScrollLink to="cuet" {...scrollProps} className="hover:bg-green-50 px-3 py-1 rounded transition block cursor-pointer">
                  CUET
                </ScrollLink>
              </div>
            </li>
            <li>
              <ScrollLink to="test-series" {...scrollProps} className="cursor-pointer hover:text-green-600 transition">
                Test Series
              </ScrollLink>
            </li>
            <li className="group relative cursor-pointer flex items-center">
              <span className="hover:text-green-600 transition flex items-center gap-1">
                Books
                <svg className="w-4 h-4 text-green-600 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-2 mt-2 text-sm rounded min-w-[120px]">
                <ScrollLink to="accounting" {...scrollProps} className="hover:bg-green-50 px-3 py-1 rounded transition block cursor-pointer">
                  Accounting
                </ScrollLink>
                <ScrollLink to="eco" {...scrollProps} className="hover:bg-green-50 px-3 py-1 rounded transition block cursor-pointer">
                  Eco
                </ScrollLink>
              </div>
            </li>
            <li>
              <ScrollLink to="blogs" {...scrollProps} className="cursor-pointer hover:text-green-600 transition">
                Blogs and Updates
              </ScrollLink>
            </li>
            <li className="group relative cursor-pointer flex items-center">
              <span className="hover:text-green-600 transition flex items-center gap-1">
                Gallery
                <svg className="w-4 h-4 text-green-600 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-2 mt-2 text-sm rounded min-w-[120px]">
                <ScrollLink to="photos" {...scrollProps} className="hover:bg-green-50 px-3 py-1 rounded transition block cursor-pointer">
                  Photos
                </ScrollLink>
                <ScrollLink to="events" {...scrollProps} className="hover:bg-green-50 px-3 py-1 rounded transition block cursor-pointer">
                  Events
                </ScrollLink>
              </div>
            </li>
            <li>
              <ScrollLink to="contact" {...scrollProps} className="cursor-pointer hover:text-green-600 transition">
                Contact
              </ScrollLink>
            </li>
          </ul>

          {/* Enquiry Button */}
          <ScrollLink to="contact" {...scrollProps} className="hidden md:inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-lg text-base font-semibold shadow hover:from-green-600 hover:to-green-700 transition cursor-pointer">
            Get Enquiry
          </ScrollLink>

          {/* Hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded hover:bg-green-50 transition"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open Menu"
          >
            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/40 z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Mobile Drawer */}
        <div
          className={`md:hidden fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div className="flex items-center gap-2">
                <img src="/logo.jpg" alt="Academica Logo" className="h-8 w-auto rounded" />
                <span className="text-green-600 font-extrabold text-lg">ACADEMICA</span>
              </div>
              <button
                className="p-2 rounded hover:bg-green-50 transition"
                onClick={() => setMobileOpen(false)}
                aria-label="Close Menu"
              >
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex-1 flex flex-col gap-2 px-6 py-6 text-base font-semibold text-gray-700">
              <li className="py-2 border-b border-gray-100 text-green-600">
                <ScrollLink to="home" {...scrollProps} className="block w-full cursor-pointer">
                  Home
                </ScrollLink>
              </li>
              <li className="py-2 border-b border-gray-100">
                <ScrollLink to="about" {...scrollProps} className="block w-full cursor-pointer">
                  About Us
                </ScrollLink>
              </li>
              <li className="py-2 border-b border-gray-100">
                <details>
                  <summary className="cursor-pointer outline-none flex items-center gap-1">
                    Course
                    <svg className="w-4 h-4 text-green-600 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="pl-4 mt-1 space-y-1">
                    <ScrollLink to="ca" {...scrollProps} className="hover:text-green-600 transition block cursor-pointer">
                      CA
                    </ScrollLink>
                    <ScrollLink to="cuet" {...scrollProps} className="hover:text-green-600 transition block cursor-pointer">
                      CUET
                    </ScrollLink>
                  </div>
                </details>
              </li>
              <li className="py-2 border-b border-gray-100">
                <ScrollLink to="test-series" {...scrollProps} className="block w-full cursor-pointer">
                  Test Series
                </ScrollLink>
              </li>
              <li className="py-2 border-b border-gray-100">
                <details>
                  <summary className="cursor-pointer outline-none flex items-center gap-1">
                    Books
                    <svg className="w-4 h-4 text-green-600 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="pl-4 mt-1 space-y-1">
                    <ScrollLink to="accounting" {...scrollProps} className="hover:text-green-600 transition block cursor-pointer">
                      Accounting
                    </ScrollLink>
                    <ScrollLink to="eco" {...scrollProps} className="hover:text-green-600 transition block cursor-pointer">
                      Eco
                    </ScrollLink>
                  </div>
                </details>
              </li>
              <li className="py-2 border-b border-gray-100">
                <ScrollLink to="blogs" {...scrollProps} className="block w-full cursor-pointer">
                  Blogs and Updates
                </ScrollLink>
              </li>
              <li className="py-2 border-b border-gray-100">
                <details>
                  <summary className="cursor-pointer outline-none flex items-center gap-1">
                    Gallery
                    <svg className="w-4 h-4 text-green-600 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="pl-4 mt-1 space-y-1">
                    <ScrollLink to="photos" {...scrollProps} className="hover:text-green-600 transition block cursor-pointer">
                      Photos
                    </ScrollLink>
                    <ScrollLink to="events" {...scrollProps} className="hover:text-green-600 transition block cursor-pointer">
                      Events
                    </ScrollLink>
                  </div>
                </details>
              </li>
              <li className="py-2 border-b border-gray-100">
                <ScrollLink to="contact" {...scrollProps} className="block w-full cursor-pointer">
                  Contact
                </ScrollLink>
              </li>
            </ul>
            <div className="px-6 pb-6">
              <ScrollLink to="contact" {...scrollProps} className="w-full block bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-lg text-base font-semibold shadow hover:from-green-600 hover:to-green-700 transition cursor-pointer text-center">
                Get Enquiry
              </ScrollLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
