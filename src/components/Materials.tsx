export function Materials() {
  const materials = [
    {
      name: 'Granite',
      image: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Natural beauty and exceptional durability',
      features: ['Heat resistant', 'Scratch resistant', 'Unique patterns']
    },
    {
      name: 'Quartz',
      image: 'https://images.pexels.com/photos/7031405/pexels-photo-7031405.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Engineered perfection with low maintenance',
      features: ['Non-porous', 'Stain resistant', 'Consistent patterns']
    },
    {
      name: 'Marble',
      image: 'https://images.pexels.com/photos/6585771/pexels-photo-6585771.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Timeless elegance and luxury',
      features: ['Classic beauty', 'Unique veining', 'Premium quality']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Materials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from the finest selection of granite, quartz, and marble
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 aspect-[4/3]">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {material.name}
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-4">{material.description}</p>
              <ul className="space-y-2">
                {material.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
