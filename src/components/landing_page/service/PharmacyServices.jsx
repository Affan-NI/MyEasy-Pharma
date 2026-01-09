import { Pill, ShoppingBag, Truck, Shield, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function PharmacyServices() {
  const services = [
    {
      icon: Pill,
      title: 'Prescription Medicines',
      description: 'Quality prescription medications with pharmacist verification'
    },
    {
      icon: ShoppingBag,
      title: 'Healthcare Products',
      description: 'Diabetes care, supplements, and wellness products'
    },
    {
      icon: Truck,
      title: 'Home Delivery',
      description: 'Fast and safe delivery to your doorstep'
    },
    {
      icon: Shield,
      title: '100% Genuine',
      description: 'Authentic medicines from verified manufacturers'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Expert pharmacist guidance available anytime'
    },
    {
      icon: Phone,
      title: 'Easy Ordering',
      description: 'Order via app, web, or phone consultation'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
              <Pill className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600 font-semibold">Healthcare Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Comprehensive Pharmacy & Healthcare Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted pharmacy services integrated with our AI-powered healthcare platform—
              delivering quality medicines and continuous care support
            </p>
          </motion.div>

          {/* Pharmacy Image */}
          <motion.div 
            className="mb-12 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              // src={image_0ff7dd243794a79dff886211611c4758fc2577fb}
              src='/images/0ff7dd243794a79dff886211611c4758fc2577fb.png'
              alt="Pharmacy Medicines"
              className="w-full h-[350px] object-cover"
            />
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index}
                  className="p-6 bg-white rounded-xl border border-green-200 hover:shadow-lg hover:border-green-400 transition-all group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                    <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Integration Message */}
          <motion.div 
            className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 md:p-10 text-white text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl mb-4">Pharma 4.0 Meets Patient Care</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Our pharmacy services are seamlessly integrated with our AI-native platform, 
              enabling <span className="font-semibold">personalised medication management, 
              adherence tracking, and continuous health monitoring</span>—especially for chronic 
              conditions like diabetes.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Order Medicines
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Upload Prescription
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
