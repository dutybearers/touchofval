import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Properties', id: 'properties' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  const propertyTypes = ['Land Plots', 'Houses', 'Villas', 'Apartments', 'For Sale', 'For Rent'];

  return (
    <footer className="bg-tov-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Touch of Valentine Homes and Interiors Limited — your trusted
              partner for premium real estate in Lagos and beyond. The
              Valentine touch in every home.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-tov-600"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-white/60 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold">Property Types</h3>
            <ul className="mt-4 space-y-2.5">
              {propertyTypes.map((type) => (
                <li key={type}>
                  <button
                    onClick={() => onNavigate('properties')}
                    className="text-sm text-white/60 transition-colors hover:text-gold-400"
                  >
                    {type}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold">Contact Info</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                Lekki Phase 1, Lagos, Nigeria
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href="tel:+2348000000000"
                  className="transition-colors hover:text-gold-400"
                >
                  +234 800 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href="mailto:info@touchofvalentinehomes.com"
                  className="transition-colors hover:text-gold-400"
                >
                  info@touchofvalentinehomes.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-white/50">
            &copy; {new Date().getFullYear()} Touch of Valentine Homes and
            Interiors Limited. All rights reserved. TOV.
          </p>
        </div>
      </div>
    </footer>
  );
}
