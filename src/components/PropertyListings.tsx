import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Loader2, Home, SearchX } from 'lucide-react';
import type { Property } from '@/types';
import PropertyCard from './PropertyCard';

interface PropertyListingsProps {
  properties: Property[];
  loading: boolean;
  error: string | null;
  onPropertyClick: (property: Property) => void;
  activeFilters: number;
  onClearFilters: () => void;
}

const listingImages = [
  {
    src: '/images/WhatsApp_Image_2026-09-23_at_02.50.00.jpeg',
    alt: 'Luna City land investment flyer',
    title: 'Luna City',
    location: 'Igbekodo Village, Ibeju-Lekki',
  },
  {
    src: '/images/ad1.jpeg',
    alt: 'Plus Lagos land investment flyer',
    title: 'Plus Lagos',
    location: 'Abijo G.R.A., Ibeju-Lekki',
  },
  {
    src: '/images/plethora.jpeg',
    alt: 'Plethora City land investment flyer',
    title: 'Plethora City',
    location: 'Igboye, Epe, Lagos State',
  },
  {
    src: '/images/WhatsApp_Image_2026-09-24_at_06.45.02.jpeg',
    alt: 'Monaco City Estate land investment flyer',
    title: 'Monaco City Estate',
    location: 'Akodo, Ibeju-Lekki',
  },
  {
    src: '/images/land_banking.jpeg',
    alt: 'TOV Homes land banking flyer',
    title: 'Land Banking',
    location: 'Plus Lagos, Abijo GRA, Ibeju-Lekki',
  },
];

function ListingImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = listingImages[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % listingImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + listingImages.length) % listingImages.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % listingImages.length);
  };

  return (
    <div className="relative mt-6 overflow-hidden rounded-2xl bg-tov-950 shadow-xl">
      <div className="relative flex min-h-[360px] items-center justify-center bg-gray-100 sm:min-h-[500px]">
        {listingImages.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== activeIndex}
          />
        ))}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent px-5 pb-5 pt-16 sm:px-8 sm:pb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
            Featured land opportunity
          </p>
          <h3 className="mt-1 font-serif text-2xl font-bold text-white sm:text-3xl">
            {activeImage.title}
          </h3>
          <p className="mt-1 text-sm text-white/80">{activeImage.location}</p>
        </div>

        <button
          type="button"
          onClick={showPrevious}
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-tov-950 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 sm:left-5"
          aria-label="Show previous listing image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={showNext}
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-tov-950 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 sm:right-5"
          aria-label="Show next listing image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-4 right-5 flex items-center gap-1.5 sm:right-8 sm:bottom-7">
        {listingImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white ${
              index === activeIndex ? 'w-7 bg-gold-400' : 'w-2 bg-white/70 hover:bg-white'
            }`}
            aria-label={`Show ${image.title} image`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default function PropertyListings({
  properties,
  loading,
  error,
  onPropertyClick,
  activeFilters,
  onClearFilters,
}: PropertyListingsProps) {
  return (
    <section id="properties" className="scroll-mt-20 bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tov-500">
            Our Listings
          </p>
          <h2 className="mt-1.5 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
            Available Properties
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500">
            Browse our curated collection of premium land and properties — each selected for quality, location, and value.
          </p>
        </div>

        <ListingImageSlider />

        {activeFilters > 0 && (
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="text-sm text-gray-500">
              Showing {properties.length} filtered{' '}
              {properties.length === 1 ? 'property' : 'properties'}
            </span>
            <button
              onClick={onClearFilters}
              className="rounded-full border border-tov-200 px-4 py-1.5 text-sm font-medium text-tov-600 transition-colors hover:bg-tov-50"
            >
              Clear Filters
            </button>
          </div>
        )}

        {loading ? (
          <div className="mt-6 flex flex-col items-center justify-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-tov-500" />
            <p className="text-sm text-gray-500">Loading properties...</p>
          </div>
        ) : error ? (
          <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-xl bg-red-50 p-6 text-center">
            <SearchX className="h-8 w-8 text-red-400" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        ) : properties.length === 0 ? (
          <div className="mt-6 flex flex-col items-center justify-center gap-2 rounded-xl bg-white p-8 text-center shadow-sm">
            <Home className="h-10 w-10 text-gray-300" />
            <p className="text-base font-medium text-gray-700">
              No properties match your search
            </p>
            <p className="text-sm text-gray-500">
              Try adjusting your filters to see more results.
            </p>
            {activeFilters > 0 && (
              <button
                onClick={onClearFilters}
                className="mt-2 rounded-full bg-tov-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-tov-700"
              >
                Clear All Filters
              </button>
            )}
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onClick={onPropertyClick}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
