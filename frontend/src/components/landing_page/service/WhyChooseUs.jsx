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
      description: "Reach out anytime for support, questions or assistance.",
    },
    {
      icon: Smile,
      title: "Friendly Support",
      description: "Simple, approachable and stress-free experience for users.",
    },
  ];

  return (
    <section className="pb-10 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Why Choose Us
          </h2>
          <p className="text-gray-600">
            Reliable support for your everyday health journey
          </p>
        </div>

        <div
          className="
          flex md:grid md:grid-cols-3 lg:grid-cols-5
          gap-4 sm:gap-6
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory
          pb-2
        "
        >
          {reasons.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                group
                min-w-[220px] sm:min-w-[240px] md:min-w-0
                snap-start
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
                <div
                  className="
                  w-12 h-12 mx-auto mb-3 rounded-full 
                  bg-gradient-to-r from-green-600 to-teal-600 
                  flex items-center justify-center
                  transition-all duration-500
                  group-hover:scale-110
                "
                >
                  <Icon className="text-white w-6 h-6" />
                </div>

                <h3 className="text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>

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
                    <p
                      className="
                      text-xs text-gray-600 mt-3
                      opacity-0 
                      translate-y-2
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all duration-500 delay-100
                    "
                    >
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
