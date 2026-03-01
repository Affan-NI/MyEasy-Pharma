import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const banners = [
  {
    img: "/images/Dibetes.png",
    title: "Diabetes Care",
    desc: "Modern solutions for better health control.",
    link: "/diabetes",
  },
  {
    img: "/images/Heart.png",
    title: "Heart Wellness",
    desc: "Advanced care for a healthier heart.",
    link: "/heart",
  },
  {
    img: "/images/Liver.png",
    title: "Liver Health",
    desc: "Advanced monitoring & treatment options.",
    link: "/liver",
  },
  {
    img: "/images/WeightMangement.png",
    title: "Weight Management",
    desc: "Choose your weight journey with expert support.",
    link: "/weight",
  },
];

export function SlidingImages() {
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">

        {/* Section Heading */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
            Care That Transforms Lives
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base max-w-xl">
            Comprehensive care designed to improve lives through innovation.
          </p>
        </div>

        <div className="relative">

          {/* Left Arrow (Hidden on Mobile) */}
          <div
            className="hidden md:flex swiper-button-prev-custom absolute 
                       md:-left-6 
                       top-1/2 -translate-y-1/2 
                       z-10 
                       w-12 h-12 
                       bg-gray-800 text-white rounded-full 
                       items-center justify-center 
                       cursor-pointer shadow-lg"
          >
            <ChevronLeft size={22} />
          </div>

          {/* Right Arrow (Hidden on Mobile) */}
          <div
            className="hidden md:flex swiper-button-next-custom absolute 
                       md:-right-6 
                       top-1/2 -translate-y-1/2 
                       z-10 
                       w-12 h-12 
                       bg-gray-800 text-white rounded-full 
                       items-center justify-center 
                       cursor-pointer shadow-lg"
          >
            <ChevronRight size={22} />
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            spaceBetween={20}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {banners.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  onClick={() => navigate(item.link)}
                  className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                >
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[220px] md:h-[260px] object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                  {/* Text Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-base md:text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm opacity-90">
                      {item.desc}
                    </p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(item.link);
                      }}
                      className="mt-3 bg-[#F05A28] hover:bg-[#e14f20] px-4 py-2 rounded-lg text-xs md:text-sm font-medium"
                    >
                      Learn More
                    </button>
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