import { useState, useEffect, useRef } from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/footer";
import { Users, Target, Zap, Globe, Mail, ExternalLink } from "lucide-react";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("down");
  const sectionRef = useRef(null);
  const prevScrollY = useRef(0);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > prevScrollY.current ? "down" : "up");
      prevScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for animation visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Fetch team data
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setTeamMembers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team data:", error);
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <>
      <Navbar />

      <section ref={sectionRef} className="py-32 relative overflow-hidden bg-gray-950" id="about">
        {/* Background blobs */}
        <div className="absolute -top-16 -left-16 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 rounded-full filter blur-3xl opacity-20 z-0" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full filter blur-3xl opacity-20 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* OUR MISSION SECTION */}
          <div
            className={`text-center mb-32 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-purple-300/30 text-white text-sm font-medium mb-8">
              <Target className="w-4 h-4 mr-2 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-semibold">
                Our Mission
              </span>
            </div>

            {/* Scroll-animated heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight transition-all duration-500"
              style={{
                letterSpacing: scrollDirection === "up" ? "-0.03em" : "0.05em",
                transform: scrollDirection === "up" ? "scale(0.98)" : "scale(1.02)",
              }}
            >
              We Empower Developers to{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Build The Future.
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl -z-10" />
              </span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-8">
                In today's digital world, APIs are the backbone of innovation. Yet, managing them has become increasingly complex.{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  API PRO was founded on a simple principle
                </span>
                : to give developers and businesses the tools they need to build, manage, and scale their APIs without the headache.
              </p>
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                We handle the complexity, so you can focus on{" "}
                <span className="text-white font-semibold">creating amazing products.</span>
              </p>
            </div>

            {/* Updated Feature Section: Circular Icon Cards */}
        <div className="flex flex-wrap justify-center gap-12 mt-20">
  {[
    {
      icon: Target,
      title: "Built for Developers",
    },
    {
      icon: Zap,
      title: "Blazing Fast APIs",
    },
    {
      icon: Globe,
      title: "Global Reach",
    },
    {
      icon: Mail,
      title: "24/7 Support",
    },
  ].map((feature, index) => (
    <div
      key={index}
      className="flex flex-col items-center group transition-all duration-300 hover:scale-105"
    >
      {/* Icon ring with reduced contrast */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 p-[2px]">
        <div className="w-full h-full bg-gray-950 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
          <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute inset-0 rounded-full blur-2xl opacity-20 bg-gradient-to-br from-purple-500/30 to-blue-500/30 scale-105 z-[-1]" />
      </div>

      {/* Title */}
      <h4 className="mt-4 text-white text-lg font-semibold text-center group-hover:text-purple-300 transition-colors duration-300">
        {feature.title}
      </h4>
    </div>
  ))}
</div>

          </div>

          {/* MEET THE TEAM SECTION */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-pink-300/30 text-white text-sm font-medium mb-8">
                <Users className="w-4 h-4 mr-2 text-purple-400" />
                <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent font-semibold">
                  The Team Behind API PRO
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                Meet Our{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Amazing Team
                </span>
              </h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                The brilliant minds behind API PRO, working tirelessly to make API management effortless for developers worldwide.
              </p>
            </div>

            {loading ? (
              <div className="flex flex-wrap justify-center gap-6">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 transform transition-all duration-700 ease-out ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ width: "260px", transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 bg-gray-700 rounded-full mb-4 mx-auto" />
                    <div className="h-4 bg-gray-700 rounded mb-2" />
                    <div className="h-3 bg-gray-700 rounded mb-2" />
                    <div className="h-3 bg-gray-700 rounded w-3/4" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-6">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden transform transition-all duration-700 ease-out ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ width: "260px", transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />

                    <div className="relative mb-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-extrabold text-xl group-hover:scale-110 transition-transform duration-300">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="text-center relative z-10 space-y-2">
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                        {member.name}
                      </h4>

                      <div className="flex items-center justify-center text-gray-300 text-sm mb-1 group-hover:text-gray-200 transition-colors duration-300">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="truncate font-medium">{member.email}</span>
                      </div>

                      <div className="flex items-center justify-center text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                        <Globe className="w-4 h-4 mr-2" />
                        <a
                          href={`https://${member.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="truncate hover:text-blue-400 transition-colors duration-200 flex items-center font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {member.website}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none will-change-transform" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
