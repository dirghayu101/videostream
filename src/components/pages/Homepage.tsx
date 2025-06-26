import type { Media } from '@/types';
import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/common';
import { HeroSlideshow, FeaturedSection, ContentSection } from '@/components/home';
import { LoginModal, RegisterModal } from '@/components/auth';

export const Homepage: React.FC = () => {
  const [movies, setMovies] = useState<Media[]>([]);
  const [tvShows, setTvShows] = useState<Media[]>([]);
  const [heroMovies, setHeroMovies] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch movies
        const moviesResponse = await fetch('http://localhost:3000/movies');
        const moviesData = await moviesResponse.json();
        setMovies(moviesData);
        
        // Fetch hero movies
        const heroMoviesResponse = await fetch('http://localhost:3000/heroMovies');
        const heroMoviesData = await heroMoviesResponse.json();
        setHeroMovies(heroMoviesData);

        // Fetch TV shows
        const tvShowsResponse = await fetch('http://localhost:3000/tvshows');
        const tvShowsData = await tvShowsResponse.json();
        setTvShows(tvShowsData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading StreamFlix...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onLoginClick={() => setShowLoginModal(true)}
        onRegisterClick={() => setShowRegisterModal(true)}
      />
      
      <main>
        <HeroSlideshow heroMovies={heroMovies} />
        
        <FeaturedSection 
          title="Featured Movies" 
          items={movies} 
        />
        
        <FeaturedSection 
          title="Featured TV Shows" 
          items={tvShows} 
        />
        
        <ContentSection />
      </main>

      <Footer />

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
      
      <RegisterModal 
        isOpen={showRegisterModal} 
        onClose={() => setShowRegisterModal(false)} 
      />
    </div>
  );
};
