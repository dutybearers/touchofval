import { Home, KeyRound, Sofa, Building2, FileSearch, Handshake } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Property Sales',
    description:
      'Browse and purchase premium homes, villas, and apartments handpicked for quality and value across Lagos and Ogun.',
  },
  {
    icon: KeyRound,
    title: 'Property Rental',
    description:
      'Find the perfect rental property — from short-let apartments to long-term family homes in prime locations.',
  },
  {
    icon: Sofa,
    title: 'Interior Design',
    description:
      'Our interior design team transforms spaces with the signature Valentine touch — elegant, functional, and timeless.',
  },
  {
    icon: Building2,
    title: 'Commercial Real Estate',
    description:
      'Office spaces, retail outlets, and commercial properties tailored to support your business growth.',
  },
  {
    icon: FileSearch,
    title: 'Property Valuation',
    description:
      'Accurate, market-informed valuations to help you make confident buying, selling, or investment decisions.',
  },
  {
    icon: Handshake,
    title: 'Diaspora Services',
    description:
      'Property management and acquisition services for Nigerians abroad — transparent, reliable, and stress-free.',
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-tov-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            What We Offer
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Comprehensive real estate solutions designed to meet every need —
            whether you are buying, selling, renting, or designing your space.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-gold-400/30 hover:bg-white/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-400/15 transition-colors group-hover:bg-gold-400/25">
                <service.icon className="h-7 w-7 text-gold-400" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
