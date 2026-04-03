'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  Trophy,
  Hammer,
  ShieldCheck,
  ArrowRight,
  Check,
  BarChart3,
  Share2,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Lightbulb,
} from 'lucide-react';
import { useEffect } from 'react';

const POLLS = [
  {
    id: 1,
    question: 'Should Ghana implement a mandatory Entrepreneurship course in all secondary schools?',
    context:
      'This policy would integrate practical business training, financial literacy, and startup management into the national curriculum. Supporters argue it fosters a generation of job creators, while critics worry about curriculum overload.',
    stats: { for: 68, against: 32, total: 1420 },
    image:
      'https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723833/Whisk_czyzmgm0gtmyctzk1czmzjyty2mkrtl2igmh1yy_fxxdgt.png',
  },
  {
    id: 2,
    question: 'Reduce E-Levy and Digital taxes to 0% for registered youthled startups under 30?',
    context:
      'To boost the digital economy, this proposal seeks to exempt young founders from electronic transaction taxes and digital service fees for their first 3 years of operation to increase operational liquidity.',
    stats: { for: 82, against: 18, total: 945 },
    image:
      'https://res.cloudinary.com/dv1ignqxh/image/upload/v1774705866/Whisk_c2ac22b154dd98986b5420db3c9e45a1dr_fz230n.png',
  },
  {
    id: 3,
    question: 'Reserve at least 15% of Parliamentary seats for youth representatives under the age of 35?',
    context:
      'Legislating a youth quota ensures that the demographics most affected by long-term policy have a direct seat at the table in law-making, rather than just advisory roles.',
    stats: { for: 74, against: 26, total: 1102 },
    image:
      'https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723827/Whisk_kjmwajnyajmkhjyy0im1mmytymz4qtlidtol1sz_ylk2im.png',
  },
  {
    id: 4,
    question: 'Ban government imports of furniture and uniforms that can be produced by local youth hubs?',
    context:
      "This 'Buy Ghana' policy would mandate that state agencies source all basic textile and wood products from verified domestic youth enterprises to stimulate local industry growth.",
    stats: { for: 89, against: 11, total: 867 },
    image:
      'https://res.cloudinary.com/dv1ignqxh/image/upload/v1774724141/WhatsApp_Image_2026-03-28_at_6.51.09_PM_1_y8h4yy.jpg',
  },
  {
    id: 5,
    question: 'Implement a 5% Luxury Carbon Tax on high-emission vehicles to fund youth-led climate projects?',
    context:
      "Taxing high-capacity engines to create a dedicated 'Green Fund' that provides grants to young innovators building renewable energy, recycling, and climate adaptation solutions in Ghana.",
    stats: { for: 61, against: 39, total: 654 },
    image:
      'https://res.cloudinary.com/dv1ignqxh/image/upload/v1774723833/Whisk_czyzmgm0gtmyctzk1czmzjyty2mkrtl2igmh1yy_fxxdgt.png',
  },
];

const YouthGovPage = () => {
  const [showContexts, setShowContexts] = useState<Record<number, boolean>>({});
  const [votedPolls, setVotedPolls] = useState<Record<number, string>>({});

  useEffect(() => {
    const savedVotes = localStorage.getItem('gyg_voted_polls');
    if (savedVotes) {
      setVotedPolls(JSON.parse(savedVotes));
    }
  }, []);

  const handleVote = (pollId: number, option: string) => {
    if (votedPolls[pollId]) return;

    const newVotes = { ...votedPolls, [pollId]: option };
    setVotedPolls(newVotes);
    localStorage.setItem('gyg_voted_polls', JSON.stringify(newVotes));
  };

  const toggleContext = (pollId: number) => {
    setShowContexts((prev) => ({ ...prev, [pollId]: !prev[pollId] }));
  };

  const sharePoll = (pollQuestion: string) => {
    const shareData = {
      title: 'GYG Governance Poll',
      text: pollQuestion,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Poll link copied to clipboard!');
    }
  };

  return (
    <>
      <main className="theme-ghana">
        <section
          className="premium-hero"
          style={{
            paddingTop: 'clamp(160px, 25vh, 240px)',
            paddingBottom: 'clamp(80px, 12vh, 160px)',
            minHeight: 'auto',
            position: 'relative',
            overflow: 'hidden',
            background: '#000000',
            textAlign: 'left',
          }}
        >
          <div
            className="premium-hero__overlay"
            style={{
              background: 'radial-gradient(circle at 10% 50%, rgba(255,255,255,0.03), transparent 100%)',
              zIndex: 2,
            }}
          ></div>

          <div
            className="container"
            style={{ position: 'relative', zIndex: 3, maxWidth: '100%', paddingLeft: 'clamp(24px, 6vw, 8%)', margin: '0' }}
          >
            <div className="fade-up" style={{ maxWidth: '720px', textAlign: 'left', margin: '0' }}>
              <div
                className="hero-header-flex"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '4px',
                  marginBottom: 'clamp(20px, 5vh, 40px)',
                }}
              >
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h1
                    style={{
                      textAlign: 'left',
                      fontSize: 'clamp(42px, 7vw, 68px)',
                      lineHeight: 0.85,
                      letterSpacing: '-0.04em',
                      fontWeight: 800,
                      margin: 0,
                    }}
                  >
                    <span className="hero-title-main">Ghana Youth</span> <br />
                    <span className="hero-title-accent" style={{ color: 'var(--ghana-gold)', fontStyle: 'italic' }}>Government</span>
                  </h1>

                  {/* MOBILE BUTTON (Immediately under Title) */}
                  <div className="mobile-only" style={{ marginTop: '4px' }}>
                    <Link
                      href="#join"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: 'white',
                        background: 'var(--ghana-red)',
                        padding: '8px 20px',
                        borderRadius: '10px',
                        fontWeight: 800,
                        fontSize: '13px',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 20px rgba(214, 40, 40, 0.3)',
                        width: 'auto',
                      }}
                    >
                      Voice your opinion <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Desktop Hero Image (New Logo) */}
                <div
                  className="desktop-only fade-in-right"
                  style={{
                    position: 'absolute',
                    right: '-45%',
                    top: '20%',
                    transform: 'translateY(-50%)',
                    zIndex: 3,
                    width: '45%',
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dv1ignqxh/image/upload/v1775144347/GYG_log_vbrdut.png"
                    alt="GYG Visual"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '600px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))',
                    }}
                  />
                </div>
              </div>

              {/* DESKTOP BUTTONS */}
              <div className="hero-actions-container desktop-only" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'flex-start', marginBottom: '32px' }}>
                <Link
                  href="#join"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: 'white',
                    background: 'var(--ghana-red)',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '16px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(214, 40, 40, 0.3)',
                  }}
                >
                  Voice your opinion <ArrowRight size={20} />
                </Link>
                <Link
                  href="/summit"
                  className="btn btn-secondary btn-lg btn-hero-secondary"
                  style={{
                    border: '2px solid rgba(255,255,255,0.2)',
                    padding: '14px 32px',
                    borderRadius: '12px',
                  }}
                >
                  Explore YES 2026
                </Link>
              </div>

              {/* VISION CONTENT */}
              <div className="hero-vision-wrapper" style={{ margin: '0' }}>
                <p
                  className="hero-subtitle"
                  style={{
                    textAlign: 'left',
                    fontSize: 'clamp(18px, 1.8vw, 22px)',
                    color: 'rgba(255,255,255,0.9)',
                    maxWidth: '540px',
                    marginBottom: '0',
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  A visionary platform created to empower young people to actively contribute to national development and governance. Providing a space for leaders to engage, propose ideas, and shape the future of Ghana.
                </p>
              </div>
            </div>


          </div>
        </section>




        {/* ── Ghana Youth Government Feature Section (Prototype Design) ── */}
        <section className="section" style={{ background: 'var(--theme-cream)', position: 'relative', zIndex: 4, padding: '100px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="fade-up" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }}>
              <h2 className="text-dark" style={{
                textAlign: 'center',
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '24px',
                letterSpacing: '-0.03em'
              }}>
                Ghana Youth Government
              </h2>
              <p style={{
                color: 'var(--theme-text-muted-dark)',
                fontSize: '20px',
                maxWidth: '640px',
                margin: '0 auto 40px',
                lineHeight: 1.6
              }}>
                A visionary platform designed to empower young people to actively participate in leadership, governance, and national problem-solving. Launching at YES 2026.
              </p>

              <Link
                href="#join"
                className="btn"
                style={{
                  background: 'var(--ghana-red)',
                  color: 'white',
                  padding: '16px 40px',
                  borderRadius: '100px',
                  fontWeight: 600,
                  fontSize: '18px',
                  boxShadow: '0 10px 20px rgba(214, 40, 40, 0.2)'
                }}
              >
                Learn More
              </Link>
            </div>

            <div
              className="feature-cards-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
                marginTop: '60px'
              }}
            >
              {[
                {
                  id: '01',
                  title: 'Participate',
                  desc: 'Contribute ideas, policy discussions, and innovative solutions to issues affecting your community and the nation.'
                },
                {
                  id: '02',
                  title: 'Lead',
                  desc: 'Develop as a young leader prepared to engage constructively in civic life and public service.'
                },
                {
                  id: '03',
                  title: 'Build',
                  desc: "Collaborate with peers to shape the conversations and decisions that determine Ghana's future."
                }
              ].map((card, i) => (
                <div
                  key={i}
                  className="fade-up"
                  style={{
                    background: 'white',
                    padding: '60px 40px',
                    borderRadius: '32px',
                    textAlign: 'left',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                    border: '1px solid rgba(0,0,0,0.01)'
                  }}
                >
                  <span style={{
                    display: 'block',
                    fontSize: '64px',
                    fontWeight: 800,
                    color: 'rgba(0,0,0,0.08)',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-head)',
                    lineHeight: 1
                  }}>
                    {card.id}
                  </span>
                  <h3 style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: 'var(--theme-bg)',
                    marginBottom: '16px',
                    letterSpacing: '-0.02em'
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    fontSize: '17px',
                    color: 'var(--theme-text-muted-dark)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section"
          id="join"
          style={{ background: 'white', position: 'relative', zIndex: 4, paddingBottom: '120px' }}
        >
          <div className="container" style={{ textAlign: 'left', margin: '0 auto', maxWidth: '1400px' }}>
            <div style={{ textAlign: 'left', marginBottom: '48px' }} className="fade-up">
              <span className="section-tag" style={{ color: 'var(--ghana-red)' }}>
                Voice of the Youth
              </span>
              <h2 className="text-dark" style={{ textAlign: 'left' }}>
                Live Governance Polls
              </h2>
              <p className="text-muted-dark" style={{ fontSize: '18px' }}>
                Your opinion shapes the dialogue. Weigh in on current national policy discussions.
              </p>
            </div>

            <div
              className="polls-feed"
              style={{ display: 'grid', gap: '64px', width: '100%', maxWidth: '100%', margin: '0 auto' }}
            >
              {POLLS.map((poll) => {
                const hasVoted = !!votedPolls[poll.id];
                const showContext = !!showContexts[poll.id];

                return (
                  <div
                    key={poll.id}
                    className="poll-card fade-up"
                    style={{
                      background: 'white',
                      borderRadius: '32px',
                      overflow: 'hidden',
                      border: '1px solid var(--theme-border)',
                      boxShadow: '0 40px 80px rgba(0,0,0,0.06)',
                      display: 'grid',
                      gridTemplateColumns: '1fr 2.2fr',
                    }}
                  >
                    {/* Poll Image Container */}
                    <div
                      className="poll-image-container"
                      style={{ position: 'relative', height: '100%', minHeight: 'clamp(200px, 35vh, 500px)' }}
                    >
                      <img
                        src={poll.image}
                        alt="Poll Visual"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />

                      {/* Refined Participant Card */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '20px',
                          left: '20px',
                          padding: '10px 14px',
                          background: 'rgba(255,255,255,0.92)',
                          backdropFilter: 'blur(12px)',
                          borderRadius: '14px',
                          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Users size={12} style={{ color: 'var(--ghana-red)' }} />
                          <span style={{ fontWeight: 800, color: 'var(--theme-bg)', fontSize: '13px' }}>
                            {hasVoted ? poll.stats.total + 1 : poll.stats.total}
                          </span>
                          <span style={{ color: 'var(--theme-text-muted-dark)', fontSize: '11px', fontWeight: 600 }}>
                            Youths
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: 'clamp(20px, 4vw, 48px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '20px',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div className="live-indicator"></div>
                            <span
                              style={{
                                fontSize: '10px',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--ghana-red)',
                              }}
                            >
                              Governance Poll
                            </span>
                          </div>
                          <button onClick={() => sharePoll(poll.question)} className="btn-icon">
                            <Share2 size={16} />
                          </button>
                        </div>

                        <h3
                          style={{
                            fontSize: 'clamp(20px, 2.2vw, 24px)',
                            color: 'var(--theme-bg)',
                            fontWeight: 800,
                            lineHeight: 1.25,
                            marginBottom: '16px',
                          }}
                        >
                          {poll.question}
                        </h3>

                        {/* READ MORE CONTEXT */}
                        <div style={{ marginBottom: '24px' }}>
                          <button
                            onClick={() => toggleContext(poll.id)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'var(--ghana-gold)',
                              fontWeight: 700,
                              fontSize: '13px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              cursor: 'pointer',
                              padding: '0',
                            }}
                          >
                            {showContext ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            {showContext ? 'Hide policy details' : 'Policy Details'}
                          </button>

                          {showContext && (
                            <div
                              className="fade-in"
                              style={{
                                marginTop: '12px',
                                padding: '16px',
                                background: 'var(--theme-cream)',
                                borderRadius: '12px',
                                borderLeft: '3px solid var(--ghana-gold)',
                              }}
                            >
                              <p
                                style={{
                                  fontSize: '13px',
                                  color: 'var(--theme-text-muted-dark)',
                                  lineHeight: 1.5,
                                  margin: 0,
                                }}
                              >
                                {poll.context}
                              </p>
                            </div>
                          )}
                        </div>

                        {!hasVoted ? (
                          <div className="poll-buttons" style={{ display: 'grid', gap: '10px' }}>
                            <button
                              onClick={() => handleVote(poll.id, 'for')}
                              className="btn-premium-vote btn-for"
                              style={{ padding: '16px', fontSize: '14px' }}
                            >
                              <Check size={16} /> Support
                            </button>
                            <button
                              onClick={() => handleVote(poll.id, 'against')}
                              className="btn-premium-vote btn-against"
                              style={{ padding: '16px', fontSize: '14px' }}
                            >
                              Oppose
                            </button>
                          </div>
                        ) : (
                          <div className="poll-stage-results">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                              <BarChart3 size={16} style={{ color: 'var(--ghana-gold)' }} />
                              <span
                                style={{
                                  fontSize: '10px',
                                  fontWeight: 800,
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.1em',
                                  color: 'var(--ghana-gold)',
                                }}
                              >
                                Poll Results
                              </span>
                            </div>

                            <div style={{ marginBottom: '16px' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                <span style={{ fontWeight: 700, fontSize: '13px', color: 'var(--theme-bg)' }}>
                                  Support
                                </span>
                                <span style={{ fontWeight: 800, color: 'var(--ghana-gold)' }}>
                                  {poll.stats.for + (votedPolls[poll.id] === 'for' ? 1 : 0)}%
                                </span>
                              </div>
                              <div
                                style={{
                                  height: '8px',
                                  background: '#f1f1f5',
                                  borderRadius: '10px',
                                  overflow: 'hidden',
                                }}
                              >
                                <div
                                  className="result-bar"
                                  style={{ width: `${poll.stats.for}%`, height: '100%', background: 'var(--ghana-gold)' }}
                                ></div>
                              </div>
                            </div>

                            <div style={{ marginBottom: '0' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                <span style={{ fontWeight: 700, fontSize: '13px', color: 'var(--theme-bg)' }}>
                                  Oppose
                                </span>
                                <span style={{ fontWeight: 800, color: 'var(--ghana-red)' }}>
                                  {poll.stats.against + (votedPolls[poll.id] === 'against' ? 1 : 0)}%
                                </span>
                              </div>
                              <div
                                style={{
                                  height: '8px',
                                  background: '#f1f1f5',
                                  borderRadius: '10px',
                                  overflow: 'hidden',
                                }}
                              >
                                <div
                                  className="result-bar"
                                  style={{
                                    width: `${poll.stats.against}%`,
                                    height: '100%',
                                    background: 'var(--ghana-red)',
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-vision-wrapper {
            background: var(--theme-cream) !important;
            color: var(--theme-bg) !important;
            padding: 12px 5% 8px !important;
            margin-left: -5.5% !important;
            width: 111% !important;
            box-shadow: 0 -10px 30px rgba(0,0,0,0.05);
          }
          .hero-actions-container {
            margin-bottom: 24px !important;
            padding-right: 5% !important;
          }
          .mobile-full-width {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-vision-wrapper div[style*="flex-wrap"] {
            display: none !important;
          }
          .hero-subtitle {
            color: var(--theme-text-muted-dark) !important;
            font-weight: 500 !important;
            margin-bottom: 4px !important;
            font-size: 15px !important;
            line-height: 1.5 !important;
          }
          .btn-hero-secondary {
            border-color: var(--theme-bg) !important;
            color: var(--theme-bg) !important;
            font-weight: 700 !important;
          }
          .premium-hero {
            padding-top: 110px !important;
            padding-bottom: 40px !important;
            min-height: auto !important;
          }
          .hero-title-main, .hero-title-accent {
            display: inline !important;
          }
          .premium-hero h1 {
            font-size: clamp(42px, 7vw, 68px) !important;
            line-height: 1.1 !important;
            margin-bottom: 0px !important;
            text-align: left !important;
          }
          @media (max-width: 768px) {
            .premium-hero h1 {
              font-size: 38px !important;
            }
          }
          .hero-header-flex {
            margin-bottom: 24px !important;
          }
          .mobile-hero-img-box {
            margin-top: 10px !important;
          }
          .hero-actions-container {
            justify-content: center !important;
            margin-bottom: 32px !important;
            padding-right: 0 !important;
          }
          .mobile-btn-resize {
            width: 100% !important;
            justify-content: center !important;
            padding: 10px 24px !important;
            font-size: 14px !important;
            border-radius: 12px !important;
          }
          .container {
            padding: 0 5% !important;
          }
          .mobile-only img {
            width: 140px !important;
            margin-left: -5px !important;
          }
          /* ... rest of your mobile styles ... */
          .about-split {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 8px !important;
          }
          .about-split .focus-card {
            padding: 12px 8px !important;
            text-align: center !important;
          }
          .about-split .focus-icon-wrap {
            width: 32px !important;
            height: 32px !important;
            margin: 0 auto 8px !important;
            padding: 6px !important;
          }
          .about-split .focus-title {
            font-size: 11px !important;
            line-height: 1.2 !important;
            margin-bottom: 0 !important;
          }
          .about-split .focus-desc {
            display: none !important;
          }
        }

        .btn-ghana-shine {
          background: linear-gradient(90deg, #d62828 0%, #c8960c 50%, #0d5c33 100%);
          background-size: 200% auto;
          animation: shine 3s linear infinite;
          position: relative;
          overflow: hidden;
          border: none;
          box-shadow: 0 4px 15px rgba(214, 40, 40, 0.3);
        }

        .btn-ghana-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          animation: shimmer 2.5s infinite;
        }

        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) rotate(30deg);
          }
          100% {
            transform: translateX(100%) rotate(30deg);
          }
        }

        .live-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--ghana-red);
          animation: pulse-live 1.5s infinite;
        }

        @keyframes pulse-live {
          0% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(214, 40, 40, 0.4);
          }
          70% {
            transform: scale(1.5);
            opacity: 0;
            box-shadow: 0 0 0 10px rgba(214, 40, 40, 0);
          }
          100% {
            transform: scale(1);
            opacity: 0;
            box-shadow: 0 0 0 0 rgba(214, 40, 40, 0);
          }
        }

        .result-bar {
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideIn 1s ease-out;
        }

        @keyframes slideIn {
          from {
            width: 0;
          }
        }

        .btn-premium-vote {
          width: 100%;
          padding: 20px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
        }

        .btn-for {
          background: var(--theme-bg);
          color: white;
          box-shadow: 0 10px 25px rgba(26, 21, 46, 0.2);
        }

        .btn-for:hover {
          transform: translateY(-3px);
          background: #2a2347;
          box-shadow: 0 15px 35px rgba(26, 21, 46, 0.3);
        }

        .btn-against {
          background: white;
          color: var(--theme-bg);
          border: 1px solid #eee;
        }

        .btn-against:hover {
          background: #f8f8fa;
          transform: translateY(-3px);
          border-color: #ddd;
        }

        .btn-icon {
          background: none;
          border: none;
          color: var(--theme-text-muted-dark);
          cursor: pointer;
          padding: 5px;
          transition: color 0.2s ease;
        }
        .btn-icon:hover {
          color: var(--theme-bg);
        }

        .nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: 1px solid #e0e0e8;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--theme-bg);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nav-btn:hover {
          background: #f8f8fa;
          border-color: var(--ghana-gold);
          color: var(--ghana-gold);
        }

        .fade-in {
          animation: fadeIn 0.4s ease-out;
        }

        .fade-in-right {
          animation: fadeInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slow-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .poll-card {
            grid-template-columns: 1fr !important;
            border-radius: 20px !important;
            max-width: 100% !important;
          }
          .poll-image-container {
            min-height: 180px !important;
          }
          .poll-buttons {
            grid-template-columns: 1fr !important;
          }
          .polls-feed {
            gap: 24px !important;
          }
        }

        .btn-ghana-shine:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(214, 40, 40, 0.4);
        }
      `}</style>
    </>
  );
};

export default YouthGovPage;
