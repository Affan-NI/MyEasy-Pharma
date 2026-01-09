import { Stethoscope, Microscope, Building2, Users, User, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export function UseCases() {
  const useCases = [
    {
      icon: Stethoscope,
      stakeholder: 'Doctors & Clinicians',
      description: 'AI-assisted longitudinal health mapping between visits',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Microscope,
      stakeholder: 'Pharma & Research Organisations',
      description: 'Real-world evidence and therapy insights',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Building2,
      stakeholder: 'Hospitals & Clinics',
      description: 'Interoperable systems via secure APIs, reducing duplication',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    {
      icon: Users,
      stakeholder: 'Payers & Policymakers',
      description: 'Outcome-driven population health intelligence',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    },
    {
      icon: User,
      stakeholder: 'Patients',
      description: 'Personalised, preventive, and continuous care—especially for diabetes',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Activity,
      stakeholder: 'Care Coordinators',
      description: 'Comprehensive health tracking and intervention support',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Real-World Use Cases Across Stakeholders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform delivers value across the entire healthcare ecosystem—
              from clinicians to patients, researchers to policymakers
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div 
                  key={index}
                  className={`p-6 bg-white rounded-xl border ${useCase.borderColor} hover:shadow-lg transition-all group`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{useCase.stakeholder}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{useCase.description}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 rounded-2xl shadow-lg max-w-3xl">
              <p className="text-white text-lg leading-relaxed">
                A unified platform serving <span className="font-semibold">diverse stakeholders</span> with 
                contextual, actionable intelligence tailored to their unique needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
