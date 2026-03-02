import { Users, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function Simplification() {
  const activities = [
    {
      icon: Users,
      title: "Structured Interactions",
      desc: "Engaging directly with healthcare and pharma trade professionals",
    },
    {
      icon: BookOpen,
      title: "Knowledge Sessions",
      desc: "Practical training on Pharma 4.0 concepts and applications",
    },
    {
      icon: ArrowRight,
      title: "Practical Implementation",
      desc: "Turning complex concepts into practical, real-world implementation paths.",
    },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="w-full px-4 md:px-12 lg:px-20">

        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-700 mb-3">
            Simplification as a Service
          </h2>

          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technology adoption fails when complexity overwhelms stakeholders.
            Beyond our platform, we help healthcare and pharmaceutical trade
            <span className="font-semibold">
              {" "}decode and unpack Pharma 4.0
            </span>{" "}
            in the simplest, most practical manner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">

          <motion.div
            className="bg-white p-5 md:p-8 rounded-2xl border border-gray-200 shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg md:text-xl text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center text-xs">
                !
              </span>
              The Challenge
            </h3>

            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
              Advanced concepts like AI-driven analytics and interoperability
              can seem abstract and inaccessible to enterprises and institutions.
            </p>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Without practical understanding, transformative technologies remain
              unutilized—creating a gap between innovation potential and adoption.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-teal-500 to-blue-600 text-white p-5 md:p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg md:text-xl mb-4 flex items-center gap-2">
              <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-xs">
                ✓
              </span>
              Our Approach
            </h3>

            <p className="text-sm md:text-base mb-4 leading-relaxed">
              We translate advanced concepts into
              <span className="font-semibold">
                {" "}clear adoption roadmaps
              </span>
              , empowering stakeholders to move confidently from awareness to implementation.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              This approach ensures innovation is inclusive, usable, and scalable.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 md:p-6 rounded-xl border hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <activity.icon className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
              </div>

              <h4 className="text-base md:text-lg text-gray-900 mb-2">
                {activity.title}
              </h4>

              <p className="text-xs md:text-sm text-gray-600">
                {activity.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}