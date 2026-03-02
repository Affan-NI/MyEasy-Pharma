import {
  Smartphone,
  Globe,
  MessageSquare,
  Database,
  Shield,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function SaaSEcosystem() {
  const navigate = useNavigate();

  const cards = [
    {
      icon: Smartphone,
      title: "Mobile App",
      desc: "User-facing app for health tracking and daily support",
      route: "/commingsoon",
    },
    {
      icon: Globe,
      title: "Web Dashboard",
      desc: "Centralised dashboard for insights and monitoring",
      route: "/", // home
    },
    {
      icon: MessageSquare,
      title: "Support Chat",
      desc: "Quick guidance and support when needed",
      route: "/commingsoon",
    },
  ];

  return (
    <section id="platform" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 rounded-full mb-3">
            <Zap className="w-4 h-4 text-green-600" />
            <span className="text-xs text-green-600 font-semibold">
              Our Platform
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Digital Health Ecosystem
          </h2>

          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            A connected system designed to support continuous care and
            coordination across devices.
          </p>
        </motion.div>

        <div
          className="
          flex sm:grid sm:grid-cols-2 md:grid-cols-3
          gap-4 sm:gap-5
          overflow-x-auto sm:overflow-visible
          snap-x snap-mandatory
          pb-2 mb-8
        "
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                onClick={() => navigate(card.route)}
                className="
                cursor-pointer
                min-w-[220px] sm:min-w-0
                snap-start
                p-3 sm:p-5
                bg-gradient-to-br from-green-50 to-teal-50
                rounded-xl border border-green-200
                shadow-sm hover:shadow-lg
                transition-all duration-300
                hover:-translate-y-1
                active:scale-95
                "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div
                  className="
                w-9 h-9 sm:w-11 sm:h-11
                bg-gradient-to-r from-green-600 to-teal-600
                rounded-lg flex items-center justify-center
                mb-2 sm:mb-3
                "
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>

                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">
                  {card.title}
                </h3>

                <p className="text-[11px] sm:text-xs text-gray-600">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mb-10">
          <h3 className="text-lg md:text-3xl font-bold text-gray-900 text-center mb-5">
            Platform Capabilities
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Database,
                title: "Data Insights",
                desc: "Track and analyse key health parameters in one place",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                desc: "Built with strong data privacy and protection standards",
              },
              {
                icon: Zap,
                title: "Smart Support",
                desc: "Timely assistance and guidance when you need it",
              },
              {
                icon: Globe,
                title: "Connected System",
                desc: "Seamless coordination across devices and platforms",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="
                  group relative
                  bg-gradient-to-br from-green-50 to-teal-50
                  border border-green-100
                  rounded-xl p-4
                  shadow-sm hover:shadow-md
                  transition-all duration-300
                  hover:-translate-y-0.5
                  overflow-hidden
                  "
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-green-200/20 to-teal-200/20"></div>

                  <div className="relative flex items-start gap-3">
                    <div
                      className="
                      w-10 h-10 rounded-lg
                      bg-gradient-to-r from-green-600 to-teal-600
                      flex items-center justify-center
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-xl text-sm shadow">
            <span className="font-semibold">Real-World Validation:</span> Our AI
            models are trained on anonymised data from live diabetic centres,
            ensuring clinically relevant and contextually accurate insights for
            diabetes care and management
          </div>
        </div>
      </div>
    </section>
  );
}
