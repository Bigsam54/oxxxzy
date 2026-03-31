'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--theme-bg)', color: 'white', padding: '60px 0 40px' }}>
      <div className="container">
        <div
          className="footer__grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand Column */}
          <div className="footer__brand" style={{ maxWidth: '320px' }}>
            <img
              src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774984484/logo_k5xpwm.png"
              alt="Oxzy"
              style={{ height: '48px', width: 'auto', borderRadius: '10px', marginBottom: '24px' }}
            />
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              Collaborating for Ghana&apos;s future. A platform for the next generation of innovators, builders, and
              strategic leaders.
            </p>
          </div>

          {/* Links Wrapper for Mobile Side-by-Side */}
          <div className="footer__links-wrapper" style={{ display: 'contents' }}>
            {/* Nav Column */}
            <div className="footer__col">
              <h4
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '18px',
                  fontWeight: 700,
                  marginBottom: '16px',
                  color: 'var(--gold)',
                }}
              >
                Organization
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <Link
                    href="/"
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', transition: 'all 0.2s' }}
                    className="footer-link"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', transition: 'all 0.2s' }}
                    className="footer-link"
                  >
                    About Oxzy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/summit"
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', transition: 'all 0.2s' }}
                    className="footer-link"
                  >
                    Summit 2026
                  </Link>
                </li>
                <li>
                  <Link
                    href="/club"
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', transition: 'all 0.2s' }}
                    className="footer-link"
                  >
                    Entrepreneurs Club
                  </Link>
                </li>
                <li>
                  <Link
                    href="/world-young-leaders"
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', transition: 'all 0.2s' }}
                    className="footer-link"
                  >
                    World Young Leaders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/youth-government"
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', transition: 'all 0.2s' }}
                    className="footer-link"
                  >
                    Youth Government
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="footer__col">
              <h4
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '18px',
                  fontWeight: 700,
                  marginBottom: '16px',
                  color: 'var(--gold)',
                }}
              >
                Support
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <Link
                    href="/contact"
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', transition: 'all 0.2s' }}
                    className="footer-link"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', transition: 'all 0.2s' }}
                    className="footer-link"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', transition: 'all 0.2s' }}
                    className="footer-link"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Column */}
          <div className="footer__col footer__social">
            <h4
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '16px',
                color: 'var(--gold)',
              }}
            >
              Connect
            </h4>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a
                href="https://www.instagram.com/oxzy_ghana/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/oxzy-organization/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)' }}>
            © 2026 Oxzy Organization. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: var(--gold) !important;
        }
        .social-icon:hover {
          background: rgba(255, 255, 255, 0.12) !important;
        }
        @media (max-width: 768px) {
          .footer__grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 48px !important;
          }
          .footer__links-wrapper {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
            margin-bottom: 0 !important;
          }
          .footer__col h4 {
            font-size: 16px !important;
            margin-bottom: 16px !important;
          }
          .footer__col ul {
            gap: 10px !important;
          }
          .footer__col ul li a {
            font-size: 14px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
