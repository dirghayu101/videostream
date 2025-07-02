import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaDetail } from '@/context';
import { LoadingScreen } from '@/components/pages';


export const MediaDetail: React.FC = () => {
  const navigate = useNavigate();
  const { media, loading } = useMediaDetail();
  const currentMedia = media!;

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleRent = () => {
    alert(`Renting ${currentMedia.title} for $${currentMedia.rentPrice}`);
  };

  const handlePurchase = () => {
    alert(`Purchasing ${currentMedia.title} for $${currentMedia.purchasePrice}`);
  };

  if (loading) {
      return <LoadingScreen />;
    }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${currentMedia.largePoster || currentMedia.image})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className="absolute top-8 left-8 z-50 flex items-center space-x-2 bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 px-4 py-2 rounded-full"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              {currentMedia.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center space-x-4 mb-6 text-sm md:text-base">
              {currentMedia.year && (
                <span className="bg-gray-800 px-3 py-1 rounded">{currentMedia.year}</span>
              )}
              {currentMedia.genre && (
                <span className="text-gray-300">{currentMedia.genre}</span>
              )}
            </div>

            {/* Synopsis */}
            {currentMedia.synopsis && (
              <p className="text-lg md:text-xl mb-8 max-w-3xl leading-relaxed text-gray-200">
                {currentMedia.synopsis}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-black px-8 py-3 rounded font-semibold text-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>Watch Trailer</span>
              </button>
              
              <button className="bg-gray-600 bg-opacity-70 text-white px-8 py-3 rounded font-semibold text-lg hover:bg-opacity-90 transition-all duration-300">
                + My List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Information Section */}
      <div className="px-8 md:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column - Poster and Pricing */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Poster */}
                <div className="mb-8">
                  <img
                    src={currentMedia.image}
                    alt={currentMedia.title}
                    className="w-full max-w-sm mx-auto lg:mx-0 rounded-lg shadow-2xl"
                  />
                </div>

                {/* Pricing Section */}
                <div className="bg-gray-900 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Get This Movie</h3>
                  
                  {currentMedia.rentPrice && (
                    <div className="mb-4">
                      <button
                        onClick={handleRent}
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-between"
                      >
                        <span>Rent</span>
                        <span className="text-lg">${currentMedia.rentPrice}</span>
                      </button>
                      <p className="text-sm text-gray-400 mt-1">48 hour rental period</p>
                    </div>
                  )}

                  {currentMedia.purchasePrice && (
                    <div>
                      <button
                        onClick={handlePurchase}
                        className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-between"
                      >
                        <span>Buy</span>
                        <span className="text-lg">${currentMedia.purchasePrice}</span>
                      </button>
                      <p className="text-sm text-gray-400 mt-1">Own it forever</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Description and Details */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                
                {/* Description */}
                {currentMedia.description && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">About This Movie</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {currentMedia.description}
                    </p>
                  </div>
                )}

                {/* Movie Details */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentMedia.year && (
                      <div>
                        <h4 className="font-semibold text-gray-400 mb-1">Release Year</h4>
                        <p className="text-white">{currentMedia.year}</p>
                      </div>
                    )}
                    
                    {currentMedia.genre && (
                      <div>
                        <h4 className="font-semibold text-gray-400 mb-1">Genre</h4>
                        <p className="text-white">{currentMedia.genre}</p>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-gray-400 mb-1">Movie ID</h4>
                      <p className="text-white">#{currentMedia.id}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-400 mb-1">Availability</h4>
                      <p className="text-green-400">Available for rent and purchase</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🎬</div>
                      <p className="text-sm">HD Quality</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🔊</div>
                      <p className="text-sm">Surround Sound</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">📱</div>
                      <p className="text-sm">Multi-Device</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">⬇️</div>
                      <p className="text-sm">Download</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
