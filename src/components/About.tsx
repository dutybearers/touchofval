import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    'Integrity in every transaction',
    'Personalized client service',
    'Deep local market expertise',
    'Premium interior design solutions',
    'Transparent and honest communication',
    'Diaspora-friendly property management',
  ];

  return (
    <section id="about" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Luxury interior"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-tov-600 p-6 text-white shadow-2xl sm:block">
              <p className="font-serif text-3xl font-bold">15+</p>
              <p className="text-sm text-white/80">Years of Excellence</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tov-500">
              About Us
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              The Valentine Touch in Every Home
            </h2>
            <p className="mt-4 text-gray-600">
              Touch of Valentine Homes and Interiors Limited is a premier real
              estate company based in Lagos, Nigeria. We specialize in the
              sale, rental, and interior design of luxury residential and
              commercial properties.
            </p>
            <p className="mt-3 text-gray-600">
              Our signature &ldquo;Valentine touch&rdquo; means every property we
              handle is treated with care, elegance, and a commitment to
              excellence. From first-time buyers to seasoned investors and
              diaspora clients, we guide you through every step of your real
              estate journey with transparency and professionalism.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {values.map((value, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-tov-500" />
                  <span className="text-sm text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
