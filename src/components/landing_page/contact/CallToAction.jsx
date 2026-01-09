import { ArrowRight, Users, Lightbulb, Heart, Sparkles } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Join the Transformation</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl text-center mb-6 leading-tight">
            Co-Create the Pharma 4.0 Future
          </h2>
          
          <p className="text-xl text-center mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Making measurable impact at micro and macro levels in a globalised healthcare world 
            built on shared vision, pooled resources, and collective wisdom
          </p>

          {/* Core Values */}
          <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="w-8 h-8" />
              </div>
              <div className="text-lg font-semibold">Learn</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-8 h-8" />
              </div>
              <div className="text-lg font-semibold">Integrate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-lg font-semibold">Collaborate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8" />
              </div>
              <div className="text-lg font-semibold">Transform</div>
            </div>
          </div>

          {/* Who We Invite */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 mb-10 border border-white/20">
            <h3 className="text-2xl text-center mb-6">We Invite</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="font-semibold mb-1">Clinicians</div>
                <div className="text-sm text-blue-100">Healthcare Providers</div>
              </div>
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="font-semibold mb-1">Pharma Leaders</div>
                <div className="text-sm text-blue-100">Industry Executives</div>
              </div>
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="font-semibold mb-1">Innovators</div>
                <div className="text-sm text-blue-100">Tech Entrepreneurs</div>
              </div>
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="font-semibold mb-1">Researchers</div>
                <div className="text-sm text-blue-100">Academic Institutions</div>
              </div>
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="font-semibold mb-1">Partners</div>
                <div className="text-sm text-blue-100">Ecosystem Builders</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group text-lg font-semibold shadow-lg">
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all text-lg font-semibold">
              Schedule a Demo
            </button>
          </div>

          {/* Tagline */}
          <div className="mt-12 text-center">
            <p className="text-2xl font-semibold tracking-wide">
              Learn. Integrate. Collaborate. Transform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
