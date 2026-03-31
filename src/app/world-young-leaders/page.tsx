'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Users, MessageCircle, Target, Eye, Sparkles, ArrowRight } from 'lucide-react';

const WorldYoungLeadersPage = () => {
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
                World Young Leaders
                <br />
                <span style={{ color: 'var(--ghana-gold)', fontStyle: 'italic' }}>Organisation & Forum</span>
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
                  alt="World Young Leaders Forum"
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
                A global leadership platform created by Oxzy, bringing together a new generation of leaders who are
                shaping the future of their communities, countries, and the world.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <Link
                  href="/club"
                  className="btn btn-gold btn-lg"
                  style={{ background: 'var(--ghana-gold)', color: 'var(--theme-bg)', fontWeight: 700 }}
                >
                  Join the Movement <ArrowRight size={20} />
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
                  alt="World Young Leaders Forum"
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
                At a time when global challenges require bold thinking, collaboration, and responsible leadership, this
                initiative connects young leaders, youth envoys, innovators, policy advocates, and change-makers from
                international communities to engage in meaningful dialogue, share ideas, and build solutions that create
                lasting impact.
              </p>
              <p
                style={{
                  color: 'var(--theme-text-muted-dark)',
                  fontSize: '19px',
                  lineHeight: 1.7,
                }}
              >
                The World Young Leaders Forum serves as a space where emerging leaders can exchange perspectives on
                governance, innovation, entrepreneurship, climate action, development, and global cooperation. Through
                the forum, we aim to build bridges between young leaders across continents while strengthening youth
                participation in global decision-making.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'white', paddingTop: '100px' }}>
          <div className="container">
            <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 0 64px' }} className="fade-up">
              <span className="section-tag" style={{ color: 'var(--ghana-green)' }}>
                What We Do
              </span>
              <h2 className="text-dark" style={{ textAlign: 'left' }}>
                Building the next generation of global leaders
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
                  <Users size={20} />
                </div>
                <h3 className="focus-title" style={{ fontSize: '16px', marginBottom: 0 }}>
                  Host the World Young Leaders Forum
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
                  <Target size={20} />
                </div>
                <h3 className="focus-title" style={{ fontSize: '16px', marginBottom: 0 }}>
                  Develop the Next Generation of Global Leaders
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
                  <MessageCircle size={20} />
                </div>
                <h3 className="focus-title" style={{ fontSize: '16px', marginBottom: 0 }}>
                  Strengthening Youth Voice in Global Conversations
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
                  <Eye size={24} />
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Our Vision
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
                  A connected global community of young leaders
                </h2>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '17px',
                    lineHeight: 1.7,
                  }}
                >
                  To build a connected global community of young leaders who collaborate across borders to create
                  innovative solutions, strengthen institutions, and drive sustainable development worldwide.
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
                  <Target size={24} />
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Our Mission
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
                  Identify, connect, train, and support
                </h2>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '17px',
                    lineHeight: 1.7,
                  }}
                >
                  To identify, connect, train, and support emerging leaders from around the world while providing a
                  platform where they can exchange ideas, influence conversations, and contribute to shaping the future.
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
                  Why This Matters
                </span>
              </div>
              <h2 className="text-dark" style={{ textAlign: 'left', marginBottom: '24px' }}>
                Leadership must evolve with the world
              </h2>
              <p
                style={{
                  color: 'var(--theme-text-muted-dark)',
                  fontSize: '19px',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                The world is changing rapidly, and leadership must evolve with it.
              </p>
              <p
                style={{
                  color: 'var(--theme-text-muted-dark)',
                  fontSize: '19px',
                  lineHeight: 1.7,
                  marginBottom: '40px',
                }}
              >
                The World Young Leaders Organisation & Forum exists to ensure that young leaders are equipped,
                connected, and empowered to take on the challenges and opportunities of the future. By bringing together
                leaders from different regions, sectors, and backgrounds, we are building a global network of
                individuals committed to progress, collaboration, and positive impact.
              </p>
              <Link href="/club" className="btn btn-primary" style={{ background: 'var(--theme-bg)', color: 'white' }}>
                Get Involved <ArrowRight size={18} />
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
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 8px !important;
            }
            .wyl-card {
              padding: 16px 12px !important;
              text-align: center !important;
            }
            .wyl-card .focus-icon-wrap {
              width: 36px !important;
              height: 36px !important;
              margin: 0 auto 12px !important;
            }
            .wyl-card .focus-title {
              font-size: 11px !important;
              line-height: 1.2 !important;
            }
          }
        `}</style>
      </main>
    </>
  );
};

export default WorldYoungLeadersPage;
