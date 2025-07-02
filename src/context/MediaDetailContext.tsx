import { createContext, useContext } from "react";
import type { Media } from "@/types";

interface MediaDetailContextType {
  media: Media | null;
  loading: boolean;
}

export const MediaDetailContext = createContext<MediaDetailContextType | undefined>(undefined);

export const useMediaDetail = () => {
  const context = useContext(MediaDetailContext);
  if (!context) {
    throw new Error("useMediaDetail must be used within a MediaDetailProvider");
  }
  return context;
};
