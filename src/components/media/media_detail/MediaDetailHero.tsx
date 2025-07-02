import { useMediaDetail } from "@/context";
import { useNavigate } from "react-router-dom";

export const MediaDetailHero: React.FC = () => {
  const { media: currentMedia } = useMediaDetail();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={currentMedia.largePoster || currentMedia.image}
          alt={currentMedia.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleGoBack}
        className="absolute top-8 left-8 z-20 flex items-center space-x-2 bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 px-4 py-2 rounded-full"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
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
              <span className="bg-gray-800 px-3 py-1 rounded">
                {currentMedia.year}
              </span>
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
                <path d="M8 5v14l11-7z" />
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
  );
};
