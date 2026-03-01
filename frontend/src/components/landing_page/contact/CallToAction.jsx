

// import { ArrowRight, Users, Lightbulb, Heart, Sparkles } from "lucide-react";
// import { motion } from "framer-motion";

// export function CallToAction({ onContactClick, onDemoClick }) {
//   return (
//     <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 relative overflow-hidden">
//       <div className="container mx-auto px-6 relative">
//         <div className="max-w-5xl mx-auto">

//           {/* Badge */}
//           <div className="flex justify-center mb-6">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
//               <Sparkles className="w-4 h-4 text-teal-600" />
//               <span className="text-sm text-teal-700 font-semibold">
//                 Join the Transformation
//               </span>
//             </div>
//           </div>

//           {/* Heading */}
//           <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-900 leading-tight">
//             Co-Create the Pharma 4.0 Future
//           </h2>

//           <p className="text-lg text-center mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Making measurable impact at micro and macro levels in a globalised healthcare world 
//             built on shared vision, pooled resources, and collective wisdom
//           </p>

          {/* Core Values */}
          // <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
          //   {[
          //     { icon: Lightbulb, label: "Learn" },
          //     { icon: ArrowRight, label: "Integrate" },
          //     { icon: Users, label: "Collaborate" },
          //     { icon: Heart, label: "Transform" },
          //   ].map((item, i) => (
          //     <div
          //       key={i}
          //       className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm"
          //     >
          //       <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
          //         <item.icon className="w-6 h-6 text-teal-600" />
          //       </div>
          //       <div className="text-base font-semibold text-gray-800">
          //         {item.label}
          //       </div>
          //     </div>
          //   ))}
          // </div>

//           {/* Invite Section */}
//           <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-10">
//             <h3 className="text-2xl text-center mb-6 text-gray-900">
//               Who Can Collaborate
//             </h3>

//             <div className="max-w-3xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

//               {[
//                 {
//                   title: "Doctors & Clinicians",
//                   desc: "AI-assisted longitudinal patient insights between visits."
//                 },
//                 {
//                   title: "Pharma & Research",
//                   desc: "Real-world evidence and therapy performance intelligence."
//                 },
//                 {
//                   title: "Hospitals & Clinics",
//                   desc: "Interoperable systems via secure APIs and unified records."
//                 },
//                 {
//                   title: "Payers & Policymakers",
//                   desc: "Outcome-driven population health analytics and insights."
//                 },
//                 {
//                   title: "Patients",
//                   desc: "Personalised, preventive and continuous care journeys."
//                 },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="group rounded-xl border bg-teal-50 hover:bg-white transition p-4 cursor-pointer"
//                 >
//                   {/* title */}
//                   <div className="font-semibold text-gray-900 text-sm">
//                     {i + 1}. {item.title}
//                   </div>

//                   {/* hover content */}
//                   <div className="text-xs text-gray-600 mt-2 max-h-0 overflow-hidden 
//                                   group-hover:max-h-20 transition-all duration-300">
//                     {item.desc}
//                   </div>
//                 </div>
//               ))}

//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <motion.button
//               onClick={onContactClick}
//               className="px-7 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold shadow-md"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get in Touch
//               <ArrowRight className="w-4 h-4" />
//             </motion.button>

//             <motion.button
//               onClick={onDemoClick}
//               className="px-7 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600/10 font-semibold"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Schedule a Demo
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { ArrowRight, Users, Lightbulb, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CallToAction({ onContactClick, onDemoClick }) {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 relative overflow-hidden">

      {/* glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-100 via-white to-indigo-100 blur-3xl opacity-60"/>

      <div className="max-w-5xl mx-auto px-6">

        {/* badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm text-teal-700 font-semibold">
              Join the Transformation
            </span>
          </div>
        </div>

        {/* heading */}
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-900 font-bold">
          Co-Create the Pharma 4.0 Future
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Building measurable healthcare impact through shared intelligence,
          collaboration, and next-generation digital infrastructure.
        </p>

        {/* CORE STEPS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            {[
              { icon: Lightbulb, label: "Learn" },
              { icon: ArrowRight, label: "Integrate" },
              { icon: Users, label: "Collaborate" },
              { icon: Heart, label: "Transform" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-3 text-center shadow-sm"
              >
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                  <item.icon className="w-4 h-4 text-teal-600" />
                </div>
                <div className="text-base font-semibold text-gray-800">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        {/* <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-10"> */}
             <h3 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
               We invite
             </h3>

        {/* 🔥 PREMIUM HOVER CARDS */}
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">

          {[
            {
              title: "Doctors & Clinicians",
              desc: "AI-driven patient timelines and decision support between visits.",
              icon: "🩺"
            },
            {
              title: "Pharma & Research",
              desc: "Real-world therapy insights and outcome intelligence.",
              icon: "💊"
            },
            {
              title: "Hospitals & Clinics",
              desc: "Secure interoperable systems and unified patient records.",
              icon: "🏥"
            },
            {
              title: "Payers & Policymakers",
              desc: "Population-level outcome analytics and risk insights.",
              icon: "📊"
            },
            {
              title: "Patients",
              desc: "Preventive, personalised and continuous care journeys.",
              icon: "❤️"
            },
            {
            title: "Innovators",
            desc: "Co-create AI, IoT and digital therapeutics to advance Pharma 4.0 care models.",
            icon: "🚀"
            }

          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-xl border p-4 hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex items-center gap-2 font-semibold text-gray-900 text-sm">
                <span className="text-lg">{item.icon}</span>
                {item.title}
              </div>

              {/* hover content */}
              <div className="text-xs text-gray-600 mt-2 opacity-0 max-h-0 overflow-hidden
                              group-hover:opacity-100 group-hover:max-h-20
                              transition-all duration-300">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <motion.button
            onClick={onContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md flex items-center gap-2"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4"/>
          </motion.button>

          {/* <motion.button
            onClick={onDemoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold"
          >
            Schedule Demo
          </motion.button> */}

        </div>

      </div>
    </section>
  );
}


