import { Building2, Award, Users, Lightbulb, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutUs() {
  const milestones = [
    { label: 'Incorporated', value: 'Nov 2024' },
    { label: 'Startup India', value: 'Registered' },
    { label: 'MSME', value: 'Registered' },
    { label: 'Legal Status', value: 'Compliant' }
  ];

  const incubations = [
    { name: 'GIMS, Noida', type: 'Current Incubation', highlight: true },
    { name: 'BITS Pilani', type: 'Pre-Incubation' },
    { name: 'IIM Lucknow', type: 'Pre-Incubation' }
  ];

  const institutions = [
    'BITS Pilani',
    'IIM Nagpur',
    'IIIT Delhi',
    'IIIT Lucknow',
    'DTU Delhi',
    'IIT Mumbai',
    'Bennett University',
    'Coimbatore AI Institutes',
    'Ex-Infosys Professionals',
    'JMI University Delhi'
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-semibold">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              About Us: MyEasy Pharma Pvt Ltd
            </h2>
          </motion.div>

          {/* Team Image */}
          <motion.div 
            className="mb-12 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
          
          </motion.div>

          {/* Company Overview */}
          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 border border-blue-200 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold text-blue-600">MyEasy Pharma Pvt Ltd</span> is a legally compliant, 
              Startup India and MSME registered company, incorporated in November 2024. We are building an 
              AI-native healthcare platform that bridges the gap between advanced technology and accessible, 
              outcome-driven patient care.
            </p>
            
            {/* Milestones */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg border border-blue-200">
                  <div className="text-sm text-gray-500 mb-1">{milestone.label}</div>
                  <div className="font-semibold text-gray-900">{milestone.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Incubation */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-indigo-600" />
              <h3 className="text-2xl text-gray-900">Incubation & Pre-Incubation</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {incubations.map((incubation, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl border-2 ${
                    incubation.highlight 
                      ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-indigo-700 shadow-lg' 
                      : 'bg-white text-gray-900 border-gray-200'
                  }`}
                >
                  <div className={`text-sm mb-2 ${incubation.highlight ? 'text-indigo-100' : 'text-gray-500'}`}>
                    {incubation.type}
                  </div>
                  <div className={`text-xl font-semibold ${incubation.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {incubation.name}
                  </div>
                  {incubation.highlight && (
                    <div className="mt-3 text-sm text-indigo-100">
                      Country's 1st health organisation with dedicated incubator
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Collaboration Network */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-6 h-6 text-teal-600" />
              <h3 className="text-2xl text-gray-900">Pan-India Collaboration</h3>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Over time, the platform has been shaped by interns and contributors from premier institutions 
              across India, bringing diverse perspectives and technical depth:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {institutions.map((institution, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200"
                >
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{institution}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mt-6 leading-relaxed">
              This <span className="font-semibold text-gray-900">diverse, pan-India collaboration</span> underpins 
              the platform's inclusive and scalable design philosophy, combining fresh thinking with 
              enterprise discipline.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-6 rounded-2xl shadow-lg max-w-3xl">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Lightbulb className="w-6 h-6" />
                <h4 className="text-xl font-semibold">Our Mission</h4>
              </div>
              <p className="text-lg leading-relaxed">
                Building technology that makes a <span className="font-semibold">measurable difference at both 
                micro and macro levels</span> in India's healthcare landscape—serving patients, empowering 
                clinicians, and driving the Pharma 4.0 transformation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
