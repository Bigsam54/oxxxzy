"use client";

import React, { useState } from "react";
import Link from "next/link";

const ClubPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: document.getElementById("clubSuccess")?.offsetTop || 0 - 100, behavior: "smooth" });
    }, 1500);
  };

  const interests = [
    { id: "entrepreneurship", label: "Entrepreneurship" },
    { id: "tech", label: "Tech & Innovation" },
    { id: "finance", label: "Finance & Investment" },
    { id: "marketing", label: "Marketing & Branding" },
    { id: "leadership", label: "Leadership" },
    { id: "creative", label: "Creative Arts" },
    { id: "policy", label: "Policy & Governance" },
    { id: "agri", label: "Agriculture" },
  ];

  return (
    <>
      <section
        className="page-hero"
        style={{ background: "linear-gradient(135deg, #0a130a 0%, #0f2710 50%, #0d0d0d 100%)" }}
        aria-labelledby="clubHeroTitle"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(46, 125, 50, 0.25), transparent 55%), radial-gradient(circle at 75% 30%, rgba(244, 196, 48, 0.1), transparent 45%)",
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
            background: "linear-gradient(90deg, var(--green) 0%, var(--green) 50%, var(--gold) 50%)",
            zIndex: 3,
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="page-hero__content stagger-container">
            <span
              className="page-hero__label fade-up"
              style={{ background: "rgba(46, 125, 50, 0.15)", borderColor: "rgba(46, 125, 50, 0.3)", color: "#6fcf79" }}
            >
              Young Entrepreneurs&apos; Club &amp; Scheme
            </span>
            <h1 className="page-hero__title fade-up" id="clubHeroTitle">
              Join Ghana's Next
              <br />
              <span style={{ color: "var(--gold)" }}>Generation of Builders</span>
            </h1>
            <p className="page-hero__subtitle fade-up">
              A community of ambitious young Ghanaians learning, collaborating, and launching businesses together.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }} className="fade-up">
              <Link href="#join" className="btn btn-gold btn-lg">Join the Club →</Link>
              <Link href="#benefits" className="btn btn-secondary btn-lg">See Benefits</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="container">
          <div className="section-header center text-center">
            <span className="section-label">Member Benefits</span>
            <h2 className="section-title">Everything the Club Offers</h2>
            <p className="section-subtitle">
              When you join the Oxzy Entrepreneurs Club, you gain access to a full ecosystem built around your growth.
            </p>
          </div>

          <div className="grid-4 stagger-container">
            <div className="benefit-card fade-up">
              <h4 className="benefit-card__title">Network</h4>
              <p className="benefit-card__text">
                Connect with 500+ young entrepreneurs, founders, and mentors across all 16 regions of Ghana.
              </p>
            </div>
            <div className="benefit-card fade-up">
              <h4 className="benefit-card__title">Learn</h4>
              <p className="benefit-card__text">
                Access exclusive workshops, masterclasses, and resources from Ghana's top business minds.
              </p>
            </div>
            <div className="benefit-card fade-up">
              <h4 className="benefit-card__title">Build</h4>
              <p className="benefit-card__text">
                Get hands-on support, co-founder matching, and product development guidance for your venture.
              </p>
            </div>
            <div className="benefit-card fade-up">
              <h4 className="benefit-card__title">Grow</h4>
              <p className="benefit-card__text">
                Scale your business with investor introductions, pitch opportunities, and market access programs.
              </p>
            </div>
          </div>

          <div className="grid-3" style={{ marginTop: "48px" }}>
            <div className="card card--red fade-up">
              <div className="card__icon card__icon--red"></div>
              <h3 className="card__title">WhatsApp Community</h3>
              <p className="card__text">
                Join an active WhatsApp group with daily inspiration, job opportunities, collaborations, and support.
              </p>
            </div>
            <div className="card card--gold fade-up">
              <div className="card__icon card__icon--gold"></div>
              <h3 className="card__title">Event Access</h3>
              <p className="card__text">
                Priority access and discounted registration for all Oxzy events including the annual Summit.
              </p>
            </div>
            <div className="card card--green fade-up">
              <div className="card__icon card__icon--green"></div>
              <h3 className="card__title">Ambassador Program</h3>
              <p className="card__text">
                Top members can become regional ambassadors, leading the movement in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="join">
        <div className="container container--sm">
          <div className="section-header center text-center">
            <span className="section-label">Join Now</span>
            <h2 className="section-title">Become a Member Today</h2>
            <p className="section-subtitle">
              Membership is free. Fill the form below and become part of Ghana&apos;s most ambitious youth network.
            </p>
          </div>

          {isSubmitted ? (
            <div className="success-msg show" id="clubSuccess">
              <div className="success-msg__icon"></div>
              <h3 className="success-msg__title">Welcome to Oxzy!</h3>
              <p className="success-msg__text">
                &quot;Welcome to Oxzy — you&apos;re now part of the movement.&quot;
                <br />
                <br />
                Our team will reach out within 24 hours to add you to our community. Get ready to build!
              </p>
            </div>
          ) : (
            <div className="form-wrapper">
              <form id="clubForm" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-name">Full Name <span className="required">*</span></label>
                    <input id="c-name" name="fullName" type="text" className="form-control" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-email">Email Address <span className="required">*</span></label>
                    <input id="c-email" name="email" type="email" className="form-control" placeholder="you@example.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-phone">WhatsApp Number <span className="required">*</span></label>
                    <input id="c-phone" name="phone" type="tel" className="form-control" placeholder="+233 XX XXX XXXX" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-age">Age Range <span className="required">*</span></label>
                    <select id="c-age" name="ageRange" className="form-control form-control--select" required>
                      <option value="" disabled selected>Select age</option>
                      <option>16 - 18</option>
                      <option>19 - 22</option>
                      <option>23 - 26</option>
                      <option>27 - 30</option>
                      <option>31 - 35</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Interests (select all that apply)</label>
                  <div className="checkboxes">
                    {interests.map(interest => (
                      <label 
                        key={interest.id} 
                        className={`checkbox-item ${selectedInterests.includes(interest.id) ? 'checked' : ''}`}
                        onClick={() => toggleInterest(interest.id)}
                      >
                        <input type="checkbox" name="interests" value={interest.id} checked={selectedInterests.includes(interest.id)} readOnly />
                        <span className="checkbox-item__check">✓</span>
                        {interest.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="c-building">What are you building? <span className="required">*</span></label>
                  <textarea id="c-building" name="building" className="form-control" rows={4} placeholder="Tell us about your venture..." required></textarea>
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center" }} disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Join the Club ✦ It&apos;s Free →"}
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

export default ClubPage;
