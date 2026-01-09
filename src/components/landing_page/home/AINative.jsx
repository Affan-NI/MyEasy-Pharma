import { Brain, Zap, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function AINative() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
              <Brain className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-600 font-semibold">Core Differentiator</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Our AI-Native DNA
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our platform is built with <span className="font-semibold text-purple-600">AI-native DNA</span>, 
              not as an add-on but as its architectural foundation. AI is embedded across data ingestion, 
              validation, analytics, decision support, and reporting layers.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="mb-12 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1569396116180-210c182bedb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaGVhbHRoJTIwZGF0YXxlbnwxfHx8fDE3Njc3NzA5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Digital Health Data"
              className="w-full h-[350px] object-cover"
            />
          </motion.div>

          {/* Visual Architecture */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-10 border border-purple-200">
              <div className="grid md:grid-cols-5 gap-4 mb-6">
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
          </motion.div>

          {/* Benefits Grid */}
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
          </div>

          {/* Key Outcome */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-6 rounded-2xl shadow-lg max-w-3xl">
              <p className="text-lg leading-relaxed">
                The result: <span className="font-semibold">Clinically meaningful insights</span> rather than static dashboards—
                creating a defensible technology moat that strengthens with real-world usage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
