export function Categories() {
  const categories = [
    {
      image: "/images/MedicineCategories/diabetes.png",
      name: "Diabetes Care",
      products: "200+ Products",
      bgColor: "bg-green-50"
    },
    {
      image: "/images/MedicineCategories/heart.png",
      name: "Heart Care",
      products: "150+ Products",
      bgColor: "bg-green-50"
    },
    {
      image: "/images/MedicineCategories/pain.png",
      name: "Pain Relief",
      products: "180+ Products",
      bgColor: "bg-green-50"
    },
    {
      image: "/images/MedicineCategories/vitamins.png",
      name: "Vitamins & Supplements",
      products: "300+ Products",
      bgColor: "bg-green-50"
    },
    {
      image: "/images/MedicineCategories/cold.png",
      name: "Cold & Flu",
      products: "120+ Products",
      bgColor: "bg-green-50"
    },
    {
      image: "/images/MedicineCategories/firstaid.png",
      name: "First Aid",
      products: "80+ Products",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section id="medicines" className="py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">

        {/* Heading */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-gray-700">
            Popular Medicine Categories
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group p-4 md:p-6 bg-white border border-gray-200 
                         rounded-xl hover:shadow-lg hover:border-blue-300 
                         transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 md:gap-4">

                {/* Icon Box */}
                <div
                  className={`w-14 h-14 md:w-20 md:h-20 ${category.bgColor} 
                              rounded-lg flex items-center justify-center 
                              group-hover:scale-110 transition-transform`}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-10 h-10 md:w-14 md:h-14 object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base md:text-lg text-gray-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {category.products}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}