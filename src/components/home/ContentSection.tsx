export const ContentSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Experience Cinema Like Never Before
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              StreamFlix brings you the latest blockbusters and timeless classics from Hollywood and beyond. 
              With our cutting-edge streaming technology, enjoy crystal-clear quality and immersive sound 
              that makes every viewing experience unforgettable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">4K Ultra HD</h4>
                  <p className="text-gray-600 text-sm">Crystal clear picture quality</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Dolby Atmos</h4>
                  <p className="text-gray-600 text-sm">Immersive surround sound</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Rent or Buy</h4>
                  <p className="text-gray-600 text-sm">Flexible viewing options</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Multi-Device</h4>
                  <p className="text-gray-600 text-sm">Watch anywhere, anytime</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop"
              alt="Cinema Experience"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-red-600 text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm">Movies & Shows</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
