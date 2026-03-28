import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/dopscbnty/image/upload/v1774229861/OXY_logo_p8pchr.jpg"
                  alt="Oxzy"
                  className="footer__logo-img"
                />
              </Link>
            </div>
            <p className="footer__tagline">
              Empowering Ghana's next generation of innovators, entrepreneurs, and changemakers across all 16 regions.
            </p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/oxzyorg/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Follow @oxzyorg on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer__col-title">Programs</h3>
            <ul className="footer__links">
              <li><Link href="/summit">Young Entrepreneurs Summit</Link></li>
              <li><Link href="/club">Entrepreneurs Club</Link></li>
              <li><Link href="/youth-government">Ghana Youth Government</Link></li>
              <li><Link href="/programs">All Programs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__col-title">Company</h3>
            <ul className="footer__links">
              <li><Link href="/#about">About Oxzy</Link></li>
              <li><Link href="/#programs">Our Programs</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__col-title">Get Involved</h3>
            <ul className="footer__links">
              <li><Link href="/club">Join the Club</Link></li>
              <li><Link href="/summit">Summit Registration</Link></li>
              <li><Link href="/youth-government">Youth Government</Link></li>
              <li><Link href="/partner">Partner With Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2025 Oxzy. All rights reserved.</p>
          <div className="footer__ghana">
            <span></span>
            <span>Made with pride in Ghana</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
