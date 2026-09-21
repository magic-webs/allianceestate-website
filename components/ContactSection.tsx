'use client';
import React, { useState } from 'react';

const cardClass =
  'rounded-[20px] border border-white/20 bg-slate-900/85 p-8 shadow-2xl backdrop-blur-md';

const cardHeadingClass =
  'mb-5 flex items-center gap-[0.85rem] text-[0.72rem] font-bold tracking-[2.5px] text-gold uppercase';

const inputClass =
  'w-full rounded-[10px] border border-white/20 bg-slate-800/80 py-[0.8rem] pr-[0.9rem] pl-10 font-body text-[0.9rem] text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-gold focus:bg-slate-800 focus:shadow-[0_0_0_3px_rgba(201,162,39,0.2)]';

const iconClass = 'pointer-events-none absolute left-[0.9rem] z-1 flex items-center text-slate-400';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      'Hello Alliance Estate, I would like to make an inquiry:',
      `Name: ${formData.fullName}`,
      formData.email ? `Email: ${formData.email}` : '',
      formData.phone ? `Phone: ${formData.phone}` : '',
      formData.interest ? `Interested In: ${formData.interest}` : '',
      formData.message ? `Message: ${formData.message}` : '',
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/919990366338?text=${encodeURIComponent(parts.join('\n'))}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative z-20 overflow-hidden py-12 md:py-24 bg-slate-950 text-white" id="contact">
      {/* ── Full Container Background Image ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/contactus-bg.png"
          alt="Alliance Estate Contact"
          className="h-full w-full object-contain object-top opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 /70 via-slate-900/80 to-slate-950/90" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-page px-4 md:px-8 xl:px-16">
        {/* Header */}
        <div className="max-w-[600px] mb-8 md:mb-12">
          <div className="mb-3 flex items-center gap-3 text-[0.65rem] font-bold tracking-[2.5px] text-gold md:mb-4 md:gap-4 md:text-[0.72rem] md:tracking-[3px]">
            <span className="inline-block h-0.5 w-5 bg-gold md:w-7" />
            GET IN TOUCH
          </div>
          <h2 className="mb-3 font-heading text-[1.9rem] leading-[1.1] font-bold text-white sm:text-[2.5rem] md:mb-[0.85rem] md:text-[3.4rem]">
            Let&apos;s Build <span className="font-semibold text-gold italic">What&apos;s Next.</span>
          </h2>
          <p className="max-w-[480px] text-[0.9rem] leading-[1.65] text-slate-300 md:text-[1.05rem]">
            Have a question, need more information, or want to explore investment opportunities? Our team is here to help.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-[1.15fr_1fr]">
          {/* Form Card */}
          <div className={cardClass}>
            <div className={cardHeadingClass}>
              SEND US A MESSAGE
              <span className="inline-block h-0.5 w-[22px] bg-gold" />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[0.85rem]">
              <div className="grid grid-cols-1 gap-[0.85rem] md:grid-cols-2">
                <div className="relative flex items-center">
                  <span className={iconClass}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  </span>
                  <input type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} className={inputClass} required />
                </div>
                <div className="relative flex items-center">
                  <span className={iconClass}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </span>
                  <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className={inputClass} required />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-[0.85rem] md:grid-cols-2">
                <div className="relative flex items-center">
                  <span className={iconClass}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.41 2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </span>
                  <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange} className={inputClass} />
                </div>
                <div className="relative flex items-center">
                  <span className={iconClass}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
                  </span>
                  <select name="interest" value={formData.interest} onChange={handleChange} className={`${inputClass} cursor-pointer appearance-none text-slate-300`}>
                    <option value="" className="bg-slate-900 text-white">Interested In</option>
                    <option value="residential" className="bg-slate-900 text-white">Residential Plots</option>
                    <option value="commercial" className="bg-slate-900 text-white">Commercial Projects</option>
                    <option value="rera" className="bg-slate-900 text-white">RERA Projects</option>
                    <option value="abadi" className="bg-slate-900 text-white">Abadi Land</option>
                    <option value="advisory" className="bg-slate-900 text-white">Investment Advisory</option>
                  </select>
                  <span className="pointer-events-none absolute right-[0.9rem] text-slate-400">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                  </span>
                </div>
              </div>

              <div className="relative flex items-center">
                <span className={`${iconClass} top-[0.95rem] items-start`}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </span>
                <textarea name="message" placeholder="Your Message *" value={formData.message} onChange={handleChange} className={`${inputClass} min-h-[110px] resize-none pt-[0.85rem]`} rows={4} />
              </div>

              <div className="mt-1 flex flex-col items-start gap-5 md:flex-row md:items-center">
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-[40px] bg-[linear-gradient(to_right,var(--color-gold-deep),var(--color-gold))] px-7 py-[0.9rem] text-[0.82rem] font-semibold tracking-[1.5px] whitespace-nowrap text-white shadow-[0_6px_18px_rgba(201,162,39,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(201,162,39,0.45)]"
                >
                  SEND MESSAGE &rarr;
                </button>
                <span className="text-[0.82rem] text-slate-400">We&apos;ll get back to you within 24 hours.</span>
              </div>

              <div className="mt-1 flex items-center gap-2 text-[0.75rem] text-slate-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                Your information is safe with us. We respect your privacy.
              </div>
            </form>
          </div>

          {/* Office + Social + Map card */}
          <div className={cardClass}>
            <div className="mb-5 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <div className={cardHeadingClass}>
                  OUR OFFICE
                  <span className="inline-block h-0.5 w-[22px] bg-gold" />
                </div>
                <div className="flex flex-col gap-[0.85rem] [&>div>svg]:mt-0.5 [&>div>svg]:shrink-0">
                  <div className="flex items-start gap-2.5 text-[0.87rem] leading-[1.5] text-slate-200">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                    <a href="https://maps.app.goo.gl/gi2qrnJVssnxg5nA7" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                      F-75, First Floor, Galleria Market<br />Gaur Yamuna City, Gautam Buddha Nagar
                    </a>
                  </div>
                  <div className="flex items-start gap-2.5 text-[0.87rem] leading-[1.5] text-slate-200">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="none"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                    <a href="https://wa.me/919990366338" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">+91 9990366338 (WhatsApp Available)</a>
                  </div>
                  <div className="flex items-start gap-2.5 text-[0.87rem] leading-[1.5] text-slate-200">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="none"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                    <a href="mailto:contact@allianceestateltd.com" className="hover:text-gold transition-colors">contact@allianceestateltd.com</a>
                  </div>
                </div>
              </div>

              <div>
                <div className={cardHeadingClass}>
                  FOLLOW US
                  <span className="inline-block h-0.5 w-[22px] bg-gold" />
                </div>
                <div className="mb-4 flex gap-2.5 [&>a]:flex [&>a]:h-[38px] [&>a]:w-[38px] [&>a]:items-center [&>a]:justify-center [&>a]:rounded-[9px] [&>a]:border [&>a]:border-white/20 [&>a]:bg-slate-800/80 [&>a]:text-white [&>a]:transition-all [&>a]:duration-300 [&>a:hover]:-translate-y-0.5 [&>a:hover]:border-gold [&>a:hover]:text-gold [&>a:hover]:shadow-[0_4px_10px_rgba(201,162,39,0.2)]">
                  <a href="#" aria-label="Facebook">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-[175px] overflow-hidden rounded-xl border border-white/20">
              <iframe
                title="Alliance Estate Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.3532984189334!2d77.555636!3d28.30676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc7eb2510bf8f%3A0xaee3d73df091be76!2sAlliance%20Estate!5e0!3m2!1sen!2sin!4v1710000000000"
                className="block h-full w-full border-none"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.app.goo.gl/gi2qrnJVssnxg5nA7"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-[0.6rem] bottom-[0.6rem] flex items-center gap-[0.3rem] rounded-[7px] border border-gold/40 bg-slate-900/90 px-[0.7rem] py-[0.35rem] text-[0.75rem] font-semibold text-gold no-underline shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-gold hover:text-slate-950"
              >
                View on Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
