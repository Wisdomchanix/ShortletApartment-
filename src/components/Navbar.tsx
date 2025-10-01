// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // detect active section
      const sections = ["home", "apartments", "about", "contact"];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    closeMenu();
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 cursor-pointer ${
        scrolled
          ? "backdrop-blur-lg bg-white/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className={`text-base font-bold tracking-wide transition-colors ${
              scrolled ? "text-amber-400" : "text-white"
            }`}
          >
            Shortlets
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12 cursor-pointer">
            {["home", "apartments", "about", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`uppercase tracking-wide text-base cursor-pointer ${
                  activeSection === id
                    ? "text-amber-400 font-semibold"
                    : "text-gray-400 hover:text-amber-400 font-semibold"
                } transition-colors`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden cursor-pointer">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                scrolled ? "text-amber-400" : "text-white"
              }`}
            >
              {isOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 max-w-sm bg-white text-black shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-base font-bold text-amber-400">Shortlets</span>
          <button
            onClick={closeMenu}
            className="text-black hover:text-amber-400"
          >
            <X size={25} />
          </button>
        </div>

        <div className="flex flex-col items-start px-6 py-8 space-y-12">
          {["home", "apartments", "about", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`uppercase tracking-wider text-base cursor-pointer ${
                activeSection === id
                  ? "text-amber-400 font-semibold"
                  : "text-gray-500 hover:text-amber-400"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
