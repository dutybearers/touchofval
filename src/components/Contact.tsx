import { useState } from 'react';
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ContactProps {
  prefillProperty: string | null;
  onPrefillConsumed: () => void;
}

export default function Contact({ prefillProperty, onPrefillConsumed }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const propertyTitle = prefillProperty ?? '';
  const displayProperty = prefillProperty ?? '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      setError('Please fill in all fields.');
      return;
    }
    setSubmitting(true);
    setError(null);

    const { error: dbError } = await supabase.from('inquiries').insert({
      name,
      email,
      phone,
      message,
      property_title: propertyTitle || null,
    });

    setSubmitting(false);

    if (dbError) {
      setError('Something went wrong. Please try again or call us directly.');
      return;
    }

    setSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onPrefillConsumed();

    setTimeout(() => setSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Office',
      value: 'Plot 1637 Adetokunbo Ademola Street, 7th Floor, Ibukun House, Victoria Island, Lagos',
      href: null,
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Admin@touchofvalentinehomes.com',
      href: 'mailto:Admin@touchofvalentinehomes.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 706 869 9134',
      href: 'tel:+2347068699134',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon - Fri: 8:00 AM - 5:00 PM',
      href: null,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tov-500">
            Get In Touch
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Ready to find your dream home or have questions about our
            properties? Reach out to us — we would love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-5">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl bg-gray-50 p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tov-600 text-white">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-medium text-gray-900 transition-colors hover:text-tov-600"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-900">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-gray-50 p-6 shadow-sm sm:p-8"
            >
              {displayProperty && (
                <div className="mb-4 rounded-lg border border-tov-200 bg-tov-50 px-4 py-3 text-sm text-tov-700">
                  Inquiring about: <strong>{displayProperty}</strong>
                </div>
              )}

              {success && (
                <div className="mb-4 flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                  Thank you! Your message has been sent. We will get back to you
                  shortly.
                </div>
              )}

              {error && (
                <div className="mb-4 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-tov-400 focus:ring-2 focus:ring-tov-100"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-tov-400 focus:ring-2 focus:ring-tov-100"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-tov-400 focus:ring-2 focus:ring-tov-100"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about what you are looking for..."
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-tov-400 focus:ring-2 focus:ring-tov-100"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-tov-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-tov-600/30 transition-all hover:bg-tov-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
