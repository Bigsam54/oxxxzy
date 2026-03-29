"use client";

import React from "react";
import { 
  Users, 
  Trophy, 
  Target, 
  GraduationCap, 
  Building2, 
  ArrowRight,
  Mail,
  ShieldAlert,
  Calendar,
  Layers
} from "lucide-react";

const SocialProofPage = () => {
  const heroImage = "https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723833/Whisk_czyzmgm0gtmyctzk1czmzjyty2mkrtl2igmh1yy_fxxdgt.png";

  return (
    <>
      <main>
        {/* IMPACT NUMBERS SECTOR - CLEAR BACKGROUND (NO OVERLAY) */}
        <section className="impact-hero" style={{ 
          position: "relative",
          padding: "340px 0 80px", /* Increased top padding to move cards down */
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          overflow: "hidden"
        }}>
          {/* OVERLAY REMOVED AS REQUESTED */}

          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            {/* LABEL REMOVED AS REQUESTED */}
            
            <div className="impact-grid">
              <div className="impact-card">
                <div className="impact-num">
                   3<span style={{ color: "var(--ghana-gold)" }}>+</span>
                </div>
                <div className="impact-desc">
                  Annual summits<br />delivered
                </div>
              </div>
              <div className="impact-card">
                <div className="impact-num">
                  500<span style={{ color: "var(--ghana-gold)" }}>+</span>
                </div>
                <div className="impact-desc">
                  Young entrepreneurs<br />reached
                </div>
              </div>
              <div className="impact-card">
                <div className="impact-num">
                  6
                </div>
                <div className="impact-desc">
                  Industry sectors<br />represented
                </div>
              </div>
              <div className="impact-card">
                <div className="impact-num">
                  10<span style={{ color: "var(--ghana-gold)" }}>+</span>
                </div>
                <div className="impact-desc">
                  Expert speakers<br />& mentors
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRACK RECORD: What we have built */}
        <section className="section" style={{ background: "white", padding: "100px 0" }}>
          <div className="container">
            <div style={{ textAlign: "left", marginBottom: "56px" }}>
              <span className="section-tag" style={{ color: "var(--ghana-gold)" }}>Track Record</span>
              <h2 className="text-dark" style={{ textAlign: "left", marginBottom: 0 }}>What we have built</h2>
            </div>

            <div className="programs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
              {/* Program Card 1 */}
              <div className="program-card" style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(51, 42, 81, 0.08)", background: "white" }}>
                <div className="program-thumb" style={{ height: "180px", background: "var(--ghana-green)", position: "relative", padding: "20px", display: "flex", alignItems: "flex-end" }}>
                  <div className="thumb-pattern" style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
                  <div style={{ position: "relative", zIndex: 2, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "12px", fontWeight: 600, padding: "5px 14px", borderRadius: "100px" }}>
                    2024
                  </div>
                </div>
                <div style={{ padding: "28px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--theme-bg)", marginBottom: "12px" }}>Annual Summit</div>
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: "22px", fontWeight: 700, marginBottom: "10px", lineHeight: 1.2 }} className="text-dark">Young Entrepreneurs&apos; Summit 2024</h3>
                  <p style={{ fontSize: "14px", color: "var(--theme-text-muted-dark)", lineHeight: 1.6, marginBottom: "20px" }}>A full-day virtual summit bringing together young builders, innovators and sector leaders across Ghana.</p>
                  <div style={{ display: "flex", gap: "24px", paddingTop: "20px", borderTop: "1px solid rgba(51, 42, 81, 0.08)" }}>
                    <div><div style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 700, color: "var(--theme-bg)" }}>200+</div><div style={{ fontSize: "11px", color: "var(--theme-text-muted-dark)" }}>Attendees</div></div>
                    <div><div style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 700, color: "var(--theme-bg)" }}>8</div><div style={{ fontSize: "11px", color: "var(--theme-text-muted-dark)" }}>Speakers</div></div>
                    <div><div style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 700, color: "var(--theme-bg)" }}>4</div><div style={{ fontSize: "11px", color: "var(--theme-text-muted-dark)" }}>Sectors</div></div>
                  </div>
                </div>
              </div>

              {/* Program Card 2 */}
              <div className="program-card" style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(51, 42, 81, 0.08)", background: "white" }}>
                <div className="program-thumb" style={{ height: "180px", background: "var(--theme-bg)", position: "relative", padding: "20px", display: "flex", alignItems: "flex-end" }}>
                  <div className="thumb-pattern" style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
                  <div style={{ position: "relative", zIndex: 2, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "12px", fontWeight: 600, padding: "5px 14px", borderRadius: "100px" }}>
                    2023
                  </div>
                </div>
                <div style={{ padding: "28px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--theme-bg)", marginBottom: "12px" }}>Inaugural Event</div>
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: "22px", fontWeight: 700, marginBottom: "10px", lineHeight: 1.2 }} className="text-dark">Young Entrepreneurs&apos; Summit 2023</h3>
                  <p style={{ fontSize: "14px", color: "var(--theme-text-muted-dark)", lineHeight: 1.6, marginBottom: "20px" }}>Oxzy&apos;s inaugural summit — the event that started the movement for young Ghanaian entrepreneurship.</p>
                  <div style={{ display: "flex", gap: "24px", paddingTop: "20px", borderTop: "1px solid rgba(51, 42, 81, 0.08)" }}>
                    <div><div style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 700, color: "var(--theme-bg)" }}>150+</div><div style={{ fontSize: "11px", color: "var(--theme-text-muted-dark)" }}>Attendees</div></div>
                    <div><div style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 700, color: "var(--theme-bg)" }}>5</div><div style={{ fontSize: "11px", color: "var(--theme-text-muted-dark)" }}>Speakers</div></div>
                    <div><div style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 700, color: "var(--theme-bg)" }}>3</div><div style={{ fontSize: "11px", color: "var(--theme-text-muted-dark)" }}>Sectors</div></div>
                  </div>
                </div>
              </div>

              {/* Program Card 3 */}
              <div className="program-card" style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(51, 42, 81, 0.08)", background: "white" }}>
                <div className="program-thumb" style={{ height: "180px", background: "linear-gradient(135deg, #8B6508, var(--ghana-gold))", position: "relative", padding: "20px", display: "flex", alignItems: "flex-end" }}>
                  <div className="thumb-pattern" style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
                  <div style={{ position: "relative", zIndex: 2, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "12px", fontWeight: 600, padding: "5px 14px", borderRadius: "100px" }}>
                    Coming 2026
                  </div>
                </div>
                <div style={{ padding: "28px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ghana-gold)", marginBottom: "12px" }}>Future Event</div>
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: "22px", fontWeight: 700, marginBottom: "10px", lineHeight: 1.2 }} className="text-dark">Young Entrepreneurs&apos; Summit 2026</h3>
                  <p style={{ fontSize: "14px", color: "var(--theme-text-muted-dark)", lineHeight: 1.6, marginBottom: "20px" }}>Our biggest edition yet — two days, six sectors, the Ghana Youth Government launch, and the Entrepreneurs Club.</p>
                  <div style={{ display: "flex", gap: "24px", paddingTop: "20px", borderTop: "1px solid rgba(51, 42, 81, 0.08)" }}>
                    <div><div style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 700, color: "var(--ghana-gold)" }}>500+</div><div style={{ fontSize: "11px", color: "var(--theme-text-muted-dark)" }}>Target</div></div>
                    <div><div style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 700, color: "var(--ghana-gold)" }}>12</div><div style={{ fontSize: "11px", color: "var(--theme-text-muted-dark)" }}>June 2026</div></div>
                    <div><div style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 700, color: "var(--ghana-gold)" }}>6</div><div style={{ fontSize: "11px", color: "var(--theme-text-muted-dark)" }}>Sectors</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM MODELS: What we're building - Optimized for single line */}
        <section className="section" style={{ background: "var(--theme-cream)", padding: "100px 0 140px" }}>
          <div className="container" style={{ textAlign: "left" }}>
            <div style={{ maxWidth: "600px", marginBottom: "64px" }}>
              <span className="section-tag" style={{ color: "var(--ghana-gold)" }}>Building for the Future</span>
              <h2 className="text-dark" style={{ textAlign: "left", marginBottom: "20px" }}>The ecosystem behind Oxzy</h2>
              <p className="text-muted-dark" style={{ fontSize: "17px", fontWeight: 300 }}>We are not just running events. We are building a sustainable platform that funds itself and serves young Ghanaians.</p>
            </div>

            <div className="models-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
              {/* Model 1: YES */}
              <div className="model-card featured" style={{ background: "var(--theme-bg)", borderRadius: "20px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px", color: "white", boxShadow: "0 15px 30px rgba(51, 42, 81, 0.12)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Target size={20} />
                  </div>
                  <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", background: "rgba(255,255,255,0.15)", borderRadius: "100px" }}>Live 2026</div>
                </div>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 700 }}>YES Summit</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", lineHeight: 1.6 }}>Flagship event funded by sponsorships and premium delegate passes.</p>
                <div style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--ghana-gold)" }}></div>
                  Revenue: Tiers · Sponsors
                </div>
              </div>

              {/* Model 2: E-Club */}
              <div className="model-card" style={{ background: "white", borderRadius: "20px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px", border: "1px solid rgba(51, 42, 81, 0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(51, 42, 81, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--theme-bg)" }}>
                    <Users size={20} />
                  </div>
                  <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", background: "rgba(51, 42, 81, 0.06)", color: "var(--theme-bg)", borderRadius: "100px" }}>Launch 2026</div>
                </div>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 700 }} className="text-dark">Entrepreneurs Club</h3>
                <p className="text-muted-dark" style={{ fontSize: "13px", lineHeight: 1.6 }}>Recurring membership giving access to masterclasses and peer groups.</p>
                <div style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1px solid rgba(51, 42, 81, 0.08)", display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", color: "var(--theme-text-muted-dark)" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--ghana-gold)" }}></div>
                  Revenue: Subscriptions
                </div>
              </div>

              {/* Model 3: Bootcamps */}
              <div className="model-card" style={{ background: "white", borderRadius: "20px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px", border: "1px solid rgba(51, 42, 81, 0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(51, 42, 81, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--theme-bg)" }}>
                    <GraduationCap size={20} />
                  </div>
                  <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", background: "var(--theme-bg)", color: "white", borderRadius: "100px" }}>Soon</div>
                </div>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 700 }} className="text-dark">Certification</h3>
                <p className="text-muted-dark" style={{ fontSize: "13px", lineHeight: 1.6 }}>Cohort-based 6–8 week programmes across six focus sectors.</p>
                <div style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1px solid rgba(51, 42, 81, 0.08)", display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", color: "var(--theme-text-muted-dark)" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--ghana-gold)" }}></div>
                  Revenue: Course Fees
                </div>
              </div>

              {/* Model 4: GYG */}
              <div className="model-card" style={{ background: "white", borderRadius: "20px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px", border: "1px solid rgba(51, 42, 81, 0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(51, 42, 81, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--theme-bg)" }}>
                    <Building2 size={20} />
                  </div>
                  <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", background: "var(--theme-bg)", color: "white", borderRadius: "100px" }}>Soon</div>
                </div>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: 700 }} className="text-dark">GYG Gov</h3>
                <p className="text-muted-dark" style={{ fontSize: "13px", lineHeight: 1.6 }}>Civic platform connecting leaders to governance and policy development.</p>
                <div style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1px solid rgba(51, 42, 81, 0.08)", display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", color: "var(--theme-text-muted-dark)" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--ghana-gold)" }}></div>
                  Revenue: Partnerships
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          .impact-grid {
            display: grid; 
            grid-template-columns: repeat(4, 1fr); 
            gap: 12px;
            margin-top: 40px; /* Bring down the cards */
          }
          .impact-card {
            background: rgba(255, 255, 255, 0.08); 
            padding: 24px 12px; 
            text-align: center; 
            border-radius: 12px; 
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            text-shadow: 0 2px 4px rgba(0,0,0,0.3); /* For readability on clear background */
          }
          .impact-num {
            font-family: var(--font-head); 
            font-size: 40px; 
            font-weight: 900; 
            margin-bottom: 4px; 
            letter-spacing: -1px;
            color: white;
          }
          .impact-desc {
            font-size: 11px; 
            color: rgba(255, 255, 255, 0.82); 
            line-height: 1.4;
            text-transform: uppercase;
            font-weight: 500;
            letter-spacing: 0.05em;
          }

          .program-card {
            transition: all 0.3s ease;
            cursor: default;
          }
          .program-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 30px 60px rgba(51, 42, 81, 0.12);
          }
          .model-card {
            transition: all 0.3s ease;
            cursor: default;
          }
          .model-card:hover {
            transform: translateY(-4px);
            border-color: var(--ghana-gold);
            box-shadow: 0 12px 32px rgba(51, 42, 81, 0.08);
          }
          @media (max-width: 1024px) {
            .models-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 768px) {
            .impact-hero {
                padding: 240px 10px 60px !important;
            }
            .impact-grid {
              grid-template-columns: repeat(4, 1fr) !important; /* Forces horizontal line */
              gap: 4px !important;
              margin-top: 20px !important;
            }
            .impact-card {
              padding: 12px 4px !important;
              border-radius: 6px !important;
            }
            .impact-num {
              font-size: 20px !important;
              margin-bottom: 2px !important;
            }
            .impact-desc {
              font-size: 7px !important;
              letter-spacing: 0 !important;
            }

            .programs-grid {
              grid-template-columns: 1fr !important;
            }
            .models-grid {
              grid-template-columns: 1fr !important;
              gap: 12px !important;
            }
            .model-card {
              padding: 20px !important;
            }
            .model-card p {
              font-size: 12px !important;
            }
            .section {
              padding: 60px 0 !important;
            }
            .section h2 {
              font-size: 34px !important;
            }
          }
        `}</style>
      </main>
    </>
  );
};

export default SocialProofPage;
