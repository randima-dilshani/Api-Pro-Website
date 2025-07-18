import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function SocialProof() {
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

    const refCurrent = sectionRef.current;
    if (refCurrent) observer.observe(refCurrent);

    return () => {
      if (refCurrent) observer.unobserve(refCurrent);
    };
  }, []);

  const companies = [
    { name: "InnovateCorp", logo: "/logos/innovatecorp.png" },
    { name: "QuantumLeap Tech", logo: "/logos/quantumleap.png" },
    { name: "DataWeave Solutions", logo: "/logos/dataweave.png" },
    { name: "NextGen Systems", logo: "/logos/nextgen.png" },
    { name: "Apex Digital", logo: "/logos/apexdigital.png" }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-100 mb-4">
            Trusted by the World's Most{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovative Companies
            </span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of developers who trust API PRO for their mission-critical applications
          </p>
        </motion.div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-gray-700/50 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-700/30 hover:to-purple-700/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {company.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          {[
            { value: "1M+", label: "API Calls Daily" },
            { value: "50K+", label: "Developers" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            >
              <div className="text-2xl font-black text-gray-100 mb-1">{stat.value}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
