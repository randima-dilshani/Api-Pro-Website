import { useState, useEffect, useRef } from "react"
import { Button } from "../ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Send,
  CheckCircle,
  ExternalLink,
} from "lucide-react"

export default function FooterModern() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubscribing, setIsSubscribing] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (footerRef.current) {
      observer.observe(footerRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubscribing(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubscribed(true)
    setIsSubscribing(false)

    setTimeout(() => {
      setIsSubscribed(false)
      setEmail("")
    }, 3000)
  }

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricingsection" },
    { name: "API Docs", href: "/apidoc", icon: ExternalLink },
    { name: "Contact", href: "/contactus" },
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-300" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-500" },
  ]

  const contactInfo = [
    { icon: Mail, text: "hello@apipro.com", href: "mailto:hello@apipro.com" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "San Francisco, CA", href: "#" },
  ]

  return (
    <footer
      ref={footerRef}
      className="relative bg-gray-950 border-t border-gray-800 overflow-hidden select-none"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gradient blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-full blur-3xl animate-blob-slow-1" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-bl from-cyan-500/8 via-purple-500/8 to-blue-500/8 rounded-full blur-3xl animate-blob-slow-2" />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-float-slow-1" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-float-slow-2" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400/30 rounded-full animate-float-slow-3" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content - 4 Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 1. Navigation Section */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6 relative group cursor-default">
              Navigation
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </h3>
            <ul className="space-y-4">
              {navigationLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400/0 group-hover:bg-blue-400/60 transition-all duration-300 mr-3" />
                      <span className="relative">
                        {link.name}
                        <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
                      </span>
                      {Icon && (
                        <Icon className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* 2. Contact Us Section */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6 relative group cursor-default">
              Contact Us
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
            </h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mr-4 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{contact.text}</span>
                  </a>
                )
              })}
            </div>
          </div>

       {/* 3. Follow Us Section */}
<div
  className={`transform transition-all duration-1000 delay-400 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <h3 className="text-xl font-bold text-white mb-6 relative group cursor-default">
    Follow Us
    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
  </h3>
  <div className="flex space-x-6">
    {socialLinks.map((social, index) => {
      const Icon = social.icon
      return (
        <a
          key={index}
          href={social.href}
          className={`group relative w-10 h-10 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-white hover:scale-110 ${social.color}`}
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="w-5 h-5" />
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
        </a>
      )
    })}
  </div>
</div>

          {/* 4. Stay Updated Section */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6 relative group cursor-default">
              Stay Updated
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
            </h3>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl border border-blue-300/20">
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Get the latest API insights and product updates delivered to your inbox.
              </p>

              {isSubscribed ? (
                <div className="flex items-center text-green-400 animate-bounce">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium text-sm">Successfully subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubscribing}
                    className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg hover:shadow-blue-500/25"
                  >
                    {isSubscribing ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Subscribing...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        Subscribe
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div
          className={`border-t border-gray-800 pt-8 text-center transform transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-gray-400 text-sm select-text">
            <p>
              © 2025{" "}
              <span className="text-white font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                API PRO
              </span>
              . All rights reserved.
              <span className="ml-2">Built with ❤️ for developers worldwide.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes blob-slow-1 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(20px, -30px) scale(1.05) rotate(120deg);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95) rotate(240deg);
          }
        }
        @keyframes blob-slow-2 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(-25px, 35px) scale(0.9) rotate(-120deg);
          }
          66% {
            transform: translate(15px, -15px) scale(1.1) rotate(-240deg);
          }
        }
        @keyframes float-slow-1 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.7;
          }
        }
        @keyframes float-slow-2 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-12px) rotate(-180deg);
            opacity: 0.8;
          }
        }
        @keyframes float-slow-3 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-18px) rotate(90deg);
            opacity: 0.6;
          }
        }
        .animate-blob-slow-1 {
          animation: blob-slow-1 30s ease-in-out infinite;
        }
        .animate-blob-slow-2 {
          animation: blob-slow-2 35s ease-in-out infinite;
        }
        .animate-float-slow-1 {
          animation: float-slow-1 8s ease-in-out infinite;
        }
        .animate-float-slow-2 {
          animation: float-slow-2 10s ease-in-out infinite;
        }
        .animate-float-slow-3 {
          animation: float-slow-3 9s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}
