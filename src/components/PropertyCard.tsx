import { Bed, Bath, Maximize, MapPin, Car, BadgeDollarSign } from 'lucide-react';
import type { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
  onClick: (property: Property) => void;
}

function parseDescription(desc: string): { label: string; value: string }[] {
  const lines = desc.replace(/\n\s*\n/g, '\n').trim().split('\n');
  const fields: { label: string; value: string }[] = [];
  let lastLabel = '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const match = trimmed.match(/^([A-Za-z]+):\s*(.*)$/);
    if (match) {
      lastLabel = match[1];
      fields.push({ label: match[1], value: match[2] });
    } else if (lastLabel && fields.length > 0) {
      fields[fields.length - 1].value += ' ' + trimmed;
    } else {
      fields.push({ label: '', value: trimmed });
    }
  }
  return fields;
}

export default function PropertyCard({ property, onClick }: PropertyCardProps) {
  const statusColor =
    property.status === 'For Sale'
      ? 'bg-tov-600'
      : property.status === 'For Rent'
      ? 'bg-gold-500'
      : 'bg-gray-600';

  const fields = parseDescription(property.description);
  const priceField = fields.find((f) => f.label.toLowerCase() === 'price');
  const locationField = fields.find((f) => f.label.toLowerCase() === 'location');
  const titleField = fields.find((f) => f.label.toLowerCase() === 'title');
  const extraInfo = fields.filter(
    (f) => !['price', 'location', 'title', 'land'].includes(f.label.toLowerCase()) && f.value
  );

  return (
    <article
      onClick={() => onClick(property)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
            {locationField?.value || property.location}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-serif text-lg font-bold text-gray-900 transition-colors group-hover:text-tov-600">
          {property.title}
        </h3>

        {priceField && (
          <p className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-tov-700">
            <BadgeDollarSign className="h-4 w-4 shrink-0 text-tov-500" />
            {priceField.value}
          </p>
        )}

        {titleField && (
          <p className="mt-1 text-xs text-gray-500">
            <span className="font-medium text-gray-600">Title:</span> {titleField.value}
          </p>
        )}

        {extraInfo.length > 0 && (
          <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
            {extraInfo.map((f) => f.value).join(' ')}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
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
