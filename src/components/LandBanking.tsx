import { Phone, ArrowUpRight } from 'lucide-react';

export default function LandBanking() {
  return (
    <section id="land-banking" className="scroll-mt-20 bg-[#f6f7f2]">
      <div className="bg-tov-950 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            Land Banking
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/land_banking.jpeg"
              alt="Plus Lagos land banking investment opportunity"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-start rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-tov-600">
              Introducing Plus Lagos
            </p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-gray-950">
              Abijo GRA (Oluwa Land)
            </h3>
            <p className="mt-0.5 text-sm text-gray-600">
              Ibeju-Lekki Local Government Area, Lagos State
            </p>

            <div className="mt-4 rounded-lg bg-tov-900 px-4 py-3 text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Projected appreciation
              </p>
              <p className="font-serif text-xl font-bold">50% within 12 months</p>
            </div>

            <div className="mt-4 space-y-2 text-sm leading-relaxed text-gray-700">
              <p className="font-semibold text-tov-800">
                Invest today. Appreciate tomorrow.
              </p>
              <p className="font-semibold uppercase tracking-wide text-gray-700">
                Own land. Build wealth. Secure your future.
              </p>

              <div className="grid grid-cols-2 gap-1.5 pt-1">
                {['Prime location', 'High appreciation potential', 'Secure investment', 'Wealth creation'].map((item) => (
                  <span key={item} className="rounded bg-gray-100 px-2.5 py-1.5 text-xs font-semibold text-gray-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-serif text-base font-bold text-gray-950">
                Why invest in land banking with TOV Homes?
              </h4>
              <ul className="mt-2 space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tov-600" />
                  Strategic location with high appreciation potential
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tov-600" />
                  Expert market management &amp; resale strategy
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tov-600" />
                  Secure your future with tangible assets
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tov-600" />
                  Transparent, professional &amp; reliable management
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tov-600" />
                  Flexible investment options
                </li>
              </ul>
              <p className="mt-2 text-sm font-semibold text-tov-800">
                Your wealth — our priority. Your success — our mission.
              </p>
            </div>

            <div className="mt-4 rounded-lg bg-tov-950 p-4 text-white">
              <p className="text-sm font-semibold text-gold-400">
                Invest in land today. Enjoy 50% returns within 12 months.
              </p>
              <p className="mt-1 text-xs text-white/70">
                Projected returns — 50% appreciation within 12 months
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-tov-600">
                What you get upon full payment
              </h4>
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                {[
                  'Receipt of payment',
                  'Contract of sale',
                  'Allocation documentation',
                  'Survey documentation',
                  'Deed of assignment',
                  'Dedicated investment support',
                ].map((doc) => (
                  <span key={doc} className="rounded bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700">
                    {doc}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-gold-400 p-4 text-gray-950">
              <p className="font-serif text-lg font-bold">Safe. Secure. Strategic.</p>
              <p className="mt-0.5 text-sm font-medium">
                Real estate is the safest path to long-term wealth. Land today. Wealth tomorrow.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-start justify-between gap-3 rounded-lg bg-gold-400 p-4 text-gray-950 shadow sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold">
              For enquiries &amp; subscription: 08065923195 | 09045141576
            </p>
            <p className="mt-0.5 text-xs font-bold uppercase tracking-wide">
              Limited plots available. Invest now and position yourself ahead.
            </p>
          </div>
          <a
            href="tel:+2348065923195"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-tov-950 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            Enquire now
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
