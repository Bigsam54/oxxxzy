'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Users, MessageCircle, Target, Eye, Sparkles, ArrowRight, Lightbulb, ShieldCheck } from 'lucide-react';

const GhanaYouthConferencePage = () => {
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
                  fontSize: 'clamp(40px, 7vw, 64px)',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  marginBottom: '20px',
                  letterSpacing: '-0.04em',
                  textAlign: 'left',
                }}
              >
                Ghana Youth
                <br />
                <span style={{ color: 'var(--ghana-gold)', fontStyle: 'italic' }}>Conference</span>
              </h1>

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
                  src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774724142/WhatsApp_Image_2026-03-28_at_6.51.07_PM_phjeba.jpg"
                  alt="Ghana Youth Conference"
                  style={{ width: '100%', height: 'auto', display: 'block', filter: 'brightness(0.9)' }}
                />
              </div>

              <p
                className="hero__subtitle"
                style={{
                  fontSize: '19px',
                  color: 'rgba(255,255,255,0.9)',
                  maxWidth: '580px',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  marginBottom: '32px',
                  textAlign: 'left',
                }}
              >
                An annual gathering designed to bring Ghanaian youth together to discuss the challenges facing the country and explore practical solutions for national development.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <Link
                  href="/club"
                  className="btn btn-gold btn-lg"
                  style={{ background: 'var(--ghana-gold)', color: 'var(--theme-bg)', fontWeight: 700 }}
                >
                  Join the Dialogue <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="desktop-only fade-up">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  height: '450px',
                }}
              >
                <img
                  src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774724142/WhatsApp_Image_2026-03-28_at_6.51.07_PM_phjeba.jpg"
                  alt="Ghana Youth Conference"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--theme-cream)' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="fade-up" style={{ textAlign: 'left' }}>
              <p
                style={{
                  color: 'var(--theme-text-muted-dark)',
                  fontSize: '19px',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                Each year, the conference creates a platform where young people from different backgrounds — including students, entrepreneurs, innovators, and community leaders — can share perspectives, exchange ideas, and collaborate on solutions that can positively impact society.
              </p>
              <p
                style={{
                  color: 'var(--theme-text-muted-dark)',
                  fontSize: '19px',
                  lineHeight: 1.7,
                }}
              >
                By bringing young people together in one space, the Ghana Youth Conference helps strengthen youth voices and encourages collective action toward building a better future for the country.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'white', paddingTop: '100px' }}>
          <div className="container">
            <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 0 64px' }} className="fade-up">
              <span className="section-tag" style={{ color: 'var(--ghana-green)' }}>
                Focus Areas
              </span>
              <h2 className="text-dark" style={{ textAlign: 'left' }}>
                Driving National Progress
              </h2>
            </div>

            <div className="wyl-cards-grid">
              <div className="focus-card fade-up wyl-card">
                <div
                  className="focus-icon-wrap"
                  style={{
                    width: '40px',
                    height: '40px',
                    color: 'var(--ghana-green)',
                    background: 'rgba(13, 92, 51, 0.08)',
                    marginBottom: '12px',
                  }}
                >
                  <Globe size={20} />
                </div>
                <h3 className="focus-title" style={{ fontSize: '16px', marginBottom: 0 }}>
                  National Development Conversations
                </h3>
              </div>

              <div className="focus-card fade-up wyl-card">
                <div
                  className="focus-icon-wrap"
                  style={{
                    width: '40px',
                    height: '40px',
                    color: 'var(--ghana-gold)',
                    background: 'rgba(200, 150, 12, 0.08)',
                    marginBottom: '12px',
                  }}
                >
                  <ShieldCheck size={20} />
                </div>
                <h3 className="focus-title" style={{ fontSize: '16px', marginBottom: 0 }}>
                  Youth Participation in Governance
                </h3>
              </div>

              <div className="focus-card fade-up wyl-card">
                <div
                  className="focus-icon-wrap"
                  style={{
                    width: '40px',
                    height: '40px',
                    color: 'var(--ghana-red)',
                    background: 'rgba(214, 40, 40, 0.08)',
                    marginBottom: '12px',
                  }}
                >
                  <Lightbulb size={20} />
                </div>
                <h3 className="focus-title" style={{ fontSize: '16px', marginBottom: 0 }}>
                  Innovation and Problem Solving
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--theme-bg)', paddingTop: '100px' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'clamp(32px, 5vw, 64px)',
              }}
            >
              <div className="fade-up" style={{ textAlign: 'left' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '24px',
                    color: 'var(--gold)',
                  }}
                >
                  <Users size={24} />
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Leadership & Collaboration
                  </span>
                </div>
                <h2
                  style={{
                    color: 'white',
                    fontFamily: 'var(--font-head)',
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: '24px',
                  }}
                >
                  Strengthening Youth Voices
                </h2>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '17px',
                    lineHeight: 1.7,
                  }}
                >
                  The conference reflects Oxzy’s belief that young people should not only observe governance but also play a role in shaping it through collective action.
                </p>
              </div>

              <div className="fade-up" style={{ textAlign: 'left' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '24px',
                    color: 'var(--ghana-gold)',
                  }}
                >
                  <Lightbulb size={24} />
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Practical Solutions
                  </span>
                </div>
                <h2
                  style={{
                    color: 'white',
                    fontFamily: 'var(--font-head)',
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: '24px',
                  }}
                >
                  Turning Ideas into Reality
                </h2>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '17px',
                    lineHeight: 1.7,
                  }}
                >
                  Each year we focus on exploring practical solutions to the challenges facing Ghana, ensuring that the dialogue leads to measurable impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'white', paddingTop: '80px', paddingBottom: '100px' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="fade-up" style={{ textAlign: 'left' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                  color: 'var(--ghana-green)',
                }}
              >
                <Sparkles size={24} />
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  The Gateway
                </span>
              </div>
              <h2 className="text-dark" style={{ textAlign: 'left', marginBottom: '24px' }}>
                Be Part of the Future
              </h2>
              <p
                style={{
                  color: 'var(--theme-text-muted-dark)',
                  fontSize: '19px',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                The Ghana Youth Conference is more than just an event; it is a catalyst for change.
              </p>
              <p
                style={{
                  color: 'var(--theme-text-muted-dark)',
                  fontSize: '19px',
                  lineHeight: 1.7,
                  marginBottom: '40px',
                }}
              >
                Join students, entrepreneurs, innovators, and leaders as we collaborate to build a better future for our country. Your voice is essential to the conversation.
              </p>
              <Link href="/club" className="btn btn-primary" style={{ background: 'var(--theme-bg)', color: 'white' }}>
                Join the Network <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <style jsx>{`
          .wyl-cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: clamp(12px, 2vw, 24px);
          }
          .wyl-card {
            padding: 20px;
          }
          @media (max-width: 768px) {
            .hero__title,
            .hero__subtitle {
              text-align: left !important;
            }
            .wyl-cards-grid {
              grid-template-columns: repeat(1, 1fr) !important;
              gap: 16px !important;
            }
            .wyl-card {
              padding: 24px !important;
              text-align: left !important;
            }
            .wyl-card .focus-icon-wrap {
              width: 40px !important;
              height: 40px !important;
              margin: 0 0 16px !important;
            }
            .wyl-card .focus-title {
              font-size: 16px !important;
              line-height: 1.4 !important;
            }
          }
        `}</style>
      </main>
    </>
  );
};

export default GhanaYouthConferencePage;

