import { useState, useEffect } from "react";
import { Code, ExternalLink, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "#pricing" },
    { name: "API Docs", href: "#docs", icon: Code },
    { name: "Contact", href: "#contact", icon: ExternalLink },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      {/* New fixed div with backdrop blur and styling */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-lg">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 h-[100px] max-w-[120rem] mx-auto">
          {/* Logo - stays on the left */}
          <div className="relative group flex items-center space-x-3 cursor-pointer">
            {/* Logo Image */}
            <img
              src="/logo.png"
              alt="API PRO Logo"
              className="w-10 h-10 object-contain"
            />
            {/* Logo Text */}
            <h1 className="text-2xl font-black text-white tracking-wide transition-all duration-300 group-hover:scale-105">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                API PRO
              </span>
            </h1>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group relative px-5 py-2 text-white font-medium transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {item.name}
                  {item.icon && <item.icon className="w-4 h-4" />}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button - right */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-[100px] p-4 bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl animate-fade-in max-w-[120rem] mx-auto px-6 md:px-12">
          <nav className="flex flex-col items-center space-y-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 font-medium rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.name}</span>
                {item.icon && <item.icon className="w-4 h-4" />}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
