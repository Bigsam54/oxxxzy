import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Programs | Oxzy",
  description: "Oxzy Programs — Young Entrepreneurs Summit, Entrepreneurs Club, and Ghana Youth Government. Eight initiatives for Ghana&apos;s next generation.",
};

export default function ProgramsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero" style={{ background: "var(--theme-cream)", paddingTop: "clamp(100px, 15vh, 140px)", minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="container hero__inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="page-hero__content stagger-container">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(13, 92, 51, 0.08)", color: "var(--ghana-green)", padding: "8px 20px", borderRadius: "100px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "32px" }}>
              <span>✦</span> Our Impact & Projects
            </div>
            <h1 className="hero__title" style={{ color: "var(--theme-bg)", fontWeight: 900, marginBottom: "24px" }}>
              Building Solutions,<br /><span style={{ color: "var(--gold)", fontStyle: "italic" }}>Creating Impact.</span>
            </h1>
            
            {/* Mobile Image - Premium Visual */}
            <div className="mobile-only" style={{ marginBottom: "32px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
              <img 
                src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1774705868/Whisk_73f190b50b714c186f24c5711ba088c0dr_ix7xrv.png" 
                alt="Oxzy Impact" 
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p style={{ color: "var(--theme-text-muted-dark)", fontSize: "20px", maxWidth: "700px", lineHeight: 1.7 }}>
              At Oxzy, we are building solutions, platforms, and communities that empower young people to innovate, lead, and create meaningful change. Through our projects, we are creating opportunities and systems that help young people turn vision into impact.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAM 1:Summit */}
      <section className="section" id="summit">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="about-split">
            <div className="fade-up">
              <span className="section-label">Program 01</span>
              <h2 className="section-title">
                Young Entrepreneurs
                <br />
                Summit (YES)
              </h2>
              <div className="divider"></div>
              <p style={{ marginBottom: "16px" }}>
                Ghana&apos;s premier annual gathering for youth-driven innovation. The Young Entrepreneurs Summit (YES) brings
                together founders, investors, mentors, and changemakers for a transformative experience.
              </p>
              <p style={{ marginBottom: "32px" }}>
                From startup pitch competitions to keynote addresses by industry giants, YES is where ideas become
                ventures, and connections become partnerships.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--theme-primary)", fontSize: "1.1rem" }}>✓</span>
                  Startup pitching &amp; investor access
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--theme-primary)", fontSize: "1.1rem" }}>✓</span>
                  Expert keynotes &amp; workshops
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--theme-primary)", fontSize: "1.1rem" }}>✓</span>
                  Networking &amp; exhibition
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--theme-primary)", fontSize: "1.1rem" }}>✓</span>
                  Youth policy dialogue
                </li>
              </ul>
              <Link href="/summit" className="btn btn-primary btn-lg">Register for Summit →</Link>
            </div>
            <div className="fade-up">
              <div
                style={{
                  background: "linear-gradient(135deg, #3f3561, #2a2245)",
                  borderRadius: "var(--radius-lg)",
                  padding: "48px",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "340px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "200px",
                    height: "200px",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-60px",
                    left: "-40px",
                    width: "250px",
                    height: "250px",
                    background: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "50%",
                  }}
                ></div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontFamily: "var(--font-head)", fontSize: "1.6rem", fontWeight: 900, marginBottom: "8px" }}>
                    YES 2025
                  </div>
                  <div style={{ opacity: 0.7, marginBottom: "20px" }}>Coming Soon — Accra, Ghana</div>
                  <span
                    style={{
                      background: "var(--theme-primary)",
                      color: "var(--theme-bg)",
                      padding: "6px 16px",
                      borderRadius: "99px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    Register Early
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "var(--grey-200)", margin: "0 24px" }}></div>

      {/* PROGRAM 2:Club */}
      <section className="section" id="club">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="about-split">
            <div className="fade-up" style={{ order: 2 }}>
              <span className="section-label">Program 02</span>
              <h2 className="section-title">
                Entrepreneurs
                <br />
                Club
              </h2>
              <div className="divider divider--gold"></div>
              <p style={{ marginBottom: "16px" }}>
                The Oxzy Entrepreneurs Club is a vibrant, year-round community for young Ghanaian builders, founders, and
                innovators at every stage — from dreaming to scaling.
              </p>
              <p style={{ marginBottom: "32px" }}>
                Members get access to exclusive resources, peer networks, workshops, and mentorship opportunities
                throughout the year.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--theme-primary)", fontSize: "1.1rem" }}>✓</span>
                  Year-round community access
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--theme-primary)", fontSize: "1.1rem" }}>✓</span>
                  Exclusive workshops &amp; resources
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--theme-primary)", fontSize: "1.1rem" }}>✓</span>
                  Peer networking &amp; co-founder matching
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--theme-primary)", fontSize: "1.1rem" }}>✓</span>
                  Ambassador program eligibility
                </li>
              </ul>
              <Link href="/club" className="btn btn-primary btn-lg">Join the Club — It&apos;s Free →</Link>
            </div>
            <div className="fade-up" style={{ order: 1 }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #3f3561, #2a2245)",
                  borderRadius: "var(--radius-lg)",
                  padding: "48px",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "340px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    left: "-40px",
                    width: "200px",
                    height: "200px",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-60px",
                    right: "-40px",
                    width: "250px",
                    height: "250px",
                    background: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "50%",
                  }}
                ></div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontFamily: "var(--font-head)", fontSize: "1.6rem", fontWeight: 900, marginBottom: "8px" }}>
                    Entrepreneurs Club
                  </div>
                  <div style={{ opacity: 0.7, marginBottom: "20px" }}>500+ Members Across Ghana</div>
                  <span
                    style={{
                      background: "var(--theme-primary)",
                      color: "var(--theme-bg)",
                      padding: "6px 16px",
                      borderRadius: "99px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    Free Membership
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "var(--grey-200)", margin: "0 24px" }}></div>

      {/* PROGRAM 3: GYG */}
      <section className="section" id="gyg">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="about-split">
            <div className="fade-up">
              <span className="section-label">Program 03</span>
              <h2 className="section-title">
                Ghana Youth
                <br />
                Government
              </h2>
              <div className="divider divider--gold"></div>
              <p style={{ marginBottom: "16px" }}>
                The Ghana Youth Government (GYG) is a bold civic initiative positioning young people as active architects
                of Ghana&apos;s Governance — empowering them to submit policy proposals, lead campaigns, and influence real
                decisions.
              </p>
              <p style={{ marginBottom: "32px" }}>
                Not just future leaders — but leaders right now, driving change from the grassroots up.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--theme-primary)", fontSize: "1.1rem" }}>✓</span>
                  Policy advocacy &amp; civic leadership
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--theme-primary)", fontSize: "1.1rem" }}>✓</span>
                  Regional YouthGovernor roles
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--theme-primary)", fontSize: "1.1rem" }}>✓</span>
                  Community impact projects
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--theme-primary)", fontSize: "1.1rem" }}>✓</span>
                  Direct engagement with decision-makers
                </li>
              </ul>
              <Link href="/youth-government" className="btn btn-gold btn-lg" style={{ color: "var(--black)" }}>
                Join the Youth Government →
              </Link>
            </div>
            <div className="fade-up">
              <div
                style={{
                  background: "linear-gradient(135deg, #3f3561, #2a2245)",
                  borderRadius: "var(--radius-lg)",
                  padding: "48px",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "340px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "200px",
                    height: "200px",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-60px",
                    left: "-40px",
                    width: "250px",
                    height: "250px",
                    background: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "50%",
                  }}
                ></div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontFamily: "var(--font-head)", fontSize: "1.6rem", fontWeight: 900, marginBottom: "8px" }}>
                    Ghana YouthGov
                  </div>
                  <div style={{ opacity: 0.7, marginBottom: "20px" }}>Youth Voices. Real Impact.</div>
                  <span
                    style={{
                      background: "rgba(255, 255, 255, 0.15)",
                      color: "var(--theme-primary)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      padding: "6px 16px",
                      borderRadius: "99px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    Join Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL INITIATIVES */}
      <section className="section bg-light" id="other-initiatives">
        <div className="container">
          <div className="section-header center text-center fade-up">
            <span className="section-label">More Initiatives</span>
            <h2 className="section-title">Innovation in Action</h2>
            <p className="section-subtitle">
              Beyond our flagship programs, we continuously build and support platforms shaping the future across transportation, construction, and public safety.
            </p>
          </div>

          <div className="stagger-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            <article className="prog-card fade-up">
              <div className="prog-card__bg" style={{ background: "var(--theme-bg)" }}></div>
              <div className="prog-card__gradient"></div>
              <div className="prog-card__body">
                <div style={{ color: "var(--gold)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", marginBottom: "12px", letterSpacing: "0.1em" }}>Public Safety</div>
                <h3 className="prog-card__title">Cylax</h3>
                <p className="prog-card__desc">
                  An innovation-driven initiative focused on improving emergency response and accessibility to critical services. Cylax aims to strengthen public safety systems by making emergency communication faster, more accessible, and more reliable via technology.
                </p>
              </div>
            </article>

            <article className="prog-card fade-up">
              <div className="prog-card__bg" style={{ background: "var(--theme-bg)" }}></div>
              <div className="prog-card__gradient"></div>
              <div className="prog-card__body">
                <div style={{ color: "var(--ghana-green)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", marginBottom: "12px", letterSpacing: "0.1em" }}>Transportation</div>
                <h3 className="prog-card__title">Velo</h3>
                <p className="prog-card__desc">
                  A transport innovation initiative focused on solving challenges within the transportation sector. Velo introduces smarter, more efficient solutions to improve how people move within cities and across regions.
                </p>
              </div>
            </article>

            <article className="prog-card fade-up">
              <div className="prog-card__bg" style={{ background: "var(--theme-bg)" }}></div>
              <div className="prog-card__gradient"></div>
              <div className="prog-card__body">
                <div style={{ color: "var(--ghana-red)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", marginBottom: "12px", letterSpacing: "0.1em" }}>Infrastructure</div>
                <h3 className="prog-card__title">Penton</h3>
                <p className="prog-card__desc">
                  Focused on construction and real estate infrastructure that supports growth, opportunity, and modern living. Penton creates value-added projects that support economic growth and urban evolution.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="cta-banner fade-up">
        <div className="container">
          <div className="cta-banner__inner">
            <span className="section-label" style={{ color: "var(--gold)", background: "rgba(244, 196, 48, 0.15)" }}>
              Start Your Journey
            </span>
            <h2 className="section-title text-white" style={{ marginTop: "12px", marginBottom: "16px" }}>
              Find Your Place
              <br />
              in the Movement
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.7)", maxWidth: "500px", margin: "0 auto 40px", fontSize: "1.05rem" }}>
              Each program is free to join. Start with the Club and grow into everything Oxzy offers.
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
}
