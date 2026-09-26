import {
  ArrowUpRight,
  BadgeCheck,
  FileCheck2,
  Landmark,
  LineChart,
  LockKeyhole,
  MapPinned,
  ShieldCheck,
  WalletCards,
} from 'lucide-react';

const highlights = [
  { icon: MapPinned, label: 'Prime location' },
  { icon: LineChart, label: 'High appreciation potential' },
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
    <section id="land-banking" className="scroll-mt-20 overflow-hidden bg-[#f6f7f2] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-tov-900/10 blur-2xl" />
            <img
              src="/land_banking.jpeg"
              alt="Plus Lagos land banking investment opportunity"
              className="relative w-full rounded-2xl object-cover shadow-2xl"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tov-600">
              Land Banking
            </p>
            <h2 className="mt-2 font-serif text-4xl font-bold leading-tight text-gray-950 sm:text-5xl">
              Introducing Plus Lagos
            </h2>
            <p className="mt-3 flex items-start gap-2 font-medium text-gray-700">
              <MapPinned className="mt-0.5 h-5 w-5 shrink-0 text-tov-600" />
              Abijo GRA (Oluwa Land), Ibeju-Lekki Local Government Area, Lagos State
            </p>
            <div className="mt-4 inline-flex items-center gap-3 rounded-xl bg-tov-900 px-5 py-3 text-white shadow-lg">
              <LineChart className="h-7 w-7 text-gold-400" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Projected appreciation
                </p>
                <p className="font-serif text-2xl font-bold">50% within 12 months</p>
              </div>
            </div>
            <p className="mt-4 font-serif text-xl font-semibold text-tov-800">
              Invest today. Appreciate tomorrow.
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gray-700">
              Own land. Build wealth. Secure your future.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 sm:p-6">
            <h3 className="font-serif text-2xl font-bold text-gray-950">Why invest in land banking with TOV Homes?</h3>
            <div className="mt-4 space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 text-gray-700">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-tov-600" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 border-t border-gray-100 pt-4 font-semibold text-tov-800">
              Your wealth — our priority. Your success — our mission.
            </p>
          </div>

          <div className="rounded-2xl bg-tov-950 p-5 text-white shadow-sm sm:p-6">
            <h3 className="font-serif text-2xl font-bold">Projected returns</h3>
            <p className="mt-2 text-white/75">50% appreciation within 12 months</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-xl bg-white/10 p-3 text-center">
                  <Icon className="mx-auto h-6 w-6 text-gold-400" />
                  <p className="mt-2 text-xs font-semibold capitalize text-white/85">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-lg font-semibold text-gold-400">
              Invest in land today. Enjoy 50% returns within 12 months.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-tov-600">What you get upon full payment</p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-gray-950">Your investment documentation</h3>
            </div>
            <FileCheck2 className="hidden h-10 w-10 text-tov-600 sm:block" />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((document) => (
              <div key={document} className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                <LockKeyhole className="h-5 w-5 shrink-0 text-tov-600" />
                <span className="text-sm font-medium text-gray-700">{document}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-6 rounded-2xl bg-gold-400 p-5 text-gray-950 shadow-lg sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="font-serif text-2xl font-bold">Safe. Secure. Strategic.</p>
            <p className="mt-1 max-w-xl text-sm font-medium">Real estate is the safest path to long-term wealth. Land today. Wealth tomorrow.</p>
            <p className="mt-3 text-sm font-semibold">For enquiries &amp; subscription: 08065923195 | 09045141576</p>
            <p className="mt-1 text-sm font-bold uppercase tracking-wide">Limited plots available. Invest now and position yourself ahead.</p>
          </div>
          <a
            href="tel:+2348065923195"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-tov-950 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Enquire now
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
