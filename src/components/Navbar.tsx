'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleLinkClick = () => {
    setIsMobileNavOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      id="navbar"
      style={{
        background: 'var(--theme-cream)',
        transition: 'all 0.3s ease',
        borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(0,0,0,0.04)',
      }}
    >
      <div className="container">
        <div className="navbar__inner" style={{ padding: '20px 0' }}>
          <Link
            href="/"
            className="navbar__logo"
            aria-label="Oxzy Home"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774984484/logo_k5xpwm.png"
              alt="Oxzy"
              style={{ height: '48px', width: 'auto', borderRadius: '8px' }}
            />
          </Link>

          <ul className="navbar__nav" role="list">
            <li>
              <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
            </li>
            <li>
              <Link href="/summit" className={pathname === '/summit' ? 'active' : ''}>Summit 2026</Link>
            </li>
            <li>
              <Link href="/club" className={pathname === '/club' ? 'active' : ''}>Entrepreneurs Club</Link>
            </li>
            <li>
              <Link href="/social-proof" className={pathname === '/social-proof' ? 'active' : ''}>Impact</Link>
            </li>
            <li>
              <Link href="/youth-government" className={pathname === '/youth-government' ? 'active' : ''}>Youth Government</Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
            </li>
          </ul>

          <div className="navbar__actions">
            <Link
              href="/club"
              className="btn btn-primary btn-sm"
              style={{ background: 'var(--theme-bg)', color: 'white' }}
            >
              Join the Club
            </Link>
          </div>

          <button
            className={`navbar__hamburger ${isMobileNavOpen ? 'open' : ''}`}
            id="hamburger"
            aria-label="Toggle navigation"
            aria-expanded={isMobileNavOpen}
            onClick={toggleMobileNav}
          >
            <span style={{ background: 'var(--theme-bg)' }}></span>
            <span style={{ background: 'var(--theme-bg)' }}></span>
            <span style={{ background: 'var(--theme-bg)' }}></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`navbar__mobile ${isMobileNavOpen ? 'open' : ''}`}
        id="mobileNav"
        style={{ background: 'var(--theme-cream)', paddingBottom: '32px' }}
      >
        <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={handleLinkClick}>Home</Link>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={handleLinkClick}>About</Link>
        <Link href="/summit" className={pathname === '/summit' ? 'active' : ''} onClick={handleLinkClick}>Summit 2026</Link>
        <Link href="/club" className={pathname === '/club' ? 'active' : ''} onClick={handleLinkClick}>Entrepreneurs Club</Link>
        <Link href="/social-proof" className={pathname === '/social-proof' ? 'active' : ''} onClick={handleLinkClick}>Impact</Link>
        <Link href="/youth-government" className={pathname === '/youth-government' ? 'active' : ''} onClick={handleLinkClick}>Youth Government</Link>
        <Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={handleLinkClick}>Contact</Link>
        
        <div style={{ marginTop: '20px', padding: '0 16px' }}>
          <Link
            href="/club"
            className="btn btn-primary"
            onClick={handleLinkClick}
            style={{ background: 'var(--theme-bg)', color: 'white', width: '100%', justifyContent: 'center' }}
          >
            Join the Club →
          </Link>
        </div>
      </div>

      <style jsx>{`
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .navbar__nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .navbar__actions {
          display: flex;
          align-items: center;
        }
        .navbar__hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 1001;
        }
        .navbar__hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          border-radius: 2px;
          transition: 0.3s ease;
        }

        /* Responsive Logic */
        @media (max-width: 1024px) {
          .navbar__nav {
            display: none;
          }
          .navbar__actions {
            display: none;
          }
          .navbar__hamburger {
            display: flex;
          }
        }

        .navbar__nav :global(a), 
        .navbar__mobile :global(a) {
          padding: 8px 14px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #000000 !important;
          border-radius: var(--radius-sm);
          transition: all 0.3s ease;
          opacity: 1 !important;
          visibility: visible !important;
        }
        .navbar__mobile :global(a) {
          display: block;
          padding: 16px 24px;
          font-size: 1.1rem;
          border-bottom: 1px solid rgba(0,0,0,0.03);
        }
        .navbar__nav :global(a:hover), 
        .navbar__mobile :global(a:hover) {
          background: rgba(0, 0, 0, 0.04);
          color: var(--ghana-red) !important;
        }
        .navbar__nav :global(a.active), 
        .navbar__mobile :global(a.active) {
          color: white !important;
          background: var(--theme-bg) !important;
        }

        /* Mobile Drawer State */
        .navbar__mobile {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          transform: translateY(-100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 999;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-top: 1px solid rgba(0,0,0,0.05);
          opacity: 0;
          pointer-events: none;
        }
        .navbar__mobile.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        /* Hamburger Animation */
        .navbar__hamburger.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .navbar__hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .navbar__hamburger.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
