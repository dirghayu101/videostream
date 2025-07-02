import React from "react";
import { MediaDetailHero, MediaDetailTable } from "@/components/media/media_detail";

export const MediaDetail: React.FC = () => {
  return (
    <div className="min-h-96 bg-black text-white">
      {/* Hero Section with Background */}
      <MediaDetailHero />
      {/* Detailed Information Section */}
      <MediaDetailTable />
    </div>
  );
};
