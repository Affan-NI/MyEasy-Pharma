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
    <section className="py-10 relative">
      <div className="container mx-auto px-24 relative">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">
            Real-World Use Cases Across Stakeholders
          </h2>
        </div>

        {/* Custom Arrows */}
        <div className="swiper-button-prev-custom absolute left-22 
        top-[190px] -translate-x-1/2 z-20
        w-14 h-12 bg-white border shadow-md rounded-md
        flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
          <ChevronLeft size={22} className="text-blue-600" />
        </div>

        <div className="swiper-button-next-custom absolute right-22 
        top-[180px] translate-x-1/2 z-20
        w-14 h-12 bg-white border shadow-md rounded-md
        flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
          <ChevronRight size={22} className="text-blue-600" />
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={20}
          slidesPerView={4}
          loop={false}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {useCases.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div
                onClick={() =>
                  navigate("/commingSoon", { state: item.stakeholder })
                }
                className="h-full flex flex-col justify-between
                bg-white rounded-xl border p-4
                hover:shadow-md hover:border-blue-300 transition-all cursor-pointer"
              >
                {/* Smaller Image */}
                <div className="h-32 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.stakeholder}
                    className="max-h-full object-contain"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg text-gray-900 mb-1">
                    {item.stakeholder}
                  </h3>
                  <p className="text-sm text-gray-500 min-h-[40px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
