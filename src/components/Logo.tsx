interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-tov-900';
  const subColor = variant === 'light' ? 'text-tov-200' : 'text-tov-600';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/TOV_LOGO.jpeg"
        alt="Touch of Valentine Homes and Interiors logo"
        className="h-12 w-12 shrink-0 rounded-full object-cover shadow-lg ring-1 ring-white/20"
      />
      <div className="leading-tight">
        <p className={`font-serif text-base font-bold ${textColor}`}>
          Touch of Valentine
        </p>
        <p className={`text-[11px] font-medium tracking-wide ${subColor}`}>
          Homes &amp; Interiors Ltd
        </p>
      </div>
    </div>
  );
}
