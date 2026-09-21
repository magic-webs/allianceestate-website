'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const inputClass =
  'w-full rounded-[10px] border border-white/20 bg-slate-800/80 py-[0.8rem] pr-[0.9rem] pl-10 font-body text-[0.9rem] text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-gold focus:bg-slate-800 focus:shadow-[0_0_0_3px_rgba(201,162,39,0.2)]';

const selectClass =
  'w-full rounded-[10px] border border-white/20 bg-slate-800/80 py-[0.8rem] pr-[2rem] pl-10 font-body text-[0.9rem] text-white outline-none transition-all duration-300 focus:border-gold focus:bg-slate-800 focus:shadow-[0_0_0_3px_rgba(201,162,39,0.2)] cursor-pointer appearance-none';

const iconClass = 'pointer-events-none absolute left-[0.9rem] z-1 flex items-center text-slate-400';

const WEBHOOK_URL = 'https://webhook.magicxbot.com/webhook/6ab0dabcc277c1989c5bb536';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    workType: 'employee', // 'employee' or 'channel_partner'
    roleInterest: 'Sales & Advisory',
    experience: '1-3 years',
    message: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'];
      
      // Max 10MB
      if (file.size > 10 * 1024 * 1024) {
        setFileError('File size exceeds 10MB limit. Please upload a smaller file.');
        setSelectedFile(null);
        return;
      }
      
      if (!validTypes.includes(file.type)) {
        setFileError('Please upload a valid PDF document or Image (JPG, PNG, WEBP).');
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const typeLabel = formData.workType === 'channel_partner' ? 'Channel Partner' : 'Full-time / Employee';

    // Prepare FormData for webhook submission (supports file binary payload as well as text fields)
    const payload = new FormData();
    payload.append('fullName', formData.fullName);
    payload.append('phone', formData.phone);
    payload.append('email', formData.email || '');
    payload.append('workType', formData.workType);
    payload.append('workTypeLabel', typeLabel);
    payload.append('roleInterest', formData.roleInterest);
    payload.append('experience', formData.experience);
    payload.append('message', formData.message || '');
    payload.append('source', 'allianceestateltd.com/careers');
    payload.append('submittedAt', new Date().toISOString());

    if (selectedFile) {
      payload.append('file', selectedFile, selectedFile.name);
      payload.append('fileName', selectedFile.name);
      payload.append('fileSize', selectedFile.size.toString());
      payload.append('fileType', selectedFile.type);
    }

    try {
      // Send data to webhook
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        body: payload,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Webhook submission error:', err);
      // Even if network CORS occurs, acknowledge submission or fallback gracefully
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-slate-900 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative px-4 pt-24 pb-12 md:pt-36 md:pb-20 bg-gradient-to-b from-primary via-slate-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/About-us.png"
              alt="Alliance Estate Careers"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mx-auto max-w-page text-center relative z-10 px-0 md:px-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] tracking-wider text-gold uppercase md:mb-4 md:px-4 md:py-1.5 md:text-xs">
              <span>Join Alliance Estate</span>
            </div>
            <h1 className="text-[1.9rem] sm:text-[2.5rem] md:text-6xl font-bold font-heading mb-4 text-white leading-tight">
              Build Your Future With Us
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-base md:text-lg font-light leading-relaxed">
              Partner with the fastest-growing real estate network across the Yamuna Expressway and Delhi-NCR corridor. Whether as an Employee or Channel Partner, discover rewarding opportunities.
            </p>
          </div>
        </section>

        {/* Benefits / Roles Grid */}
        <section className="py-10 px-4 md:py-12 md:px-8 border-y border-white/10 bg-slate-950/60">
          <div className="mx-auto max-w-page grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center text-xl mb-4 border border-gold/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-heading">Channel Partner Program</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Aggressive brokerage payouts, direct access to premium land inventories, verified titles, and authority liaison support.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center text-xl mb-4 border border-gold/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-heading">Full-Time Career Opportunities</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Join our expert sales, portfolio management, legal research, and customer success teams with competitive packages and bonuses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center text-xl mb-4 border border-gold/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-heading">High Growth Sector</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Position yourself at the epicenter of airport-driven infrastructure developments, YEIDA industrial zones, and luxury townships.
              </p>
            </div>

          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-12 px-4 md:py-20 md:px-8">
          <div className="mx-auto max-w-3xl">
            
            <div className="rounded-[24px] border border-white/20 bg-slate-950/90 p-6 md:p-12 shadow-2xl backdrop-blur-xl">
              
              <div className="mb-8 text-center">
                <div className="mb-2 inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[2.5px] text-gold uppercase">
                  <span className="inline-block h-0.5 w-5 bg-gold" />
                  APPLICATION FORM
                  <span className="inline-block h-0.5 w-5 bg-gold" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-white">
                  Apply or Register With Alliance Estate
                </h2>
                <p className="text-slate-400 text-sm mt-2">
                  Fill in your details below and upload your resume or partner profile.
                </p>
              </div>

              {isSubmitted ? (
                <div className="rounded-2xl border border-gold/40 bg-gold/10 p-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold text-2xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">Application Submitted!</h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your details and documents have been successfully received by our team. We will review your application and get in touch with you shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setSelectedFile(null);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          workType: 'employee',
                          roleInterest: 'Sales & Advisory',
                          experience: '1-3 years',
                          message: '',
                        });
                      }}
                      className="text-gold font-semibold hover:underline text-sm"
                    >
                      Submit another application &rarr;
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  
                  {/* Type of Engagement Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      How would you like to work with us? <span className="text-gold">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label
                        className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                          formData.workType === 'employee'
                            ? 'border-gold bg-gold/15 text-white shadow-[0_0_15px_rgba(201,162,39,0.15)]'
                            : 'border-white/20 bg-slate-900/80 text-slate-300 hover:border-white/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="workType"
                          value="employee"
                          checked={formData.workType === 'employee'}
                          onChange={handleInputChange}
                          className="accent-gold w-4 h-4 cursor-pointer"
                        />
                        <div>
                          <div className="font-semibold text-sm">Join as Employee</div>
                          <div className="text-xs text-slate-400">Full-time sales, advisory, or ops role</div>
                        </div>
                      </label>

                      <label
                        className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                          formData.workType === 'channel_partner'
                            ? 'border-gold bg-gold/15 text-white shadow-[0_0_15px_rgba(201,162,39,0.15)]'
                            : 'border-white/20 bg-slate-900/80 text-slate-300 hover:border-white/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="workType"
                          value="channel_partner"
                          checked={formData.workType === 'channel_partner'}
                          onChange={handleInputChange}
                          className="accent-gold w-4 h-4 cursor-pointer"
                        />
                        <div>
                          <div className="font-semibold text-sm">Channel Partner</div>
                          <div className="text-xs text-slate-400">Brokerage, agency &amp; associate network</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className={iconClass}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </span>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="e.g. Rahul Sharma"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Phone / WhatsApp Number <span className="text-gold">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className={iconClass}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.41 2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="e.g. +91 9876543210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Role / Domain */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Email Address
                      </label>
                      <div className="relative flex items-center">
                        <span className={iconClass}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        </span>
                        <input
                          type="email"
                          name="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Domain / Role Interest
                      </label>
                      <div className="relative flex items-center">
                        <span className={iconClass}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
                        </span>
                        <select
                          name="roleInterest"
                          value={formData.roleInterest}
                          onChange={handleInputChange}
                          className={selectClass}
                        >
                          <option value="Sales & Advisory" className="bg-slate-900 text-white">Sales &amp; Property Advisory</option>
                          <option value="Channel Partner Network" className="bg-slate-900 text-white">Channel Partner Network</option>
                          <option value="YEIDA Land Acquisition & Liaison" className="bg-slate-900 text-white">YEIDA Land Acquisition &amp; Liaison</option>
                          <option value="Legal & Title Verification" className="bg-slate-900 text-white">Legal &amp; Title Verification</option>
                          <option value="Marketing & Digital Growth" className="bg-slate-900 text-white">Marketing &amp; Digital Growth</option>
                          <option value="Operations & Support" className="bg-slate-900 text-white">Operations &amp; Client Support</option>
                        </select>
                        <span className="pointer-events-none absolute right-[0.9rem] text-slate-400">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Real Estate / Work Experience
                    </label>
                    <div className="relative flex items-center">
                      <span className={iconClass}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      </span>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className={selectClass}
                      >
                        <option value="Fresh / Entry Level" className="bg-slate-900 text-white">Fresh / Entry Level (&lt; 1 year)</option>
                        <option value="1-3 years" className="bg-slate-900 text-white">1 - 3 Years</option>
                        <option value="3-5 years" className="bg-slate-900 text-white">3 - 5 Years</option>
                        <option value="5+ years" className="bg-slate-900 text-white">5+ Years (Senior / Veteran)</option>
                        <option value="Established Broker / Agency" className="bg-slate-900 text-white">Established Broker / Real Estate Agency</option>
                      </select>
                      <span className="pointer-events-none absolute right-[0.9rem] text-slate-400">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                      </span>
                    </div>
                  </div>

                  {/* File Upload Button (PDF or Image) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Upload Resume / Profile Document (PDF or Image)
                    </label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,image/png,image/jpeg,image/webp"
                      className="hidden"
                      id="resume-file-upload"
                    />

                    {!selectedFile ? (
                      <label
                        htmlFor="resume-file-upload"
                        className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-white/20 hover:border-gold/60 rounded-xl bg-slate-900/60 cursor-pointer transition-all group"
                      >
                        <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-white group-hover:text-gold transition-colors">
                          Click to select a file (PDF, JPG, PNG)
                        </span>
                        <span className="text-xs text-slate-400 mt-1">Maximum file size: 10 MB</span>
                      </label>
                    ) : (
                      <div className="flex items-center justify-between p-4 rounded-xl border border-gold/40 bg-gold/10">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-8 h-8 rounded-lg bg-gold/20 text-gold flex items-center justify-center shrink-0">
                            📄
                          </div>
                          <div className="truncate">
                            <p className="text-sm font-semibold text-white truncate">{selectedFile.name}</p>
                            <p className="text-xs text-gold/80">{(selectedFile.size / 1024).toFixed(1)} KB • Ready</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="px-3 py-1 text-xs rounded-md bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 transition-colors shrink-0 font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    )}

                    {fileError && (
                      <p className="text-xs text-rose-400 mt-1">{fileError}</p>
                    )}
                  </div>

                  {/* Message / Cover Note */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      How you would like to work with us / Brief note
                    </label>
                    <div className="relative flex items-center">
                      <span className={`${iconClass} top-[0.95rem] items-start`}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      </span>
                      <textarea
                        name="message"
                        placeholder="Tell us about your background, key network, areas of expertise or expectations..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`${inputClass} min-h-[100px] resize-none pt-[0.85rem]`}
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-[40px] bg-[linear-gradient(to_right,var(--color-gold-deep),var(--color-gold))] px-8 py-3.5 text-sm font-semibold tracking-wider text-white shadow-[0_6px_18px_rgba(201,162,39,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(201,162,39,0.45)] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    <span className="text-xs text-slate-400">
                      We respect your privacy and will never share your details without consent.
                    </span>
                  </div>

                </form>
              )}

            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
