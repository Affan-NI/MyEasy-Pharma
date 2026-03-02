import { motion } from "framer-motion";

export function HealthScoreLayer() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Interpreting Health Through Structured Signals
          </h2>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            By combining multiple behavioural, clinical and lifestyle
            indicators, digital health platforms can generate simplified health
            views that support better awareness and proactive care decisions.
          </p>
        </motion.div>

        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-6 text-center">
          <p className="text-sm md:text-base leading-relaxed">
            Instead of isolated readings, structured scoring approaches can
            summarise overall health stability, lifestyle risk patterns and
            stress-related impacts — enabling individuals and care teams to
            recognise trends early and act before complications escalate.
          </p>
        </div>
      </div>
    </section>
  );
}
