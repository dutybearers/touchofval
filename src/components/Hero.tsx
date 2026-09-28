import { TrendingUp, Shield, Award } from 'lucide-react';
import SearchFilter from './SearchFilter';

interface HeroProps {
  onSearch: () => void;
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
  locations: string[];
}

export default function Hero({
  onSearch,
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
  locations,
}: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Luxury home"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tov-950/70 via-tov-950/50 to-tov-950/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-in mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            Touch of Valentine Homes &amp; Interiors Ltd
          </p>
          <h1 className="animate-fade-in-up font-serif text-4xl font-bold leading-tight text-white text-shadow-lg sm:text-5xl lg:text-6xl">
            Find Your Dream Home
            <span className="block text-gold-400">in Lagos &amp; Beyond</span>
          </h1>
          <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Discover premium properties crafted with elegance and the signature
            Valentine touch. From luxury villas to modern apartments, your
            perfect home awaits.
          </p>
        </div>

        <div className="mt-10 animate-fade-in-up">
          <SearchFilter
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            location={location}
            setLocation={setLocation}
            status={status}
            setStatus={setStatus}
            onSearch={onSearch}
            locations={locations}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { icon: Award, value: '500+', label: 'Properties Sold' },
            { icon: Shield, value: '100%', label: 'Trusted Service' },
            { icon: TrendingUp, value: '15+', label: 'Years Experience' },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-400/20">
                <stat.icon className="h-5 w-5 text-gold-400" />
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
