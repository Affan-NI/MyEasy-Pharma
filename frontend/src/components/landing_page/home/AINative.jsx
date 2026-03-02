import { Brain, Zap, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function AINative() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="w-full px-4 md:px-12 lg:px-20">
        <h2 className="text-xl md:text-3xl font-bold text-gray-700">
          Our Core Differentiator
        </h2>

        <motion.div
          className="mt-6 mb-6 bg-gradient-to-br from-purple-50 to-indigo-50 
                     rounded-2xl border border-purple-200 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3">
            <div className="relative md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1569396116180-210c182bedb8?auto=format&fit=crop&w=1200&q=80"
                alt="AI Architecture"
                className="w-full object-cover h-64 md:h-full"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t 
                              from-black/80 via-black/60 to-transparent 
                              flex items-end p-4 md:p-6"
              >
                <div className="text-white">
                  <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">
                    Our platform is built with
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-200">
                    <span className="font-semibold text-green-400">
                      AI-native DNA
                    </span>
                    , not as an add-on but as its architectural foundation. AI
                    is embedded across data ingestion, validation, analytics,
                    decision support, and reporting layers.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 p-4 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="text-center p-3 md:p-4 bg-white rounded-lg border border-purple-200">
                  <div className="text-xs text-gray-500 mb-1">Layer 1</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-900">
                    Data Ingestion
                  </div>
                  <Brain className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mx-auto mt-2" />
                </div>

                <div className="text-center p-3 md:p-4 bg-white rounded-lg border border-purple-200">
                  <div className="text-xs text-gray-500 mb-1">Layer 2</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-900">
                    Validation
                  </div>
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mx-auto mt-2" />
                </div>

                <div className="text-center p-3 md:p-4 bg-white rounded-lg border border-purple-200">
                  <div className="text-xs text-gray-500 mb-1">Layer 3</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-900">
                    Analytics
                  </div>
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mx-auto mt-2" />
                </div>

                <div className="text-center p-3 md:p-4 bg-white rounded-lg border border-purple-200">
                  <div className="text-xs text-gray-500 mb-1">Layer 4</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-900">
                    Decision Support
                  </div>
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mx-auto mt-2" />
                </div>

                <div className="text-center p-3 md:p-4 bg-white rounded-lg border border-purple-200 col-span-2 md:col-span-1">
                  <div className="text-xs text-gray-500 mb-1">Layer 5</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-900">
                    Reporting
                  </div>
                  <Brain className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mx-auto mt-2" />
                </div>
              </div>

              <div className="text-center text-xs md:text-sm text-gray-600">
                AI embedded at every layer of the platform architecture
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
