import type { Media } from "@/types";
import { FeaturedItem } from "./";

interface FeaturedSectionProps { 
  title: string; 
  items: Media[];
  type: string; 
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ title, items, type}) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {items.slice(0, 6).map((item) => (
            <FeaturedItem key={item.id} item={item} type={type}/>
          ))}
        </div>
      </div>
    </section>
  );
};
