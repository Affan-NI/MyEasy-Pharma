import {
  ArrowRight,
  Sparkles,
  Network,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";
import DNAHelix from "@/components/landing_page/home/DNAHelix";
import MyEasyPharmaText from "./MyEasyPharmaText";

export function Hero() {

  const featureColors = {
    green: "from-green-400 to-emerald-400",
    emerald: "from-emerald-400 to-lime-400",
    lime: "from-lime-400 to-green-500",
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-white"
    >
      {/* Container is kept, but HERO card will break out full width */}
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">

          {/* HERO CARD – FULL SCREEN WIDTH */}
          <motion.div
            className="
              relative 
              mb-20 
              w-screen
              left-1/2
              -translate-x-1/2
              overflow-hidden
              shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              bg-gradient-to-b 
              from-green-900 
              via-green-800 
              to-green-900
            "
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            {/* MYEASY PHARMA” text animation (typewriter + delete) */}
            <MyEasyPharmaText/>
            {/* DNA Helix Background (SIZE SAME AS BEFORE, ONLY HERO WIDTH FULL) */}
            <div className="relative h-[250px] md:h-[300px] flex items-center">
              <DNAHelix />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0 
                  bg-gradient-to-b
                  from-green-600/10
                  via-emerald-700/15
                  to-green-900/30
                "
              />

              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                  className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-xl"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.8,
                    ease: "easeOut",
                  }}
                >
                  <motion.span
                    className="
                      block 
                      bg-gradient-to-r 
                      from-green-200 
                      via-emerald-200 
                      to-lime-200 
                      bg-clip-text 
                      text-transparent
                    mb-1"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    An AI-Native Platform
                  </motion.span>

                  <motion.span
                    className="
                      block 
                      bg-gradient-to-r 
                      from-green-200 
                      via-emerald-200 
                      to-lime-200 
                      bg-clip-text 
                      text-transparent
                     mb-1"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    Shaping
                  </motion.span>

                  <motion.span
                    className="
                      block 
                      bg-gradient-to-r 
                      from-green-200 
                      via-emerald-200 
                      to-lime-200 
                      bg-clip-text 
                      text-transparent
                    "
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.4,
                      ease: "easeOut",
                    }}
                  >
                    India's Healthcare Future
                  </motion.span>
                </motion.h1>
              </div>
            </div>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            className="text-lg md:text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            From isolated digital tools to intelligent,
            learning, and interconnected systems—enabling
            outcome-driven healthcare at scale through AI,
            real-world data, and predictive analytics.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.button
              className="
                w-full sm:w-auto 
                px-10 py-4 
                bg-gradient-to-r 
                from-green-500 to-emerald-500 
                text-white 
                rounded-xl 
                font-semibold 
                hover:from-green-600 hover:to-emerald-600 
                hover:shadow-2xl 
                transition-all 
                flex items-center justify-center gap-2 group
              "
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>

            <motion.button
              className="
                w-full sm:w-auto 
                px-10 py-4 
                border-2 border-green-500 
                text-green-600 
                rounded-xl 
                font-semibold 
                hover:bg-green-50 
                hover:shadow-lg 
                transition-all
              "
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Brain,
                title: "AI-Native DNA",
                desc: "Built with AI as foundation, not feature",
                delay: 0,
                color: "green",
              },
              {
                icon: Network,
                title: "Interoperable",
                desc: "Seamless integration across healthcare ecosystem",
                delay: 0.15,
                color: "emerald",
              },
              {
                icon: Sparkles,
                title: "Real-World Data",
                desc: "Trained on live diabetic centre data",
                delay: 0.3,
                color: "lime",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="
                  bg-white/80 
                  backdrop-blur-sm 
                  p-8 
                  rounded-2xl 
                  border border-green-100 
                  shadow-lg 
                  hover:shadow-2xl 
                  transition-shadow
                "
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: feature.delay,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br ${featureColors[feature.color]} rounded-xl flex items-center justify-center mb-5 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
