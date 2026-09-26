import { Search, Building2, Home as HomeIcon, MapPin, DollarSign } from 'lucide-react';

interface SearchFilterProps {
  propertyType: string;
  setPropertyType: (v: string) => void;
  minPrice: string;
  setMinPrice: (v: string) => void;
  maxPrice: string;
  setMaxPrice: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  status: string;
  setStatus: (v: string) => void;
  onSearch: () => void;
  locations: string[];
}

const propertyTypes = [
  { label: 'All Types', value: '' },
  { label: 'Land', value: 'Land' },
  { label: 'House', value: 'House' },
  { label: 'Villa', value: 'Villa' },
  { label: 'Apartment', value: 'Apartment' },
];

const statuses = [
  { label: 'All', value: '' },
  { label: 'For Sale', value: 'For Sale' },
  { label: 'For Rent', value: 'For Rent' },
];

export default function SearchFilter({
  propertyType,
  setPropertyType,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  location,
  setLocation,
  status,
  setStatus,
  onSearch,
  locations,
}: SearchFilterProps) {
  const fieldClass =
    'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-tov-400 focus:ring-2 focus:ring-tov-100';

  return (
    <div className="rounded-2xl bg-white/95 p-5 shadow-2xl backdrop-blur-md sm:p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <Building2 className="h-3.5 w-3.5" /> Property Type
          </label>
          <select
            className={fieldClass}
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            {propertyTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <DollarSign className="h-3.5 w-3.5" /> Min Price
          </label>
          <select
            className={fieldClass}
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          >
            <option value="">No Min</option>
            <option value="5000000">₦5M</option>
            <option value="10000000">₦10M</option>
            <option value="20000000">₦20M</option>
            <option value="30000000">₦30M</option>
            <option value="50000000">₦50M</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <DollarSign className="h-3.5 w-3.5" /> Max Price
          </label>
          <select
            className={fieldClass}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          >
            <option value="">No Max</option>
            <option value="10000000">₦10M</option>
            <option value="20000000">₦20M</option>
            <option value="30000000">₦30M</option>
            <option value="50000000">₦50M</option>
            <option value="100000000">₦100M</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <MapPin className="h-3.5 w-3.5" /> Location
          </label>
          <select
            className={fieldClass}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <HomeIcon className="h-3.5 w-3.5" /> Status
          </label>
          <div className="flex gap-2">
            <select
              className={fieldClass}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              {statuses.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={onSearch}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-tov-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-tov-600/30 transition-all hover:bg-tov-700 hover:shadow-tov-600/40 sm:w-auto sm:justify-self-end"
      >
        <Search className="h-4 w-4" />
        Search Properties
      </button>
    </div>
  );
}
