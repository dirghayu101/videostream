import React from "react";
import { Layout } from "@/components/common";
import type { MediaDetailConfig} from "@/types";
import { MediaDetail } from "@/components/media";
import { MediaDetailProvider } from "@/context";
import { LoadingScreen } from "@/components/pages";

export const MediaDetailPage: React.FC<MediaDetailConfig> = ({ endpoint }) => {
  return (
    <MediaDetailProvider endpoint={endpoint} fallback={<LoadingScreen/>}>
      <Layout>
        <MediaDetail />
      </Layout>
    </MediaDetailProvider>
  );
};
