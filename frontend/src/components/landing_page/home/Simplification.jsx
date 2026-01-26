import { Users, Lightbulb, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export function Simplification() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-4">
              <Lightbulb className="w-4 h-4 text-teal-600" />
              <span className="text-sm text-teal-600 font-semibold">Knowledge Transfer</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Simplification as a Service
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Technology adoption fails when complexity overwhelms stakeholders. Beyond our platform, 
              we run an active outreach exercise to help healthcare and pharmaceutical trade 
              <span className="font-semibold"> decode and unpack Pharma 4.0</span> in the simplest, most practical manner.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left - Problem */}
            <motion.div 
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-sm">!</span>
                The Challenge
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Advanced concepts like AI-driven analytics, real-world evidence, and interoperability 
                can seem abstract and inaccessible to B2B professionals, enterprises, and institutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Without practical understanding, transformative technologies remain unutilized—
                creating a gap between innovation potential and ground-level adoption.
              </p>
            </motion.div>

            {/* Right - Solution */}
            <motion.div 
              className="bg-gradient-to-br from-teal-500 to-blue-600 text-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span>
                Our Approach
              </h3>
              <p className="mb-4 leading-relaxed">
                We translate advanced concepts into <span className="font-semibold">clear adoption roadmaps</span>, 
                empowering stakeholders to move confidently from awareness to implementation.
              </p>
              <p className="leading-relaxed">
                This "simplification-as-a-service" approach ensures that innovation is inclusive, 
                usable, and scalable across the healthcare value chain.
              </p>
            </motion.div>
          </div>

          {/* Activities */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Structured Interactions", desc: "Engaging directly with healthcare and pharma trade professionals", color: "teal" },
              { icon: BookOpen, title: "Knowledge Sessions", desc: "Practical training on Pharma 4.0 concepts and applications", color: "blue" },
              { icon: ArrowRight, title: "Platform-Led Insights", desc: "Real-world demonstrations of technology in action", color: "indigo" }
            ].map((activity, index) => (
              <motion.div 
                key={index}
                className={`bg-white p-6 rounded-xl border border-${activity.color}-200`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 bg-${activity.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <activity.icon className={`w-6 h-6 text-${activity.color}-600`} />
                </div>
                <h4 className="text-lg text-gray-900 mb-2">{activity.title}</h4>
                <p className="text-sm text-gray-600">{activity.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Outcome */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white px-8 py-6 rounded-2xl border-2 border-teal-300 shadow-md max-w-3xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-teal-600">Result:</span> This service-led approach ensures 
                that innovation is inclusive, usable, and scalable—enabling stakeholders to move from 
                awareness to action with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
