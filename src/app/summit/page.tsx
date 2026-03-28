"use client";

import React, { useState } from "react";
import Link from "next/link";

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
      window.scrollTo({ top: document.getElementById("summitSuccess")?.offsetTop || 0 - 100, behavior: "smooth" });
    }, 1500);
  };

  return (
    <>
      <section className="page-hero" aria-labelledby="summitHeroTitle">
        <div className="page-hero__bg"></div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 60% 30%, rgba(214, 40, 40, 0.25), transparent 55%), radial-gradient(circle at 20% 70%, rgba(244, 196, 48, 0.1), transparent 50%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, var(--red) 0%, var(--red) 33%, var(--gold) 33%, var(--gold) 66%, var(--green) 66%)",
            zIndex: 3,
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="page-hero__content stagger-container">
            <span className="page-hero__label fade-up">YES 2025</span>
            <h1 className="page-hero__title fade-up" id="summitHeroTitle">
              Young Entrepreneurs
              <br />
              <span style={{ color: "var(--gold)" }}>Summit</span>
            </h1>
            <p className="page-hero__subtitle fade-up">
              &quot;Collaborating for Ghana&apos;s Future&quot; — Ghana&apos;s premier gathering for youth-driven innovation, pitches, and
              powerful networking.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }} className="fade-up">
              <Link href="#register" className="btn btn-primary btn-lg">Register Now →</Link>
              <Link href="#about-summit" className="btn btn-secondary btn-lg">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about-summit">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="about-split">
            <div className="fade-up">
              <span className="section-label">About YES</span>
              <h2 className="section-title">More Than a Conference — It&apos;s a Movement</h2>
              <div className="divider"></div>
              <p style={{ marginBottom: "20px" }}>
                Young people across Ghana are already innovating, creating businesses, and solving problems. The Young
                Entrepreneurs Summit is the space where these stories converge, where ideas get funded, and where Ghana&apos;s
                brightest builders meet their future collaborators.
              </p>
              <p style={{ marginBottom: "32px" }}>
                From startup pitches to policy dialogues, YES is designed to unlock real opportunities for participants at
                every stage of their entrepreneurial journey.
              </p>
              <div className="quote-block">
                &quot;The next generation of Ghanaian leaders won&apos;t wait — they&apos;re building right now.&quot;
              </div>
            </div>
            <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div className="event-detail-card" style={{ background: "linear-gradient(135deg, rgba(214, 40, 40, 0.05), rgba(214, 40, 40, 0.1))", borderColor: "rgba(214, 40, 40, 0.2)" }}>
                <div className="event-detail-card__label">Date</div>
                <div className="event-detail-card__value">Coming 2025</div>
              </div>
              <div className="event-detail-card" style={{ background: "linear-gradient(135deg, rgba(244, 196, 48, 0.05), rgba(244, 196, 48, 0.1))", borderColor: "rgba(244, 196, 48, 0.2)" }}>
                <div className="event-detail-card__label">Location</div>
                <div className="event-detail-card__value">Accra, Ghana</div>
              </div>
              <div className="event-detail-card" style={{ background: "linear-gradient(135deg, rgba(46, 125, 50, 0.05), rgba(46, 125, 50, 0.1))", borderColor: "rgba(46, 125, 50, 0.2)" }}>
                <div className="event-detail-card__label">Expected</div>
                <div className="event-detail-card__value">500+ Attendees</div>
              </div>
              <div className="event-detail-card" style={{ borderColor: "var(--red)", background: "rgba(214, 40, 40, 0.04)" }}>
                <div className="event-detail-card__label">Speakers</div>
                <div className="event-detail-card__value">Top Leaders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light" id="why-attend">
        <div className="container">
          <div className="section-header center text-center">
            <span className="section-label">Why Attend</span>
            <h2 className="section-title">What You&apos;ll Gain at YES</h2>
            <p className="section-subtitle">
              The Young Entrepreneurs Summit is crafted to deliver tangible value for every attendee.
            </p>
          </div>

          <div className="grid-3 stagger-container">
            <div className="card card--red fade-up">
              <div className="card__icon card__icon--red"></div>
              <h3 className="card__title">World-Class Networking</h3>
              <p className="card__text">
                Connect with founders, investors, mentors, and innovators from across Ghana and the African diaspora.
                Build relationships that last a lifetime.
              </p>
            </div>
            <div className="card card--gold fade-up">
              <div className="card__icon card__icon--gold"></div>
              <h3 className="card__title">Expert Learning</h3>
              <p className="card__text">
                Attend workshops, panels, and keynotes from Ghana&apos;s most successful entrepreneurs and thought leaders
                across multiple industries.
              </p>
            </div>
            <div className="card card--green fade-up">
              <div className="card__icon card__icon--green"></div>
              <h3 className="card__title">Real Opportunities</h3>
              <p className="card__text">
                Pitch your business, access funding opportunities, find co-founders, and discover partnerships that can
                transform your venture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light" id="register">
        <div className="container container--sm">
          <div className="section-header center text-center">
            <span className="section-label">Registration</span>
            <h2 className="section-title">Secure Your Spot</h2>
            <p className="section-subtitle">Join hundreds of Ghana&apos;s brightest young entrepreneurs at YES 2025.</p>
          </div>

          {isSubmitted ? (
            <div className="success-msg show" id="summitSuccess">
              <div className="success-msg__icon"></div>
              <h3 className="success-msg__title">You&apos;re Registered!</h3>
              <p className="success-msg__text">
                Thank you for registering for the Young Entrepreneurs Summit. We&apos;ll be in touch with event details shortly.
                See you there!
              </p>
            </div>
          ) : (
            <div className="form-wrapper">
              <form id="summitForm" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="s-name">Full Name <span className="required">*</span></label>
                    <input id="s-name" name="fullName" type="text" className="form-control" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="s-email">Email Address <span className="required">*</span></label>
                    <input id="s-email" name="email" type="email" className="form-control" placeholder="you@example.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="s-phone">Phone Number <span className="required">*</span></label>
                    <input id="s-phone" name="phone" type="tel" className="form-control" placeholder="+233 XX XXX XXXX" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="s-industry">Industry <span className="required">*</span></label>
                    <select id="s-industry" name="industry" className="form-control form-control--select" required>
                      <option value="" disabled>Select your industry</option>
                      <option>Technology &amp; Startups</option>
                      <option>Agriculture &amp; AgriBusiness</option>
                      <option>Finance &amp; FinTech</option>
                      <option>Healthcare &amp; MedTech</option>
                      <option>Creative Arts &amp; Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="s-reason">Why do you want to attend YES? <span className="required">*</span></label>
                  <textarea id="s-reason" name="reason" className="form-control" rows={4} placeholder="Tell us what you hope to gain..." required></textarea>
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center" }} disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Register for Summit →"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      <div className="cta-banner" style={{ padding: "72px 0" }}>
        <div className="container">
          <div className="cta-banner__inner">
            <h2 className="section-title text-white" style={{ marginBottom: "16px" }}>Can&apos;t Make the Summit?</h2>
            <p style={{ color: "rgba(255, 255, 255, 0.7)", maxWidth: "480px", margin: "0 auto 36px" }}>
              Join the Entrepreneurs Club and stay connected with our growing community year-round.
            </p>
            <Link href="/club" className="btn btn-gold btn-lg">Join the Club →</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummitPage;
