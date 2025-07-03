import type { HomepageConfig, Media } from "@/types";
import React, { useEffect, useState } from "react";
import { Layout } from "@/components/common";
import {
  HeroSlideshow,
  FeaturedSection,
  ContentSection,
} from "@/components/home";
import { LoadingScreen } from "@/components/pages";
// Mock data imports as json-server only works in local development.
import {heroMovieData, movieData, tvShowData} from "@/const"

export const Homepage: React.FC<HomepageConfig> = ({
  movieEndpoint,
  heroMovieEndpoint,
  tvShowsEndpoint,
}) => {
  const [movies, setMovies] = useState<Media[]>([]);
  const [tvShows, setTvShows] = useState<Media[]>([]);
  const [heroMovies, setHeroMovies] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch movies
        const moviesResponse = await fetch(movieEndpoint);
        const moviesData = await moviesResponse.json();
        // Fallback to mock data if the fetch fails
        if (!Array.isArray(moviesData) || moviesData.length === 0) {
          throw new Error("No movies data found");
        }
        setMovies(moviesData);

        // Fetch hero movies
        const heroMoviesResponse = await fetch(heroMovieEndpoint);
        const heroMoviesData = await heroMoviesResponse.json();
        if( !Array.isArray(heroMoviesData) || heroMoviesData.length === 0) {
          throw new Error("No hero movies data found");
        }
        setHeroMovies(heroMoviesData);

        // Fetch TV shows
        const tvShowsResponse = await fetch(tvShowsEndpoint);
        const tvShowsData = await tvShowsResponse.json();
        if (!Array.isArray(tvShowsData) || tvShowsData.length === 0) {
          throw new Error("No TV shows data found");
        }
        setTvShows(tvShowsData);
        setLoading(false);
      } catch (error) {
        setTvShows(tvShowData); // Fallback to mock data
        setMovies(movieData); // Fallback to mock data
        setHeroMovies(heroMovieData); // Fallback to mock data
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [movieEndpoint, heroMovieEndpoint, tvShowsEndpoint]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      <HeroSlideshow heroMovies={heroMovies} />

      <FeaturedSection title="Featured Movies" items={movies} type="movies" />

      <FeaturedSection
        title="Featured TV Shows"
        items={tvShows}
        type="tvshows"
      />

      <ContentSection />
    </Layout>
  );
};
