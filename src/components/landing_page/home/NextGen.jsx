import { Users, Code, Microscope, BarChart, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function NextGen() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-indigo-600 font-semibold">Team & Vision</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              A Platform Curated by the Next Generation
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At the heart of our ecosystem is a growing network of young, enthusiastic professionals—
              actively curating and refining the platform for India's healthcare domain.
            </p>
          </motion.div>

          {/* Team Image */}
          <motion.div 
            className="mb-12 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1760920248606-4a151ef75cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5ub3ZhdGlvbiUyMGZ1dHVyZXxlbnwxfHx8fDE3Njc3NzA5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Medical Innovation Future"
              className="w-full h-[350px] object-cover"
            />
          </motion.div>

          {/* Team Composition */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Code, title: "Technologists", desc: "Building scalable AI systems", color: "blue" },
              { icon: Microscope, title: "Clinicians", desc: "Ensuring clinical validity", color: "green" },
              { icon: BarChart, title: "Researchers", desc: "Advancing healthcare science", color: "purple" },
              { icon: BarChart, title: "Analysts", desc: "Extracting data insights", color: "teal" }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className={`text-center p-6 bg-gradient-to-br from-${member.color}-50 to-${member.color}-100 rounded-xl border border-${member.color}-200`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-14 h-14 bg-${member.color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <member.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg text-gray-900 mb-1">{member.title}</h3>
                <p className="text-sm text-gray-600">{member.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Message */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-10 text-white mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl mb-4">Guided by Unwavering Commitment</h3>
                <p className="text-lg leading-relaxed opacity-95">
                  Driven by the founders' <span className="font-semibold">tireless efforts, unwavering resolve, 
                  and long-term commitment to impact</span>, the platform blends fresh thinking with disciplined 
                  execution—ensuring relevance today and resilience tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-xl text-gray-900 mb-4">Building for Today</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Real-world validation in live diabetic centres</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Interoperable with existing healthcare systems</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Clinician-ready insights and reports</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <h4 className="text-xl text-gray-900 mb-4">Building for Tomorrow</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-indigo-600 mt-1">→</span>
                  <span>Scalable architecture for national deployment</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-indigo-600 mt-1">→</span>
                  <span>Global healthcare collaboration readiness</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-indigo-600 mt-1">→</span>
                  <span>Continuous AI learning and improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
