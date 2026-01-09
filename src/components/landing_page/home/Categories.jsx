import { Activity, Heart, Thermometer, Leaf, Wind, Package } from 'lucide-react';

export function Categories() {
  const categories = [
    {
      icon: Activity,
      name: 'Diabetes Care',
      products: '200+ Products',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Heart,
      name: 'Heart Care',
      products: '150+ Products',
      color: 'bg-pink-50 text-pink-600'
    },
    {
      icon: Thermometer,
      name: 'Pain Relief',
      products: '180+ Products',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Leaf,
      name: 'Vitamins & Supplements',
      products: '300+ Products',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Wind,
      name: 'Cold & Flu',
      products: '120+ Products',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Package,
      name: 'First Aid',
      products: '80+ Products',
      color: 'bg-teal-50 text-teal-600'
    }
  ];

  return (
    <section id="medicines" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-3">Popular Medicine Categories</h2>
          <p className="text-gray-600">Shop by health condition or product type</p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.products}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
