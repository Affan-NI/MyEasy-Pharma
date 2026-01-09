import { Smartphone, Globe, MessageSquare, Database, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function SaaSEcosystem() {
  return (
    <section id="platform" className="py-20 bg-white">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-semibold">Our Technology</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Our AI-Powered SaaS Ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our App, Web Application, and AI ChatBot ecosystem—currently in beta with AI validation—
              is trained on anonymised real-world data from live diabetic centres.
            </p>
          </motion.div>

          {/* Hospital/Lab Image */}
          <motion.div 
            className="mb-12 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1631557676757-fcc7b1160be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2NzcwNzMzOXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Medical Research Laboratory"
              className="w-full h-[350px] object-cover"
            />
          </motion.div>

          {/* Platform Components */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Smartphone, title: "Mobile App", desc: "Patient-facing application for continuous health monitoring and care", color: "blue" },
              { icon: Globe, title: "Web Application", desc: "Clinician dashboard for comprehensive patient analytics and insights", color: "indigo" },
              { icon: MessageSquare, title: "AI ChatBot", desc: "Intelligent assistant for instant health guidance and query resolution", color: "purple" }
            ].map((platform, index) => (
              <motion.div 
                key={index}
                className={`p-8 bg-gradient-to-br from-${platform.color}-50 to-${platform.color}-100 rounded-2xl border-2 border-${platform.color}-300 shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-${platform.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{platform.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{platform.desc}</p>
                <div className={`inline-block px-3 py-1 bg-${platform.color}-200 text-${platform.color}-700 text-xs rounded-full`}>
                  Beta
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Capabilities */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10 border border-gray-200 mb-12">
            <h3 className="text-2xl text-gray-900 mb-6 text-center">Platform Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">Comprehensive Data Analysis</h4>
                  <p className="text-sm text-gray-600">
                    Analysing exhaustive clinical, lifestyle, and behavioural parameters
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">Interoperable Reports</h4>
                  <p className="text-sm text-gray-600">
                    Clinician-ready reports that integrate seamlessly with credible third-party platforms
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">AI Validation</h4>
                  <p className="text-sm text-gray-600">
                    Trained on anonymised real-world data from live diabetic centres
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">Secure & Compliant</h4>
                  <p className="text-sm text-gray-600">
                    Built with healthcare data security and regulatory compliance at its core
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Source */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-6 rounded-2xl shadow-lg max-w-3xl">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold">Real-World Validation:</span> Our AI models are trained on 
                anonymised data from live diabetic centres, ensuring clinically relevant and 
                contextually accurate insights for diabetes care and management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
