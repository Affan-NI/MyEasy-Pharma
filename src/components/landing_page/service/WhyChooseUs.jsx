import { ShieldCheck, Users, DollarSign, Truck, Heart } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Genuine Medicines',
      description: '100% authentic products from verified manufacturers'
    },
    {
      icon: Users,
      title: 'Licensed Pharmacists',
      description: 'Expert guidance from qualified healthcare professionals'
    },
    {
      icon: DollarSign,
      title: 'Affordable Prices',
      description: 'Best prices with regular discounts and offers'
    },
    {
      icon: Truck,
      title: 'Fast & Safe Delivery',
      description: 'Quick delivery with proper packaging and handling'
    },
    {
      icon: Heart,
      title: 'Trusted Healthcare Partner',
      description: 'Serving families with care and commitment'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-3">Why Choose Our Pharmacy</h2>
          <p className="text-gray-600">Your health and trust are our top priorities</p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
