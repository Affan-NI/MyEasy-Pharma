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
    <section id="medicines" className="py-8">
      <div className="container mx-auto px-24">

        <div className="mb-6">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-700 mb-3">
            Popular Medicine Categories
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                
                <div
                  className={`w-20 h-20 ${category.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-50 h-50 object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg text-gray-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
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
