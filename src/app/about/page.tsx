'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutPage = () => {
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
                About <span style={{ color: 'var(--ghana-gold)', fontStyle: 'italic' }}>Oxzy</span>
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
                  src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723827/Whisk_kjmwajnyajmkhjyy0im1mmytymz4qtlidtol1sz_ylk2im.png"
                  alt="Oxzy Community"
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
                We are a collective of young innovators building sustainable communities through innovative creativity.
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
                  height: '400px',
                }}
              >
                <img
                  src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723827/Whisk_kjmwajnyajmkhjyy0im1mmytymz4qtlidtol1sz_ylk2im.png"
                  alt="Oxzy Community"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about" style={{ paddingBottom: '80px' }}>
          <div className="container">
            <div className="fade-up" style={{ maxWidth: '840px', textAlign: 'left' }}>
              <span className="section-tag">About Oxzy</span>
              <h2 className="text-dark" style={{ fontSize: 'clamp(40px, 6vw, 64px)', textAlign: 'left' }}>
                Young innovators building sustainable communities
              </h2>
              <p
                style={{
                  color: 'var(--theme-text-muted-dark)',
                  fontSize: '19px',
                  marginBottom: '28px',
                  lineHeight: 1.6,
                }}
              >
                Oxzy is an organisation of young innovators aimed at building sustainable communities through innovative
                creativity. We believe that when young people are given the right platforms, they become unstoppable.
              </p>
              <p style={{ color: 'var(--theme-text-muted-dark)', fontSize: '19px', lineHeight: 1.6 }}>
                We create spaces where young people connect, learn, collaborate, and build solutions that address real
                challenges within society.
              </p>
              <Link
                href="/club"
                className="btn btn-primary"
                style={{ background: 'var(--theme-bg)', color: 'white', marginTop: '32px', marginBottom: '48px' }}
              >
                Join Our Community <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'white', paddingTop: '80px' }}>
          <div className="container">
            <div className="fade-up" style={{ maxWidth: '840px', textAlign: 'left' }}>
              <span className="section-tag" style={{ color: 'var(--ghana-red)' }}>
                Our Vision
              </span>
              <h2 className="text-dark" style={{ fontSize: 'clamp(32px, 5vw, 48px)', textAlign: 'left' }}>
                A Ghana where young people lead the change
              </h2>
              <p style={{ color: 'var(--theme-text-muted-dark)', fontSize: '18px', lineHeight: 1.7 }}>
                We envision a Ghana where every young person has the tools, networks, and opportunities to build
                meaningful solutions that transform their communities and drive sustainable development.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--theme-cream)', padding: '100px 0' }}>
          <div className="container" style={{ maxWidth: '1100px' }}>
            <div className="fade-up" style={{ textAlign: 'left', marginBottom: '64px' }}>
              <span className="section-tag" style={{ color: 'var(--ghana-gold)' }}>
                Our Leadership
              </span>
              <h2
                className="text-dark"
                style={{ fontSize: 'clamp(32px, 5vw, 48px)', textAlign: 'left', marginBottom: '16px' }}
              >
                Meet the minds behind Oxzy
              </h2>
              <p style={{ color: 'var(--theme-text-muted-dark)', fontSize: '18px', maxWidth: '600px' }}>
                A dedicated team of innovators, thinkers, and leaders committed to building Ghana&apos;s sustainable future.
              </p>
            </div>

            {/* ADMIN EXEC */}
            <div className="fade-up" style={{ marginBottom: '80px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--theme-bg)', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '40px', height: '2px', background: 'var(--ghana-gold)' }}></span>
                Administrative Executive
              </h3>
              <div className="team-grid">
                {[
                  { name: 'Casey Mills', role: 'Co Founder, President', img: 'https://res.cloudinary.com/dv1ignqxh/image/upload/v1775151625/cas_wzdhbc.png' },
                  { name: 'Andy Kwesi Apenteng', role: 'Chief Technology Officer', img: 'https://res.cloudinary.com/dv1ignqxh/image/upload/v1775151953/cto_qgyqyi.png' },
                  { name: 'Lydia Odame', role: 'Secretary', img: 'https://res.cloudinary.com/dv1ignqxh/image/upload/v1775151954/lydia_ssclwu.png' },
                  { name: 'Moses Gawu', role: 'Chairman of the board', img: 'https://res.cloudinary.com/dv1ignqxh/image/upload/v1775151128/WhatsApp_Image_2026-04-02_at_5.25.17_PM_taxp1b.jpg' },
                ].map((member, i) => (
                  <div key={i} className="team-card" style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '32px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                  }}>
                    <div className="team-img-wrap" style={{ borderRadius: '24px', marginBottom: '24px' }}>
                      <img src={member.img} alt={member.name} className="team-img" />
                    </div>
                    <h4 className="team-name" style={{ fontSize: '20px', marginBottom: '6px' }}>{member.name}</h4>
                    <p className="team-role" style={{ fontSize: '11px', color: 'var(--ghana-gold)' }}>{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* OPERATIONS EXEC */}
            <div className="fade-up">
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--theme-bg)', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '40px', height: '2px', background: 'var(--ghana-red)' }}></span>
                Operations Executive
              </h3>
              <div className="team-grid">
                {[
                  { name: 'Kwabena O. Karikari', role: 'Co Founder, CEO', img: 'https://res.cloudinary.com/dv1ignqxh/image/upload/v1775254034/kari_kmdb0q.png' },
                  { name: 'Dennis K. Mensah', role: 'Vice President, Operations lead', img: 'https://res.cloudinary.com/dv1ignqxh/image/upload/v1775151092/ops_ankbil.png' },
                  { name: 'Ebenezer Hammond', role: 'PRO', img: 'https://res.cloudinary.com/dv1ignqxh/image/upload/v1775254034/ebenm_dfk3x1.png' },
                  { name: 'Christopher Sam', role: 'Deputy Chief Technology Officer', img: 'https://res.cloudinary.com/dv1ignqxh/image/upload/v1775151093/sam_r8iict.png' },
                ].map((member, i) => (
                  <div key={i} className="team-card" style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '32px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                  }}>
                    <div className="team-img-wrap" style={{ borderRadius: '24px', marginBottom: '24px' }}>
                      <img src={member.img} alt={member.name} className="team-img" />
                    </div>
                    <h4 className="team-name" style={{ fontSize: '20px', marginBottom: '6px' }}>{member.name}</h4>
                    <p className="team-role" style={{ fontSize: '11px', color: 'var(--ghana-red)' }}>{member.role}</p>
                  </div>
                ))}
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
          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: clamp(32px, 5vw, 48px);
          }
          .board-grid {
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            max-width: 900px;
          }
          .team-card {
            text-align: left;
            transition: transform 0.3s ease;
          }
          .team-card:hover {
            transform: translateY(-8px);
          }
          .team-img-wrap {
            width: 100%;
            aspect-ratio: 1;
            border-radius: 24px;
            overflow: hidden;
            margin-bottom: 20px;
            background: #eee;
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          }
          .team-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          .team-card:hover .team-img {
            transform: scale(1.1);
          }
          .team-name {
            font-size: 18px;
            font-weight: 800;
            color: var(--theme-bg);
            margin-bottom: 4px;
            letter-spacing: -0.02em;
          }
          .team-role {
            font-size: 13px;
            font-weight: 600;
            color: var(--ghana-red);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin: 0;
          }
          @media (max-width: 600px) {
            .team-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
            .team-img-wrap {
              border-radius: 16px;
              margin-bottom: 12px;
            }
            .team-name {
              font-size: 14px;
            }
            .team-role {
              font-size: 10px;
            }
          }
        `}</style>
      </main>
    </>
  );
};

export default AboutPage;
