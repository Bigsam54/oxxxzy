"use client";

import React, { useState } from "react";
import Link from "next/link";

const YouthGovPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: document.getElementById("gygSuccess")?.offsetTop || 0 - 100, behavior: "smooth" });
    }, 1500);
  };

  return (
    <>
      <section
        className="page-hero"
        style={{ background: "linear-gradient(135deg, #0a0a18 0%, #14143a 50%, #0a0a18 100%)" }}
        aria-labelledby="gygHeroTitle"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 40% 40%, rgba(244, 196, 48, 0.15), transparent 55%), radial-gradient(circle at 75% 65%, rgba(214, 40, 40, 0.12), transparent 50%), radial-gradient(circle at 20% 70%, rgba(46, 125, 50, 0.1), transparent 40%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, var(--red) 0%, var(--gold) 50%, var(--green) 100%)",
            zIndex: 3,
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="page-hero__content stagger-container">
            <span className="page-hero__label fade-up">Ghana Youth Government</span>
            <h1 className="page-hero__title fade-up" id="gygHeroTitle">
              Youth Voices.
              <br />
              <span style={{ color: "var(--gold)" }}>Real Impact.</span>
            </h1>
            <p className="page-hero__subtitle fade-up">
              Empowering young Ghanaians to shape policy, drive civic innovation, and lead meaningful change in their
              communities and beyond.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }} className="fade-up">
              <Link href="#join-gyg" className="btn btn-gold btn-lg" style={{ color: "var(--black)" }}>Join as a Member →</Link>
              <Link href="#vision" className="btn btn-secondary btn-lg">Our Vision</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="vision">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="about-split">
            <div className="fade-up">
              <span className="section-label">Our Vision</span>
              <h2 className="section-title">Youth-Driven Policy &amp; Civic Innovation</h2>
              <div className="divider divider--gold"></div>
              <p style={{ marginBottom: "20px", fontSize: "1rem" }}>
                The Ghana Youth Government (GYG) is a bold initiative that positions young people as active architects of
                Ghana&apos;s Governance and civic landscape — not just future leaders, but <strong>leaders right now</strong>.
              </p>
              <p style={{ marginBottom: "20px" }}>
                We believe that the challenges facing Ghana&apos;s young people are best addressed by young people. Through
                structured dialogue and policy advocacy, GYG members influence decisions that shape our collective future.
              </p>
              <div className="quote-block">
                &quot;Young people are not just the future of Ghana—they are its present. GYG gives their voice the platform it deserves.&quot;
              </div>
            </div>

            <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ background: "linear-gradient(135deg, rgba(244, 196, 48, 0.08), rgba(244, 196, 48, 0.15))", border: "2px solid rgba(244, 196, 48, 0.25)", borderRadius: "var(--radius-md)", padding: "28px" }}>
                <h4 style={{ marginBottom: "6px", color: "var(--black)" }}>Civic Leadership</h4>
                <p style={{ fontSize: "0.9rem" }}>Train and empower young Ghanaians to participate in Governance at local and national levels.</p>
              </div>
              <div style={{ background: "linear-gradient(135deg, rgba(214, 40, 40, 0.05), rgba(214, 40, 40, 0.1))", border: "2px solid rgba(214, 40, 40, 0.15)", borderRadius: "var(--radius-md)", padding: "28px" }}>
                <h4 style={{ marginBottom: "6px", color: "var(--black)" }}>Policy Advocacy</h4>
                <p style={{ fontSize: "0.9rem" }}>Develop and champion youth-centered policy proposals that address real challenges.</p>
              </div>
              <div style={{ background: "linear-gradient(135deg, rgba(46, 125, 50, 0.05), rgba(46, 125, 50, 0.1))", border: "2px solid rgba(46, 125, 50, 0.15)", borderRadius: "var(--radius-md)", padding: "28px" }}>
                <h4 style={{ marginBottom: "6px", color: "var(--black)" }}>Community Impact</h4>
                <p style={{ fontSize: "0.9rem" }}>Drive grassroots projects and campaigns that create tangible positive change.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light" id="why-matters">
        <div className="container">
          <div className="section-header center text-center">
            <span className="section-label">Why It Matters</span>
            <h2 className="section-title">The Case for Youth Leadership</h2>
          </div>

          <div className="grid-3 stagger-container">
            <div className="card fade-up">
              <h3 className="card__title">Empower Youth</h3>
              <p className="card__text">Give young Ghanaians the platforms to actively influence national Governance decisions.</p>
            </div>
            <div className="card fade-up">
              <h3 className="card__title">Influence Real Change</h3>
              <p className="card__text">Move beyond talk to tangible impact — policy briefs, campaigns, and direct engagement.</p>
            </div>
            <div className="card fade-up">
              <h3 className="card__title">Build Future Leaders</h3>
              <p className="card__text">Develop the next generation of ethical and visionary leaders for Ghana&apos;s growth.</p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginTop: "56px", textAlign: "center" }} className="impact-stats">
            <div style={{ padding: "32px", borderRadius: "var(--radius-md)", background: "var(--white)", border: "1px solid var(--grey-200)" }}>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "2.5rem", fontWeight: 900, color: "var(--red)", marginBottom: "8px" }}>
                <span data-count="16">16</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--grey-400)", textTransform: "uppercase" }}>Regions Targeted</div>
            </div>
            <div style={{ padding: "32px", borderRadius: "var(--radius-md)", background: "var(--white)", border: "1px solid var(--grey-200)" }}>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "2.5rem", fontWeight: 900, color: "var(--gold)", marginBottom: "8px" }}>
                <span data-count="100">+</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--grey-400)", textTransform: "uppercase" }}>Youth Members</div>
            </div>
            <div style={{ padding: "32px", borderRadius: "var(--radius-md)", background: "var(--white)", border: "1px solid var(--grey-200)" }}>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "2.5rem", fontWeight: 900, color: "var(--green)", marginBottom: "8px" }}>
                <span data-count="5">+</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--grey-400)", textTransform: "uppercase" }}>Policy Initiatives</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light" id="join-gyg">
        <div className="container container--sm">
          <div className="section-header center text-center">
            <span className="section-label">Join GYG</span>
            <h2 className="section-title">Join as a Member</h2>
            <p className="section-subtitle">Become part of Ghana&apos;s most ambitious youth civic movement. Your voice matters.</p>
          </div>

          {isSubmitted ? (
            <div className="success-msg show" id="gygSuccess">
              <div className="success-msg__icon"></div>
              <h3 className="success-msg__title">Welcome to GYG!</h3>
              <p className="success-msg__text">
                Your application has been received. Our team will review your submission and reach out within 48 hours.
              </p>
            </div>
          ) : (
            <div className="form-wrapper">
              <form id="gygForm" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="g-name">Full Name <span className="required">*</span></label>
                    <input id="g-name" name="fullName" type="text" className="form-control" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="g-email">Email Address <span className="required">*</span></label>
                    <input id="g-email" name="email" type="email" className="form-control" placeholder="you@example.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="g-phone">Phone Number <span className="required">*</span></label>
                    <input id="g-phone" name="phone" type="tel" className="form-control" placeholder="+233 XX XXX XXXX" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="g-region">Region <span className="required">*</span></label>
                    <select id="g-region" name="region" className="form-control form-control--select" required>
                      <option value="" disabled selected>Select region</option>
                      <option>Greater Accra</option>
                      <option>Ashanti</option>
                      <option>Western</option>
                      <option>Eastern</option>
                      <option>Central</option>
                      <option>Volta</option>
                      <option>Northern</option>
                      {/* ... other regions */}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="g-motivation">Why do you want to join? <span className="required">*</span></label>
                  <textarea id="g-motivation" name="motivation" className="form-control" rows={4} placeholder="Your motivation..." required></textarea>
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-gold btn-lg" style={{ width: "100%", justifyContent: "center", color: "var(--black)" }} disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Join the Ghana Youth Government →"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default YouthGovPage;
