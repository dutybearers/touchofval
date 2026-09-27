import { Bed, Bath, Maximize, MapPin, Car } from 'lucide-react';
import type { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
  onClick: (property: Property) => void;
}

export default function PropertyCard({ property, onClick }: PropertyCardProps) {
  const statusColor =
    property.status === 'For Sale'
      ? 'bg-tov-600'
      : property.status === 'For Rent'
      ? 'bg-gold-500'
      : 'bg-gray-600';

  return (
    <article
      onClick={() => onClick(property)}
      className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={property.image_url}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${statusColor}`}
        >
          {property.status}
        </div>
        {property.featured && (
          <div className="absolute right-3 top-3 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-gold-950">
            Featured
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <p className="font-serif text-lg font-bold text-white">
            {property.location}
          </p>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-serif text-lg font-bold text-gray-900 transition-colors group-hover:text-tov-600">
          {property.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
          <MapPin className="h-3.5 w-3.5 text-tov-400" />
          {property.location}, {property.city}
        </p>

        <div className="mt-2 whitespace-pre-line text-sm leading-snug text-gray-600">
          {property.description}
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="flex items-center gap-3 text-xs text-gray-600">
            {property.bedrooms > 0 && (
              <span className="flex items-center gap-1">
                <Bed className="h-3.5 w-3.5 text-tov-400" />
                {property.bedrooms}
              </span>
            )}
            {property.bathrooms > 0 && (
              <span className="flex items-center gap-1">
                <Bath className="h-3.5 w-3.5 text-tov-400" />
                {property.bathrooms}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Maximize className="h-3.5 w-3.5 text-tov-400" />
              {property.area_sqft.toLocaleString()} sqft
            </span>
          </div>
          {property.garage > 0 && (
            <span className="flex items-center gap-1 text-xs text-gray-600">
              <Car className="h-3.5 w-3.5 text-tov-400" />
              {property.garage}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
