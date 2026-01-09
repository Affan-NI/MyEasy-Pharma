import { Database, Cloud, TrendingUp, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Pharma40() {
  return (
    <section id="pharma40" className="py-20 bg-white">
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
              Pharma 4.0: From Technology Adoption to Shared Intelligence
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Pharma 4.0 represents a fundamental shift in healthcare—from isolated digital tools to 
              intelligent, learning, and interconnected systems. It integrates AI, real-world data, 
              interoperability, cloud platforms, and predictive analytics to enable outcome-driven 
              healthcare at scale.
            </p>
          </motion.div>

          {/* Key Components Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Database, title: "Real-World Data", desc: "Actionable intelligence from live clinical data", color: "blue" },
              { icon: Share2, title: "Interoperability", desc: "Connected systems across care continuum", color: "indigo" },
              { icon: Cloud, title: "Cloud Platforms", desc: "Scalable, secure infrastructure", color: "teal" },
              { icon: TrendingUp, title: "Predictive Analytics", desc: "Proactive healthcare insights", color: "purple" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`p-6 bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 rounded-xl border border-${item.color}-200`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-12 h-12 bg-${item.color}-600 rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Global Context */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-10 text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg md:text-xl leading-relaxed">
              In a post-pandemic world where borders have dissolved and collaboration defines progress, 
              <span className="font-semibold"> Pharma 4.0 has become the common language </span> 
              of a globalised healthcare ecosystem built on shared vision, pooled resources, and collective wisdom.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
