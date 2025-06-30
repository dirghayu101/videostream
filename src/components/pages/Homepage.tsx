import type { Media } from "@/types";
import React, { useEffect, useState } from "react";
import { Layout } from "@/components/common";
import {
  HeroSlideshow,
  FeaturedSection,
  ContentSection,
} from "@/components/home";
import { LoadingScreen } from "./LoadingScreen";

export const Homepage: React.FC = () => {
  const [movies, setMovies] = useState<Media[]>([]);
  const [tvShows, setTvShows] = useState<Media[]>([]);
  const [heroMovies, setHeroMovies] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch movies
        const moviesResponse = await fetch("http://localhost:3000/movies");
        const moviesData = await moviesResponse.json();
        setMovies(moviesData);

        // Fetch hero movies
        const heroMoviesResponse = await fetch(
          "http://localhost:3000/heroMovies"
        );
        const heroMoviesData = await heroMoviesResponse.json();
        setHeroMovies(heroMoviesData);

        // Fetch TV shows
        const tvShowsResponse = await fetch("http://localhost:3000/tvShows");
        const tvShowsData = await tvShowsResponse.json();
        setTvShows(tvShowsData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
        <HeroSlideshow heroMovies={heroMovies} />

        <FeaturedSection title="Featured Movies" items={movies} />

        <FeaturedSection title="Featured TV Shows" items={tvShows} />

        <ContentSection />
    </Layout>
  );
};
