"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Calendar,
  Monitor
} from "lucide-react";

/**
 * Standardized Summit Hero Card Component
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
        < Zap size={12} fill="currentColor" /> YES 2026
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
      <Link href="#register" className="btn btn-white btn-sm" style={{ background: "white", color: "var(--theme-bg)", width: "100%", justifyContent: "center" }}>Complete Free Registration</Link>
    </div>
  </div>
);

const SummitPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  return (
    <>
    <main>
      <section className="premium-hero" style={{ 
        paddingTop: "clamp(100px, 15vh, 160px)", 
        paddingBottom: "100px", 
        minHeight: "85vh", 
        display: "flex", 
        alignItems: "center",
        textAlign: "left"
      }}>
        <div className="premium-hero__overlay" style={{ opacity: 0.96, background: "linear-gradient(135deg, var(--theme-bg), #1a152e)" }}></div>
        <div className="container hero-grid-2" style={{ position: "relative", zIndex: 3, gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "center" }}>
          <div className="fade-up" style={{ textAlign: "left" }}>
              <h1 className="hero__title" style={{ textAlign: "left", fontSize: "clamp(48px, 8vw, 72px)", lineHeight: 1.0, marginBottom: "32px", fontWeight: 800, color: "white" }}>
                Two days that<br /><span style={{ color: "var(--ghana-gold)", fontStyle: "italic" }}>change</span> everything.
              </h1>
              
              <div className="mobile-only" style={{ marginBottom: "32px" }}>
                <SummitHeroCard />
              </div>

              <p className="hero__subtitle" style={{ textAlign: "left", fontSize: "20px", color: "rgba(255,255,255,0.85)", maxWidth: "560px", marginBottom: "48px", lineHeight: 1.6, fontWeight: 300 }}>
                Join hundreds of young Ghanaian entrepreneurs, innovators, and leaders for our flagship virtual summit. A platform to learn, collaborate, and build the future of our nation.
              </p>
              
              <div className="desktop-only" style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "flex-start" }}>
                <Link href="#register" className="btn btn-gold btn-lg" style={{ background: "var(--ghana-gold)", color: "var(--theme-bg)", fontWeight: 700 }}>
                  Register Free — YES 2026 <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="desktop-only fade-up">
               <SummitHeroCard />
            </div>
        </div>
      </section>

      <section className="section" id="register" style={{ background: "var(--theme-cream)" }}>
        <div className="container container--sm" style={{ margin: "0", textAlign: "left" }}>
          <div style={{ textAlign: "left", marginBottom: "48px" }} className="fade-up">
            <span className="section-tag" style={{ color: "var(--ghana-red)" }}>Official Registration</span>
            <h2 className="text-dark" style={{ textAlign: "left" }}>Secure Your Session Spot</h2>
            <p className="text-muted-dark" style={{ fontSize: "18px" }}>Join the largest virtual gathering of young Ghanaian builders.</p>
          </div>

          {isSubmitted ? (
            <div className="success-msg show" style={{ background: "white", padding: "60px", borderRadius: "32px", border: "1px solid var(--theme-border)", textAlign: "left" }}>
              <div style={{ color: "var(--ghana-green)", marginBottom: "20px" }}><CheckCircle2 size={48} /></div>
              <h3 className="text-dark" style={{ fontFamily: "var(--font-head)", fontSize: "32px", fontWeight: 700, marginBottom: "16px" }}>You&apos;re Officially Registered!</h3>
              <p className="text-muted-dark" style={{ fontSize: "18px" }}>
                Thank you for joining YES 2026. We&apos;ve sent a confirmation email to your address with access details and preparatory materials.
              </p>
            </div>
          ) : (
            <div className="form-wrapper fade-up" style={{ background: "white", borderRadius: "32px", padding: "48px", border: "1px solid var(--theme-border)" }}>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" placeholder="+233 XX XXX XXXX" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Main Industry</label>
                    <select className="form-control form-control--select" required>
                      <option value="" disabled selected>Select industry</option>
                      <option>Technology & Startups</option>
                      <option>Agribusiness</option>
                      <option>Creative Economy</option>
                      <option>Civic Leadership</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">What do you hope to achieve at YES 2026?</label>
                  <textarea className="form-control" rows={4} placeholder="Your expectations..." required></textarea>
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", background: "var(--theme-bg)", color: "white", padding: "18px", fontWeight: 700 }} disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Complete Free Registration"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="container" style={{ textAlign: "left" }}>
          <div className="fade-up" style={{ textAlign: "left" }}>
            <span className="section-tag" style={{ color: "var(--ghana-green)" }}>Network & Scaling</span>
            <h2 className="text-dark" style={{ textAlign: "left" }}>Can&apos;t wait until 2026?</h2>
            <p className="text-muted-dark" style={{ maxWidth: "600px", margin: "0 0 40px", fontSize: "18px" }}>
              Join the Entrepreneurs Club today for immediate access to our private network, monthly masterclasses, and peer accountability groups.
            </p>
            <Link href="/club" className="btn btn-outline btn-lg" style={{ borderColor: "var(--theme-bg)", color: "var(--theme-bg)" }}>Join the Club Today <ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero__title, .hero__subtitle {
            text-align: left !important;
          }
        }
      `}</style>
    </main>
    </>
  );
};

export default SummitPage;
