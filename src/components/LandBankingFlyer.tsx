import { CalendarDays, CheckCircle2, TrendingUp } from 'lucide-react';

const returns = [
  {
    icon: CalendarDays,
    badge: '30% Monthly',
    title: 'For investments of ₦5M and above',
    description: 'Attracts 30% returns on investment every month.',
  },
  {
    icon: TrendingUp,
    badge: '50% Yearly',
    title: 'For investments below ₦5M',
    description: 'Attracts 50% returns on investment every year.',
  },
];

const deliverables = ['Receipt of payment', 'Contract of sale', 'Postdated check'];

export default function LandBankingFlyer() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-200">
          <img
            src="/images/LAND_BANKER.jpeg"
            alt="TOV Homes land banking flyer showing projected returns"
            className="h-auto w-full object-contain"
            loading="lazy"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tov-500">
            Land Banking Opportunity
          </p>
          <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-gray-950 sm:text-3xl">
            Invest in land today, it appreciates tomorrow
          </h3>
          <p className="mt-3 text-base text-gray-700">
            Invest as low as <strong className="font-semibold text-tov-700">₦1M</strong> and
            get <strong className="font-semibold text-tov-700">₦1.5M</strong> in 12 months.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {returns.map((item) => (
              <div
                key={item.badge}
                className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-400 text-gray-950">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="font-serif text-xl font-bold text-tov-900">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-tov-950 p-5 text-white">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-400">
              What you get upon full payment
            </h4>
            <ul className="mt-3 space-y-2">
              {deliverables.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/90">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
