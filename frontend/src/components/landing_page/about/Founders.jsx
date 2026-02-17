
// import { GraduationCap, Briefcase, Users, Globe, ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export function Founders() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-5xl mx-auto px-6">

//         {/* heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl text-gray-900 mb-3">
//             Founders & Strategic Leadership
//           </h2>
//           <p className="text-gray-600 max-w-3xl mx-auto">
//             Experienced leadership combining clinical research, strategic business direction,
//             and long-term commitment to India's healthcare transformation.
//           </p>
//         </div>

//         {/* founders */}
//         <div className="grid md:grid-cols-2 gap-6 mb-10">

//           {/* YC */}
//           <div className="bg-gradient-to-br from-teal-50 to-blue-50 border rounded-2xl p-6">
//             <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
//               <span className="text-white font-bold">YC</span>
//             </div>

//             <h3 className="text-xl text-center font-semibold">Yejoor Chawla</h3>
//             <p className="text-center text-teal-600 text-sm mb-4">Co-Founder</p>

//             <div className="space-y-3 text-sm">
//               <div className="flex gap-3">
//                 <GraduationCap className="w-4 h-4 text-teal-600 mt-1" />
//                 <div>
//                   <div className="font-semibold">BITS Pilani</div>
//                   <div className="text-gray-500">Undergraduate</div>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <GraduationCap className="w-4 h-4 text-indigo-600 mt-1" />
//                 <div>
//                   <div className="font-semibold">Master's in Clinical Research</div>
//                   <div className="text-gray-500">Central Government Institute</div>
//                 </div>
//               </div>

//               <p className="text-gray-600 pt-2 border-t">
//                 Bridges AI innovation with medical science, ensuring clinical rigor in platform development.
//               </p>
//             </div>
//           </div>

//           {/* SC */}
//           <div className="bg-gradient-to-br from-teal-50 to-blue-50 border rounded-2xl p-6">
//             <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
//               <span className="text-white font-bold">SC</span>
//             </div>

//             <h3 className="text-xl text-center font-semibold">Salil Chawla</h3>
//             <p className="text-center text-indigo-600 text-sm mb-4">Co-Founder</p>

//             <div className="space-y-3 text-sm">
//               <div className="flex gap-3">
//                 <GraduationCap className="w-4 h-4 text-indigo-600 mt-1" />
//                 <div>
//                   <div className="font-semibold">MBA, NMIMS</div>
//                   <div className="text-gray-500">1988 Batch</div>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <Briefcase className="w-4 h-4 text-teal-600 mt-1" />
//                 <div>
//                   <div className="font-semibold">Strategic Leadership</div>
//                   <div className="text-gray-500">Seasoned Business Executive</div>
//                 </div>
//               </div>

//               <p className="text-gray-600 pt-2 border-t">
//                 Brings decades of strategic leadership and entrepreneurial direction to the platform.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* mentorship */}
//         <div className="bg-gradient-to-r from-teal-600 to-indigo-600 text-white rounded-2xl p-6 mb-10 text-center">
//           <Users className="mx-auto mb-2" />
//           <h3 className="text-xl mb-2">Mentorship Network</h3>
//           <p className="text-sm max-w-3xl mx-auto">
//             Guided by respected leaders across local and global healthcare ecosystems,
//             reinforcing credibility, direction, and scale.
//           </p>
//         </div>

//         {/* commitment */}
//         <div className="bg-white border rounded-2xl p-6 mb-12">
//           <div className="flex gap-4">
//             <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
//               <Globe className="w-5 h-5 text-white" />
//             </div>
//             <div>
//               <h3 className="text-xl mb-2">Long-Term Commitment</h3>
//               <p className="text-gray-600">
//                 Deep commitment to leaving a lasting micro- and macro-level impact on India's
//                 healthcare landscape, guided by practical wisdom and global perspective.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* navigation cards */}
//         <div className="grid md:grid-cols-3 gap-4">
//           {[
//             { to: "/platform", title: "Platform Overview" },
//             { to: "/pharma40", title: "Pharma 4.0 Framework" },
//             { to: "/contact", title: "Collaborate With Us" },
//           ].map((l, i) => (
//             <Link key={i} to={l.to}
//               className="bg-white border rounded-xl p-5 hover:shadow-md transition"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <h5 className="font-semibold text-sm">{l.title}</h5>
//                 <ArrowRight className="w-4 h-4 text-teal-600" />
//               </div>
//               <p className="text-xs text-gray-500">
//                 Explore further details and opportunities.
//               </p>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


import { GraduationCap, Briefcase, Users, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Founders() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-3">
            Founders & Strategic Leadership
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experienced leadership combining clinical research, strategic business direction,
            and long-term commitment to India's healthcare transformation.
          </p>
        </div>

        {/* founders */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {/* YC */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 border rounded-2xl p-6">
  
          <div className="w-30 h-30 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow">
            <img
              src="/images/founder.jpeg"
              alt="Founder"
              className="w-full h-full object-cover object-[50%_70%]"
            />
          </div>
            <h3 className="text-xl text-center font-semibold">Yejoor Chawla</h3>
            <p className="text-center text-teal-600 text-sm mb-4">Co-Founder</p>

            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <GraduationCap className="w-4 h-4 text-teal-600 mt-1" />
                <div>
                  <div className="font-semibold">BITS Pilani</div>
                  <div className="text-gray-500">Undergraduate</div>
                </div>
              </div>

              <div className="flex gap-3">
                <GraduationCap className="w-4 h-4 text-indigo-600 mt-1" />
                <div>
                  <div className="font-semibold">Master's in Clinical Research</div>
                  <div className="text-gray-500">Central Government Institute</div>
                </div>
              </div>

              <p className="text-gray-600 pt-2 border-t">
                Bridges AI innovation with medical science, ensuring clinical rigor in platform development.
              </p>
            </div>
          </div>

          {/* SC */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 border rounded-2xl p-6">
            <div className="w-30 h-30 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow">
              {/* <span className="text-white font-bold text-lg">SC</span> */}
              <img className="w-full h-full ml-0.5" src="/images/coFounder.jpeg" alt="" />
            </div>

            <h3 className="text-xl text-center font-semibold">Salil Chawla</h3>
            <p className="text-center text-indigo-600 text-sm mb-4">Co-Founder</p>

            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <GraduationCap className="w-4 h-4 text-indigo-600 mt-1" />
                <div>
                  <div className="font-semibold">MBA, NMIMS</div>
                  <div className="text-gray-500">1988 Batch</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Briefcase className="w-4 h-4 text-teal-600 mt-1" />
                <div>
                  <div className="font-semibold">Strategic Leadership</div>
                  <div className="text-gray-500">Seasoned Business Executive</div>
                </div>
              </div>

              <p className="text-gray-600 pt-2 border-t">
                Brings decades of strategic leadership and entrepreneurial direction to the platform.
              </p>
            </div>
          </div>

          {/* 🔥 NEW COLUMN */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 border rounded-2xl p-6">
            <div className="w-30 h-30 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow">
              {/* <span className="text-white font-bold text-lg">RC</span> */}
              <img className="w-full h-full" src="/images/chiefMentor.jpeg" alt="" />
            </div>

            <h3 className="text-xl text-center font-semibold">Dr. Rajiv Chawla</h3>
            <p className="text-center text-teal-700 text-sm mb-4">Chief Mentor</p>

            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <Briefcase className="w-4 h-4 text-teal-600 mt-1" />
                <div>
                  <div className="font-semibold">Renowned Diabetologist</div>
                  <div className="text-gray-500">Founder, NDDCC</div>
                </div>
              </div>

              <p className="text-gray-600 pt-2 border-t">
                Provides strategic clinical mentorship and decades of experience in diabetes care,
                guiding evidence-based and patient-centric innovation.
              </p>
            </div>
          </div>

        </div>

        {/* mentorship */}
        <div className="bg-gradient-to-r from-teal-600 to-indigo-600 text-white rounded-2xl p-6 mb-10 text-center">
          <Users className="mx-auto mb-2" />
          <h3 className="text-xl mb-2">Mentorship Network</h3>
          <p className="text-sm max-w-3xl mx-auto">
            Guided by respected leaders across local and global healthcare ecosystems,
            reinforcing credibility, direction, and scale.
          </p>
        </div>

        {/* commitment */}
        <div className="bg-white border rounded-2xl p-6 mb-12">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl mb-2">Long-Term Commitment</h3>
              <p className="text-gray-600">
                Deep commitment to leaving a lasting micro- and macro-level impact on India's
                healthcare landscape, guided by practical wisdom and global perspective.
              </p>
            </div>
          </div>
        </div>

        {/* navigation */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { to: "/platform", title: "Platform Overview" },
            { to: "/pharma40", title: "Pharma 4.0 Framework" },
            { to: "/contact", title: "Collaborate With Us" },
          ].map((l, i) => (
            <Link key={i} to={l.to}
              className="bg-white border rounded-xl p-5 hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h5 className="font-semibold text-sm">{l.title}</h5>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </div>
              <p className="text-xs text-gray-500">
                Explore further details and opportunities.
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}


