import { useEffect } from 'react';
import {
  X,
  Maximize,
  MapPin,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import type { Property } from '@/types';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onInquire: (propertyTitle: string) => void;
}

export default function PropertyDetailModal({
  property,
  onClose,
  onInquire,
}: PropertyDetailModalProps) {
  useEffect(() => {
    if (property) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [property]);

  if (!property) return null;

  const features = [
    { icon: Maximize, label: 'Plot Size', value: `${property.area_sqft.toLocaleString()} sqm` },
    { icon: MapPin, label: 'Location', value: `${property.location}, ${property.city}` },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 my-8 w-full max-w-4xl animate-fade-in-up rounded-2xl bg-white shadow-2xl">
        <div className="relative h-72 overflow-hidden rounded-t-2xl sm:h-80">
          <img
            src={property.image_url}
            alt={property.title}
            className="h-full w-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition-colors hover:bg-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${
                    property.status === 'For Sale' ? 'bg-tov-600' : 'bg-gold-500'
                  }`}
                >
                  {property.status}
                </span>
                <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  {property.title}
                </h2>
                <p className="flex items-center gap-1.5 text-sm text-white/80">
                  <MapPin className="h-4 w-4" />
                  {property.location}, {property.city}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {features.map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tov-50">
                  <feat.icon className="h-5 w-5 text-tov-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">{feat.label}</p>
                  <p className="truncate text-sm font-semibold text-gray-900">
                    {feat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-lg font-bold text-gray-900">
              Property Details
            </h3>
            <div className="mt-2 whitespace-pre-line rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-700">
              {property.description}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-tov-100 bg-tov-50/50 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tov-600 text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  {property.agent_name}
                </p>
                <p className="text-sm text-gray-500">{property.agent_phone}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => onInquire(property.title)}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-tov-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-tov-600/30 transition-all hover:bg-tov-700"
            >
              <CheckCircle2 className="h-4 w-4" />
              Schedule a Viewing
            </button>
            <a
              href={`tel:${property.agent_phone}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 px-6 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              <Phone className="h-4 w-4" />
              Call Agent
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
