export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  property_type: string;
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area_sqft: number;
  garage: number;
  year_built: number | null;
  image_url: string;
  gallery_urls: string[];
  status: string;
  featured: boolean;
  agent_name: string;
  agent_phone: string;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image_url: string | null;
  created_at: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  property_title: string | null;
  created_at: string;
}

export interface PropertyFilters {
  propertyType: string;
  minPrice: number | null;
  maxPrice: number | null;
  location: string;
  status: string;
}
