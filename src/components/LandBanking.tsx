import {
  ArrowUpRight,
  BadgeCheck,
  FileCheck2,
  LineChart,
  LockKeyhole,
  MapPinned,
  ShieldCheck,
  WalletCards,
} from 'lucide-react';

const highlights = [
  { icon: MapPinned, label: 'Prime location' },
  { icon: LineChart, label: 'High appreciation' },
  { icon: ShieldCheck, label: 'Secure investment' },
  { icon: WalletCards, label: 'Wealth creation' },
];

const benefits = [
  'Strategic location with high appreciation potential',
  'Expert market management & resale strategy',
  'Secure your future with tangible assets',
  'Transparent, professional & reliable management',
  'Flexible investment options',
];

const documents = [
  'Receipt of payment',
  'Contract of sale',
  'Allocation documentation',
  'Survey documentation',
  'Deed of assignment',
  'Dedicated investment support',
];

export default function LandBanking() {
  return (
    <section id="land-banking" className="scroll-mt-20 bg-[#f6f7f2]">
      <div className="bg-tov-950 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            Land Banking
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm text-white/60">
            Invest in land today. Appreciate tomorrow. Own land, build wealth, and secure your future.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/land_banking.jpeg"
              alt="Plus Lagos land banking investment opportunity"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-tov-600">
              Introducing Plus Lagos
            </p>
            <h3 className="mt-1 font-serif text-3xl font-bold leading-tight text-gray-950">
              Abijo GRA (Oluwa Land)
            </h3>
            <p className="mt-1.5 text-sm text-gray-600">
              Ibeju-Lekki Local Government Area, Lagos State
            </p>

            <div className="mt-4 rounded-xl bg-tov-900 px-5 py-4 text-white shadow-md">
              <div className="flex items-center gap-3">
                <LineChart className="h-8 w-8 shrink-0 text-gold-400" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                    Projected appreciation
                  </p>
                  <p className="font-serif text-2xl font-bold">50% within 12 months</p>
                </div>
              </div>
            </div>

            <p className="mt-4 font-serif text-lg font-semibold text-tov-800">
              Invest today. Appreciate tomorrow.
            </p>
            <p className="mt-0.5 text-sm font-semibold uppercase tracking-wide text-gray-600">
              Own land. Build wealth. Secure your future.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <h3 className="font-serif text-xl font-bold text-gray-950">
              Why invest in land banking with TOV Homes?
            </h3>
            <div className="mt-3 space-y-2.5">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-tov-600" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 border-t border-gray-100 pt-3 text-sm font-semibold text-tov-800">
              Your wealth — our priority. Your success — our mission.
            </p>
          </div>

          <div className="rounded-xl bg-tov-950 p-5 text-white shadow-sm">
            <h3 className="font-serif text-xl font-bold">Projected returns</h3>
            <p className="mt-1 text-sm text-white/70">50% appreciation within 12 months</p>
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-lg bg-white/10 p-2.5 text-center">
                  <Icon className="mx-auto h-5 w-5 text-gold-400" />
                  <p className="mt-1.5 text-[0.7rem] font-semibold capitalize text-white/85">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold text-gold-400">
              Invest in land today. Enjoy 50% returns within 12 months.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-tov-600">
                What you get upon full payment
              </p>
              <h3 className="mt-1 font-serif text-xl font-bold text-gray-950">
                Your investment documentation
              </h3>
            </div>
            <FileCheck2 className="hidden h-8 w-8 text-tov-600 sm:block" />
          </div>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((document) => (
              <div key={document} className="flex items-center gap-2.5 rounded-lg bg-gray-50 p-3">
                <LockKeyhole className="h-4 w-4 shrink-0 text-tov-600" />
                <span className="text-sm font-medium text-gray-700">{document}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-xl bg-gold-400 p-5 text-gray-950 shadow-lg sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-xl font-bold">Safe. Secure. Strategic.</p>
            <p className="mt-0.5 max-w-xl text-sm font-medium">
              Real estate is the safest path to long-term wealth. Land today. Wealth tomorrow.
            </p>
            <p className="mt-2 text-sm font-semibold">
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
            Enquire now
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
