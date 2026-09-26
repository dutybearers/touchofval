import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    'Strategic property development',
    'Land sales and investment solutions',
    'Proper documentation on every project',
    'Innovative development concepts',
    'Customer-focused service',
    'Community-driven growth',
  ];

  return (
    <section id="about" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/38513265/pexels-photo-38513265.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Lagos skyline development"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-tov-600 p-6 text-white shadow-2xl sm:block">
              <p className="font-serif text-3xl font-bold">TOV</p>
              <p className="text-sm text-white/80">Creating Value</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tov-500">
              About Us
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              Touch of Valentine Homes &amp; Interiors Limited
            </h2>
            <p className="mt-4 text-gray-600">
              Touch of Valentine Homes &amp; Interiors Limited (TOV Homes) is a
              Nigerian real estate company committed to creating valuable
              property opportunities and delivering thoughtfully planned
              residential, commercial, and mixed-use developments.
            </p>
            <p className="mt-3 text-gray-600">
              With a growing presence in Lagos, we focus on strategic property
              development, land sales, and real estate investment solutions
              designed to meet the evolving needs of individuals, families,
              businesses, and investors.
            </p>
            <p className="mt-3 text-gray-600">
              Our approach combines strategic locations, proper documentation,
              innovative development concepts, and customer-focused service.
              Through projects such as Plethora City in Epe and Plus Lagos in
              Abijo, we continue to contribute to the development of
              communities while creating opportunities for sustainable property
              ownership and investment.
            </p>
            <p className="mt-3 text-gray-600">
              At TOV Homes, we believe that real estate is more than buying land
              or buildings&mdash;it is about creating value, building
              communities, and helping people secure a meaningful stake in the
              future.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {values.map((value, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-tov-500" />
                  <span className="text-sm text-gray-700">{value}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 font-serif text-lg font-semibold text-tov-700">
              Touch of Valentine Homes &amp; Interiors Limited &mdash; Creating
              Value. Building Communities. Shaping the Future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
