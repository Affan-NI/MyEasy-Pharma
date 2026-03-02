import { Heart, Users, Activity, Phone, Shield, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function PharmacyServices() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  const services = [
    {
      icon: Heart,
      title: "Health Support",
      description:
        "Guidance for maintaining daily health and wellness and staying consistent."
    },
    {
      icon: Users,
      title: "Chronic Care Support",
      description:
        "Support for diabetes, BP and long-term conditions with regular assistance."
    },
    {
      icon: Activity,
      title: "Lifestyle Guidance",
      description:
        "Help with routine, sleep and healthy habits for better daily balance."
    },
    {
      icon: Phone,
      title: "Quick Assistance",
      description:
        "Reach out anytime for help, queries or support from our team."
    },
    {
      icon: Shield,
      title: "Trusted Care",
      description:
        "Reliable support focused on safety, consistency and well-being."
    },
    {
      icon: Clock,
      title: "Always Available",
      description:
        "Support whenever you need guidance or help with your health routine."
    }
  ];

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-br from-green-50 to-teal-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-3">
              <Heart className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600 font-semibold">
                Healthcare Services
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl text-gray-900 mb-3 font-bold">
              Comprehensive Healthcare Support
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Continuous support, lifestyle guidance and assistance to help you
              stay on track with your well-being.
            </p>
          </motion.div>

          <motion.div
            className="mb-12 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <img
              src="/images/0ff7dd243794a79dff886211611c4758fc2577fb.png"
              alt="Healthcare"
              className="w-full h-[260px] object-cover"
            />
          </motion.div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  className="
                  group w-full min-w-0
                  bg-white rounded-2xl shadow-sm hover:shadow-2xl
                  transition-all duration-500 ease-out
                  p-4 sm:p-5 text-center
                  hover:-translate-y-1
                  "
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="
                    w-12 h-12 mx-auto mb-3 rounded-full
                    bg-gradient-to-r from-green-600 to-teal-600
                    flex items-center justify-center
                    transition-all duration-500 group-hover:scale-110
                  ">
                    <Icon className="text-white w-6 h-6" />
                  </div>

                  <h3 className="text-sm font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  <div className="
                    grid transition-all duration-500 ease-in-out
                    [grid-template-rows:0fr]
                    group-hover:[grid-template-rows:1fr]
                  ">
                    <div className="overflow-hidden">
                      <p className="
                        text-xs text-gray-600 mt-3
                        opacity-0 translate-y-2
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-500 delay-100
                      ">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            className="
            relative overflow-hidden
            bg-gradient-to-r from-green-600 to-teal-600
            rounded-2xl px-6 py-6
            text-white text-center
            shadow-lg
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            <div className="absolute -top-16 -left-16 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">

              <h3 className="text-lg md:text-xl font-semibold mb-1">
                Need Health Support?
              </h3>

              <p className="text-sm opacity-90 mb-4">
                We’re here to guide and support your health journey.
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="
                px-5 py-2 mr-5 rounded-full font-medium
                bg-white text-green-700
                hover:scale-105 transition text-sm
              "
              >
                Contact
              </button>

              {!open && (
                <button
                  onClick={() => setOpen(true)}
                  className="
                  px-5 py-2 rounded-full font-medium
                  bg-white text-green-700
                  hover:scale-105 transition text-sm
                  "
                >
                  Learn More
                </button>
              )}

              <motion.div
                initial={false}
                animate={{
                  height: open ? "auto" : 0,
                  opacity: open ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="mt-4 border-t border-white/30 pt-4">

                  <p className="text-sm leading-relaxed opacity-95 max-w-2xl mx-auto">
                    Our platform provides continuous health support through lifestyle
                    guidance, routine tracking and long-term care assistance. We help
                    individuals stay consistent with their health goals by offering
                    structured support, easy communication and reliable guidance.
                    Whether it’s maintaining daily wellness or managing long-term
                    conditions, our focus is to ensure users feel supported and
                    confident in their health journey.
                  </p>

                  <button
                    onClick={() => setOpen(false)}
                    className="
                    mt-4 px-5 py-2 rounded-full text-sm
                    border border-white/70
                    hover:bg-white/10 transition
                    "
                  >
                    Learn Less
                  </button>

                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
