import { Brain, Shield, Code2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description:
        "Go beyond basic metrics. Understand your API usage with intelligent, real-time insights and predictive analytics to stay ahead of demand.",
      gradient: "from-purple-500 to-pink-500",
      delay: "delay-0",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description:
        "Protect your endpoints with OAuth 2.0, API key management, and automated threat detection. Your data's integrity is our top priority.",
      gradient: "from-green-500 to-emerald-500",
      delay: "delay-200",
    },
    {
      icon: Code2,
      title: "Superior Developer Experience",
      description:
        "With auto-generated documentation and a seamless CLI, we make building and integrating APIs a joy, not a chore. Cut your development time in half.",
      gradient: "from-blue-500 to-cyan-500",
      delay: "delay-400",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-[length:400%_400%] animate-gradientBackground" />

      {/* Background Blobs like LandingPage */}
      <div className="absolute -top-16 -left-16 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 rounded-full filter blur-3xl opacity-20 z-0" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full filter blur-3xl opacity-20 z-0" />

      {/* Existing Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-100 mb-6">
            Everything You Need in{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              One Platform
            </span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive API management tools designed for modern development teams
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-700 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } feature-card`}
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700 animated-gradient-bg`}
              />
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 animated-gradient-icon`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-100 group-hover:to-gray-300 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Animation Styles */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes gradientBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-gradient-bg {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }

        .animated-gradient-icon {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }

        .feature-card:hover .animated-gradient-bg {
          animation-duration: 3s;
        }

        .feature-card:hover .animated-gradient-icon {
          animation-duration: 3s;
        }

        .animate-gradientBackground {
          animation: gradientBackground 30s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
    </section>
  );
}
