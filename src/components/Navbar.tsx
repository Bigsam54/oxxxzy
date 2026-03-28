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
    { label: "Programs", href: "/programs", className: "nav-programs" },
    { label: "Summit", href: "/summit", className: "nav-summit" },
    { label: "Club", href: "/club", className: "nav-club" },
    { label: "YouthGov", href: "/youth-government", className: "nav-gyg" },
    { label: "Contact", href: "/contact", className: "nav-contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar" aria-label="Main navigation">
      <div className="container">
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo" aria-label="Oxzy Home">
            <img
              src="https://res.cloudinary.com/dopscbnty/image/upload/v1774229861/OXY_logo_p8pchr.jpg"
              alt="Oxzy"
              className="navbar__logo-img"
            />
          </Link>

          <ul className="navbar__nav" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${link.className} ${pathname === link.href ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <Link href="/club" className="btn btn-primary btn-sm">
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
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`navbar__mobile ${isMobileNavOpen ? "open" : ""}`} id="mobileNav" role="navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${link.className} ${pathname === link.href ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            {link.label === "Summit" ? "Summit (YES)" : link.label === "Club" ? "Entrepreneurs Club" : link.label === "YouthGov" ? "Youth Government" : link.label}
          </Link>
        ))}
        <Link href="/club" className="btn btn-primary" onClick={handleLinkClick}>
          Join the Club →
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
