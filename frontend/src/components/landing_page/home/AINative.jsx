import { Brain, Zap, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function AINative() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-24">
          
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-bold text-gray-700">
          Our Core Differentiator
        </h2>

        {/* IMAGE + OVERLAY TEXT + LAYERS */}
        <motion.div
          className="mt-6 mb-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-200 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3">

            {/* 1/3 Image with Text Overlay */}
            <div className="relative md:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1569396116180-210c182bedb8?auto=format&fit=crop&w=1200&q=80"
                alt="AI Architecture"
                className="w-full h-full object-cover min-h-[350px]"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-3">
                     Our platform is built with 
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-200">
                    <span className="font-semibold text-green-600"> AI-native DNA</span>, 
                    not as an add-on but as its architectural foundation.
              AI is embedded across data ingestion, validation, analytics, 
              decision support, and reporting layers.
                  </p>
                </div>
              </div>
            </div>

            {/* 2/3 Layers */}
            <div className="md:col-span-2 p-8">

              <div className="grid md:grid-cols-3 gap-4 mb-6">

                <div className="text-center p-4 bg-white rounded-lg border border-purple-200">
                  <div className="text-xs text-gray-500 mb-1">Layer 1</div>
                  <div className="text-sm font-semibold text-gray-900">Data Ingestion</div>
                  <Brain className="w-6 h-6 text-purple-600 mx-auto mt-2" />
                </div>

                <div className="text-center p-4 bg-white rounded-lg border border-purple-200">
                  <div className="text-xs text-gray-500 mb-1">Layer 2</div>
                  <div className="text-sm font-semibold text-gray-900">Validation</div>
                  <Shield className="w-6 h-6 text-purple-600 mx-auto mt-2" />
                </div>

                <div className="text-center p-4 bg-white rounded-lg border border-purple-200">
                  <div className="text-xs text-gray-500 mb-1">Layer 3</div>
                  <div className="text-sm font-semibold text-gray-900">Analytics</div>
                  <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mt-2" />
                </div>

                <div className="text-center p-4 bg-white rounded-lg border border-purple-200">
                  <div className="text-xs text-gray-500 mb-1">Layer 4</div>
                  <div className="text-sm font-semibold text-gray-900">Decision Support</div>
                  <Zap className="w-6 h-6 text-purple-600 mx-auto mt-2" />
                </div>

                <div className="text-center p-4 bg-white rounded-lg border border-purple-200">
                  <div className="text-xs text-gray-500 mb-1">Layer 5</div>
                  <div className="text-sm font-semibold text-gray-900">Reporting</div>
                  <Brain className="w-6 h-6 text-purple-600 mx-auto mt-2" />
                </div>

              </div>

              <div className="text-center text-sm text-gray-600">
                AI embedded at every layer of the platform architecture
              </div>

            </div>
          </div>
        </motion.div>

        {/* Benefits Grid
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Continuous Learning</h3>
            <p className="text-sm text-gray-600">
              Systems that learn and improve with every interaction
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Real-Time Adaptation</h3>
            <p className="text-sm text-gray-600">
              Contextual intelligence that adapts to changing patterns
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Defensible Moat</h3>
            <p className="text-sm text-gray-600">
              Technology advantage that strengthens with domain-specific usage
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
