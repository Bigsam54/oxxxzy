"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const navLinks = [
    { label: "Home", href: "/", className: "nav-home" },
    { label: "Summit", href: "/summit", className: "nav-summit" },
    { label: "Impact", href: "/social-proof", className: "nav-impact" },
    { label: "Club", href: "/club", className: "nav-club" },
    { label: "Youth Governement", href: "/youth-government", className: "nav-gyg" },
    { label: "Contact", href: "/contact", className: "nav-contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar" style={{ background: "var(--theme-cream)", transition: "all 0.3s ease", borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(0,0,0,0.04)" }}>
      <div className="container">
        <div className="navbar__inner" style={{ padding: "20px 0" }}>
          <Link href="/" className="navbar__logo" aria-label="Oxzy Home" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://res.cloudinary.com/dv1ignqxh/image/upload/f_auto,q_auto/WhatsApp_Image_2026-03-27_at_8.36.39_PM_k5cnpy"
              alt="Oxzy"
              style={{ height: "48px", width: "auto", borderRadius: "8px" }}
            />
          </Link>

          <ul className="navbar__nav" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${link.className} ${pathname === link.href ? "active" : ""}`}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    color: "var(--theme-bg)"
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <Link href="/club" className="btn btn-primary btn-sm" style={{ background: "var(--theme-bg)", color: "white" }}>
              Join the Club
            </Link>
          </div>

          <button
            className={`navbar__hamburger ${isMobileNavOpen ? "open" : ""}`}
            id="hamburger"
            aria-label="Toggle navigation"
            aria-expanded={isMobileNavOpen}
            onClick={toggleMobileNav}
          >
            <span style={{ background: "var(--theme-bg)" }}></span>
            <span style={{ background: "var(--theme-bg)" }}></span>
            <span style={{ background: "var(--theme-bg)" }}></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`navbar__mobile ${isMobileNavOpen ? "open" : ""}`} id="mobileNav" style={{ background: "var(--theme-cream)" }}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${link.className} ${pathname === link.href ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            {link.label === "Summit" ? "Summit 2026" : link.label === "Club" ? "Entrepreneurs Club" : link.label === "YouthGov" ? "Youth Government" : link.label}
          </Link>
        ))}
        <Link href="/club" className="btn btn-primary" onClick={handleLinkClick} style={{ background: "var(--theme-bg)", color: "white" }}>
          Join the Club →
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
