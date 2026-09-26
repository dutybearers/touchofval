import { Star, Quote, Loader2 } from 'lucide-react';
import type { Testimonial } from '@/types';

interface TestimonialsProps {
  testimonials: Testimonial[];
  loading: boolean;
}

export default function Testimonials({ testimonials, loading }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 bg-gradient-to-b from-gray-50 to-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tov-500">
            Client Stories
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We take pride in delivering exceptional service. Here is what our
            valued clients have to say about their experience with Touch of
            Valentine Homes.
          </p>
        </div>

        {loading ? (
          <div className="mt-16 flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-tov-500" />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <Quote className="absolute right-5 top-5 h-10 w-10 text-tov-100" />

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < t.rating
                          ? 'fill-gold-400 text-gold-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-tov-100 font-serif text-sm font-bold text-tov-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
