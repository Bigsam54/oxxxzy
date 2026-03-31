'use client';

import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <main>
        <section
          className="premium-hero"
          style={{
            paddingTop: 'clamp(120px, 18vh, 180px)',
            paddingBottom: '80px',
            background: 'var(--theme-bg)',
            textAlign: 'left',
          }}
        >
          <div
            className="premium-hero__overlay"
            style={{ opacity: 0.98, background: 'linear-gradient(to right, var(--theme-bg) 40%, rgba(0, 0, 0, 0.7))' }}
          ></div>
          <div
            className="container hero-grid-2"
            style={{
              position: 'relative',
              zIndex: 3,
              gridTemplateColumns: '1.2fr 1fr',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            <div className="fade-up" style={{ textAlign: 'left' }}>
              <h1
                className="hero__title"
                style={{
                  color: 'white',
                  fontSize: 'clamp(48px, 8vw, 72px)',
                  fontWeight: 800,
                  lineHeight: '1.0',
                  marginBottom: '20px',
                  letterSpacing: '-0.04em',
                  textAlign: 'left',
                }}
              >
                Let&apos;s Start a<br />
                <span style={{ color: 'var(--ghana-gold)', fontStyle: 'italic' }}>Conversation.</span>
              </h1>

              {/* Mobile-Only Hero Image */}
              <div
                className="mobile-only"
                style={{
                  marginBottom: '24px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}
              >
                <img
                  src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723827/Whisk_udm0ejz5mgnjfwnw0cm1kjyti2m1qtllltml1sz_ia6jzh.png"
                  alt="Contact Oxzy"
                  style={{ width: '100%', height: 'auto', display: 'block', filter: 'brightness(0.9)' }}
                />
              </div>

              <p
                className="hero__subtitle"
                style={{
                  fontSize: '19px',
                  color: 'rgba(255,255,255,0.9)',
                  maxWidth: '520px',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  marginBottom: '32px',
                  textAlign: 'left',
                }}
              >
                Have questions about YES 2026, partnership ideas, or just want to connect with the Oxzy leadership team?
                We&apos;re here to help you build.
              </p>
            </div>

            <div className="desktop-only fade-up">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <img
                  src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723827/Whisk_udm0ejz5mgnjfwnw0cm1kjyti2m1qtllltml1sz_ia6jzh.png"
                  alt="Contact Oxzy"
                  style={{ width: '100%', height: 'auto', display: 'block', filter: 'brightness(0.9)' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'white', padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div className="fade-up" style={{ textAlign: 'left' }}>
              <span className="section-tag" style={{ color: 'var(--ghana-green)' }}>
                Reach Out Directly
              </span>
              <h2 className="text-dark" style={{ textAlign: 'left', marginBottom: '32px' }}>
                We&apos;re here to assist
              </h2>
              <p
                style={{
                  color: 'var(--theme-text-muted-dark)',
                  fontSize: '18px',
                  marginBottom: '48px',
                  lineHeight: 1.6,
                }}
              >
                Our team monitors inquiries daily. Expect a response within 24 hours as we support your growth journey
                in the Oxzy ecosystem.
              </p>

              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}
              >
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'rgba(13, 92, 51, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--ghana-green)',
                    }}
                  >
                    <Mail size={24} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--theme-text-muted-dark)',
                        marginBottom: '4px',
                      }}
                    >
                      Email Address
                    </div>
                    <a
                      href="mailto:contact@joinoxzy.org"
                      style={{ fontSize: '19px', fontWeight: 700, color: 'var(--theme-bg)', textDecoration: 'none' }}
                    >
                      contact@joinoxzy.org
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'rgba(200, 150, 12, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--ghana-gold)',
                    }}
                  >
                    <Phone size={24} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--theme-text-muted-dark)',
                        marginBottom: '4px',
                      }}
                    >
                      Phone Numbers
                    </div>
                    <a
                      href="tel:+233591417512"
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--theme-bg)',
                        textDecoration: 'none',
                        display: 'block',
                      }}
                    >
                      +233 59 141 7512
                    </a>
                    <a
                      href="tel:+971585114906"
                      style={{ fontSize: '16px', fontWeight: 700, color: 'var(--theme-bg)', textDecoration: 'none' }}
                    >
                      +971 58 511 4906
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'rgba(214, 40, 40, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--ghana-red)',
                    }}
                  >
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--theme-text-muted-dark)',
                        marginBottom: '4px',
                      }}
                    >
                      Office Address
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--theme-bg)', lineHeight: 1.4 }}>
                      Onyasia Crescent, Roman Ridge,
                      <br />
                      Accra, Ghana
                    </div>
                  </div>
                </div>
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
        `}</style>
      </main>
    </>
  );
};

export default ContactPage;
