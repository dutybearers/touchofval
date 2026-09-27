import { useCallback, useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Property, Testimonial } from '@/types';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyListings from '@/components/PropertyListings';
import PropertyDetailModal from '@/components/PropertyDetailModal';
import About from '@/components/About';
import LandBanking from '@/components/LandBanking';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [allProperties, setAllProperties] = useState<string[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [testimonialsLoading, setTestimonialsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [prefillProperty, setPrefillProperty] = useState<string | null>(null);

  // Filter state
  const [propertyType, setPropertyType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const fetchProperties = useCallback(async () => {
    setLoading(true);
    setError(null);

    let query = supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false });

    if (propertyType) query = query.eq('property_type', propertyType);
    if (status) query = query.eq('status', status);
    if (location) query = query.eq('location', location);
    if (minPrice) query = query.gte('price', Number(minPrice));
    if (maxPrice) query = query.lte('price', Number(maxPrice));

    const { data, error: dbError } = await query;

    if (dbError) {
      setError('Unable to load properties. Please try again later.');
      setProperties([]);
    } else {
      setProperties((data as Property[]) ?? []);
    }
    setLoading(false);
  }, [propertyType, status, location, minPrice, maxPrice]);

  const fetchAllProperties = useCallback(async () => {
    const { data } = await supabase
      .from('properties')
      .select('location')
      .order('location');
    if (data) {
      const unique = [...new Set(data.map((d) => d.location))];
      setAllProperties(unique as string[]);
    }
  }, []);

  const fetchTestimonials = useCallback(async () => {
    setTestimonialsLoading(true);
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });
    setTestimonials((data as Testimonial[]) ?? []);
    setTestimonialsLoading(false);
  }, []);

  useEffect(() => {
    fetchProperties();
    fetchAllProperties();
    fetchTestimonials();
  }, [fetchProperties, fetchAllProperties, fetchTestimonials]);

  const locations = useMemo(() => allProperties, [allProperties]);

  const activeFilters =
    (propertyType ? 1 : 0) +
    (minPrice ? 1 : 0) +
    (maxPrice ? 1 : 0) +
    (location ? 1 : 0) +
    (status ? 1 : 0);

  const handleClearFilters = () => {
    setPropertyType('');
    setMinPrice('');
    setMaxPrice('');
    setLocation('');
    setStatus('');
  };

  const handleInquire = (propertyTitle: string) => {
    setSelectedProperty(null);
    setPrefillProperty(propertyTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={scrollToSection} />

      <Hero
        onSearch={() => scrollToSection('properties')}
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
        locations={locations}
      />

      <PropertyListings
        properties={properties}
        loading={loading}
        error={error}
        onPropertyClick={setSelectedProperty}
        activeFilters={activeFilters}
        onClearFilters={handleClearFilters}
      />

      <LandBanking />
      <About />
      <Services />
      <Testimonials testimonials={testimonials} loading={testimonialsLoading} />
      <Contact
        prefillProperty={prefillProperty}
        onPrefillConsumed={() => setPrefillProperty(null)}
      />
      <Footer onNavigate={scrollToSection} />

      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onInquire={handleInquire}
      />
    </div>
  );
}

export default App;
