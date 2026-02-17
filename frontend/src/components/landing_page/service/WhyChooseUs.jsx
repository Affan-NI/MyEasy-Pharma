// import { ShieldCheck, Users, DollarSign, Truck, Heart } from 'lucide-react';

// export function WhyChooseUs() {
//   const reasons = [
//     {
//       icon: ShieldCheck,
//       title: 'Genuine Medicines',
//       description: '100% authentic products from verified manufacturers'
//     },
//     {
//       icon: Users,
//       title: 'Licensed Pharmacists',
//       description: 'Expert guidance from qualified healthcare professionals'
//     },
//     {
//       icon: DollarSign,
//       title: 'Affordable Prices',
//       description: 'Best prices with regular discounts and offers'
//     },
//     {
//       icon: Truck,
//       title: 'Fast & Safe Delivery',
//       description: 'Quick delivery with proper packaging and handling'
//     },
//     {
//       icon: Heart,
//       title: 'Trusted Healthcare Partner',
//       description: 'Serving families with care and commitment'
//     }
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl text-gray-900 mb-3">Why Choose Our Pharmacy</h2>
//           <p className="text-gray-600">Your health and trust are our top priorities</p>
//         </div>

//         {/* Reasons Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
//           {reasons.map((reason, index) => {
//             const Icon = reason.icon;
//             return (
//               <div 
//                 key={index}
//                 className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors"
//               >
//                 <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Icon className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-lg text-gray-900 mb-2">{reason.title}</h3>
//                 <p className="text-sm text-gray-600">{reason.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
import { ShieldCheck, Users, HeartHandshake, Clock, Smile } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Trusted Care",
      description:
        "Reliable and consistent healthcare support you can depend on every day.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Guidance from experienced and supportive healthcare professionals.",
    },
    {
      icon: HeartHandshake,
      title: "Patient First",
      description:
        "Focused on long-term wellness with a patient-first approach.",
    },
    {
      icon: Clock,
      title: "Always Available",
      description:
        "Reach out anytime for support, questions or assistance.",
    },
    {
      icon: Smile,
      title: "Friendly Support",
      description:
        "Simple, approachable and stress-free experience for users.",
    },
  ];

  return (
    <section className="pb-10 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Why Choose Us
          </h2>
          <p className="text-gray-600">
            Reliable support for your everyday health journey
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                group 
                bg-white 
                rounded-2xl 
                shadow-sm 
                hover:shadow-2xl 
                transition-all 
                duration-500 
                ease-out 
                p-5 
                text-center
                hover:-translate-y-1
                "
              >
                {/* Icon */}
                <div className="
                  w-12 h-12 mx-auto mb-3 rounded-full 
                  bg-gradient-to-r from-green-600 to-teal-600 
                  flex items-center justify-center
                  transition-all duration-500
                  group-hover:scale-110
                ">
                  <Icon className="text-white w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Expand container */}
                <div
                  className="
                  grid 
                  transition-all 
                  duration-500 
                  ease-in-out
                  [grid-template-rows:0fr]
                  group-hover:[grid-template-rows:1fr]
                "
                >
                  <div className="overflow-hidden">
                    <p className="
                      text-xs text-gray-600 mt-3
                      opacity-0 
                      translate-y-2
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all duration-500 delay-100
                    ">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


