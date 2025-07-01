import type { Media } from "@/types";
import { Link } from "react-router-dom";

export const FeaturedItem: React.FC<{ item: Media,  type: string}> = ({ item, type }) => {
  return (
    <div key={item.id} className="group cursor-pointer">
      <Link to={`/${type}/${item.id}`}>
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
            <div className="p-4 text-white w-full">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-200 line-clamp-2">
                {item.synopsis}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
