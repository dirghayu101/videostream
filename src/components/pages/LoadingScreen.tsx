import React from "react";
import { LoadingSpinner, Layout } from "@/components/common";

export const LoadingScreen: React.FC = () => {
  return (
    <Layout>
      <LoadingSpinner />
    </Layout>
  );
};
