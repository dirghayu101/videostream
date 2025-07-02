import React, { useState, useEffect, type ReactNode } from "react";
import type { Media } from "@/types";
import { movieData, tvShowData } from "@/const";
import { useParams } from "react-router-dom";
import type { MediaDetailParams } from "@/types";
import { MediaDetailContext } from "@/context/MediaDetailContext";

interface MediaDetailProviderProps {
  endpoint: string;
  children: ReactNode;
}

export const MediaDetailProvider: React.FC<MediaDetailProviderProps> = ({ endpoint, children }) => {
  const [media, setMedia] = useState<Media | null>(null);
  const [loading, setLoading] = useState(true);
  const { type, id } = useParams<MediaDetailParams>();

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(`${endpoint}/${type}/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch media");
        }
        const data = await response.json();
        setMedia(data);
      } catch (error) {
        setMedia(type === "movies" ? movieData[parseInt(id!) - 1] : tvShowData[parseInt(id!) - 1]);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, [endpoint, type, id]);

  return (
    <MediaDetailContext.Provider value={{ media, loading }}>
      {children}
    </MediaDetailContext.Provider>
  );
};
