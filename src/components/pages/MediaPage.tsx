import React, { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/pages";
import { Layout } from "@/components/common";
import type { Media, MediaConfig } from "@/types";
import { MediaList } from "@/components/media";

export const MediaPage: React.FC<MediaConfig> = ({ type, title, endpoint}) => {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMedia(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, [endpoint]);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <Layout>
        <MediaList media={media} type={type} title={title} />
      </Layout>
    </>
  );
};
