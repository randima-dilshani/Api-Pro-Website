import { Button } from "../ui/button"
import Navbar from "../pages/Navbar"
import { Check, Star } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function PricingSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const pricingPlans = [
    {
      name: "Starter",
      price: "$0",
      period: "/ month",
      features: [
        "1 Project",
        "10,000 API Calls/mo",
        "Basic Analytics",
        "Community Support",
      ],
      buttonText: "Start for Free",
      buttonVariant: "modern-outline",
      popular: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/ month",
      features: [
        "10 Projects",
        "1 Million API Calls/mo",
        "AI-Powered Analytics",
        "Advanced Security",
        "Email Support",
      ],
      buttonText: "Choose Pro",
      buttonVariant: "gradient",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Let's Talk",
      period: "",
      features: [
        "Unlimited Projects",
        "Custom API Call Volume",
        "On-Premise Deployment",
        "Security Audits",
        "Dedicated 24/7 Support",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "modern-outline",
      popular: false,
    },
  ]

  return (
    <>
      <Navbar />
      <section className="py-32 relative overflow-hidden bg-black">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-600/10" />
        <div className="absolute -top-32 -left-32 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-purple-500/15 via-blue-500/10 to-pink-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 sm:w-[400px] sm:h-[400px] bg-gradient-to-bl from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-300/30 text-white text-sm font-medium mb-8 animate-pulse">
              <Star className="w-4 h-4 mr-2 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent font-semibold">
                Pricing Plans
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Simple, Transparent Pricing for{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                Teams of All Sizes
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Start for free and scale as you go.{" "}
              <span className="text-white font-semibold">No hidden fees, ever.</span>
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`relative p-8 rounded-3xl backdrop-blur-xl border flex flex-col justify-between ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-600/10 to-blue-600/10 border-purple-400/30 shadow-lg"
                    : "bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold shadow-md animate-bounce">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl sm:text-5xl font-black text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-400 text-lg ml-2">{plan.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-base">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-3">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center mt-auto">
                  <Button
                    size="lg"
                    className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      plan.buttonVariant === "gradient"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 shadow-lg"
                        : "border-2 border-white/30 text-white bg-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:shadow-lg"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>

                {plan.popular && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-xl -z-10" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-lg mb-6">
              Need a custom solution? We're here to help.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
            >
              Schedule a Demo
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
