import React, { useState, useEffect, type ReactNode } from "react";
import type { Media } from "@/types";
import { useParams } from "react-router-dom";
import type { MediaDetailParams } from "@/types";
import { MediaDetailContext } from "@/context/MediaDetailContext";

interface MediaDetailProviderProps {
  endpoint: string;
  children: ReactNode;
  fallback?: ReactNode;
}

export const MediaDetailProvider: React.FC<MediaDetailProviderProps> = ({ endpoint, children, fallback = null }) => {
  const [media, setMedia] = useState<Media>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams<MediaDetailParams>();

  useEffect(() => {
    const fetchMedia = async () => {
      try {

        const response = await fetch(`${endpoint}/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch media");
        }
        const { data } = await response.json();
        setMedia(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, [endpoint, id]);

  if (loading) return fallback;

  return (
    <MediaDetailContext.Provider value={{ media: media as Media, loading }}>
      {children}
    </MediaDetailContext.Provider>
  );
};
