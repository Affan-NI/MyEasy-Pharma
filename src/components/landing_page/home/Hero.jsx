import {
  ArrowRight,
  Sparkles,
  Network,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";
import DNAHelix from "@/components/landing_page/home/DNAHelix";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-[5px] pb-[10px] bg-gradient-to-br from-blue-50 via-indigo-50 to-white overflow-hidden pr-[0px] pl-[0px]"
    >
      {/* Background decorations */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>
      </div> */}

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>

          {/* DNA Hero Image with Overlaid Text */}
          <motion.div
            className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            {/* DNA Helix Background */}
            <div className="relative h-[500px] md:h-[600px]">
              <DNAHelix />

              {/* Gradient Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-indigo-900/30 to-blue-900/50"></div>

              {/* Centered Main Heading Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-[1px] text-center pt-[0px] pr-[24px] pb-[0px] pl-[1px] py-[0px]">
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.8,
                    ease: "easeOut",
                  }}
                >
                  <motion.span
                    className="block mb-2"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    An AI-Native Platform
                  </motion.span>
                  <motion.span
                    className="block mb-2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    Shaping
                  </motion.span>
                  <motion.span
                    className="block bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent"
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

                {/* Tagline on Image */}
                <motion.p
                  className="text-xl md:text-2xl text-blue-100 font-medium max-w-2xl drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  Learn. Integrate. Collaborate. Transform.
                </motion.p>

                {/* Floating particles animation */}
                <motion.div
                  className="absolute top-10 left-10 w-3 h-3 bg-blue-300 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-20 right-16 w-2 h-2 bg-indigo-300 rounded-full"
                  animate={{
                    y: [0, 15, 0],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute top-1/3 right-20 w-2.5 h-2.5 bg-purple-300 rounded-full"
                  animate={{
                    y: [0, -25, 0],
                    x: [0, 10, 0],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-center text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            From isolated digital tools to intelligent,
            learning, and interconnected systems—enabling
            outcome-driven healthcare at scale through AI,
            real-world data, and predictive analytics.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.button
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            <motion.button
              className="w-full sm:w-auto px-10 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Brain,
                title: "AI-Native DNA",
                desc: "Built with AI as foundation, not feature",
                delay: 0,
                color: "blue",
              },
              {
                icon: Network,
                title: "Interoperable",
                desc: "Seamless integration across healthcare ecosystem",
                delay: 0.15,
                color: "indigo",
              },
              {
                icon: Sparkles,
                title: "Real-World Data",
                desc: "Trained on live diabetic centre data",
                delay: 0.3,
                color: "purple",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-shadow"
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
                  className={`w-14 h-14 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-xl flex items-center justify-center mb-5 shadow-lg`}
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
