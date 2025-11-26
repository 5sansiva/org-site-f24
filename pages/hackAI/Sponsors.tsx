import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SponsorsSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Add your sponsor logo URLs here
  const sponsors = [
    'https://via.placeholder.com/200x80/1e3a8a/ffffff?text=Sponsor+1',
    'https://via.placeholder.com/200x80/7c3aed/ffffff?text=Sponsor+2',
    'https://via.placeholder.com/200x80/dc2626/ffffff?text=Sponsor+3',
    'https://via.placeholder.com/200x80/059669/ffffff?text=Sponsor+4',
    'https://via.placeholder.com/200x80/ea580c/ffffff?text=Sponsor+5',
    'https://via.placeholder.com/200x80/0891b2/ffffff?text=Sponsor+6',
    'https://via.placeholder.com/200x80/4f46e5/ffffff?text=Sponsor+7',
  ];

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Adjust logos per slide based on screen size
  const logosPerSlide = isMobile ? 2 : 5;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.ceil(sponsors.length / logosPerSlide) - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === Math.ceil(sponsors.length / logosPerSlide) - 1 ? 0 : prev + 1));
  };

  // Calculate which logos to show
  const startIndex = currentIndex * logosPerSlide;
  const visibleSponsors = sponsors.slice(startIndex, startIndex + logosPerSlide);

  return (
    <section className="w-full bg-gradient-to-r from-gray-700 to-gray-600 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl sm:text-6xl font-serif text-white text-center mb-12">
          Past Sponsors
        </h2>

        {/* Logo Container with Arrow Navigation */}
        <div className="relative overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Previous sponsors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Logos */}
          <div className="flex justify-center items-center gap-8 min-h-[120px] px-16">
            {visibleSponsors.map((logo, index) => (
              <div
                key={startIndex + index}
                className="flex-shrink-0 bg-white rounded-lg p-4 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={logo}
                  alt={`Sponsor ${startIndex + index + 1}`}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Next sponsors"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(sponsors.length / logosPerSlide) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}