'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, BookOpen, Rocket, CheckCircle2, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

const ClubPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  interface ClubFormData {
    fullName: string;
    email: string;
    phone: string;
    gender: string;
    ageRange: string;
    city: string;
    country: string;
    role: string;
    institution: string;
    interests: string[];
    runBusiness: string;
    businessName: string;
    journeyStage: string;
    problemToSolve: string;
    communityGoals: string[];
    oxzyInitiatives: string[];
    eventPart: string;
    starAmbassador: string;
    collaboration: string;
    referralSource: string;
    referralCode: string;
    whatsappCommunity: string;
    howHeard: string;
  }

  const [formData, setFormData] = useState<ClubFormData>({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    ageRange: '',
    city: '',
    country: 'Ghana',
    role: '',
    institution: '',
    interests: [],
    runBusiness: '',
    businessName: '',
    journeyStage: '',
    problemToSolve: '',
    communityGoals: [],
    oxzyInitiatives: [],
    eventPart: '',
    starAmbassador: '',
    collaboration: '',
    referralSource: '',
    referralCode: '',
    whatsappCommunity: '',
    howHeard: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const handleCheckboxChange = (field: keyof ClubFormData, value: string) => {
    setFormData((prev) => {
      const currentValues = (prev[field] as string[]) || [];
      if (currentValues.includes(value)) {
        return { ...prev, [field]: currentValues.filter((v: string) => v !== value) };
      }
      return { ...prev, [field]: [...currentValues, value] };
    });
  };

  const heroImage =
    'https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723827/Whisk_kjmwajnyajmkhjyy0im1mmytymz4qtlidtol1sz_ylk2im.png';

  return (
    <>
      <main>
        <section
          className="premium-hero"
          style={{
            paddingTop: 'clamp(100px, 15vh, 160px)',
            paddingBottom: '100px',
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'left',
          }}
        >
          <div
            className="premium-hero__overlay"
            style={{ opacity: 0.98, background: 'linear-gradient(135deg, var(--theme-bg), #0a0a0a)' }}
          ></div>
          <div
            className="container hero-grid-2"
            style={{
              position: 'relative',
              zIndex: 3,
              gridTemplateColumns: '1.2fr 1fr',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            <div className="fade-up" style={{ textAlign: 'left' }}>
              <h1
                style={{
                  textAlign: 'left',
                  fontSize: 'clamp(48px, 8vw, 84px)',
                  lineHeight: 1.0,
                  marginBottom: '32px',
                  fontWeight: 800,
                  color: 'white',
                }}
              >
                Your community
                <br />
                <span style={{ color: 'var(--ghana-gold)', fontStyle: 'italic' }}>for the</span> long run.
              </h1>

              <div
                className="mobile-only"
                style={{
                  marginBottom: '32px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}
              >
                <img
                  src={heroImage}
                  alt="Oxzy Community"
                  style={{ width: '100%', height: 'auto', display: 'block', filter: 'brightness(0.9)' }}
                />
              </div>

              <p
                style={{
                  textAlign: 'left',
                  fontSize: '20px',
                  color: 'rgba(255,255,255,0.85)',
                  maxWidth: '580px',
                  marginBottom: '48px',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                The summit opens the door. The Entrepreneurs Club keeps it open — with exclusive masterclasses, peer
                groups, a private network, and real opportunities to grow your business.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <Link
                  href="#join"
                  className="btn btn-gold btn-lg"
                  style={{ background: 'var(--ghana-gold)', color: 'var(--theme-bg)', fontWeight: 700 }}
                >
                  Apply for Membership <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div
              className="desktop-only fade-up"
              style={{
                height: '540px',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
              }}
            >
              <img
                src={heroImage}
                alt="Oxzy Community"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }}
              />
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'white' }}>
          <div className="container" style={{ textAlign: 'left' }}>
            <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 0 64px' }} className="fade-up">
              <span className="section-tag" style={{ color: 'var(--ghana-green)' }}>
                Elite Member Benefits
              </span>
              <h2 className="text-dark" style={{ textAlign: 'left' }}>
                Built for builders, by builders
              </h2>
              <p className="text-muted-dark" style={{ fontSize: '18px', lineHeight: 1.6 }}>
                Oxzy provides the strategic environment where young Ghanaians transition from "having an idea" to
                actually "running a profitable business."
              </p>
            </div>

            {/* Optimized Benefits Grid - Horizontal on Mobile */}
            <div
              className="benefits-grid-mobile-row"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
              }}
            >
              <div className="focus-card fade-up" style={{ padding: '20px' }}>
                <div
                  className="focus-icon-wrap"
                  style={{
                    width: '40px',
                    height: '40px',
                    color: 'var(--ghana-green)',
                    background: 'rgba(13,92,51,0.06)',
                  }}
                >
                  <Users size={20} />
                </div>
                <h3 className="focus-title" style={{ fontSize: '16px', marginBottom: '8px' }}>
                  Private Network
                </h3>
                <p className="focus-desc" style={{ fontSize: '13px', lineHeight: 1.4 }}>
                  Direct access to founders and mentors who have successfully built ventures in Ghana.
                </p>
              </div>
              <div className="focus-card fade-up" style={{ padding: '20px' }}>
                <div
                  className="focus-icon-wrap"
                  style={{
                    width: '40px',
                    height: '40px',
                    color: 'var(--ghana-gold)',
                    background: 'rgba(200,150,12,0.06)',
                  }}
                >
                  <BookOpen size={20} />
                </div>
                <h3 className="focus-title" style={{ fontSize: '16px', marginBottom: '8px' }}>
                  Masterclasses
                </h3>
                <p className="focus-desc" style={{ fontSize: '13px', lineHeight: 1.4 }}>
                  Monthly deep-dives into scaling sales, efficient operations, and capital raising strategies.
                </p>
              </div>
              <div className="focus-card fade-up" style={{ padding: '20px' }}>
                <div
                  className="focus-icon-wrap"
                  style={{
                    width: '40px',
                    height: '40px',
                    color: 'var(--ghana-red)',
                    background: 'rgba(214,40,40,0.06)',
                  }}
                >
                  <Rocket size={20} />
                </div>
                <h3 className="focus-title" style={{ fontSize: '16px', marginBottom: '8px' }}>
                  Peer Strategy Groups
                </h3>
                <p className="focus-desc" style={{ fontSize: '13px', lineHeight: 1.4 }}>
                  Weekly accountability and growth sessions with builders at your exact stage of development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="join" style={{ background: 'var(--theme-cream)' }}>
          <div className="container container--sm" style={{ margin: '0', textAlign: 'left' }}>
            <div style={{ textAlign: 'left', marginBottom: '48px' }} className="fade-up">
              <span className="section-tag" style={{ color: 'var(--ghana-red)' }}>
                Join the Movement
              </span>
              <h2 className="text-dark" style={{ textAlign: 'left' }}>
                Become a Core Member
              </h2>
              <p className="text-muted-dark" style={{ fontSize: '18px' }}>
                Submit your application below to start your growth journey within our ecosystem.
              </p>
            </div>

            {isSubmitted ? (
              <div
                className="success-card fade-up"
                style={{
                  background: 'white',
                  padding: '64px 48px',
                  borderRadius: '32px',
                  textAlign: 'center',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                  border: '1px solid var(--theme-border)',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(13,92,51,0.1)',
                    color: 'var(--ghana-green)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '32px',
                  }}
                >
                  <CheckCircle2 size={40} />
                </div>
                <h1
                  style={{
                    color: 'var(--theme-bg)',
                    fontSize: '36px',
                    fontWeight: 800,
                    marginBottom: '16px',
                    lineHeight: 1.1,
                  }}
                >
                  Welcome to the Club!
                </h1>
                <p
                  style={{
                    color: 'var(--theme-text-muted-dark)',
                    fontSize: '18px',
                    lineHeight: 1.6,
                    marginBottom: '40px',
                  }}
                >
                  Thank you for joining the Oxzy Young Entrepreneurs’ Club. You are now part of a community working
                  together to build ideas and the future.
                </p>

                <a
                  href="https://chat.whatsapp.com/example-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    background: 'var(--theme-bg)',
                    color: 'white',
                    padding: '20px',
                    fontWeight: 700,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    fontSize: '18px',
                  }}
                >
                  <MessageSquare size={22} /> Join the WhatsApp Community
                </a>
              </div>
            ) : (
              <div
                className="glass-form fade-up"
                style={{
                  background: 'white',
                  borderRadius: '32px',
                  border: '1px solid var(--theme-border)',
                  padding: 'clamp(24px, 5vw, 64px)',
                }}
              >
                <form onSubmit={handleSubmit}>
                  {/* SECTION 1: PERSONAL INFORMATION */}
                  <div className="section-head">
                    <span className="section-num">01</span>
                    <h3>Personal Information</h3>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number (WhatsApp preferred)</label>
                      <input type="tel" placeholder="+233 XX XXX XXXX" required />
                    </div>
                    <div className="form-group">
                      <label>Gender</label>
                      <select required>
                        <option value="" disabled selected>
                          Select Gender
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Age Range</label>
                      <select required>
                        <option value="" disabled selected>
                          Select Age Range
                        </option>
                        <option>Under 18</option>
                        <option>18–21</option>
                        <option>22–25</option>
                        <option>26–30</option>
                        <option>31+</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>City / Region</label>
                      <input type="text" placeholder="Accra, Greater Accra" required />
                    </div>
                  </div>

                  <hr className="form-divider" />

                  {/* SECTION 2: EDUCATION & BACKGROUND */}
                  <div className="section-head">
                    <span className="section-num">02</span>
                    <h3>Education & Background</h3>
                  </div>

                  <div className="form-group">
                    <label>What best describes you?</label>
                    <select required>
                      <option value="" disabled selected>
                        Select Role
                      </option>
                      <option>Student</option>
                      <option>Entrepreneur / Startup Founder</option>
                      <option>Young Professional</option>
                      <option>Freelancer / Creator</option>
                      <option>Job Seeker</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>If you are a student, what school, university, or institution do you attend?</label>
                    <input type="text" placeholder="e.g. University of Ghana" />
                  </div>

                  <div className="form-group">
                    <label>What are you currently studying or interested in?</label>
                    <textarea rows={2} placeholder="Share your academic or professional focus"></textarea>
                  </div>

                  <hr className="form-divider" />

                  {/* SECTION 3: ENTREPRENEURIAL INTERESTS */}
                  <div className="section-head">
                    <span className="section-num">03</span>
                    <h3>Entrepreneurial Interests</h3>
                  </div>

                  <div className="form-group">
                    <label>Which areas of entrepreneurship interest you the most? (Select up to 3)</label>
                    <div className="checkbox-grid">
                      {[
                        'Technology & AI',
                        'Agriculture & Agribusiness',
                        'Real Estate & Property',
                        'Media & Creator Economy',
                        'Finance & Business',
                        'Social Impact / Nonprofits',
                        'Transport & Mobility',
                        'Other',
                      ].map((area) => (
                        <label key={area} className="custom-checkbox">
                          <input type="checkbox" onChange={() => handleCheckboxChange('interests', area)} />
                          <span>{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Do you currently run a business or startup?</label>
                    <select required>
                      <option value="" disabled selected>
                        Choose Status
                      </option>
                      <option>Yes</option>
                      <option>No, but I plan to start one</option>
                      <option>Not yet sure</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>If yes, what is the name of your business/startup? (Optional)</label>
                    <input type="text" placeholder="Company Name" />
                  </div>

                  <div className="form-group">
                    <label>What stage are you at in your entrepreneurial journey?</label>
                    <select required>
                      <option value="" disabled selected>
                        Select Stage
                      </option>
                      <option>I am exploring ideas</option>
                      <option>I am developing an idea</option>
                      <option>I have started a business</option>
                      <option>I want to learn entrepreneurship</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>What is one problem you would like to solve through entrepreneurship?</label>
                    <textarea rows={3} placeholder="Share your vision..."></textarea>
                  </div>

                  <hr className="form-divider" />

                  {/* SECTION 4: WHAT MEMBERS WANT */}
                  <div className="section-head">
                    <span className="section-num">04</span>
                    <h3>Member Goals & Initiatives</h3>
                  </div>

                  <div className="form-group">
                    <label>What do you hope to gain from the Young Entrepreneurs’ Club?</label>
                    <div className="checkbox-grid">
                      {[
                        'Entrepreneurship training',
                        'Mentorship',
                        'Networking',
                        'Startup support',
                        'Business opportunities',
                        'Leadership development',
                      ].map((goal) => (
                        <label key={goal} className="custom-checkbox">
                          <input type="checkbox" />
                          <span>{goal}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Which Oxzy initiatives are you most interested in?</label>
                    <div className="checkbox-grid">
                      {[
                        'Young Entrepreneurs’ Summit',
                        'Ghana Youth Government',
                        'World Young Leaders Forum',
                        'Young Executives Club',
                        'Innovation projects (Cylax, Velo, etc.)',
                      ].map((init) => (
                        <label key={init} className="custom-checkbox">
                          <input type="checkbox" />
                          <span>{init}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <hr className="form-divider" />

                  {/* SECTION 5: COMMUNITY & ENGAGEMENT */}
                  <div className="section-head">
                    <span className="section-num">05</span>
                    <h3>Community & Engagement</h3>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>Participate in Oxzy events?</label>
                      <select required>
                        <option>Yes</option>
                        <option>Maybe</option>
                        <option>Not now</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Become a Star Ambassador?</label>
                      <select required>
                        <option>Yes</option>
                        <option>Maybe</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Collaborate with others?</label>
                      <select required>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>

                  <hr className="form-divider" />

                  {/* SECTION 6: REFERRAL TRACKING */}
                  <div className="section-head">
                    <span className="section-num">06</span>
                    <h3>Referral Tracking</h3>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>Invited by someone?</label>
                      <select required>
                        <option>No</option>
                        <option>Yes</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Enter Referral Code (Example: AMA01)</label>
                      <input type="text" placeholder="AMAXX" />
                    </div>
                  </div>

                  <hr className="form-divider" />

                  {/* SECTION 7: FINAL DETAILS */}
                  <div className="section-head">
                    <span className="section-num">07</span>
                    <h3>Final Details</h3>
                  </div>

                  <div className="form-group">
                    <label>How did you hear about us?</label>
                    <select required>
                      <option value="" disabled selected>
                        Select Source
                      </option>
                      <option>Instagram</option>
                      <option>LinkedIn</option>
                      <option>WhatsApp</option>
                      <option>Friend / Referral</option>
                      <option>School / University</option>
                      <option>Oxzy Event</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Join the WhatsApp community?</label>
                    <select required>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>

                  <div className="submit-container" style={{ marginTop: '64px' }}>
                    <button
                      type="submit"
                      className="btn btn-gold"
                      style={{
                        width: '100%',
                        background: 'var(--ghana-gold)',
                        color: 'var(--theme-bg)',
                        fontWeight: 800,
                        padding: '24px',
                        fontSize: '18px',
                        borderRadius: '16px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing Membership...' : "Join the Entrepreneurs' Club"}
                    </button>
                    <p
                      style={{
                        textAlign: 'center',
                        color: 'var(--theme-text-muted-dark)',
                        opacity: 0.6,
                        fontSize: '12px',
                        marginTop: '20px',
                      }}
                    >
                      By joining, you agree to our community guidelines and membership terms.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>

      <style jsx>{`
        @media (max-width: 768px) {
          .benefits-grid-mobile-row {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 8px !important;
          }
          .benefits-grid-mobile-row > div {
            padding: 12px 8px !important;
            text-align: center !important;
          }
          .benefits-grid-mobile-row .focus-icon-wrap {
            width: 32px !important;
            height: 32px !important;
            margin: 0 auto 8px !important;
          }
          .benefits-grid-mobile-row .focus-title {
            font-size: 11px !important;
            line-height: 1.2 !important;
            margin-bottom: 0 !important;
          }
          .benefits-grid-mobile-row .focus-desc {
            display: none !important;
          }

          .form-grid,
          .checkbox-grid {
            grid-template-columns: 1fr !important;
          }
          .glass-form {
            padding: 32px 20px !important;
            border-radius: 24px !important;
          }
          .section-head h3 {
            font-size: 20px !important;
          }
        }

        .section-head {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .section-num {
          font-family: var(--font-head);
          font-size: 14px;
          font-weight: 800;
          color: var(--ghana-gold);
          background: rgba(200, 150, 12, 0.1);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(200, 150, 12, 0.2);
        }
        .section-head h3 {
          font-size: 24px;
          font-weight: 700;
          margin: 0;
          color: var(--theme-bg);
        }
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 24px;
        }
        .form-group {
          margin-bottom: 24px;
        }
        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--theme-text-muted-dark);
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          background: #f8f8fa;
          border: 1px solid #e0e0e8;
          border-radius: 12px;
          padding: 14px 18px;
          color: var(--theme-bg);
          font-size: 15px;
          transition: all 0.3s ease;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--ghana-gold);
          background: white;
          box-shadow: 0 0 0 4px rgba(200, 150, 12, 0.1);
        }
        .form-divider {
          border: none;
          border-top: 1px solid #eee;
          margin: 48px 0;
        }
        .checkbox-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 8px;
        }
        .custom-checkbox {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f8f8fa;
          padding: 12px 16px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }
        .custom-checkbox:hover {
          background: #f0f0f5;
        }
        .custom-checkbox input {
          width: auto !important;
          margin: 0 !important;
          accent-color: var(--ghana-gold);
        }
        .custom-checkbox span {
          font-size: 14px;
          color: var(--theme-bg);
        }
      `}</style>
    </>
  );
};

export default ClubPage;
