import { TrendingUp, Database, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function IndiasMoment() {
  return (
    <section className="py-20 bg-gray-50">
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
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              India's Moment: Why Pharma 4.0 Matters Now
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              India is at a critical inflection point—rising chronic disease burden (notably diabetes), 
              fragmented data silos, and accelerating digital adoption.
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
              src="https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc3NzA5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Medical Technology"
              className="w-full h-[350px] object-cover"
            />
          </motion.div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Legacy Systems */}
            <div className="p-8 bg-white rounded-xl border-2 border-gray-300">
              <div className="text-sm text-gray-500 mb-2">Traditional Approach</div>
              <h3 className="text-2xl text-gray-900 mb-4">Legacy Systems</h3>
              <p className="text-gray-600 mb-4">Digitize records and store information</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>Isolated data silos</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>No actionable insights</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>Reactive healthcare</span>
                </li>
              </ul>
            </div>

            {/* Pharma 4.0 */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-400 shadow-lg">
              <div className="text-sm text-blue-600 mb-2">Modern Approach</div>
              <h3 className="text-2xl text-gray-900 mb-4">Pharma 4.0 Systems</h3>
              <p className="text-gray-600 mb-4">Generate intelligence and enable action</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Interconnected ecosystem</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Real-time insights</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Proactive care</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Impact Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg text-gray-900 mb-2">Continuous Care</h4>
              <p className="text-sm text-gray-600">Beyond episodic treatment</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="text-lg text-gray-900 mb-2">Real-World Evidence</h4>
              <p className="text-sm text-gray-600">Faster clinical insights</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-teal-600" />
              </div>
              <h4 className="text-lg text-gray-900 mb-2">Regulatory Readiness</h4>
              <p className="text-sm text-gray-600">Aligned with ABDM</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-lg text-gray-900 mb-2">Innovation Hub</h4>
              <p className="text-sm text-gray-600">Global leadership position</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
