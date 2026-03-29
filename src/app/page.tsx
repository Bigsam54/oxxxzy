"use client";

import React from "react";
import Link from "next/link";
import {
  Sprout,
  Lightbulb,
  Building2,
  Mic2,
  Scale,
  Users,
  ChevronRight,
  Zap,
  Calendar,
  Monitor,
  ArrowRight
} from "lucide-react";

/**
 * Reusable Summit Hero Card Component
 */
const SummitHeroCard = () => (
  <div className="summit-hero-card" style={{ padding: "0", overflow: "hidden", maxWidth: "480px", width: "100%", background: "var(--theme-bg)", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}>
    <div style={{ height: "220px", width: "100%", overflow: "hidden" }}>
      <img
        src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774724142/WhatsApp_Image_2026-03-28_at_6.51.07_PM_phjeba.jpg"
        alt="YES 2026"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 45%" }}
      />
    </div>
    <div style={{ padding: "24px" }}>
      <div style={{ background: "var(--gold)", color: "var(--theme-bg)", display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "100px", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
        <Zap size={12} fill="currentColor" /> YES 2026
      </div>
      <h2 style={{ fontSize: "24px", fontWeight: 700, color: "white", lineHeight: 1.15, marginBottom: "12px" }}>Summit 2026</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>
          <Calendar size={14} /> 12–13 June 2026
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>
          <Monitor size={14} /> Virtual Session
        </div>
      </div>
      <Link href="/summit" className="btn btn-white btn-sm" style={{ background: "white", color: "var(--theme-bg)", width: "100%", justifyContent: "center" }}>Check Event Details</Link>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" style={{ minHeight: "100vh", background: "var(--theme-cream)", overflow: "hidden" }}>
        <div className="container hero__inner" style={{ gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "center" }}>
          <div className="hero-left fade-up" style={{ textAlign: "left" }}>
            <h1 className="hero__title" style={{ fontFamily: "var(--font-head)", fontSize: "clamp(48px, 8vw, 84px)", fontWeight: 900, color: "var(--theme-bg)", letterSpacing: "-2px", lineHeight: 1.0, marginBottom: "32px" }}>
              Building <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Ghana&apos;s</em><br className="desktop-only" /> Future, Together.
            </h1>

            {/* Mobile-Only Event Card */}
            <div className="mobile-only" style={{ marginBottom: "32px" }}>
              <SummitHeroCard />
            </div>

            <p className="hero__subtitle" style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--theme-text-muted-dark)", fontWeight: 300, maxWidth: "560px", marginBottom: "48px" }}>
              Oxzy empowers young entrepreneurs, innovators, and leaders with the platforms, networks, and opportunities they need to transform Ghana.
            </p>

            <div className="hero__cta" style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap", marginBottom: "64px" }}>
              <Link href="/club" className="btn btn-primary btn-lg" style={{ background: "var(--theme-bg)", color: "white" }}>Join the Movement</Link>
              <Link href="/summit" className="btn btn-outline btn-lg" style={{ borderColor: "var(--theme-bg)", color: "var(--theme-bg)" }}>Summit 2026 <ChevronRight size={20} /></Link>
            </div>
          </div>

          <div className="hero-right desktop-only fade-up">
            <SummitHeroCard />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <span className="marquee-item">Agriculture & Agribusiness <span>✦</span></span>
          <span className="marquee-item">Technology & AI <span>✦</span></span>
          <span className="marquee-item">Real Estate & Infrastructure <span>✦</span></span>
          <span className="marquee-item">Media & Creator Economy <span>✦</span></span>
          <span className="marquee-item">Governance & Civic Education <span>✦</span></span>
          <span className="marquee-item">Social Impact & Community <span>✦</span></span>
          {/* Duplicate for seamless loop */}
          <span className="marquee-item">Agriculture & Agribusiness <span>✦</span></span>
          <span className="marquee-item">Technology & AI <span>✦</span></span>
          <span className="marquee-item">Real Estate & Infrastructure <span>✦</span></span>
          <span className="marquee-item">Media & Creator Economy <span>✦</span></span>
          <span className="marquee-item">Governance & Civic Education <span>✦</span></span>
          <span className="marquee-item">Social Impact & Community <span>✦</span></span>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <section className="section" id="about" style={{ paddingBottom: "0" }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: "840px", textAlign: "left" }}>
            <span className="section-tag">About Oxzy</span>
            <h2 className="text-dark" style={{ fontSize: "clamp(40px, 6vw, 64px)", textAlign: "left" }}>Young innovators building sustainable communities</h2>
            <p style={{ color: "var(--theme-text-muted-dark)", fontSize: "19px", marginBottom: "28px", lineHeight: 1.6 }}>Oxzy is an organisation of young innovators aimed at building sustainable communities through innovative creativity. We believe that when young people are given the right platforms, they become unstoppable.</p>
            <p style={{ color: "var(--theme-text-muted-dark)", fontSize: "19px", lineHeight: 1.6 }}>We create spaces where young people connect, learn, collaborate, and build solutions that address real challenges within society.</p>
            <Link href="/club" className="btn btn-primary" style={{ background: "var(--theme-bg)", color: "white", marginTop: "32px", marginBottom: "48px" }}>Join Our Community</Link>
          </div>
        </div>

        {/* Integrated Image Slider */}
        <div className="slider-container" style={{ marginTop: "40px", paddingBottom: "80px" }}>
          <div className="slider-track" style={{ height: "clamp(240px, 40vh, 480px)" }}>
            <div className="slider-item"><img src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774705866/Whisk_c2ac22b154dd98986b5420db3c9e45a1dr_fz230n.png" alt="Oxzy Event" /></div>
            <div className="slider-item"><img src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723827/Whisk_kjmwajnyajmkhjyy0im1mmytymz4qtlidtol1sz_ylk2im.png" alt="Oxzy Community" /></div>
            <div className="slider-item"><img src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774724141/WhatsApp_Image_2026-03-28_at_6.51.09_PM_1_y8h4yy.jpg" alt="Oxzy Building" /></div>
            {/* Duplicate for seamless loop */}
            <div className="slider-item"><img src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723833/Whisk_czyzmgm0gtmyctzk1czmzjyty2mkrtl2igmh1yy_fxxdgt.png" alt="Oxzy Event" /></div>
            <div className="slider-item"><img src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723827/Whisk_kjmwajnyajmkhjyy0im1mmytymz4qtlidtol1sz_ylk2im.png" alt="Oxzy Community" /></div>
            <div className="slider-item"><img src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774724141/WhatsApp_Image_2026-03-28_at_6.51.09_PM_1_y8h4yy.jpg" alt="Oxzy Building" /></div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="section" style={{ background: "white", paddingTop: "120px" }}>
        <div className="container" style={{ position: "relative" }}>
          <div style={{ textAlign: "left", maxWidth: "600px", margin: "0 0 64px" }} className="fade-up">
            <span className="section-tag">Key Focus Areas</span>
            <h2 className="text-dark" style={{ textAlign: "left" }}>Where young Ghana is building</h2>
          </div>

          <div className="focus-grid focus-grid-3x2" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(12px, 2vw, 24px)"
          }}>
            <div className="focus-card fade-up">
              <div className="focus-icon-wrap" style={{ color: "var(--ghana-green)" }}><Sprout size={24} /></div>
              <h3 className="focus-title">Agriculture & Agribusiness</h3>
              <p className="focus-desc">Feeding Ghana while building wealth and sustainable food systems.</p>
            </div>
            <div className="focus-card fade-up">
              <div className="focus-icon-wrap" style={{ color: "var(--ghana-gold)" }}><Lightbulb size={24} /></div>
              <h3 className="focus-title">Technology & AI</h3>
              <p className="focus-desc">Building solutions for African problems at global scale.</p>
            </div>
            <div className="focus-card fade-up">
              <div className="focus-icon-wrap" style={{ color: "var(--ghana-red)" }}><Building2 size={24} /></div>
              <h3 className="focus-title">Real Estate & Infrastructure</h3>
              <p className="focus-desc">Creating the physical foundations for a modern Ghana.</p>
            </div>
            <div className="focus-card fade-up">
              <div className="focus-icon-wrap" style={{ color: "#7c3aed" }}><Mic2 size={24} /></div>
              <h3 className="focus-title">Media & Creator Economy</h3>
              <p className="focus-desc">Telling the stories that shape our national identity.</p>
            </div>
            <div className="focus-card fade-up">
              <div className="focus-icon-wrap" style={{ color: "#dc2626" }}><Scale size={24} /></div>
              <h3 className="focus-title">Governance & Civic Education</h3>
              <p className="focus-desc">Equipping young people with the tools to lead and serve.</p>
            </div>
            <div className="focus-card fade-up">
              <div className="focus-icon-wrap" style={{ color: "var(--ghana-green)" }}><Users size={24} /></div>
              <h3 className="focus-title">Social Impact & Community</h3>
              <p className="focus-desc">Building grassroots solutions that leave no one behind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta" style={{ background: "var(--theme-bg)", color: "white", position: "relative", overflow: "hidden", minHeight: "60vh", display: "flex", alignItems: "stretch", padding: "0" }}>
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "rgba(255,196,48,0.06)", filter: "blur(60px)" }}></div>
        <div className="container grid-2" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "0", width: "100%", maxWidth: "100%", padding: "0" }}>
          <div className="fade-up" style={{ padding: "80px 5% 80px 8%", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(48px, 8vw, 76px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-2px", marginBottom: "20px", color: "white", textAlign: "left" }}>
              Ready to build<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>Ghana&apos;s future?</em>
            </h2>
            <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.7)", margin: "0 0 48px", lineHeight: 1.7 }}>
              Join thousands of young Ghanaians who are done waiting and have started building.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "flex-start", flexWrap: "wrap" }}>
              <Link href="/club" className="btn btn-white" style={{ background: "white", color: "var(--theme-bg)", padding: "18px 40px", fontWeight: 700 }}>Join the Entrepreneurs Club <ArrowRight size={20} /></Link>
              <Link href="/summit" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.35)", color: "white", padding: "17px 36px" }}>Register for YES 2026</Link>
            </div>
          </div>

          <div className="cta-image-wrap fade-up" style={{ textAlign: "right", alignSelf: "stretch", height: "100%" }}>
            <img 
              src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774745886/Indpe_ebubq4.png" 
              alt="Build Ghana" 
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 5%", filter: "brightness(0.9) contrast(1.1)", transform: "translateY(-10px)" }}
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero__title, .hero__subtitle, .section-cta h2, .section-cta p, .section-cta .btn-group {
            text-align: left !important;
          }
          .focus-grid-3x2 {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 8px !important;
          }
          .focus-card {
            padding: 16px 12px !important;
            text-align: center !important;
          }
          .focus-icon-wrap {
            width: 36px !important;
            height: 36px !important;
            margin: 0 auto 12px !important;
          }
          .focus-title {
            font-size: 11px !important;
            line-height: 1.2 !important;
            margin-bottom: 6px !important;
          }
          .focus-desc {
            display: none !important; /* Hide description on mobile to fit 3 columns */
          }
          .section-cta h2 {
            font-size: clamp(28px, 5vw, 36px) !important;
            margin-bottom: 10px !important;
          }
          .section-cta p {
            font-size: 13px !important;
            margin-bottom: 18px !important;
          }
          .section-cta .container.grid-2 {
            grid-template-columns: 1fr 1.6fr !important; /* Significant image dominance */
            display: grid !important;
          }
          .section-cta .fade-up {
            padding: 40px 8px 40px 16px !important;
          }
          .cta-image-wrap {
            display: block !important;
            height: 120% !important; /* Stretch up */
            width: 140% !important; /* Stretch right */
            margin-top: -10% !important; /* Cover the top side */
            transform: translateX(12%) scale(1.1) !important; /* Shift right and slightly scale */
            position: relative;
            z-index: 0;
          }
          .cta-image-wrap img {
            object-position: 50% 0% !important; /* Focus on the top of the image */
          }
          .section-cta .btn {
            padding: 12px 20px !important;
            font-size: 13px !important;
            width: 100% !important;
          }
          .section-cta .btn-group, .section-cta div[style*="flex-wrap"] {
            gap: 10px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
