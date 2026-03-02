import { ArrowRight, Users, Lightbulb, Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function CallToAction() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-100 via-white to-indigo-100 blur-3xl opacity-60" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm text-teal-700 font-semibold">
              Join the Transformation
            </span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-900 font-bold">
          Co-Create the Pharma 4.0 Future
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Building measurable healthcare impact through shared intelligence,
          collaboration, and next-generation digital infrastructure.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
          {[
            { icon: Lightbulb, label: "Learn" },
            { icon: ArrowRight, label: "Integrate" },
            { icon: Users, label: "Collaborate" },
            { icon: Heart, label: "Transform" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 p-3 text-center shadow-sm"
            >
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                <item.icon className="w-4 h-4 text-teal-600" />
              </div>
              <div className="text-base font-semibold text-gray-800">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          We invite
        </h3>

        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-12">
          {[
            {
              title: "Doctors & Clinicians",
              desc: "AI-driven patient timelines and decision support between visits.",
              icon: "🩺",
            },
            {
              title: "Pharma & Research",
              desc: "Real-world therapy insights and outcome intelligence.",
              icon: "💊",
            },
            {
              title: "Hospitals & Clinics",
              desc: "Secure interoperable systems and unified patient records.",
              icon: "🏥",
            },
            {
              title: "Payers & Policymakers",
              desc: "Population-level outcome analytics and risk insights.",
              icon: "📊",
            },
            {
              title: "Patients",
              desc: "Preventive, personalised and continuous care journeys.",
              icon: "❤️",
            },
            {
              title: "Innovators",
              desc: "Co-create AI, IoT and digital therapeutics to advance Pharma 4.0 care models.",
              icon: "🚀",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-xl border p-4 hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex items-center gap-2 font-semibold text-gray-900 text-sm">
                <span className="text-lg">{item.icon}</span>
                {item.title}
              </div>

              <div
                className="text-xs text-gray-600 mt-2 opacity-0 max-h-0 overflow-hidden
                              group-hover:opacity-100 group-hover:max-h-20
                              transition-all duration-300"
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button
            onClick={() => setOpen((prev) => !prev)}
            whileTap={{ scale: 0.95 }}
            className="
            px-6 py-3
            bg-gradient-to-r from-green-600 to-teal-600
            text-white rounded-xl
            font-semibold
            shadow-md
            flex items-center gap-2
            "
          >
            Get in Touch
            <ArrowRight
              className={`w-4 h-4 transition-transform duration-300 ${
                open ? "rotate-90" : ""
              }`}
            />
          </motion.button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="mt-6 grid grid-cols-3 sm:grid-cols-3 gap-4 max-w-md mx-auto">
                <a
                  href="https://wa.me/919350318639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                flex flex-col items-center justify-center
                bg-green-500 border rounded-xl
                p-3 sm:p-4
                shadow-sm hover:shadow-md
                transition
                "
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span className="hidden sm:block text-md font-semibold text-white mt-2">
                    WhatsApp
                  </span>
                </a>

                <a
                  href="tel:+919350318639"
                  className="
                flex flex-col items-center justify-center
                bg-blue-500 border rounded-xl
                p-3 sm:p-4
                shadow-sm hover:shadow-md
                transition
                "
                >
                  <Phone className="w-5 h-5 text-white" />
                  <span className="hidden sm:block text-md font-semibold text-white mt-2">
                    Call
                  </span>
                </a>

                <a
                  href="mailto:dfusalilchawla@gmail.com"
                  className="
                flex flex-col items-center justify-center
                bg-red-500 border rounded-xl
                p-3 sm:p-4
                shadow-sm hover:shadow-md
                transition
                "
                >
                  <Mail className="w-5 h-5 text-white" />
                  <span className="hidden sm:block text-md font-semibold text-white mt-2">
                    Email
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
