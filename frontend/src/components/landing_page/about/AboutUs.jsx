
import { Building2, Users, Lightbulb, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";


export function AboutUs() {
  const [isExpanded, setIsExpanded] = useState(false);
  const milestones = [
    { label: "Incorporated", value: "Nov 2024" },
    { label: "Startup India", value: "Registered" },
    { label: "MSME", value: "Registered" },
    { label: "Legal Status", value: "Compliant" },
  ];

  const incubations = [
    { name: "GIMS, Noida", type: "Current Incubation", highlight: true },
    { name: "BITS Pilani", type: "Pre-Incubation" },
    { name: "IIM Lucknow", type: "Pre-Incubation" },
  ];

  const institutions = [
    "BITS Pilani","IIM Nagpur","IIIT Delhi","IIIT Lucknow","DTU Delhi",
    "IIT Mumbai","Bennett University","Coimbatore AI Institutes",
    "Ex-Infosys Professionals","JMI University Delhi",
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-4">
            <Building2 className="w-4 h-4 text-teal-600" />
            <span className="text-sm text-teal-700 font-semibold">Our Story</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-gray-900 font-bold">
            About MyEasy Pharma Pvt Ltd
          </h2>
        </div>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">

            <motion.div 
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:0.6}}
              className="bg-white rounded-2xl border shadow-sm p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Pharma 4.0 & AI-Driven Diabetes Care
                </h3>

                <div className="text-gray-700 leading-relaxed space-y-4">

                <div className={`lg:block ${isExpanded ? "block" : "hidden"} lg:space-y-4`}>
                  
                  <p>
                    Startups like <span className="font-semibold text-teal-700">MyEasy Pharma Pvt Ltd </span> 
                    are spearheading Pharma 4.0 revolutions in diabetic care management with AI-powered 
                    predictive analytics, IoT-enabled glucose tracking, blockchain-secured supply chains, 
                    and edge computing for instant anomaly detection.
                  </p>

                  <p>
                    Smart sensors in insulin delivery systems help pre-empt hypoglycemic events, reducing 
                    hospitalization risk while improving adherence through personalized digital therapeutics 
                    tailored for Indian patients.
                  </p>

                  <p>
                    Automated manufacturing and data-driven formulations ensure precision, affordability, 
                    and better outcomes in high-burden regions.
                  </p>

                  <p>
                    Sustainability remains core — with optimized facilities, recyclable packaging, and 
                    outcome forecasting data lakes that empower clinicians with real-time insights.
                  </p>

                  <p>
                    This ecosystem bridges urban-rural care gaps, improves glycemic control, and transforms 
                    diabetes from a chronic burden into a manageable, tech-enabled lifestyle condition.
                  </p>

                </div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="lg:hidden text-teal-600 font-semibold text-sm mt-2"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>

              </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-8">

              <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-teal-600">MyEasy Pharma Pvt Ltd</span> is a legally compliant,
                  Startup India and MSME registered company incorporated in November 2024. We are building an
                  AI-native healthcare platform bridging advanced technology with accessible, outcome-driven care.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                  {milestones.map((m, i) => (
                    <div key={i} className="bg-gray-50 border rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-500">{m.label}</div>
                      <div className="font-semibold text-sm">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                  <h3 className="text-xl text-gray-900">Incubation & Pre-Incubation</h3>
                </div>

                <div className="grid gap-4">
                  {incubations.map((i, idx) => (
                    <div key={idx}
                      className={`p-5 rounded-xl border ${
                        i.highlight
                          ? "bg-gradient-to-br from-teal-600 to-indigo-600 text-white"
                          : "bg-white"
                      }`}
                    >
                      <div className={`text-sm mb-2 ${i.highlight ? "text-teal-100" : "text-gray-500"}`}>
                        {i.type}
                      </div>
                      <div className="font-semibold">{i.name}</div>
                      {i.highlight && (
                        <div className="text-sm mt-2 text-teal-100">
                          Country's 1st health organisation with dedicated incubator
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl border p-6 md:p-8 shadow-sm mt-10">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-teal-600" />
              <h3 className="text-xl text-gray-900">Pan-India Collaboration</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {institutions.map((inst, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 border rounded-lg px-3 py-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-xs">{inst}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">

            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                Our Presence
              </h3>
              <p className="text-gray-500 text-xs">
                Offices supporting operations across India
              </p>
            </div>

            {/* <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4"> */}
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-2 gap-4">

              <div className="rounded-xl p-5 bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-600">
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-teal-700 bg-white px-2 py-0.5 rounded-full">
                    Registered HQ
                  </span>
                  <Building2 className="w-4 h-4 text-teal-700" />
                </div>

                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Bengaluru
                </h4>

                <p className="text-xs text-gray-600 leading-relaxed">
                  Unit 101, Oxford Towers,<br/>
                  HAL Old Airport Road,<br/>
                  Bangalore – 560008
                </p>

              </div>

              <div className="rounded-xl p-5 bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-600">
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-indigo-700 bg-white px-2 py-0.5 rounded-full">
                    Operational Office
                  </span>
                  <Building2 className="ml-2 w-4 h-4 text-indigo-700" />
                </div>

                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  New Delhi
                </h4>

                <p className="text-xs text-gray-600 leading-relaxed">
                  252 Upper Ground Floor,<br/>
                  Deepali Enclave, Pitampura,<br/>
                  Delhi – 110034
                </p>

              </div>

            </div>
          </div>

      </div>
    </section>
  );
}

