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
      <section className="page-hero" aria-labelledby="programsHeroTitle">
        <div className="page-hero__bg"></div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 50% 40%, rgba(244, 196, 48, 0.12), transparent 55%), radial-gradient(circle at 20% 60%, rgba(214, 40, 40, 0.15), transparent 45%), radial-gradient(circle at 80% 60%, rgba(46, 125, 50, 0.12), transparent 45%)",
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
            <span className="page-hero__label fade-up">✦ Our Programs</span>
            <h1 className="page-hero__title fade-up" id="programsHeroTitle">
              Our Initiatives,
              <br />
              <span style={{ color: "var(--gold)" }}>One Movement</span>
            </h1>
            <p className="page-hero__subtitle fade-up">
              Eight flagship initiatives designed to empower, connect, and amplify young changemakers at every stage of their journey.
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
                  <span style={{ color: "var(--red)", fontSize: "1.1rem" }}>✓</span>
                  Startup pitching &amp; investor access
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--red)", fontSize: "1.1rem" }}>✓</span>
                  Expert keynotes &amp; workshops
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--red)", fontSize: "1.1rem" }}>✓</span>
                  Networking &amp; exhibition
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--red)", fontSize: "1.1rem" }}>✓</span>
                  Youth policy dialogue
                </li>
              </ul>
              <Link href="/summit" className="btn btn-primary btn-lg">Register for Summit →</Link>
            </div>
            <div className="fade-up">
              <div
                style={{
                  background: "linear-gradient(135deg, #1a0202, #6b1414)",
                  borderRadius: "var(--radius-lg)",
                  padding: "48px",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "340px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "200px",
                    height: "200px",
                    background: "rgba(244, 196, 48, 0.12)",
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
                    background: "rgba(214, 40, 40, 0.2)",
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
                      background: "var(--gold)",
                      color: "var(--black)",
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
                  <span style={{ color: "var(--green)", fontSize: "1.1rem" }}>✓</span>
                  Year-round community access
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--green)", fontSize: "1.1rem" }}>✓</span>
                  Exclusive workshops &amp; resources
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--green)", fontSize: "1.1rem" }}>✓</span>
                  Peer networking &amp; co-founder matching
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--green)", fontSize: "1.1rem" }}>✓</span>
                  Ambassador program eligibility
                </li>
              </ul>
              <Link href="/club" className="btn btn-primary btn-lg">Join the Club — It&apos;s Free →</Link>
            </div>
            <div className="fade-up" style={{ order: 1 }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #0a160a, #1a3d1a)",
                  borderRadius: "var(--radius-lg)",
                  padding: "48px",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "340px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    left: "-40px",
                    width: "200px",
                    height: "200px",
                    background: "rgba(46, 125, 50, 0.2)",
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
                    background: "rgba(244, 196, 48, 0.08)",
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
                      background: "var(--green)",
                      color: "#fff",
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
                  <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>✓</span>
                  Policy advocacy &amp; civic leadership
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>✓</span>
                  Regional YouthGovernor roles
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>✓</span>
                  Community impact projects
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>✓</span>
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
                  background: "linear-gradient(135deg, #0a0a18, #14143a)",
                  borderRadius: "var(--radius-lg)",
                  padding: "48px",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "340px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "200px",
                    height: "200px",
                    background: "rgba(244, 196, 48, 0.1)",
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
                    background: "rgba(214, 40, 40, 0.12)",
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
                      background: "rgba(244, 196, 48, 0.2)",
                      color: "var(--gold)",
                      border: "1px solid rgba(244, 196, 48, 0.4)",
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
            <h2 className="section-title">Expanding Our Impact</h2>
            <p className="section-subtitle">
              Beyond our flagship programs, we continuously build and support platforms shaping the future across multiple sectors.
            </p>
          </div>

          <div className="stagger-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            <article className="prog-card fade-up" style={{ minHeight: "280px" }}>
              <div className="prog-card__bg" style={{ background: "linear-gradient(135deg, #0a160a, #1a3d1a)" }}></div>
              <div className="prog-card__gradient"></div>
              <div className="prog-card__body">
                <h3 className="prog-card__title">Young Entrepreneurs’ Network</h3>
                <p className="prog-card__desc">A growing community of young entrepreneurs building startups, projects, and impactful ideas.</p>
              </div>
            </article>

            <article className="prog-card fade-up" style={{ minHeight: "280px" }}>
              <div className="prog-card__bg" style={{ background: "linear-gradient(135deg, #001a33, #003366)" }}></div>
              <div className="prog-card__gradient"></div>
              <div className="prog-card__body">
                <h3 className="prog-card__title">World Young Leaders Organisation</h3>
                <p className="prog-card__desc">A platform connecting emerging young leaders across sectors to collaborate globally.</p>
              </div>
            </article>

            <article className="prog-card fade-up" style={{ minHeight: "280px" }}>
              <div className="prog-card__bg" style={{ background: "linear-gradient(135deg, #333333, #000000)" }}></div>
              <div className="prog-card__gradient"></div>
              <div className="prog-card__body">
                <h3 className="prog-card__title">Penton</h3>
                <p className="prog-card__desc">Construction and real estate company focused on modern infrastructure solutions.</p>
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
