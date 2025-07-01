import type { Media } from "@/types";
import { Link } from "react-router-dom";

export const MediaList: React.FC<{
  media: Media[];
  type: string;
  title: string;
}> = ({ media, type, title }) => { 
return (
        <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {media.map((medium) => (
            <Link
              key={medium.id}
              to={`/${type}/${medium.id}`}
              className="group cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={medium.image || medium.largePoster}
                  alt={medium.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="font-semibold text-lg mb-2">{medium.title}</h3>
                    <p className="text-sm">Click to view details</p>
                  </div>
                </div>
              </div>
              <h3 className="mt-2 text-center font-medium truncate">{medium.title}</h3>
            </Link>
          ))}
        </div>
      </div>
)
}