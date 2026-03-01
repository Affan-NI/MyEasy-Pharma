import { Database, Cloud, TrendingUp, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export function Pharma40() {
  return (
    <section id="pharma40" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Pharma 4.0: From Tools to Intelligent Systems
          </h2>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Pharma 4.0 represents a shift from isolated digital tools to
            connected, learning systems that support better decisions and
            continuous care.
          </p>
        </motion.div>

        {/* Components */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          {[
            {
              icon: Database,
              title: "Real-World Data",
              desc: "Insights from live health data",
            },
            {
              icon: Share2,
              title: "Interoperability",
              desc: "Connected healthcare systems",
            },
            {
              icon: Cloud,
              title: "Cloud Platforms",
              desc: "Scalable and secure infrastructure",
            },
            {
              icon: TrendingUp,
              title: "Predictive Insights",
              desc: "Early pattern recognition",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="
                p-5 rounded-xl
                bg-gradient-to-br from-green-50 to-teal-50
                border border-green-200
                shadow-sm hover:shadow-md
                transition-all
                "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="w-11 h-11 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom strip */}
        <motion.div
          className="
          bg-gradient-to-r from-green-600 to-teal-600
          text-white rounded-xl p-5 text-center text-sm shadow
          "
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          Pharma 4.0 enables connected intelligence across healthcare systems,
          improving awareness, coordination and long-term care outcomes.
        </motion.div>
      </div>
    </section>
  );
}

