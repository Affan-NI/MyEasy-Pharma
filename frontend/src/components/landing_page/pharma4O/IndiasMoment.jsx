// import { TrendingUp, Database, Zap, Globe } from "lucide-react";
// import { motion } from "framer-motion";

// export function IndiasMoment() {
//   return (
//     <section className="py-14 bg-green-10">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* Header */}
//         <motion.div
//           className="text-center mb-8"
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//         >
//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
//             Why This Matters Now
//           </h2>

//           <p className="text-sm text-gray-600 max-w-xl mx-auto">
//             Rising chronic conditions, digital adoption and connected systems
//             are reshaping how healthcare can be delivered and coordinated.
//           </p>
//         </motion.div>

//         {/* Comparison */}
//         <div className="grid md:grid-cols-2 gap-5 mb-8">

//           {/* Legacy */}
//           <div className="p-5 bg-white rounded-xl border border-gray-200">
//             <div className="text-xs text-gray-500 mb-1">Traditional</div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">
//               Legacy Systems
//             </h3>

//             <ul className="space-y-1 text-xs text-gray-600">
//               <li>✕ Isolated data</li>
//               <li>✕ Reactive care</li>
//               <li>✕ Limited insights</li>
//             </ul>
//           </div>

//           {/* Modern */}
//           <div className="
//             p-5 rounded-xl
//             bg-gradient-to-br from-green-100 to-teal-100
//             border border-green-300 shadow-sm
//           ">
//             <div className="text-xs text-green-700 mb-1">Modern</div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">
//               Connected Systems
//             </h3>

//             <ul className="space-y-1 text-xs text-gray-700">
//               <li>✓ Connected ecosystem</li>
//               <li>✓ Real-time insights</li>
//               <li>✓ Proactive care</li>
//             </ul>
//           </div>
//         </div>

//         {/* Impact */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
//           {[
//             { icon: TrendingUp, title: "Continuous Care" },
//             { icon: Database, title: "Real Data" },
//             { icon: Zap, title: "Faster Insights" },
//             { icon: Globe, title: "Digital Shift" },
//           ].map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl p-4 border border-gray-200 text-center"
//               >
//                 <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center">
//                   <Icon className="w-4 h-4 text-white" />
//                 </div>

//                 <h4 className="text-xs font-semibold text-gray-800">
//                   {item.title}
//                 </h4>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }

import { TrendingUp, Database, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function IndiasMoment() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Why This Moment Matters
          </h2>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Rising chronic conditions, fragmented data and growing digital
            adoption are reshaping healthcare. The shift now is from storing
            information to generating meaningful, connected insights that
            support continuous care.
          </p>
        </motion.div>

        {/* COMPARISON */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* OLD */}
          <motion.div
            className="
            bg-white rounded-xl p-6 border border-gray-200
            shadow-sm hover:shadow-md transition
            "
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="text-xs text-gray-500 mb-1">Traditional</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Fragmented Systems
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Data stored but not connected</li>
              <li>• Insights arrive too late</li>
              <li>• Care remains reactive</li>
            </ul>
          </motion.div>

          {/* NEW */}
          <motion.div
            className="
            relative overflow-hidden
            rounded-xl p-6
            bg-gradient-to-br from-green-100 to-teal-100
            border border-green-300
            shadow
            "
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {/* glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/30 blur-2xl rounded-full"></div>

            <div className="text-xs text-green-700 mb-1">Emerging Model</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Connected Intelligence
            </h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Interconnected data ecosystem</li>
              <li>• Real-time awareness</li>
              <li>• Proactive care decisions</li>
            </ul>
          </motion.div>
        </div>

        {/* IMPACT CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {[
            {
              icon: TrendingUp,
              title: "Continuous Care",
              desc: "Beyond episodic visits",
            },
            {
              icon: Database,
              title: "Real Data",
              desc: "Better decision support",
            },
            {
              icon: Zap,
              title: "Faster Signals",
              desc: "Early risk awareness",
            },
            {
              icon: Globe,
              title: "Digital Shift",
              desc: "Connected care systems",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                className="
                group text-center bg-white
                rounded-xl p-5 border border-gray-200
                shadow-sm hover:shadow-md
                transition-all
                "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="
                  w-11 h-11 mx-auto mb-2
                  bg-gradient-to-r from-green-600 to-teal-600
                  rounded-lg flex items-center justify-center
                  group-hover:scale-105 transition
                ">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h4 className="text-sm font-semibold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM LINE */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="
            inline-block px-6 py-3 rounded-full
            bg-gradient-to-r from-green-600 to-teal-600
            text-white text-sm shadow
          ">
            Moving from digital records → to meaningful, connected care
          </div>
        </motion.div>

      </div>
    </section>
  );
}
