import { Activity, Brain, LineChart, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function DataToAction() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            From Data to Actionable Care
          </h2>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Modern healthcare systems must move beyond storing data and begin
            translating real-world health signals into meaningful, actionable
            insights that support continuous care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-5">
          {[
            {
              icon: Activity,
              title: "Continuous Health Signals",
              desc: "Glucose, lifestyle and behavioural trends tracked over time",
            },
            {
              icon: Brain,
              title: "Structured Intelligence",
              desc: "Data transformed into meaningful health indicators",
            },
            {
              icon: LineChart,
              title: "Risk Awareness",
              desc: "Early patterns highlight areas needing attention",
            },
            {
              icon: Shield,
              title: "Care Guidance",
              desc: "Supports informed decisions and timely intervention",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="w-11 h-11 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
