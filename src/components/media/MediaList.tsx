import type { Media } from "@/types";
import { FeaturedItem } from "../home";

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
            <FeaturedItem key={medium.id} item={medium} type={type}/>
          ))}
        </div>
      </div>
)
}