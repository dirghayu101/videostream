import type { Media } from "@/types";

export const FeaturedItem: React.FC<{item: Media}> = ({ item}) => { 
    return (
        <div key={item.id} className="group cursor-pointer">
              <a href={`/media/${item.id}`}>
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
    )
}