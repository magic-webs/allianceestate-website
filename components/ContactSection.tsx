'use client';
import React, { useState } from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will get back to you within 24 hours.');
  };

  return (
    <section className={styles.section} id="contact">

      {/* ── Top image band with header overlaid ── */}
      <div className={styles.imageArea}>
        <img src="/contactus-bg.png" alt="Alliance Estate Contact" className={styles.bgImage} />
        <div className={styles.bgOverlay}></div>

        {/* Absolute-positioned header over image */}
        <div className={styles.header}>
          {/* Left: text */}
          <div className={styles.headerLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              GET IN TOUCH
            </div>
            <h2 className={styles.title}>
              Let's Build <span className={styles.titleGold}>What's Next.</span>
            </h2>
            <p className={styles.subtitle}>
              Have a question, need more information, or want to explore
              investment opportunities? Our team is here to help.
            </p>
          </div>

          {/* Centre: floating cursive text */}
          <div className={styles.floatingText}>
            Better<br />
            <em>Spaces</em><br />
            Brighter<br />
            <em>Tomorrows</em>
          </div>

          {/* Right: stacked taglines */}
          <div className={styles.taglines}>
            <span>PEOPLE</span>
            <span>PLACES</span>
            <span>POSSIBILITIES</span>
          </div>
        </div>
      </div>

      {/* ── Cards pulled up over the image ── */}
      <div className={styles.cardsRow}>

        {/* Form Card */}
        <div className={styles.formCard}>
          <div className={styles.cardHeading}>
            SEND US A MESSAGE
            <span className={styles.cardHeadingLine}></span>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputRow}>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <input type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} className={styles.input} required />
              </div>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className={styles.input} required />
              </div>
            </div>

            <div className={styles.inputRow}>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.41 2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange} className={styles.input} />
              </div>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                </span>
                <select name="interest" value={formData.interest} onChange={handleChange} className={`${styles.input} ${styles.select}`}>
                  <option value="">Interested In</option>
                  <option value="residential">Residential Plots</option>
                  <option value="commercial">Commercial Projects</option>
                  <option value="rera">RERA Projects</option>
                  <option value="abadi">Abadi Land</option>
                  <option value="advisory">Investment Advisory</option>
                </select>
                <span className={styles.selectArrow}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <span className={`${styles.inputIcon} ${styles.inputIconTop}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </span>
              <textarea name="message" placeholder="Your Message *" value={formData.message} onChange={handleChange} className={`${styles.input} ${styles.textarea}`} rows={4} />
            </div>

            <div className={styles.formFooter}>
              <button type="submit" className={styles.submitBtn}>
                SEND MESSAGE &rarr;
              </button>
              <span className={styles.responseNote}>We'll get back to you within 24 hours.</span>
            </div>

            <div className={styles.privacyNote}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Your information is safe with us. We respect your privacy.
            </div>
          </form>
        </div>

        {/* Office + Social + Map card */}
        <div className={styles.officeCard}>
          <div className={styles.officeAndSocial}>

            <div>
              <div className={styles.cardHeading}>
                OUR OFFICE
                <span className={styles.cardHeadingLine}></span>
              </div>
              <div className={styles.officeDetails}>
                <div className={styles.officeRow}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  <span>123 Business Avenue, Sector 62<br />Noida, Uttar Pradesh – 201309</span>
                </div>
                <div className={styles.officeRow}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="none"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  <span>+91 120 456 7890</span>
                </div>
                <div className={styles.officeRow}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="none"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  <span>hello@alliance.com</span>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.cardHeading}>
                FOLLOW US
                <span className={styles.cardHeadingLine}></span>
              </div>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialBtn} aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className={styles.socialBtn} aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" className={styles.socialBtn} aria-label="YouTube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
                </a>
                <a href="#" className={styles.socialBtn} aria-label="X">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
              <div className={styles.socialTaglines}>
                <span>PEOPLE</span>
                <span>PLACES</span>
                <span>POSSIBILITIES</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapWrapper}>
            <iframe
              title="Alliance Estate Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.366!3d28.626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a218d0e30d%3A0x5a88e1ca0b8e6b9a!2sSector+62%2C+Noida!5e0!3m2!1sen!2sin!4v1234567890"
              className={styles.mapIframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a href="https://maps.google.com/?q=Sector+62+Noida" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
              View on Google Maps ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
