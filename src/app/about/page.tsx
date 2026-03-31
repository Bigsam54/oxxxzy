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

        <section className="section" id="about" style={{ paddingBottom: '0' }}>
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

          <div className="slider-container" style={{ marginTop: '40px', paddingBottom: '80px' }}>
            <div className="slider-track" style={{ height: 'clamp(240px, 40vh, 480px)' }}>
              <div className="slider-item">
                <img
                  src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774705866/Whisk_c2ac22b154dd98986b5420db3c9e45a1dr_fz230n.png"
                  alt="Oxzy Event"
                />
              </div>
              <div className="slider-item">
                <img
                  src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723827/Whisk_kjmwajnyajmkhjyy0im1mmytymz4qtlidtol1sz_ylk2im.png"
                  alt="Oxzy Community"
                />
              </div>
              <div className="slider-item">
                <img
                  src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774724141/WhatsApp_Image_2026-03-28_at_6.51.09_PM_1_y8h4yy.jpg"
                  alt="Oxzy Building"
                />
              </div>
              <div className="slider-item">
                <img
                  src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723833/Whisk_czyzmgm0gtmyctzk1czmzjyty2mkrtl2igmh1yy_fxxdgt.png"
                  alt="Oxzy Event"
                />
              </div>
              <div className="slider-item">
                <img
                  src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723827/Whisk_kjmwajnyajmkhjyy0im1mmytymz4qtlidtol1sz_ylk2im.png"
                  alt="Oxzy Community"
                />
              </div>
              <div className="slider-item">
                <img
                  src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774724141/WhatsApp_Image_2026-03-28_at_6.51.09_PM_1_y8h4yy.jpg"
                  alt="Oxzy Building"
                />
              </div>
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

        <section className="section" style={{ background: 'var(--theme-cream)', padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div className="fade-up" style={{ textAlign: 'left', marginBottom: '48px' }}>
              <span className="section-tag" style={{ color: 'var(--ghana-green)' }}>
                Our Team
              </span>
              <h2
                className="text-dark"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)', textAlign: 'left', marginBottom: 0 }}
              >
                Meet the people behind Oxzy
              </h2>
            </div>

            <div className="team-grid fade-up">
              <div className="team-card">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Team Member"
                  className="team-img"
                />
                <h4 className="team-name">Team Member</h4>
                <p className="team-role">Founder & CEO</p>
              </div>

              <div className="team-card">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
                  alt="Team Member"
                  className="team-img"
                />
                <h4 className="team-name">Team Member</h4>
                <p className="team-role">Co-Founder & COO</p>
              </div>

              <div className="team-card">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
                  alt="Team Member"
                  className="team-img"
                />
                <h4 className="team-name">Team Member</h4>
                <p className="team-role">Programs Director</p>
              </div>

              <div className="team-card">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
                  alt="Team Member"
                  className="team-img"
                />
                <h4 className="team-name">Team Member</h4>
                <p className="team-role">Communications Lead</p>
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
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
          }
          .team-card {
            text-align: center;
          }
          .team-img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 12px;
            border: 3px solid white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          .team-name {
            font-size: 14px;
            font-weight: 700;
            color: var(--theme-bg);
            margin-bottom: 4px;
          }
          .team-role {
            font-size: 12px;
            color: var(--theme-text-muted-dark);
            margin: 0;
          }
          @media (max-width: 600px) {
            .team-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
            .team-img {
              width: 60px;
              height: 60px;
            }
            .team-name {
              font-size: 12px;
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
