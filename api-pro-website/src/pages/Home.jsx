import { Button } from "../ui/button";
import Navbar from "../pages/Navbar";
import Footer from "../pages/footer";
import Features from "../pages/Features";
import SocialProof from "../pages/Socialproof";
import { ArrowRight, Code, Zap, Shield, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "About", href: "#about", icon: null },
    { name: "Pricing", href: "#pricing", icon: null },
    { name: "API Docs", href: "#docs", icon: ExternalLink },
    { name: "Contact Us", href: "#contact", icon: null },
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Enhanced Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-24">
        {/* Background Image Layer */}
        <img
          src="/t.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm z-0"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent z-10" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] z-10" />

        {/* Code symbols */}
        <div className="absolute top-20 left-20 text-blue-400/20 text-2xl font-mono animate-pulse z-20">
          {"{ }"}
        </div>
        <div className="absolute top-40 right-32 text-purple-400/20 text-xl font-mono animate-bounce z-20">
          {"< />"}
        </div>
        <div className="absolute bottom-32 left-40 text-cyan-400/20 text-lg font-mono animate-ping z-20">
          API
        </div>

        {/* Main content with animation */}
        <div
          className={`relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 animate-fade-in-up"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated badge */}
          <div className="inline-flex items-center px-6 py-3 mt-8 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl border border-gray-700/50 text-gray-100 text-sm font-medium mb-8 shadow-2xl group hover:scale-105 transition-all duration-300 animate-pulse">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
            <Code
              className="w-4 h-4 mr-2 text-blue-400 animate-spin"
              style={{ animationDuration: "2s" }}
            />
            <span className="relative">The Future of API Management</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Effortless API Management.{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Results.
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl -z-10" />
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            API PRO is the all-in-one platform designed to take your APIs from
            development to production with{" "}
            <span className="text-gray-100 font-medium">
              unparalleled speed, security, and AI-driven insights.
            </span>
          </p>

          {/* CTA Button */}
          <div className="mb-16">
          <Button
  size="lg"
  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-0"
>
  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
  <span className="relative flex items-center">
    Get Started for Free
    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
  </span>
</Button>

          </div>

          {/* Stats */}
   
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-24">
  <div className="flex flex-col items-center p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-gray-700/50 hover:bg-black/60 hover:border-gray-600/50 transition-all duration-300">
    <Zap className="w-8 h-8 text-yellow-400 mb-2" />
    <div className="text-2xl font-bold text-gray-100">10x</div>
    <div className="text-gray-400 text-sm">Faster Deployment</div>
  </div>
  <div className="flex flex-col items-center p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-gray-700/50 hover:bg-black/60 hover:border-gray-600/50 transition-all duration-300">
    <Shield className="w-8 h-8 text-green-400 mb-2" />
    <div className="text-2xl font-bold text-gray-100">99.9%</div>
    <div className="text-gray-400 text-sm">Uptime SLA</div>
  </div>
  <div className="flex flex-col items-center p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-gray-700/50 hover:bg-black/60 hover:border-gray-600/50 transition-all duration-300">
    <Code className="w-8 h-8 text-blue-400 mb-2" />
    <div className="text-2xl font-bold text-gray-100">50%</div>
    <div className="text-gray-400 text-sm">Less Dev Time</div>
  </div>
</div>
        </div>
      </section>

      {/* 👇 Features Component Section 👇 */}
      <Features />
       <SocialProof />
       <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}
