import { useMediaDetail } from "@/context";

export const MediaDetailTable: React.FC = () => {
  const { media: currentMedia } = useMediaDetail();

  const handleRent = () => {
    alert(`Renting ${currentMedia.title} for $${currentMedia.rentPrice}`);
  };

  const handlePurchase = () => {
    alert(
      `Purchasing ${currentMedia.title} for $${currentMedia.purchasePrice}`
    );
  };
  return (
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
                    <p className="text-sm text-gray-400 mt-1">
                      48 hour rental period
                    </p>
                  </div>
                )}

                {currentMedia.purchasePrice && (
                  <div>
                    <button
                      onClick={handlePurchase}
                      className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-between"
                    >
                      <span>Buy</span>
                      <span className="text-lg">
                        ${currentMedia.purchasePrice}
                      </span>
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
                  <h3 className="text-2xl font-semibold mb-4">
                    About This Movie
                  </h3>
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
                      <h4 className="font-semibold text-gray-400 mb-1">
                        Release Year
                      </h4>
                      <p className="text-white">{currentMedia.year}</p>
                    </div>
                  )}

                  {currentMedia.genre && (
                    <div>
                      <h4 className="font-semibold text-gray-400 mb-1">
                        Genre
                      </h4>
                      <p className="text-white">{currentMedia.genre}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-gray-400 mb-1">
                      Movie ID
                    </h4>
                    <p className="text-white">#{currentMedia.id}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-400 mb-1">
                      Availability
                    </h4>
                    <p className="text-green-400">
                      Available for rent and purchase
                    </p>
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
  );
};
