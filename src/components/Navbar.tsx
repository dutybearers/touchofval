import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Properties', id: 'properties' },
  { label: 'Land Banking', id: 'land-banking' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button onClick={() => handleNav('home')} aria-label="TOV Home">
          <Logo variant={scrolled ? 'dark' : 'light'} />
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-sm font-medium transition-colors hover:text-tov-500 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+2347068699134"
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              scrolled
                ? 'bg-tov-600 text-white hover:bg-tov-700'
                : 'bg-white/15 text-white backdrop-blur-sm hover:bg-white/25'
            }`}
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </div>

        <button
          className={`lg:hidden ${scrolled ? 'text-tov-700' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="animate-slide-down border-t border-gray-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-tov-50 hover:text-tov-600"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+2347068699134"
              className="mt-2 flex items-center gap-2 rounded-lg bg-tov-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
