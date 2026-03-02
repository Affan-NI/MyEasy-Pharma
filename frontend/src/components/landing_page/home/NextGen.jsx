import { Code, Microscope, BarChart, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function NextGen() {
  const team = [
    { icon: Code, title: "Technologists", desc: "Building scalable AI systems" },
    { icon: Microscope, title: "Clinicians", desc: "Ensuring clinical validity" },
    { icon: BarChart, title: "Researchers", desc: "Advancing healthcare science" },
    { icon: BarChart, title: "Analysts", desc: "Extracting data insights" },
  ];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="w-full px-4 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-700 mb-3">
            Team & Vision
          </h2>

          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At the heart of our ecosystem is a growing network of young,
            enthusiastic professionals curating and refining the platform
            for India's healthcare domain.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="text-center p-4 md:p-6 bg-teal-50 rounded-xl border border-teal-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <member.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>

              <h3 className="text-sm md:text-lg text-gray-900 mb-1">
                {member.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-600">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="bg-teal-800 rounded-2xl p-5 md:p-10 text-white mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 md:w-6 md:h-6" />
            </div>

            <div>
              <h3 className="text-lg md:text-2xl mb-3 md:mb-4">
                Guided by Unwavering Commitment
              </h3>

              <p className="text-sm md:text-lg leading-relaxed opacity-95">
                Driven by the founder's{" "}
                <span className="font-semibold">
                  tireless efforts and long-term commitment to impact
                </span>
                , the platform blends fresh thinking with disciplined execution—
                ensuring resilience and relevance.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

          {/* Today */}
          <div className="p-5 md:p-8 bg-gray-50 rounded-xl border border-gray-200">
            <h4 className="text-lg md:text-xl text-gray-900 mb-4">
              Building for Today
            </h4>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="text-blue-600 mt-1">✓</span>
                Real-world validation in live diabetic centres
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="text-blue-600 mt-1">✓</span>
                Interoperable with existing healthcare systems
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="text-blue-600 mt-1">✓</span>
                Clinician-ready insights and reports
              </li>
            </ul>
          </div>

          {/* Tomorrow */}
          <div className="p-5 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <h4 className="text-lg md:text-xl text-gray-900 mb-4">
              Building for Tomorrow
            </h4>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="text-indigo-600 mt-1">→</span>
                Scalable architecture for national deployment
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="text-indigo-600 mt-1">→</span>
                Global healthcare collaboration readiness
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                <span className="text-indigo-600 mt-1">→</span>
                Continuous AI learning and improvement
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}