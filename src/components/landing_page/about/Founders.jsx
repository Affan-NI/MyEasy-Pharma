import { GraduationCap, Briefcase, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function Founders() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
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
              Founders, Mentorship & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Led by founders with deep expertise in clinical research and strategic leadership, 
              guided by mentors across local and global healthcare ecosystems
            </p>
          </motion.div>

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Founder 1 */}
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-indigo-200 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">YC</span>
              </div>
              <h3 className="text-2xl text-gray-900 text-center mb-2">Yejoor Chawla</h3>
              <p className="text-center text-indigo-600 mb-6">Co-Founder</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">BITS Pilani</div>
                    <div className="text-sm text-gray-600">Undergraduate</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Master's in Clinical Research</div>
                    <div className="text-sm text-gray-600">Central Government Institute</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Bridges AI innovation with medical science, bringing clinical rigor to 
                    technology development
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">SC</span>
              </div>
              <h3 className="text-2xl text-gray-900 text-center mb-2">Salil Chawla</h3>
              <p className="text-center text-blue-600 mb-6">Co-Founder</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">MBA, NMIMS</div>
                    <div className="text-sm text-gray-600">1988 Batch</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Strategic Leadership</div>
                    <div className="text-sm text-gray-600">Seasoned Business Executive</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Brings decades of strategic leadership, business acumen, and 
                    entrepreneurial vision to the platform
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mentorship */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-10 text-white mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-8 h-8" />
              <h3 className="text-2xl">Mentorship Network</h3>
            </div>
            <p className="text-lg text-center leading-relaxed max-w-4xl mx-auto mb-6">
              The platform benefits from active mentorship by <span className="font-semibold">respected leaders across 
              local and global healthcare ecosystems</span>, reinforcing credibility, direction, and scale.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold mb-1">Strategic Guidance</div>
                <div className="text-sm text-indigo-100">Business & market positioning</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-3xl mb-2">🏥</div>
                <div className="font-semibold mb-1">Clinical Expertise</div>
                <div className="text-sm text-indigo-100">Medical validation & insights</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-3xl mb-2">🌍</div>
                <div className="font-semibold mb-1">Global Perspective</div>
                <div className="text-sm text-indigo-100">International collaboration</div>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 mb-4">Long-Term Commitment</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The founders are deeply committed to leaving a <span className="font-semibold text-gray-900">
                  lasting micro- and macro-level impact</span> on India's healthcare landscape. 
                  Supported by mentors who matter—both locally and globally—the platform is guided by 
                  practical wisdom, regulatory awareness, and international perspective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
