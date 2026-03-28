"use client";

import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero hero--dark" aria-labelledby="heroTitle">
        <div className="hero__bg-pattern"></div>
        <div className="hero__orbs">
          <div className="hero__orb hero__orb--1"></div>
          <div className="hero__orb hero__orb--2"></div>
          <div className="hero__orb hero__orb--3"></div>
        </div>

        {/* Ghana flag stripe decoration */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "linear-gradient(90deg, var(--red) 0%, var(--red) 33%, var(--gold) 33%, var(--gold) 66%, var(--green) 66%)",
            opacity: 0.6,
            zIndex: 4,
          }}
        ></div>

        {/* Raw Right Edge Full Height Image */}
        <div className="hero__visual-raw">
          <img
            src="https://res.cloudinary.com/dopscbnty/image/upload/v1774230636/ghan_jnwdmm.png"
            alt="Ghana Youth    Oxzy Movement"
            className="hero__visual-raw-img"
          />
        </div>

        <div className="container">
          <div className="hero__inner">
            <div className="hero__content stagger-container">
              <div className="hero__badge fade-up">
                <div className="hero__badge-dot"></div>
                <span className="hero__badge-text">Ghana&apos;s Youth Movement    2025</span>
              </div>

              <h1 className="hero__title fade-up" id="heroTitle">
                Building the Next Generation of
                <br />
                <span className="accent">Entrepreneurs and Leaders</span>
              </h1>

              <p className="hero__subtitle fade-up">
                Oxzy is a group of young innovators committed to empowering young people to build ideas, launch ventures, and lead initiatives that create real impact in their communities and across Africa. We bring together entrepreneurs, innovators, creators, and emerging leaders through platforms, programs, and opportunities designed to turn ambition into action. At Oxzy, we believe the future belongs to young people who are bold enough to build it.
              </p>

              <div className="hero__cta fade-up">
                <Link href="/club" className="btn btn-primary btn-lg">Join the Club →</Link>
                <Link href="/summit" className="btn btn-secondary btn-lg">Register for Summit</Link>
              </div>

              <div className="hero__stats fade-up">
                <div className="hero__stat">
                  <div className="hero__stat-value">
                    <span data-count="800" data-suffix="+">0</span>
                  </div>
                  <div className="hero__stat-label">Young Entrepreneurs</div>
                </div>
                <div className="hero__stat">
                  <div className="hero__stat-value">
                    <span data-count="8" data-suffix="+">0</span>
                  </div>
                  <div className="hero__stat-label">Initiatives</div>
                </div>
                <div className="hero__stat">
                  <div className="hero__stat-value">
                    <span data-count="1">0</span>
                  </div>
                  <div className="hero__stat-label">Movement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / PILLARS */}
      <section className="section bg-light" id="about" style={{ overflow: "visible", paddingBottom: 0 }}>
        <div className="container">
          <div className="section-header center text-center fade-up">
            <span className="section-label">What We’re Building</span>
            <h2 className="section-title">
              From Ideas to Innovation,
              <br />
              From Innovation to Impact.
            </h2>
            <p className="section-subtitle">
              Oxzy is creating an ecosystem where young people can connect, collaborate, innovate, and grow while working on solutions that matter. Through our initiatives, we support:
            </p>
            <ul style={{ listStyle: "none", padding: 0, color: "var(--text)", fontSize: "1.1rem", lineHeight: 1.8, marginTop: "1rem", textAlign: "left", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
               <li><strong>✓</strong> Young entrepreneurs building startups</li>
               <li><strong>✓</strong> Innovators developing new ideas and solutions</li>
               <li><strong>✓</strong> Youth leaders shaping conversations around governance and development</li>
               <li><strong>✓</strong> Students exploring entrepreneurship and creativity</li>
               <li><strong>✓</strong> Communities working together to solve problems</li>
            </ul>
          </div>

          <div className="fade-up about-svg-wrap">
            <img
              src="https://res.cloudinary.com/dopscbnty/image/upload/v1774233719/Image_fx_35_zysp8c.jpg"
              alt="Young Ghanaian Builders    Oxzy Youth"
              className="about-svg-img"
              style={{ boxShadow: "0 16px 48px rgba(0, 0, 0, 0.1)", filter: "none" }}
            />
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section" id="programs" style={{ paddingTop: "140px", position: "relative", zIndex: 1 }}>
        <div className="container">
          <div className="section-header center text-center fade-up">
            <span className="section-label">Our Initiatives</span>
            <h2 className="section-title">Everything You Need to Grow</h2>
            <p className="section-subtitle">
              Eight flagship initiatives designed to empower, connect, and amplify young changemakers.
            </p>
          </div>

          <div className="stagger-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {/* 1. Summit */}
            <article className="prog-card fade-up" style={{ minHeight: "340px" }} onClick={() => window.location.href = '/summit'} role="link" tabIndex={0}>
              <div className="prog-card__bg" style={{ background: "linear-gradient(135deg, #1a0202, #6b1414)" }}></div>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(214, 40, 40, 0.4), transparent 60%)", zIndex: 1, pointerEvents: "none" }}></div>
              <div className="prog-card__gradient"></div>
              <div className="prog-card__body">
                <span className="prog-card__tag"></span>
                <h3 className="prog-card__title">Young Entrepreneurs’ Summit</h3>
                <p className="prog-card__desc">A leading platform that brings together founders, innovators, policymakers, creators, and ecosystem leaders to discuss the future of entrepreneurship, innovation, and youth development.</p>
                <Link href="/summit" className="card__arrow" style={{ color: "var(--gold)" }}>Learn More →</Link>
              </div>
            </article>

            {/* 2. Network */}
            <article className="prog-card fade-up" style={{ minHeight: "340px" }}>
              <div className="prog-card__bg" style={{ background: "linear-gradient(135deg, #0a160a, #1a3d1a)" }}></div>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 70%, rgba(46, 125, 50, 0.35), transparent 60%)", zIndex: 1, pointerEvents: "none" }}></div>
              <div className="prog-card__gradient"></div>
              <div className="prog-card__body">
                <span className="prog-card__tag" style={{ background: "var(--green)", color: "#fff" }}></span>
                <h3 className="prog-card__title">Young Entrepreneurs’ Network</h3>
                <p className="prog-card__desc">A growing community of young entrepreneurs building startups, projects, and impactful ideas while collaborating, mentoring, and learning from one another.</p>
              </div>
            </article>

            {/* 3. Club & Scheme */}
            <article className="prog-card fade-up" style={{ minHeight: "340px" }} onClick={() => window.location.href = '/club'} role="link" tabIndex={0}>
              <div className="prog-card__bg" style={{ background: "linear-gradient(135deg, #0d0d22, #1a1a3d)" }}></div>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 60% 40%, rgba(244, 196, 48, 0.2), transparent 60%)", zIndex: 1, pointerEvents: "none" }}></div>
              <div className="prog-card__gradient"></div>
              <div className="prog-card__body">
                <span className="prog-card__tag" style={{ background: "rgba(244, 196, 48, 0.15)", color: "var(--gold)", border: "1px solid rgba(244, 196, 48, 0.3)" }}></span>
                <h3 className="prog-card__title">Young Entrepreneurs&apos; Club &amp; Scheme</h3>
                <p className="prog-card__desc">A program designed to inspire and nurture the next generation of entrepreneurs and innovators through mentorship, workshops, and learning sessions.</p>
                <Link href="/club" className="card__arrow" style={{ color: "var(--gold)" }}>Join the Club →</Link>
              </div>
            </article>

            {/* 4. Youth Government */}
            <article className="prog-card fade-up" style={{ minHeight: "340px" }} onClick={() => window.location.href = '/youth-government'} role="link" tabIndex={0}>
              <div className="prog-card__bg" style={{ background: "linear-gradient(135deg, #2a0800, #5a1800)" }}></div>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 80%, rgba(255, 69, 0, 0.2), transparent 60%)", zIndex: 1, pointerEvents: "none" }}></div>
              <div className="prog-card__gradient"></div>
              <div className="prog-card__body">
                <span className="prog-card__tag" style={{ background: "rgba(255, 69, 0, 0.15)", color: "#ff8c00", border: "1px solid rgba(255, 69, 0, 0.3)" }}></span>
                <h3 className="prog-card__title">Youth Government</h3>
                <p className="prog-card__desc">An initiative focused on encouraging youth participation in governance, civic engagement, and national development.</p>
                <Link href="/youth-government" className="card__arrow" style={{ color: "var(--gold)" }}>Get Involved →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="stats-bar fade-up">
        <div className="container">
          <div className="stats-bar__inner">
            <div className="stats-bar__item">
              <div className="stats-bar__value"><span data-count="800" data-suffix="+">0</span></div>
              <div className="stats-bar__label">Young Entrepreneurs</div>
            </div>
            <div className="stats-bar__divider" aria-hidden="true"></div>
            <div className="stats-bar__item">
              <div className="stats-bar__value"><span data-count="1">0</span></div>
              <div className="stats-bar__label">Major Summit Launched</div>
            </div>
            <div className="stats-bar__divider" aria-hidden="true"></div>
            <div className="stats-bar__item">
              <div className="stats-bar__value"><span data-count="8">0</span></div>
              <div className="stats-bar__label">Impactful Initiatives</div>
            </div>
            <div className="stats-bar__divider" aria-hidden="true"></div>
            <div className="stats-bar__item">
              <div className="stats-bar__value"><span data-count="1">0</span></div>
              <div className="stats-bar__label">Growing Community</div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="about-split">
            <div className="fade-up">
              <span className="section-label">Join the Movement</span>
              <h2 className="section-title">
                Insights, Stories
                <br />
                &amp; Opportunities
              </h2>
              <div className="divider"></div>
              <p style={{ marginBottom: "32px", fontSize: "1rem" }}>
                Through Oxzy, we share stories, insights, and ideas from entrepreneurs, innovators, and leaders who are shaping the future. Our platform features:
              </p>
              <ul style={{ listStyle: "none", padding: 0, color: "var(--text)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "32px", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                 <li><strong>✓</strong> Startup journeys and lessons</li>
                 <li><strong>✓</strong> Community stories</li>
                 <li><strong>✓</strong> Entrepreneur insights</li>
                 <li><strong>✓</strong> Youth leadership conversations</li>
                 <li><strong>✓</strong> Opportunities and programs</li>
              </ul>
              <p style={{ marginBottom: "32px", fontSize: "1rem" }}>
                Stay connected and be part of the conversations shaping the next generation of innovation.
              </p>
            </div>

            <div className="fade-up">
              <div style={{ background: "linear-gradient(135deg, var(--red), #8b1a1a)", borderRadius: "var(--radius-md)", padding: "40px", color: "#fff" }}>
                <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "1.5rem", marginBottom: "16px" }}>
                  There is a place for you here.
                </h3>
                <p style={{ marginBottom: "24px", fontSize: "1.05rem", opacity: 0.9, lineHeight: 1.7 }}>
                  Oxzy is more than a platform — it is a growing community of young innovators determined to build the future. Join a community that is building what comes next.
                </p>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "32px", fontSize: "1.05rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li>• Building a startup</li>
                  <li>• Working on an idea</li>
                  <li>• Interested in innovation</li>
                  <li>• Looking to collaborate</li>
                  <li>• Passionate about leadership and change</li>
                </ul>
                <Link href="/club" className="btn btn-gold" style={{ width: "100%", textAlign: "center", display: "inline-block" }}>Join the Movement →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-banner fade-up">
        <div className="container">
          <div className="cta-banner__inner">
            <span className="section-label" style={{ color: "var(--gold)", background: "rgba(244, 196, 48, 0.15)" }}>
              Ready to Start?
            </span>
            <h2 className="section-title text-white" style={{ marginTop: "12px", marginBottom: "16px" }}>
              Join the Movement.
              <br />
              Build Ghana's Future.
            </h2>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "520px",
                margin: "0 auto 40px",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              Whether you&apos;re a student, founder, or changemaker    there&apos;s a place for you in Oxzy. Start your journey
              today.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/club" className="btn btn-gold btn-lg">Join the Club →</Link>
              <Link href="/summit" className="btn btn-secondary btn-lg">Register for Summit</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
