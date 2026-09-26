/*
# Create Real Estate Schema for Touch of Valentine Homes and Interiors

1. New Tables
- `properties`: Stores property listings with title, price, type, location,
  bedrooms, bathrooms, area, description, images, status (for sale/rent/sold),
  featured flag, and timestamps.
- `testimonials`: Stores client testimonials with name, role, content, rating,
  and image URL.
- `inquiries`: Stores contact form submissions with name, email, phone,
  message, optional property reference, and timestamp.

2. Security
- RLS enabled on all three tables.
- This is a no-auth public website (no sign-in), so policies use
  TO anon, authenticated.
- properties & testimonials: public read (SELECT true), no public write.
- inquiries: public insert (anyone can submit a contact form), no public read
  (inquiries are private to the company).

3. Important Notes
- Properties and testimonials are read-only for the public (managed by the
  company admin). Inquiries can be submitted by anyone but are not publicly
  readable.
- Indexes added on properties(type), properties(status), properties(location)
  for filter performance.
*/

-- Properties table
CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  property_type text NOT NULL DEFAULT 'House',
  location text NOT NULL,
  city text NOT NULL DEFAULT 'Lagos',
  bedrooms integer NOT NULL DEFAULT 0,
  bathrooms integer NOT NULL DEFAULT 0,
  area_sqft integer NOT NULL DEFAULT 0,
  garage integer NOT NULL DEFAULT 0,
  year_built integer,
  image_url text NOT NULL,
  gallery_urls text[] DEFAULT '{}',
  status text NOT NULL DEFAULT 'For Sale',
  featured boolean NOT NULL DEFAULT false,
  agent_name text NOT NULL DEFAULT 'Touch of Valentine Team',
  agent_phone text NOT NULL DEFAULT '+234 800 000 0000',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_properties" ON properties;
CREATE POLICY "public_read_properties"
ON properties FOR SELECT
TO anon, authenticated USING (true);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL DEFAULT 'Client',
  content text NOT NULL,
  rating integer NOT NULL DEFAULT 5,
  image_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_testimonials" ON testimonials;
CREATE POLICY "public_read_testimonials"
ON testimonials FOR SELECT
TO anon, authenticated USING (true);

-- Inquiries table (contact form submissions)
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  property_title text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_inquiries" ON inquiries;
CREATE POLICY "public_insert_inquiries"
ON inquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Indexes for filter performance
CREATE INDEX IF NOT EXISTS idx_properties_type ON properties(property_type);
CREATE INDEX IF NOT EXISTS idx_properties_status ON properties(status);
CREATE INDEX IF NOT EXISTS idx_properties_location ON properties(location);
CREATE INDEX IF NOT EXISTS idx_properties_price ON properties(price);
CREATE INDEX IF NOT EXISTS idx_properties_featured ON properties(featured);