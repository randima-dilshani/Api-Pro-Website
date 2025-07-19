import { useState, useEffect, useRef } from "react"
import { Button } from "../ui/button"
import Navbar from "../pages/Navbar";
import Footer from "../pages/footer";
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactUsModern() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [focusedField, setFocusedField] = useState(null);
const [errors, setErrors] = useState({});
const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 2000));

  setIsSubmitted(true);
  setIsSubmitting(false);

  // Reset form after 4 seconds
  setTimeout(() => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      workEmail: "",
      companyName: "",
      message: "",
    });
  }, 4000);
}

  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Office",
      text: "123 Tech Avenue, Innovation City, Connectiville 45678",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0ms",
    },
    {
      icon: Mail,
      title: "Email Us",
      text: "hello@apipro.com",
      gradient: "from-purple-500 to-pink-500",
      delay: "200ms",
    },
    {
      icon: Phone,
      title: "Call Us",
      text: "+1 (555) 123-4567",
      gradient: "from-green-500 to-emerald-500",
      delay: "400ms",
    },
  ]

  return (
      <>
          <Navbar />
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-gradient-to-tr from-blue-500/20 via-purple-500/15 to-pink-500/20 rounded-full blur-3xl animate-blob-1" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-gradient-to-bl from-cyan-500/15 via-purple-500/15 to-blue-500/15 rounded-full blur-3xl animate-blob-2" />

        {/* Secondary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 animate-gradient-shift" />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-float-1" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-float-2" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400/40 rounded-full animate-float-3" />
        <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-cyan-400/40 rounded-full animate-float-4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated Badge */}
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-2xl border border-blue-300/30 text-white text-sm font-medium mb-8 shadow-2xl group hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-xl group-hover:blur-2xl transition-all duration-500" />
            <Mail className="w-5 h-5 mr-3 text-blue-400 animate-pulse" />
            <span className="relative bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-semibold">
              Contact Us
            </span>
          </div>

          {/* Main Title with Split Animation */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight overflow-hidden">
            <div
              className={`inline-block transition-all duration-1000 ease-out ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              Get In{" "}
            </div>
            <span className="relative inline-block">
              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: "0.5s" }}
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </div>
              <div
                className={`absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl -z-10 transition-opacity duration-1000 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "0.7s" }}
              />
            </span>
          </h2>

          {/* Sub-headline */}
          <p
            className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            Have a technical question, a sales inquiry, or just want to chat?{" "}
            <span className="text-white font-semibold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              We'd love to hear from you.
            </span>
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "1s" }}
          >
            <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-500 group">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send us a message</h3>

              {isSubmitted ? (
                <div className="text-center py-16 relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6 animate-bounce">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Message Sent!</h4>
                  <p className="text-gray-400 text-lg">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {/* Full Name */}
                  <div className="relative">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("fullName")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-4 bg-white/5 backdrop-blur-xl border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                          errors.fullName
                            ? "border-red-500/50 focus:border-red-500"
                            : focusedField === "fullName"
                              ? "border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 shadow-lg shadow-blue-500/10"
                              : "border-white/20 hover:border-white/30"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {focusedField === "fullName" && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl -z-10 animate-pulse" />
                      )}
                    </div>
                    {errors.fullName && (
                      <div className="flex items-center mt-2 text-red-400 text-sm animate-shake">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.fullName}
                      </div>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className="relative">
                    <label htmlFor="workEmail" className="block text-sm font-medium text-gray-300 mb-2">
                      Work Email <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="workEmail"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("workEmail")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-4 bg-white/5 backdrop-blur-xl border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                          errors.workEmail
                            ? "border-red-500/50 focus:border-red-500"
                            : focusedField === "workEmail"
                              ? "border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 shadow-lg shadow-blue-500/10"
                              : "border-white/20 hover:border-white/30"
                        }`}
                        placeholder="your.email@company.com"
                      />
                      {focusedField === "workEmail" && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl -z-10 animate-pulse" />
                      )}
                    </div>
                    {errors.workEmail && (
                      <div className="flex items-center mt-2 text-red-400 text-sm animate-shake">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.workEmail}
                      </div>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="relative">
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name <span className="text-gray-500">(Optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("companyName")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-4 bg-white/5 backdrop-blur-xl border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                          focusedField === "companyName"
                            ? "border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 shadow-lg shadow-blue-500/10"
                            : "border-white/20 hover:border-white/30"
                        }`}
                        placeholder="Your company name"
                      />
                      {focusedField === "companyName" && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl -z-10 animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        className={`w-full px-4 py-4 bg-white/5 backdrop-blur-xl border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none ${
                          errors.message
                            ? "border-red-500/50 focus:border-red-500"
                            : focusedField === "message"
                              ? "border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 shadow-lg shadow-blue-500/10"
                              : "border-white/20 hover:border-white/30"
                        }`}
                        placeholder="Tell us about your project, question, or how we can help..."
                      />
                      {focusedField === "message" && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl -z-10 animate-pulse" />
                      )}
                    </div>
                    {errors.message && (
                      <div className="flex items-center mt-2 text-red-400 text-sm animate-shake">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "1.2s" }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Other ways to reach us</h3>

            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-pointer opacity-0 animate-slide-in-right`}
                style={{ animationDelay: detail.delay, animationFillMode: "forwards" }}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${detail.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
                />

                <div className="flex items-start space-x-4 relative z-10">
                  {/* Animated Icon */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r ${detail.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <detail.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {detail.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {detail.text}
                    </p>
                  </div>
                </div>

                {/* Hover indicator */}
                <div
                  className={`absolute bottom-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r ${detail.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}
                />

                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
            ))}

            {/* Response Time Info */}
            <div
              className="p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl border border-blue-300/30 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
            >
              <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3" />
                Response Time
              </h4>
              <p className="text-gray-300 leading-relaxed">
                We typically respond to all inquiries within{" "}
                <span className="text-blue-400 font-semibold">24 hours</span> during business days. For urgent technical
                support, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes blob-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-30px, 50px) scale(0.8); }
          66% { transform: translate(20px, -20px) scale(1.2); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(90deg); }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-90deg); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-blob-1 { animation: blob-1 20s ease-in-out infinite; }
        .animate-blob-2 { animation: blob-2 25s ease-in-out infinite; }
        .animate-gradient-shift { 
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite; 
        }
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 9s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-shake { animation: shake 0.5s ease-in-out; }
      `}</style>
    </section>
    <Footer />
    </>
  )
}
