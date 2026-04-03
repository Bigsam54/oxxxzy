'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Zap, Calendar, Monitor, Clock } from 'lucide-react';

/* ─── Countdown hook ─── */
function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  });
  return time;
}

/* ─── Countdown Bar ─── */
const CountdownBar = () => {
  const { d, h, m, s } = useCountdown(new Date('2026-06-12T10:00:00'));
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <div style={{ background: 'var(--theme-bg)', padding: '14px 24px', textAlign: 'center' }}>
      <div
        style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.18em',
          color: 'rgba(255,255,255,0.5)',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
      >
        Reserve your spot — Event starts in
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        {[
          { val: pad(d), lbl: 'Days' },
          { val: pad(h), lbl: 'Hours' },
          { val: pad(m), lbl: 'Mins' },
          { val: pad(s), lbl: 'Secs' },
        ].map(({ val, lbl }) => (
          <div
            key={lbl}
            style={{
              background: 'var(--theme-cream)',
              borderRadius: '8px',
              padding: '8px 14px',
              minWidth: '58px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: '22px',
                fontWeight: 900,
                color: 'var(--theme-bg)',
                lineHeight: 1,
              }}
            >
              {val}
            </div>
            <div
              style={{ fontSize: '9px', fontWeight: 500, color: 'var(--theme-text-muted-dark)', letterSpacing: '0.08em', marginTop: '3px' }}
            >
              {lbl}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Hero Card ─── */
const SummitHeroCard = () => (
  <div
    className="summit-hero-card"
    style={{
      overflow: 'hidden',
      maxWidth: '480px',
      width: '100%',
      background: 'var(--theme-bg)',
      borderRadius: '32px',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
    }}
  >
    <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
      <img
        src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774724142/WhatsApp_Image_2026-03-28_at_6.51.07_PM_phjeba.jpg"
        alt="YES 2026"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 45%' }}
      />
    </div>
    <div style={{ padding: '24px' }}>
      <div
        style={{
          background: 'var(--gold)',
          color: 'var(--theme-bg)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '100px',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}
      >
        <Zap size={12} fill="currentColor" /> YES 2026
      </div>
      <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '12px' }}>
        Summit 2026
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
          <Calendar size={14} /> 12–13 June 2026
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
          <Monitor size={14} /> Virtual · 10 AM – 2 PM daily (GMT)
        </div>
      </div>
      <Link
        href="#register"
        className="btn btn-white btn-sm"
        style={{ background: 'white', color: 'var(--theme-bg)', width: '100%', justifyContent: 'center' }}
      >
        Complete Free Registration
      </Link>
    </div>
  </div>
);

/* ─── Stats Bar ─── */
const statsData = [
  { num: '500+', lbl: 'Young entrepreneurs' },
  { num: '6', lbl: 'Industry sectors' },
  { num: '3+', lbl: 'Years running' },
  { num: 'Free', lbl: 'To attend' },
];

/* ─── Topics ─── */
const topics = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" style={{ width: 20, height: 20 }}>
        <polyline points="2,14 7,8 11,11 18,4" stroke="var(--ghana-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14,4 18,4 18,8" stroke="var(--ghana-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    num: '6 Sectors',
    lbl: 'Agriculture, Tech, Real Estate, Media, Governance, Social Impact',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" style={{ width: 20, height: 20 }}>
        <rect x="3" y="3" width="6" height="6" rx="1" stroke="var(--ghana-red)" strokeWidth="1.8" />
        <rect x="11" y="3" width="6" height="6" rx="1" stroke="var(--ghana-red)" strokeWidth="1.8" />
        <rect x="3" y="11" width="6" height="6" rx="1" stroke="var(--ghana-red)" strokeWidth="1.8" />
        <rect x="11" y="11" width="6" height="6" rx="1" stroke="var(--ghana-red)" strokeWidth="1.8" />
      </svg>
    ),
    num: 'Breakout Rooms',
    lbl: 'Sector-specific networking and live case study challenges',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" style={{ width: 20, height: 20 }}>
        <circle cx="10" cy="7" r="3.5" stroke="var(--ghana-red)" strokeWidth="1.8" />
        <path d="M3 17c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="var(--ghana-red)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    num: 'Ghana Youth Gov.',
    lbl: "Official launch of Oxzy's civic leadership platform",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" style={{ width: 20, height: 20 }}>
        <path d="M4 10l4 4 8-8" stroke="var(--ghana-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    num: 'Entrepreneurs Club',
    lbl: 'Live membership launch — join on the day with exclusive rate',
  },
];

/* ─── Speakers ─── */
const speakers = [
  { initials: 'RA', name: 'Rudolph Amoako Akonnor', role: 'Keynote — Collaboration & Leadership' },
  { initials: 'PJ', name: 'Pastor Joel', role: 'Opening — Divine Empowerment' },
  { initials: 'MB', name: 'Mildred Blagogee', role: 'Panel — Social Impact & Community' },
  { initials: '+', name: 'More speakers to be announced', role: 'Tech, Agribusiness & Real Estate panels', pending: true },
];

const faqs = [
  {
    q: 'Is this summit really free?',
    a: 'Yes. YES 2026 is completely free to attend. Registration takes under a minute and your joining link will be sent before the event.',
  },
  { q: 'Who is this summit for?', a: 'Young entrepreneurs, students, and emerging leaders across Ghana and beyond who want practical knowledge and real connections.' },
  { q: 'What is the Entrepreneurs Club?', a: 'A private Oxzy community offering monthly masterclasses, peer accountability groups, and exclusive networking opportunities.' },
  { q: 'Will sessions be recorded?', a: 'Selected sessions will be available to registered attendees after the event.' },
  { q: 'What is the Ghana Youth Government?', a: "Oxzy's civic leadership platform launching at YES 2026 to engage young people in governance and policy." },
];

const COUNTRIES = [
  "Ghana",
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", 
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
  "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
  "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", 
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", 
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland", 
  "France", "Gabon", "Gambia", "Georgia", "Germany", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", 
  "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", 
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", 
  "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", 
  "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", 
  "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", 
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", 
  "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", 
  "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts & Nevis", "Saint Lucia", "Saint Vincent & the Grenadines", 
  "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", 
  "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", 
  "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", 
  "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", 
  "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", 
  "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

/* ─── Main Page ─── */
const SummitPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    ageRange: '',
    cityRegion: '',
    country: '',
    description: '',
    school: '',
    industry: '',
    hasBusiness: '',
    businessName: '',
    interests: [] as string[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (topic: string) => {
    setFormData(prev => {
      const interests = prev.interests.includes(topic)
        ? prev.interests.filter(i => i !== topic)
        : [...prev.interests, topic].slice(0, 3);
      return { ...prev, interests };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Redirect to WhatsApp Community after a short delay
      setTimeout(() => {
        window.location.href = "https://chat.whatsapp.com/BuX4ynUcGMI8lFjni8qwwW?mode=gi_t";
      }, 1500);
    }, 1500);
  };

  return (
    <>
      <main>
        {/* ── Countdown Banner ── */}
        <div style={{ paddingTop: 'clamp(72px, 10vh, 96px)' }}>
          <CountdownBar />
        </div>

        {/* ── Hero ── */}
        <section
          className="premium-hero"
          style={{
            paddingTop: 'clamp(60px, 10vh, 100px)',
            paddingBottom: '100px',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'left',
            background: 'var(--theme-cream)',
            color: 'var(--theme-bg)',
          }}
        >
          <div
            className="container hero-grid-2"
            style={{ position: 'relative', zIndex: 3, gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}
          >
            <div className="fade-up" style={{ textAlign: 'left' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: 'var(--ghana-red)',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                Exclusive virtual event
              </div>
              <h1
                className="hero__title"
                style={{
                  textAlign: 'left',
                  fontSize: 'clamp(40px, 7vw, 68px)',
                  lineHeight: 1.05,
                  marginBottom: '16px',
                  fontWeight: 800,
                  color: 'var(--theme-bg)',
                }}
              >
                Young Entrepreneurs&apos;
                <br />
                <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Summit 2026</span>
              </h1>

              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: 'var(--theme-bg)',
                  marginBottom: '10px',
                  lineHeight: 1.4,
                  opacity: 0.9,
                }}
              >
                Insights from the people who are building Ghana&apos;s future
              </p>
              <p
                className="hero__subtitle"
                style={{
                  textAlign: 'left',
                  fontSize: '14px',
                  color: 'var(--theme-text-muted-dark)',
                  maxWidth: '520px',
                  marginBottom: '28px',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                Join our summit to get practical knowledge, real connections, and the conversations that matter for young entrepreneurs across Ghana.
              </p>

              {/* Meta info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
                {[
                  { icon: '📅', text: '12 – 13 June 2026' },
                  { icon: '⏰', text: '10:00 AM – 2:00 PM daily (GMT)' },
                  { icon: '💻', text: 'Live virtual event with Q&A' },
                ].map(({ icon, text }) => (
                  <div
                    key={text}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--theme-bg)' }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        background: 'var(--theme-bg)',
                        borderRadius: 5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        flexShrink: 0,
                        color: 'white',
                      }}
                    >
                      {icon}
                    </div>
                    {text}
                  </div>
                ))}
              </div>

              <div className="mobile-only" style={{ marginBottom: '32px' }}>
                <SummitHeroCard />
              </div>

              <div className="desktop-only" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <Link
                  href="#register"
                  className="btn btn-gold btn-lg"
                  style={{ background: 'var(--gold)', color: 'var(--theme-bg)', fontWeight: 700 }}
                >
                  Register Free — YES 2026 <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="desktop-only fade-up">
              <SummitHeroCard />
            </div>
          </div>
        </section>

        {/* ── Registration Form ── */}
        <section className="section" id="register" style={{ background: 'white' }}>
          <div className="container" style={{ margin: '0 auto', textAlign: 'left', maxWidth: '900px' }}>
            <div style={{ textAlign: 'left', marginBottom: '48px' }} className="fade-up">
              <span className="section-tag" style={{ color: 'var(--ghana-red)' }}>Official Registration</span>
              <h2 className="text-dark" style={{ textAlign: 'left', fontSize: 'clamp(32px, 5vw, 48px)' }}>
                YES 2026 Summit Registration
              </h2>
              <p className="text-muted-dark" style={{ fontSize: '18px' }}>
                Please complete the form below to secure your spot at the largest virtual gathering of young builders.
              </p>
            </div>

            {isSubmitted && (
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(10px)',
                  zIndex: 10000,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px'
                }}
              >
                <div
                  className="success-msg show"
                  style={{
                    background: 'var(--theme-cream)',
                    padding: '64px',
                    borderRadius: '40px',
                    border: '1px solid var(--theme-border)',
                    textAlign: 'center',
                    maxWidth: '540px',
                    width: '100%',
                    boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
                    animation: 'modalSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative'
                  }}
                >
                  <div style={{ color: 'var(--ghana-gold)', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'var(--gold)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--theme-bg)'
                    }}>
                      <CheckCircle2 size={40} />
                    </div>
                  </div>
                  <h3
                    className="text-dark"
                    style={{ fontFamily: 'var(--font-head)', fontSize: '32px', fontWeight: 800, marginBottom: '16px', lineHeight: 1.1 }}
                  >
                    Registration complete!
                  </h3>
                  <p className="text-muted-dark" style={{ fontSize: '17px', lineHeight: 1.6, marginBottom: '32px' }}>
                    You are being redirected to the Summit <br/>WhatsApp community in just a moment...
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="loading-spinner" style={{ width: '32px', height: '32px', borderColor: 'var(--gold)', borderTopColor: 'transparent' }}></div>
                  </div>
                </div>
              </div>
            )}

            {!isSubmitted && (
              <div
                className="form-wrapper fade-up"
                style={{ 
                  background: 'var(--theme-cream)', 
                  borderRadius: '40px', 
                  padding: 'clamp(24px, 5vw, 64px)', 
                  border: '1px solid var(--theme-border)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.04)'
                }}
              >
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '64px' }}>
                  {/* Section 1: Basic Information */}
                  <div className="form-section">
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--theme-bg)', marginBottom: '32px', borderBottom: '2px solid var(--ghana-gold)', paddingBottom: '12px', display: 'inline-block' }}>
                      Section 1: Basic Information
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                      <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="form-control" placeholder="John Doe" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" placeholder="john@example.com" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number (WhatsApp preferred)</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="form-control" placeholder="+233 XX XXX XXXX" required />
                      </div>
                      <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                        <label className="form-label">Gender</label>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '8px' }}>
                          {['Male', 'Female', 'Prefer not to say'].map(opt => (
                            <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}>
                              <input type="radio" name="gender" value={opt} onChange={handleInputChange} checked={formData.gender === opt} required /> {opt}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Age Range</label>
                        <select name="ageRange" value={formData.ageRange} onChange={handleInputChange} className="form-control form-control--select" required>
                          <option value="" disabled>Select range</option>
                          {['Under 18', '18–21', '22–25', '26–30', '31+'].map(age => <option key={age} value={age}>{age}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">City / Region</label>
                        <input type="text" name="cityRegion" value={formData.cityRegion} onChange={handleInputChange} className="form-control" placeholder="Accra, Greater Accra" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Country</label>
                        <select name="country" value={formData.country} onChange={handleInputChange} className="form-control form-control--select" required>
                          <option value="" disabled>Select country</option>
                          {COUNTRIES.map(country => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Education / Professional Background */}
                  <div className="form-section">
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--theme-bg)', marginBottom: '32px', borderBottom: '2px solid var(--ghana-gold)', paddingBottom: '12px', display: 'inline-block' }}>
                      Section 2: Education / Professional Background
                    </h3>
                    <div style={{ display: 'grid', gap: '32px' }}>
                      <div className="form-group">
                        <label className="form-label">What best describes you?</label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginTop: '12px' }}>
                          {['Student', 'Entrepreneur / Startup Founder', 'Young Professional', 'Freelancer / Creator', 'Job Seeker', 'Other'].map(opt => (
                            <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}>
                              <input type="radio" name="description" value={opt} onChange={handleInputChange} checked={formData.description === opt} required /> {opt}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        <div className="form-group">
                          <label className="form-label">If you are a student, what is your school?</label>
                          <input type="text" name="school" value={formData.school} onChange={handleInputChange} className="form-control" placeholder="University Name" />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Industry (If working/running business)</label>
                          <select name="industry" value={formData.industry} onChange={handleInputChange} className="form-control form-control--select">
                            <option value="">Select industry</option>
                            {['Technology / AI', 'Agriculture / Agribusiness', 'Real Estate', 'Media / Creator Economy', 'Finance / Business', 'Social Impact / NGO', 'Other'].map(ind => <option key={ind} value={ind}>{ind}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Do you currently run a business or startup?</label>
                        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '8px' }}>
                          {['Yes', 'No, but I plan to', 'Not currently interested'].map(opt => (
                            <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}>
                              <input type="radio" name="hasBusiness" value={opt} onChange={handleInputChange} checked={formData.hasBusiness === opt} /> {opt}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Name of your business/startup (Optional)</label>
                        <input type="text" name="businessName" value={formData.businessName} onChange={handleInputChange} className="form-control" placeholder="Business Name" />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Interests & Summit Focus */}
                  <div className="form-section">
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--theme-bg)', marginBottom: '32px', borderBottom: '2px solid var(--ghana-gold)', paddingBottom: '12px', display: 'inline-block' }}>
                      Section 3: Interests & Summit Focus
                    </h3>
                    <div style={{ display: 'grid', gap: '32px' }}>
                      <div className="form-group">
                        <label className="form-label">Which summit topics interest you the most? (Select up to 3)</label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px', marginTop: '12px' }}>
                          {['Entrepreneurship & Startups', 'Technology & Artificial Intelligence', 'Agriculture & Agribusiness', 'Real Estate & Infrastructure', 'Media & Creator Economy', 'Governance & Civic Leadership', 'Social Impact & Community Development'].map(opt => (
                            <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 500 }}>
                              <input type="checkbox" checked={formData.interests.includes(opt)} onChange={() => handleCheckboxChange(opt)} /> {opt}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-submit">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        background: 'var(--ghana-red)',
                        color: 'white',
                        padding: '24px',
                        fontWeight: 800,
                        fontSize: '18px',
                        borderRadius: '20px',
                        boxShadow: '0 20px 40px rgba(214, 40, 40, 0.2)'
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Securing your spot...' : 'Complete Free Registration ↗'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>

        <style jsx>{`
          @keyframes modalSlideIn {
            from { opacity: 0; transform: translateY(30px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>

        {/* ── What We'll Cover ── */}
        <section className="section" style={{ background: 'var(--theme-cream)' }}>
          <div className="container" style={{ textAlign: 'left' }}>
            <div className="fade-up">
              <span className="section-tag" style={{ color: 'var(--ghana-red)' }}>Programme</span>
              <h2 className="text-dark" style={{ textAlign: 'left', marginBottom: '8px' }}>
                A glimpse of what we&apos;ll cover
              </h2>
              <p className="text-muted-dark" style={{ maxWidth: '560px', marginBottom: '40px', fontSize: '16px' }}>
                These conversations are part of the broader picture our speakers bring to the summit.
              </p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '16px',
              }}
            >
              {topics.map(({ icon, num, lbl }) => (
                <div
                  key={num}
                  className="fade-up"
                  style={{
                    background: 'var(--theme-bg)',
                    borderRadius: '12px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-head)',
                        fontSize: '17px',
                        fontWeight: 900,
                        color: '#fff',
                        lineHeight: 1,
                        marginBottom: '4px',
                      }}
                    >
                      {num}
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Speakers ── */}
        <section className="section" style={{ background: 'white' }}>
          <div className="container" style={{ textAlign: 'left' }}>
            <div className="fade-up">
              <span className="section-tag" style={{ color: 'var(--ghana-red)' }}>Speakers</span>
              <h2 className="text-dark" style={{ textAlign: 'left', marginBottom: '32px' }}>
                Meet the speakers
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '12px',
              }}
            >
              {speakers.map(({ initials, name, role, pending }) => (
                <div
                  key={name}
                  className="fade-up"
                  style={{
                    background: pending ? 'var(--theme-cream)' : 'white',
                    borderRadius: '12px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    border: pending ? '1.5px dashed rgba(0,0,0,0.1)' : '0.5px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: pending ? 'var(--theme-text-muted-dark)' : 'var(--theme-bg)',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-head)',
                      fontSize: '15px',
                      fontWeight: 900,
                      color: '#fff',
                    }}
                  >
                    {initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: pending ? 'var(--theme-text-muted-dark)' : 'var(--theme-bg)',
                        marginBottom: '3px',
                      }}
                    >
                      {name}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--theme-text-muted-dark)' }}>{role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="section" style={{ background: 'var(--theme-cream)' }}>
          <div className="container container--sm" style={{ margin: '0', textAlign: 'left' }}>
            <div className="fade-up">
              <span className="section-tag" style={{ color: 'var(--ghana-red)' }}>FAQs</span>
              <h2 className="text-dark" style={{ textAlign: 'left', marginBottom: '32px' }}>
                Common questions
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {faqs.map(({ q, a }, i) => (
                <div
                  key={q}
                  className="fade-up"
                  style={{ borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: '18px 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '12px',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--theme-bg)' }}>{q}</span>
                    <span
                      style={{
                        fontSize: '20px',
                        color: 'var(--ghana-red)',
                        flexShrink: 0,
                        lineHeight: 1,
                        marginTop: '1px',
                        transition: 'transform 0.2s',
                        transform: openFaq === i ? 'rotate(0deg)' : 'rotate(0deg)',
                      }}
                    >
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && a && (
                    <div
                      style={{
                        fontSize: '14px',
                        color: 'var(--theme-text-muted-dark)',
                        lineHeight: 1.7,
                        paddingBottom: '18px',
                      }}
                    >
                      {a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="section" style={{ background: 'white' }}>
          <div className="container">
            <div
              className="fade-up"
              style={{
                background: 'var(--theme-bg)',
                borderRadius: '20px',
                padding: '48px 40px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner decorators */}
              {[
                { top: 10, left: 10, borderRight: 'none', borderBottom: 'none', borderRadius: '4px 0 0 0' },
                { top: 10, right: 10, borderLeft: 'none', borderBottom: 'none', borderRadius: '0 4px 0 0' },
                { bottom: 10, left: 10, borderRight: 'none', borderTop: 'none', borderRadius: '0 0 0 4px' },
                { bottom: 10, right: 10, borderLeft: 'none', borderTop: 'none', borderRadius: '0 0 4px 0' },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: 32,
                    height: 32,
                    border: '2px solid rgba(255,255,255,0.15)',
                    ...s,
                  }}
                />
              ))}

              <h2
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: 'clamp(22px, 4vw, 32px)',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '10px',
                  lineHeight: 1.2,
                }}
              >
                Don&apos;t miss this summit
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  maxWidth: '480px',
                  margin: '0 auto 28px',
                  lineHeight: 1.6,
                }}
              >
                Get the insights, connections, and inspiration to build your business and shape Ghana&apos;s future.
              </p>
              <Link
                href="#register"
                className="btn btn-gold btn-lg"
                style={{
                  background: 'var(--ghana-red)',
                  color: '#fff',
                  fontWeight: 700,
                  display: 'inline-flex',
                  justifyContent: 'center',
                }}
              >
                Register free now ↗
              </Link>
              <div style={{ marginTop: '14px', fontSize: '11px', color: 'rgba(255,255,255,0.3)', textDecoration: 'underline', cursor: 'pointer' }}>
                Learn more about Oxzy at oxzy.org
              </div>
            </div>
          </div>
        </section>



        <style jsx>{`
          @media (max-width: 768px) {
            .hero__title,
            .hero__subtitle {
              text-align: left !important;
            }
          }
          @media (max-width: 640px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>
      </main>
    </>
  );
};

export default SummitPage;
