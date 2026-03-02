import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function UseCases() {
  const navigate = useNavigate();

  const useCases = [
    {
      image: "/images/UseCasesImages/DoctorsAndClinicians.png",
      stakeholder: "Doctors & Clinicians",
      description: "AI-assisted longitudinal health mapping between visits",
    },
    {
      image: "/images/UseCasesImages/PharmaAndResearchOrganisations.png",
      stakeholder: "Pharma & Research Organisations",
      description: "Real-world evidence and therapy insights",
    },
    {
      image: "/images/UseCasesImages/HospitalsAndClinics.png",
      stakeholder: "Hospitals & Clinics",
      description:
        "Interoperable systems via secure APIs, reducing duplication",
    },
    {
      image: "/images/UseCasesImages/PayersAndPolicymakers.png",
      stakeholder: "Payers & Policymakers",
      description: "Outcome-driven population health intelligence",
    },
    {
      image: "/images/UseCasesImages/Patients.png",
      stakeholder: "Patients",
      description:
        "Personalised, preventive, and continuous care especially for diabetes",
    },
    {
      image: "/images/UseCasesImages/CareCoordinators.png",
      stakeholder: "Care Coordinators",
      description: "Comprehensive health tracking and intervention support",
    },
  ];

  return (
    <section className="py-10 md:py-12 relative">
      <div className="w-full px-4 md:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-gray-700">
            Real-World Use Cases Across Stakeholders
          </h2>
        </div>

        <div className="relative">

          {/* Left Arrow */}
          <div
  className="swiper-button-prev-custom absolute 
             -left-4 md:-left-6   /* negative on mobile also */
             top-1/2 -translate-y-1/2 
             z-20
             w-8 h-8 md:w-12 md:h-12
             bg-white border shadow-md rounded-md
             flex items-center justify-center 
             cursor-pointer hover:bg-gray-100 transition"
>
  <ChevronLeft size={16} className="md:w-5 md:h-5 text-blue-600" />
</div>

          <div
  className="swiper-button-next-custom absolute 
             -right-4 md:-right-6   /* negative on mobile also */
             top-1/2 -translate-y-1/2 
             z-20
             w-8 h-8 md:w-12 md:h-12
             bg-white border shadow-md rounded-md
             flex items-center justify-center 
             cursor-pointer hover:bg-gray-100 transition"
>
  <ChevronRight size={16} className="md:w-5 md:h-5 text-blue-600" />
</div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={12}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {useCases.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() =>
                    navigate("/commingSoon", { state: item.stakeholder })
                  }
                  className="flex flex-col justify-between
                             bg-white rounded-xl border
                             p-3 md:p-4        /* smaller padding mobile */
                             hover:shadow-md hover:border-blue-300 
                             transition-all cursor-pointer"
                >
                  {/* Image (Smaller on Mobile) */}
                  <div className="h-20 md:h-32 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.stakeholder}
                      className="max-h-full object-contain"
                    />
                  </div>

                  <div className="mt-3 md:mt-4 text-center">
                    <h3 className="text-sm md:text-lg text-gray-900 mb-1">
                      {item.stakeholder}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 min-h-[36px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}