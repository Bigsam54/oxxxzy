"use client";

import React, { useState } from "react";
import Link from "next/link";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: document.getElementById("contactSuccess")?.offsetTop || 0 - 100, behavior: "smooth" });
    }, 1500);
  };

  return (
    <>
      <section className="page-hero" style={{ minHeight: "380px" }} aria-labelledby="contactHeroTitle">
        <div className="page-hero__bg"></div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(214, 40, 40, 0.2), transparent 55%), radial-gradient(circle at 70% 40%, rgba(244, 196, 48, 0.08), transparent 45%)",
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
            background: "linear-gradient(90deg, var(--red) 0%, var(--red) 33%, var(--gold) 33%, var(--gold) 66%, var(--green) 66%)",
            zIndex: 3,
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="page-hero__content stagger-container">
            <span className="page-hero__label fade-up">Get In Touch</span>
            <h1 className="page-hero__title fade-up" id="contactHeroTitle">
              Let&apos;s Start a
              <br />
              <span style={{ color: "var(--gold)" }}>Conversation</span>
            </h1>
            <p className="page-hero__subtitle fade-up">
              Have questions, partnership ideas, or just want to connect? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "64px", alignItems: "flex-start" }} className="about-split">
            <div className="fade-up">
              <span className="section-label">Contact Info</span>
              <h2 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "8px" }}>Reach Out to Us</h2>
              <p style={{ marginBottom: "36px", fontSize: "0.95rem" }}>
                Expect a response within 24 hours. We&apos;re here to help.
              </p>

              <div className="contact-info-item">
                <div className="contact-info-item__icon">📧</div>
                <div>
                  <div className="contact-info-item__label">Email</div>
                  <a href="mailto:hello@oxzy.org" className="contact-info-item__value" style={{ textDecoration: "none", color: "var(--black)" }}>
                    hello@oxzy.org
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-item__icon">📞</div>
                <div>
                  <div className="contact-info-item__label">Phone / WhatsApp</div>
                  <a href="tel:+233000000000" className="contact-info-item__value" style={{ textDecoration: "none", color: "var(--black)" }}>
                    +233 (0) 00 000 0000
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-item__icon">📍</div>
                <div>
                  <div className="contact-info-item__label">Location</div>
                  <div className="contact-info-item__value">Accra, Ghana</div>
                </div>
              </div>
            </div>

            <div className="fade-up">
              {isSubmitted ? (
                <div className="success-msg show" id="contactSuccess">
                  <div className="success-msg__icon"></div>
                  <h3 className="success-msg__title">Message Sent!</h3>
                  <p className="success-msg__text">
                    Thank you for reaching out to Oxzy. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="form-wrapper">
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.4rem", fontWeight: 800, marginBottom: "8px" }}>
                    Send us a Message
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--grey-600)", marginBottom: "28px" }}>
                    Whether it&apos;s a question or a partnership pitch — we&apos;re all ears.
                  </p>

                  <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="ct-name">Your Name <span className="required">*</span></label>
                        <input id="ct-name" name="name" type="text" className="form-control" placeholder="Your full name" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="ct-email">Email Address <span className="required">*</span></label>
                        <input id="ct-email" name="email" type="email" className="form-control" placeholder="you@example.com" required />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="ct-subject">Subject <span className="required">*</span></label>
                      <select id="ct-subject" name="subject" className="form-control form-control--select" required>
                        <option value="" disabled selected>What is this about?</option>
                        <option>General Inquiry</option>
                        <option>Partnership Opportunity</option>
                        <option>Summit Information</option>
                        <option>Club Membership</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="ct-message">Your Message <span className="required">*</span></label>
                      <textarea id="ct-message" name="message" className="form-control" rows={5} placeholder="Tell us what&apos;s on your mind..." required></textarea>
                    </div>

                    <div className="form-submit">
                      <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center" }} disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message →"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container container--sm text-center">
          <span className="section-label">Partner With Us</span>
          <h2 className="section-title" style={{ marginTop: "12px", marginBottom: "16px" }}>Want to Partner with Oxzy?</h2>
          <p style={{ fontSize: "1rem", color: "var(--grey-600)", maxWidth: "600px", margin: "0 auto 36px", lineHeight: "1.8" }}>
            We&apos;re always looking for organizations, brands, and individuals who share our passion for youth empowerment in Ghana.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:partnerships@oxzy.org" className="btn btn-primary btn-lg">Partner With Us →</a>
            <Link href="/summit" className="btn btn-outline btn-lg">Sponsor the Summit</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
