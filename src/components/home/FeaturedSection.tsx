import type { Media } from "@/types";

interface FeaturedSectionProps { 
  title: string; 
  items: Media[]; 
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ title, items}) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {items.slice(0, 6).map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <a href={`/media/${item.id}`}>
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
