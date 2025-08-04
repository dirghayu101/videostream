import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Media } from "src/types";

interface HeroSlideshowProps {
  heroMovies: Media[];
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ heroMovies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // If there are no hero movies, we don't need to set up an interval.
    if (heroMovies.length > 0) {
      const timer = setInterval(() => {
        // If the current slide is the last one, let's say 9, then 10 % 10 = 0, so it will loop back to the first slide.
        setCurrentSlide((prev) => (prev + 1) % heroMovies.length);
      }, 2200);
      // This is the return function that clears the interval when the component unmounts or when heroMovies changes.
      return () => clearInterval(timer);
    }
    // dependencies array includes heroMovies.length to ensure the effect runs when the number of hero movies changes.
  }, [heroMovies.length]);

  // If there are no hero movies, we can return a loading state or a placeholder.
  if (heroMovies.length === 0) {
    return (
      <div className="h-96 md:h-[500px] bg-gray-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Get the current movie based on the current slide index.
  const currentMovie = heroMovies[currentSlide];

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${
            currentMovie.largePoster || currentMovie.image
          })`,
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {currentMovie.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                {currentMovie.description || currentMovie.synopsis}
              </p>
              <div className="flex space-x-4">
                <Link
                  to={`/media/${currentMovie.id}`}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Watch Now
                </Link>
                <Link
                  to={`/media/${currentMovie.id}`}
                  className="bg-gray-600 bg-opacity-70 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Based on the button click, it will reset the slideshow. */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroMovies.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
