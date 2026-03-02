import { ArrowRight, Users, Database, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import DNAHelix from "@/components/landing_page/home/DNAHelix";
import MyEasyPharmaText from "./MyEasyPharmaText";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate();

  return (
    <section id="home" className="relative bg-gradient-to-br">
      <div className="w-full px-6 relative">
        <div className="max-w-6xl mx-auto">

          {/* HERO CARD */}
          <motion.div
            className="
              relative 
              mb-8
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
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <MyEasyPharmaText />

            <div className="relative h-[220px] md:h-[260px] flex items-center">
              <DNAHelix />

              <div className="absolute inset-0 bg-gradient-to-b from-green-600/10 via-emerald-700/15 to-green-900/30" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                  className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <span className="block bg-gradient-to-r from-green-200 via-emerald-200 to-lime-200 bg-clip-text text-transparent">
                    An AI-Native Platform
                  </span>
                  <span className="block bg-gradient-to-r from-green-200 via-emerald-200 to-lime-200 bg-clip-text text-transparent">
                    Shaping
                  </span>
                  <span className="block bg-gradient-to-r from-green-200 via-emerald-200 to-lime-200 bg-clip-text text-transparent">
                    India's Healthcare Future
                  </span>
                </motion.h1>
              </div>
            </div>
          </motion.div>

          {/* DESCRIPTION SECTION */}
          {/* DESCRIPTION SECTION */}
<motion.div
  className="
    relative
    w-full md:w-[calc(100vw-70px)]
    md:left-1/2
    md:-translate-x-1/2
    bg-[#EAEDED]
    rounded-xl md:rounded-3xl
    px-3 md:px-8
    py-4 md:py-8
    flex
    flex-col
    lg:flex-row
    items-start
    justify-between
    gap-6 md:gap-8
  "
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
>

  {/* LEFT TEXT */}
  <div className="max-w-xl">
    <h1 className="text-xl md:text-3xl font-bold text-[#F05A28] mb-1">
      Pharma 4.0
    </h1>
    <h2 className="text-base md:text-2xl font-semibold text-gray-800 mb-2 md:mb-3">
      is the future of healthcare
    </h2>

    <p
      className={`
        text-gray-700 leading-relaxed text-xs md:text-base transition-all duration-300
        ${readMore ? "max-h-[1000px]" : "max-h-[84px] overflow-hidden"}
      `}
    >
     We are building an AI-native digital platform that connects doctors,
                hospitals, pharmaceutical companies, researchers, and patients into
                one unified, intelligent ecosystem. Our mission is to transform
                fragmented healthcare systems into a smart, collaborative network
                powered by data and innovation. We turn raw healthcare data into
                actionable intelligence, empowering clinicians to make faster
                decisions, researchers to generate real-world insights, pharma
                companies to innovate responsibly, and patients to receive
                personalized, continuous care. By integrating Artificial
                Intelligence, real-world data, cloud infrastructure,
                interoperability, and predictive analytics, we enable outcome-driven
                healthcare at scale.
    </p>

    <button
      onClick={() => setReadMore(!readMore)}
      className="mt-2 md:mt-3 text-[#F05A28] font-semibold hover:underline text-xs md:text-sm"
    >
      {readMore ? "Read Less" : "Read More"}
    </button>
  </div>

  {/* CENTER STEPS */}
<div className="
  grid grid-cols-2 gap-4 w-full
  md:flex md:flex-row md:items-center md:gap-6
">

  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-lg px-4 md:px-6 py-3 md:py-4 w-full md:w-56 text-center">
    <div className="w-9 h-9 md:w-12 md:h-12 bg-[#F05A28]/10 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
      <Users className="w-4 h-4 md:w-6 md:h-6 text-[#F05A28]" />
    </div>
    <h3 className="text-xs md:text-sm font-semibold">Unified Network</h3>
    <p className="text-[11px] md:text-xs text-gray-600">
      All stakeholders connected.
    </p>
  </div>

  {/* Arrow (Desktop Only) */}
  <ArrowRight className="hidden md:block w-6 h-6 text-[#F05A28]" />

  {/* Card 2 */}
  <div className="bg-white rounded-2xl shadow-lg px-4 md:px-6 py-3 md:py-4 w-full md:w-56 text-center">
    <div className="w-9 h-9 md:w-12 md:h-12 bg-[#F05A28]/10 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
      <Database className="w-4 h-4 md:w-6 md:h-6 text-[#F05A28]" />
    </div>
    <h3 className="text-xs md:text-sm font-semibold">Data → Intelligence</h3>
    <p className="text-[11px] md:text-xs text-gray-600">
      AI converts data into insights.
    </p>
  </div>

  {/* Arrow (Desktop Only) */}
  <ArrowRight className="hidden md:block w-6 h-6 text-[#F05A28]" />

  {/* Card 3 */}
  <div className="bg-white rounded-2xl shadow-lg px-4 md:px-6 py-3 md:py-4 w-full md:w-56 text-center col-span-2 md:col-span-1">
    <div className="w-9 h-9 md:w-12 md:h-12 bg-[#F05A28]/10 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
      <Activity className="w-4 h-4 md:w-6 md:h-6 text-[#F05A28]" />
    </div>
    <h3 className="text-xs md:text-sm font-semibold">Smart Care</h3>
    <p className="text-[11px] md:text-xs text-gray-600">
      Predictive & personalized care.
    </p>
  </div>

</div>

  {/* CTA */}
  <motion.button
    onClick={() => navigate("/pharma40")}
    className="
      bg-[#F05A28]
      hover:bg-[#e14f20]
      text-white
      px-5 md:px-9
      py-2 md:py-4
      rounded-lg md:rounded-xl
      font-semibold
      shadow-md md:shadow-lg
      flex
      items-center
      gap-2
      mt-3 md:mt-4
      self-start lg:self-auto
      text-xs md:text-base
    "
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Explore Platform
    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
  </motion.button>

</motion.div>
        </div>
      </div>
    </section>
  );
}
