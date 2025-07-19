import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/footer";
import { Copy, Check } from "lucide-react";
import { Button } from "../ui/button";

export default function ApiDocumentationOptimized() {
  const [activeLink, setActiveLink] = useState("GET /users");
  const [copiedCode, setCopiedCode] = useState(null);
  const [animateContent, setAnimateContent] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const textPhases = ["API PRO", "API PRO\nDeveloper", "API PRO\nDeveloper Documentation"];

  useEffect(() => {
    setAnimateContent(true);
  }, []);

  useEffect(() => {
    let timeoutId;

    const typeText = () => {
      const targetText = textPhases[currentPhase];
      const currentLength = typedText.length;

      if (currentLength < targetText.length) {
        setTypedText(targetText.slice(0, currentLength + 1));
        timeoutId = setTimeout(typeText, 50);
      } else if (currentPhase < textPhases.length - 1) {
        timeoutId = setTimeout(() => {
          setCurrentPhase((prev) => prev + 1);
        }, 300);
      }
    };

    if (animateContent) {
      timeoutId = setTimeout(typeText, 100);
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, currentPhase, animateContent]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 400);

    return () => clearInterval(cursorInterval);
  }, []);

  const navigationItems = [
    {
      category: "GETTING STARTED",
      links: [{ name: "Authentication", id: "auth" }],
    },
    {
      category: "CORE RESOURCES",
      links: [
        { name: "GET /users", id: "get-users" },
        { name: "POST /users", id: "post-users" },
        { name: "GET /analytics", id: "get-analytics" },
        { name: "GET /logs", id: "get-logs" },
      ],
    },
  ];

  const handleCopy = async (code, type) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(type);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const jsCode = `fetch('https://api.apipro.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`;

  const jsonResponse = `{
  "data": [
    {
      "id": "user_123",
      "name": "Alex Smith",
      "email": "alex.smith@example.com",
      "created_at": "2025-07-16T12:00:00Z"
    },
    {
      "id": "user_124",
      "name": "Maria Garcia",
      "email": "maria.garcia@example.com",
      "created_at": "2025-07-17T11:30:00Z"
    }
  ],
  "has_more": true
}`;

  const renderTypedHeading = () => {
    const lines = typedText.split("\n");
    return (
      <div className="relative">
        {lines.map((line, index) => (
          <div key={index} className="block">
            {index === 0 ? (
              <span className="text-3xl sm:text-5xl font-black">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    {line}
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl rounded-lg"></span>
                </span>
              </span>
            ) : (
              <span className="text-xl sm:text-2xl font-bold text-white">{line}</span>
            )}
          </div>
        ))}
        {showCursor && currentPhase < textPhases.length - 1 && (
          <span className="inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-pulse"></span>
        )}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <section className="py-16 relative overflow-hidden bg-black min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto flex relative z-10">

          {/* Hamburger Button - mobile only */}
          <div className="md:hidden p-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle Sidebar"
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {sidebarOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>

          {/* Overlay for mobile when sidebar open */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <div
            className={`
              fixed inset-y-0 left-0 z-20 w-64 bg-gray-900/30 backdrop-blur-xl border-r border-gray-800 p-6 pt-24
              transform transition-transform duration-300 ease-in-out
              md:relative md:translate-x-0
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <nav className="space-y-6">
              {navigationItems.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className={`transform transition-all duration-500 ease-out delay-${sectionIndex * 100} ${
                    animateContent ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  }`}
                >
                  <h2
                    className={`text-xs font-bold uppercase tracking-wider mb-3 px-3 ${
                      section.category === "GETTING STARTED"
                        ? "text-blue-400 text-sm underline decoration-blue-600 decoration-2"
                        : "text-gray-400"
                    }`}
                  >
                    {section.category}
                  </h2>
                  <ul className="space-y-1">
                    {section.links.map((link, linkIndex) => (
                      <li
                        key={linkIndex}
                        className={`transform transition-all duration-300 ease-out delay-${
                          sectionIndex * 100 + linkIndex * 50
                        } ${animateContent ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                      >
                        <button
                          onClick={() => {
                            setActiveLink(link.name);
                            setSidebarOpen(false); // close sidebar on mobile after selection
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-start group ${
                            activeLink === link.name
                              ? "bg-gradient-to-r from-blue-600/40 to-purple-600/40 text-white border border-blue-500/50 shadow-lg shadow-blue-500/20"
                              : "text-gray-400 hover:text-white hover:bg-white/10 hover:scale-[1.03] hover:shadow-lg hover:shadow-white/5"
                          }`}
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <div
            className={`
              flex-1 p-8 max-w-4xl mx-auto transition-all duration-600 ease-out
              md:ml-64
              ${animateContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <div className="text-center mb-8">
              <div className="min-h-[120px] flex items-center justify-center">{renderTypedHeading()}</div>
              <div
                className={`mt-3 transform transition-all duration-500 ease-out delay-500 ${
                  animateContent && currentPhase >= textPhases.length - 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Build powerful applications with our comprehensive REST API
                </p>
              </div>
            </div>

            <div
              className={`space-y-6 transform transition-all duration-600 ease-out delay-700 ${
                animateContent && currentPhase >= textPhases.length - 1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {/* Example Request Block */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 text-sm font-mono font-semibold rounded-lg border border-green-500/30 shadow-lg shadow-green-500/10">
                    GET
                  </span>
                  <h2 className="text-xl font-bold text-white font-mono">/v1/users</h2>
                </div>
                <p className="text-base text-gray-300 leading-relaxed">
                  Retrieves a list of all users associated with your project.
                </p>
              </div>

              {/* Code Example */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  Example Request
                </h3>
                <div className="relative group">
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-gray-600 group-hover:shadow-xl group-hover:shadow-blue-500/5">
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 border-b border-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 font-medium">JavaScript</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy(jsCode, "javascript")}
                          className="h-7 w-7 p-0 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                        >
                          {copiedCode === "javascript" ? (
                            <Check className="w-3 h-3 text-green-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="p-3">
                      <pre className="text-sm text-gray-300 font-mono leading-relaxed overflow-x-auto">
                        <code>{jsCode}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Example */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Example Response <span className="text-green-400 text-sm font-normal">(200 OK)</span>
                </h3>
                <div className="relative group">
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-gray-600 group-hover:shadow-xl group-hover:shadow-green-500/5">
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 border-b border-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 font-medium">JSON</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy(jsonResponse, "json")}
                          className="h-7 w-7 p-0 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                        >
                          {copiedCode === "json" ? (
                            <Check className="w-3 h-3 text-green-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="p-3">
                      <pre className="text-sm text-gray-300 font-mono leading-relaxed overflow-x-auto">
                        <code>{jsonResponse}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
