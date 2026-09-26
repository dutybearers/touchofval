import { Loader2, Home, SearchX } from 'lucide-react';
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

export default function PropertyListings({
  properties,
  loading,
  error,
  onPropertyClick,
  activeFilters,
  onClearFilters,
}: PropertyListingsProps) {
  return (
    <section id="properties" className="scroll-mt-20 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tov-500">
            Our Listings
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Available Properties
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Browse our curated collection of premium homes, villas, and
            apartments — each selected for quality, location, and value.
          </p>
        </div>

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
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <Loader2 className="h-10 w-10 animate-spin text-tov-500" />
            <p className="text-gray-500">Loading properties...</p>
          </div>
        ) : error ? (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl bg-red-50 p-8 text-center">
            <SearchX className="h-10 w-10 text-red-400" />
            <p className="text-red-700">{error}</p>
          </div>
        ) : properties.length === 0 ? (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-12 text-center shadow-sm">
            <Home className="h-12 w-12 text-gray-300" />
            <p className="text-lg font-medium text-gray-700">
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
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
