/* eslint-disable react/no-unescaped-entities */
import LeadForm from "@/components/LeadForm";
import SchoolsCTA from "@/components/SchoolsCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <>
      <ScrollReveal />

      {/* ============= NAV ============= */}
      <nav className="nav">
        <div className="wrap nav-inner">
          <a href="#" className="logo">Mentoria</a>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#worlds">The village</a>
            <a href="#parents">For parents</a>
            <a href="#pricing">Pricing</a>
            <a href="#hero-form" className="nav-cta">Start free week</a>
          </div>
        </div>
      </nav>

      {/* ============= HERO ============= */}
      <header className="hero" id="hero-form">
        <div className="wrap hero-grid">
          <div className="reveal">
            <div className="eyebrow">
              <span className="dot">✦</span>
              For curious 8–11 year-olds · Now open
            </div>
            <h1 className="display">
              Where kids meet<br />
              <em>themselves.</em>
            </h1>
            <p className="hero-lede">
              An AI mentor walks beside your child through six themed worlds — turning daily curiosity into real-world action, one small quest at a time. Made for them. Built around you.
            </p>

            <LeadForm touchpoint="hero" />
            <div className="lead-form-note">
              <span className="check">✓</span> No card. Parental consent on first visit. Cancel anytime.
            </div>

            <div className="hero-meta">
              <div className="stars">★★★★★</div>
              <div className="stars-note">
                <strong>4.9 from 2,300+ parents.</strong><br />
                "Honestly, it became part of his evenings."
              </div>
            </div>
          </div>

          <div className="hero-art reveal">
            {/* Kid's view */}
            <div className="pcard kid">
              <div className="kc-eye">▮ PLAZA · LEVEL 9</div>
              <div className="kc-title">"Why did that make me happy?"</div>
              <div className="kc-mentor-row">
                <div className="kc-ava">S</div>
                SAGE · your mentor
              </div>
              <div className="kc-bubble">
                Yesterday you noticed Mrs. Tan thanked you twice. Most kids miss that. Let's talk about why your brain caught it.
              </div>
              <div className="kc-progress">
                <span>5/8</span>
                <div className="bar"><span></span></div>
                <span>XP +120</span>
              </div>
            </div>

            {/* Parent's view */}
            <div className="pcard parent">
              <div className="pp-eye">▮ FOR YOU · WEEKLY DIGEST</div>
              <div className="pp-title">Alex's week in the village</div>
              <ul className="pp-list">
                <li className="row">
                  <div className="ico">✦</div>
                  <div className="txt"><span className="b">3 levels</span> completed in the Plaza</div>
                </li>
                <li className="row">
                  <div className="ico">♡</div>
                  <div className="txt">Tried <span className="b">"compliment three people"</span> twice this week</div>
                </li>
                <li className="row">
                  <div className="ico">✎</div>
                  <div className="txt">Wrote: <span className="b">"I felt strong helping"</span></div>
                </li>
              </ul>
            </div>

            <div className="sticker">
              <svg viewBox="0 0 120 120" aria-hidden="true">
                <path d="M60 5 L72 22 L92 16 L92 37 L112 43 L100 60 L112 77 L92 84 L92 104 L72 98 L60 115 L48 98 L28 104 L28 84 L8 77 L20 60 L8 43 L28 37 L28 16 L48 22 Z" />
              </svg>
              <div className="sticker-text">
                <span className="big">FREE</span>
                <span className="small">first week</span>
              </div>
            </div>
            <div className="doodle-arrow">try a level →</div>
          </div>
        </div>
      </header>

      {/* ============= TRUST STRIP ============= */}
      <div className="trust">
        <div className="marquee">
          <span>Featured in Parents.com</span>
          <span>Common Sense Selection 2026</span>
          <span>EdTech Breakthrough Award</span>
          <span>Mom's Choice Gold</span>
          <span>The Atlantic · Family Picks</span>
          <span>Featured in Parents.com</span>
          <span>Common Sense Selection 2026</span>
          <span>EdTech Breakthrough Award</span>
          <span>Mom's Choice Gold</span>
          <span>The Atlantic · Family Picks</span>
        </div>
      </div>

      {/* ============= BIG IDEA ============= */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eye">the big idea</div>
            <h2>Most kids' apps <em>entertain</em>.<br />Ours pays <em>attention</em>.</h2>
            <p className="section-sub">
              Mentoria isn't a curriculum. It's a companion. Three things make it work — and none of them is a leaderboard.
            </p>
          </div>

          <div className="ideas">
            <div className="idea reveal">
              <div className="num">1</div>
              <h3>A mentor who actually <br />remembers them</h3>
              <p>The AI picks up where last week left off — your child's interests, their MBTI flavor, the joke they made, the thing that surprised them. No two kids' Mentoria is the same.</p>
            </div>
            <div className="idea reveal">
              <div className="num">2</div>
              <h3>Six worlds, not <br />one feed</h3>
              <p>Self-discovery. Environment. Volunteering. Sports. Entrepreneurship. People. Each world has its own mentor voice and its own way of asking better questions.</p>
            </div>
            <div className="idea reveal">
              <div className="num">3</div>
              <h3>Quests that leave the <br />screen</h3>
              <p>Every level ends with something to try off-app — a small, real thing in the real world. They come back to reflect. The screen becomes a lens, not a destination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= HOW IT WORKS ============= */}
      <section className="section tinted" id="how">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eye">how a day looks</div>
            <h2>A short visit. A long <em>echo.</em></h2>
            <p className="section-sub">
              Sessions are designed to be 12–18 minutes. Short enough that it doesn't take over the evening. Long enough to mean something.
            </p>
          </div>

          <div className="storyboard">
            {/* Scene 1 */}
            <div className="scene">
              <div>
                <div className="scene-num">i</div>
                <h3>Their mentor <em>greets them.</em></h3>
                <p>Sage remembers what Alex tried yesterday and what he wondered about. The opening line isn't "Welcome back" — it's specific. Specific is what makes them stay.</p>
              </div>
              <div className="scene-mock">
                <div className="badge">opening</div>
                <div className="mock-eye">▮ MENTOR · SAGE</div>
                <div className="mock-body">"Yesterday you said helping Mrs. Tan felt strong. I've been thinking about that word — strong. Want to look at why?"</div>
                <div className="mock-foot"><span>← from last session</span><span>00:14</span></div>
              </div>
            </div>

            {/* Scene 2 */}
            <div className="scene flip">
              <div>
                <div className="scene-num">ii</div>
                <h3>They explore <em>a small question.</em></h3>
                <p>One concept per level. The lesson is shaped by their CEFR English level and personality so the questions feel exactly hard enough — never patronizing, never bewildering.</p>
              </div>
              <div className="scene-mock">
                <div className="badge">lesson</div>
                <div className="mock-eye">▮ PLAZA · L9 · WHAT IS STRENGTH?</div>
                <div className="mock-body">"Some strong things you can see. Some you can't. Can you think of one strong thing nobody noticed today?"</div>
                <div className="mock-foot"><span>3 prompts · open-ended</span><span>06:22</span></div>
              </div>
            </div>

            {/* Scene 3 */}
            <div className="scene">
              <div>
                <div className="scene-num">iii</div>
                <h3>A challenge <em>tests it.</em></h3>
                <p>
                  Three phases: <span style={{ color: "var(--accent)", fontWeight: 600 }}>open</span> (try freely), <span style={{ color: "var(--primary)", fontWeight: 600 }}>action</span> (apply the idea), <span style={{ color: "#9333EA", fontWeight: 600 }}>extra</span> (push further). Two feedback paths — positive and growth — so no one feels stuck or wrong.
                </p>
              </div>
              <div className="scene-mock">
                <div className="badge">challenge</div>
                <div className="mock-eye">▮ CHALLENGE · ACTION</div>
                <div className="mock-body">"Tomorrow at lunch, do one quiet strong thing. Don't tell anyone. Come back and tell me."</div>
                <div className="mock-foot"><span>real-world quest</span><span>+120 XP</span></div>
              </div>
            </div>

            {/* Scene 4 */}
            <div className="scene flip">
              <div>
                <div className="scene-num">iv</div>
                <h3>It <em>lands</em> with you.</h3>
                <p>You get a short digest on Sundays — what they noticed, what they tried, what they wrote. Not a parental dashboard with metrics. A small letter, almost.</p>
              </div>
              <div className="scene-mock">
                <div className="badge">your inbox</div>
                <div className="mock-eye">▮ FROM SAGE · SUNDAY 19:00</div>
                <div className="mock-body">"Alex called helping someone 'a quiet strong thing' this week. I thought you'd want to know."</div>
                <div className="mock-foot"><span>weekly · skippable</span><span>2 min read</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= THE SIX WORLDS ============= */}
      <section className="section" id="worlds">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eye">tour the village</div>
            <h2>Six worlds. <em>One curious kid.</em></h2>
            <p className="section-sub">Each world has its own mentor archetype, its own pace, and its own way of asking the next good question.</p>
          </div>

          <div className="worlds">
            {/* Row 1: Plaza feature (6) + Grove compact (3) + Gym compact (3) = 12 */}
            <div className="w-card feature reveal">
              <span className="w-tag" style={{ background: "#FEF3C7" }}>PLAZA · 12 LEVELS</span>
              <div className="w-blob" style={{ background: "#F59E0B" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
                </svg>
              </div>
              <h3>Plaza of Self-Discovery</h3>
              <p>Where it always starts. Who am I? What do I notice? What do I love that nobody told me to love? Twelve levels of small mirrors.</p>
              <div className="quote">"I think I'm braver than I thought." — Alex, 10</div>
            </div>

            <div className="w-card compact reveal">
              <span className="w-tag" style={{ background: "#DCFCE7" }}>GROVE · 10 LV</span>
              <div className="w-blob" style={{ background: "#16A34A" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22V10M8 22h8M12 10a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
                </svg>
              </div>
              <h3>Grove</h3>
              <p>The Earth as a friend. Small, daily ways to care.</p>
            </div>

            <div className="w-card compact reveal">
              <span className="w-tag" style={{ background: "#FEE2E2" }}>GYM · 12 LV</span>
              <div className="w-blob" style={{ background: "#DC2626" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 4v16M18 4v16M6 8h12M6 16h12M2 10v4M22 10v4" />
                </svg>
              </div>
              <h3>Gym</h3>
              <p>Bodies. Limits. Trying again.</p>
            </div>

            {/* Row 2: Pavilion (3) + Hub (3) + Market feature (6) = 12 */}
            <div className="w-card compact reveal">
              <span className="w-tag" style={{ background: "#DBEAFE" }}>PAVILION · 8 LV</span>
              <div className="w-blob" style={{ background: "#2563EB" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <h3>Volunteering Pavilion</h3>
              <p>How to help without being asked. How to ask if you can help.</p>
              <div className="quote">first lesson is free →</div>
            </div>

            <div className="w-card compact reveal">
              <span className="w-tag" style={{ background: "#F3E8FF" }}>HUB · 11 LV</span>
              <div className="w-blob" style={{ background: "#9333EA" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3>Interpersonal Hub</h3>
              <p>Talk to anyone. Listen on purpose. Disagree without breaking the bridge.</p>
            </div>

            <div className="w-card feature reveal">
              <span className="w-tag" style={{ background: "#FEF9C3" }}>MARKET · 9 LV</span>
              <div className="w-blob" style={{ background: "#CA8A04" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 7l3-3h12l3 3v3a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0V7z" />
                  <path d="M4 10v10h16V10" />
                  <path d="M10 20v-6h4v6" />
                </svg>
              </div>
              <h3>Entrepreneurship Market</h3>
              <p>Make a thing. Trade it. Learn what people actually want. Not "be a CEO" — more like "be a tiny shopkeeper for an afternoon and see what you notice." Real money never enters; real customer empathy does.</p>
              <div className="quote">"I learned people don't want what I think they want." — Lina, 11</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= MENTORS ============= */}
      <section className="section tinted">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eye">meet the cast</div>
            <h2>Five mentors. <em>Five ways of being.</em></h2>
            <p className="section-sub">Your child picks one as their main companion. The others appear when their world calls for it.</p>
          </div>

          <div className="mentor-row">
            <div className="m-card">
              <div className="m-port p-wizard">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 2L8 10h8z" /><circle cx="12" cy="15" r="5" /><path d="M9 22h6" />
                </svg>
              </div>
              <div className="m-name">Wizard</div>
              <div className="m-traits">curious · cryptic</div>
              <div className="m-says">"Now, what was that strange feeling..."</div>
            </div>
            <div className="m-card">
              <div className="m-port p-warrior">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" />
                </svg>
              </div>
              <div className="m-name">Warrior</div>
              <div className="m-traits">brave · direct</div>
              <div className="m-says">"Try it. Even if it's small."</div>
            </div>
            <div className="m-card">
              <div className="m-port p-child">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polygon points="12 2 15.5 9 23 10 17 15.5 19 23 12 19 5 23 7 15.5 1 10 8.5 9" />
                </svg>
              </div>
              <div className="m-name">Child</div>
              <div className="m-traits">silly · honest</div>
              <div className="m-says">"That made me laugh. Why's it funny though?"</div>
            </div>
            <div className="m-card">
              <div className="m-port p-goddess">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 18l3-10 4 6 3-8 3 8 4-6 3 10" /><path d="M2 22h20" />
                </svg>
              </div>
              <div className="m-name">Goddess</div>
              <div className="m-traits">warm · steady</div>
              <div className="m-says">"Take your time. I'll be right here."</div>
            </div>
            <div className="m-card">
              <div className="m-port p-sage">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14l-4-3-4 3-4-3z" />
                </svg>
              </div>
              <div className="m-name">Sage</div>
              <div className="m-traits">wise · patient</div>
              <div className="m-says">"What did you notice that nobody else did?"</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= PARENT SUNDAY EMAIL ============= */}
      <section className="section" id="parents">
        <div className="wrap sunday-grid">
          <div className="sunday-text reveal">
            <div className="section-eye">every sunday at 7pm</div>
            <h2>A short letter, <em>not a dashboard.</em></h2>
            <p className="section-sub sub">
              We don't want you swimming in graphs. You get one quiet email a week — the moments that mattered. Skip a week, no shame. Reply, and a real person reads it.
            </p>
            <ul>
              <li><div className="ck">✦</div><div>What they tried in the real world this week. <strong>The phrase they used to describe it.</strong></div></li>
              <li><div className="ck">♡</div><div>One thing they wrote that we thought you'd want to see.</div></li>
              <li><div className="ck">→</div><div><strong>One small conversation starter</strong> — for the car, the kitchen, bedtime.</div></li>
              <li><div className="ck">✕</div><div>What we will <em>not</em> send: marketing, "streaks lost," guilt nudges, comparison to other kids.</div></li>
            </ul>
          </div>

          <div className="email-mock reveal">
            <div className="email-head">
              <span className="from">sage@mentoria.app</span>
              <span>Sun · 19:02</span>
            </div>
            <div className="email-body">
              <div className="subject">Alex called helping someone "a quiet strong thing" this week.</div>
              <p>Hi Sam — a short one. Alex spent most of the week in the Plaza. He kept circling around the word <em>strong</em>. We talked about how some strong things can't be seen.</p>
              <div className="week-grid">
                <div className="week-stat"><div className="n">3</div><div className="l">LEVELS</div></div>
                <div className="week-stat"><div className="n">2</div><div className="l">QUESTS DONE</div></div>
                <div className="week-stat"><div className="n">14m</div><div className="l">AVG SESSION</div></div>
              </div>
              <div className="reflection">"I felt strong helping. Even when nobody was looking."</div>
              <p>If you want to: ask him on the way to school which strong thing went unnoticed today. That's all. — Sage</p>
              <a className="cta-soft" href="#">Read the full week →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============= STATS ============= */}
      <section className="section tinted">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eye">six months in</div>
            <h2>The numbers we <em>actually</em> watch.</h2>
            <p className="section-sub">Not engagement minutes. Not streaks. The ones that suggest something is landing.</p>
          </div>

          <div className="stats">
            <div className="stat"><div className="n">87%</div><div className="l">of parents say their child mentioned a quest at the dinner table</div></div>
            <div className="stat"><div className="n">2.3×</div><div className="l">more real-world action attempts than week one by week six</div></div>
            <div className="stat"><div className="n">14m</div><div className="l">median session length — by design, not by accident</div></div>
            <div className="stat"><div className="n">0</div><div className="l">leaderboards, streaks, push-to-return notifications</div></div>
          </div>
        </div>
      </section>

      {/* ============= TESTIMONIALS ============= */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eye">other parents</div>
            <h2>"It became part of <em>his evenings.</em>"</h2>
          </div>

          <div className="testi-grid">
            <div className="testi lead reveal">
              <div className="quote-mark">"</div>
              <q>My son asked me at breakfast why some kinds of strong don't get noticed. I have never heard him ask anything like that. Whatever's happening in there — it's good.</q>
              <div className="who">
                <div className="av">S</div>
                <div>
                  <div className="who-name">Sam K.</div>
                  <div className="who-meta">Parent of Alex, 10 · Singapore</div>
                </div>
              </div>
            </div>
            <div className="testi reveal">
              <div className="quote-mark">"</div>
              <q>The Sunday email is the only newsletter I open. It feels like a teacher who actually knows my kid.</q>
              <div className="who">
                <div className="av">M</div>
                <div>
                  <div className="who-name">Mara D.</div>
                  <div className="who-meta">Parent of Lina, 11</div>
                </div>
              </div>
            </div>
            <div className="testi reveal">
              <div className="quote-mark">"</div>
              <q>I was worried about more screen time. It's the only screen time I don't feel guilty about.</q>
              <div className="who">
                <div className="av">P</div>
                <div>
                  <div className="who-name">Priya N.</div>
                  <div className="who-meta">Parent of Aanya, 9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= PRICING ============= */}
      <section className="section tinted" id="pricing">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eye">three quiet plans</div>
            <h2>Pay what makes sense. <em>Stop whenever.</em></h2>
            <p className="section-sub">All plans include the full village, weekly digest, parental controls, and a real-person reply guarantee.</p>
          </div>

          <div className="price-grid">
            <div className="price reveal">
              <div className="price-eye">FREE WEEK</div>
              <div className="price-name">Try it</div>
              <div className="price-tag">No card. No "remind me later" emails.</div>
              <div className="price-amt">$0<span className="sm">/ first 7 days</span></div>
              <div className="price-alt">₱0 PHP / first 7 days</div>
              <div className="price-per">then chooses a plan, or doesn't</div>
              <ul>
                <li>All six worlds, unlimited</li>
                <li>Pick any mentor</li>
                <li>First Sunday letter</li>
                <li>Cancel by closing the tab</li>
              </ul>
              <a className="price-btn" href="#hero-form">Start the week</a>
            </div>

            <div className="price feature reveal">
              <div className="price-eye">FAMILY</div>
              <div className="price-name">Together</div>
              <div className="price-tag">For one curious child + you.</div>
              <div className="price-amt">$12<span className="sm">/ month</span></div>
              <div className="price-alt">₱699 PHP / month</div>
              <div className="price-per">cancel anytime · no annual lock-in</div>
              <ul>
                <li>Everything in Try it</li>
                <li>MBTI + CEFR personalization</li>
                <li>Weekly Sunday digest</li>
                <li>Quest archive + reflections</li>
                <li>Direct reply to Sage (real person reads)</li>
              </ul>
              <a className="price-btn" href="#hero-form">Choose Together</a>
            </div>

            <div className="price reveal">
              <div className="price-eye">SIBLINGS</div>
              <div className="price-name">Up to 3 kids</div>
              <div className="price-tag">Each kid, their own mentor, their own village.</div>
              <div className="price-amt">$22<span className="sm">/ month</span></div>
              <div className="price-alt">₱1,299 PHP / month</div>
              <div className="price-per">three children, one tidy invoice</div>
              <ul>
                <li>Everything in Together</li>
                <li>Three independent journeys</li>
                <li>Three Sunday letters (or one combined)</li>
                <li>Cross-sibling quests (optional)</li>
              </ul>
              <a className="price-btn" href="#hero-form">Choose Siblings</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============= FOR SCHOOLS / GHL ============= */}
      <section className="section">
        <div className="wrap">
          <div className="schools">
            <div>
              <h2>Run Mentoria for <em>your school</em> or <em>your community</em>.</h2>
              <p>White-label the experience. Use your brand, your mentor voices, your curriculum overlay. Every learner mirrors as a contact in your CRM with progress, milestones, and parent comms all running through one place.</p>

              <div className="features">
                <div className="feat">Your domain &amp; branding</div>
                <div className="feat">GoHighLevel-native sync</div>
                <div className="feat">Custom field mapping</div>
                <div className="feat">Pipeline-based cohorts</div>
                <div className="feat">Workflow-driven nurture</div>
                <div className="feat">Parent SMS/email automation</div>
                <div className="feat">COPPA + GDPR-K compliant</div>
                <div className="feat">Snapshot for fast rollout</div>
              </div>

              <SchoolsCTA />
            </div>

            <div className="schools-mock">
              <div className="sm-eye"><span>OPERATOR VIEW</span><span style={{ color: "var(--accent)" }}>● live</span></div>
              <div className="sm-title">Cohort: Spring '26 · Grade 4</div>
              <div className="sm-row"><span className="k">enrolled</span><span className="v">142 learners</span></div>
              <div className="sm-row"><span className="k">consent granted</span><span className="v green">142 / 142</span></div>
              <div className="sm-row"><span className="k">active this week</span><span className="v green">128 / 142</span></div>
              <div className="sm-row"><span className="k">avg levels / kid</span><span className="v">11.3</span></div>
              <div className="sm-row"><span className="k">milestone-10 tag</span><span className="v">87 contacts</span></div>
              <div className="sm-row"><span className="k">at-risk-14d</span><span className="v green">3 contacts</span></div>
              <div className="sm-row"><span className="k">workflows firing</span><span className="v">6 active</span></div>
              <div className="sm-row"><span className="k">parent reply rate</span><span className="v">41%</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= FAQ ============= */}
      <section className="section tinted">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eye">the things you'd ask</div>
            <h2>Honest answers <em>about the AI</em>, the safety, and the screen time.</h2>
          </div>

          <div className="faq">
            <details open>
              <summary>Is this safe for my child to talk to?</summary>
              <p>Yes — with caveats we'll be straight about. The AI runs through a layered safety filter built specifically for children's content. Mentors never collect personal information, never ask to meet "outside the app," and never produce romantic, scary, or commercial content. Any AI message that hits a safety rail is reviewed by a real person before the conversation continues. Parents can read the full transcript any time.</p>
            </details>

            <details>
              <summary>What data do you collect about my child?</summary>
              <p>The minimum to make it personal: a nickname, age, a personality signal (MBTI-flavored), and what they've explored. We do not collect their full name, address, school, or photo. <a href="#">Read the COPPA &amp; GDPR-K policy →</a></p>
            </details>

            <details>
              <summary>Won't this just become more screen time?</summary>
              <p>Sessions are deliberately capped at around 15 minutes. There are no streaks, no leaderboards, no push notifications begging them to return. The "quest" structure pulls them off the screen — most of each level's value happens away from it.</p>
            </details>

            <details>
              <summary>What if my child doesn't speak English fluently?</summary>
              <p>Mentoria adapts to CEFR level A1 through C2. The mentor's vocabulary, sentence length, and prompts adjust to where your child is. We currently support English with Spanish, Mandarin, and Tagalog in beta — opt in from settings.</p>
            </details>

            <details>
              <summary>Can I cancel anytime?</summary>
              <p>Yes, with one click in settings — or by replying "cancel" to any Sunday letter. No phone trees, no "are you sure" guilt screens. Your data is deleted within 30 days unless you ask us to keep it.</p>
            </details>

            <details>
              <summary>I'm a school / homeschool co-op / agency. Can I run it for my kids?</summary>
              <p>Yes — that's the Schools tier above. Mentoria can run white-labeled on your brand, syncing learner progress into your GoHighLevel sub-account so your team manages comms, cohorts, and parent nurture in one place. <a href="#">Book a walkthrough →</a></p>
            </details>
          </div>
        </div>
      </section>

      {/* ============= FINAL CTA ============= */}
      <section className="wrap">
        <div className="final">
          <h2>A free week.<br />One <em>curious kid.</em></h2>
          <p>Try the village for seven days. If it's not for your child, we genuinely won't be hurt — and we won't email you about it.</p>
          <LeadForm
            touchpoint="final"
            placeholder="your@email.com"
            buttonLabel="Start the week"
          />
          <div className="final-doodle">no card · no streaks · no guilt</div>
        </div>
      </section>

      {/* ============= FOOTER ============= */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="foot-brand">Mentoria</div>
              <div className="foot-tag">An interactive adventure of self-discovery &amp; action. Made with care for curious 8–11 year-olds.</div>
            </div>
            <div className="foot-col">
              <h4>THE VILLAGE</h4>
              <a href="#">Plaza of Self-Discovery</a>
              <a href="#">Environmental Grove</a>
              <a href="#">Volunteering Pavilion</a>
              <a href="#">Sports Gymnasium</a>
              <a href="#">Entrepreneurship Market</a>
              <a href="#">Interpersonal Hub</a>
            </div>
            <div className="foot-col">
              <h4>FOR PARENTS</h4>
              <a href="#">How safety works</a>
              <a href="#">Sample Sunday letter</a>
              <a href="#">Data &amp; privacy (COPPA)</a>
              <a href="#">Talk to a human</a>
              <a href="#">Cancel anytime</a>
            </div>
            <div className="foot-col">
              <h4>FOR OPERATORS</h4>
              <a href="#">Schools &amp; co-ops</a>
              <a href="#">GHL integration</a>
              <a href="#">White-label snapshot</a>
              <a href="#">API documentation</a>
              <a href="#">Book a walkthrough</a>
            </div>
          </div>

          <div className="foot-bottom">
            <div>© Mentoria 2026 · An interactive adventure of self-discovery &amp; action.</div>
            <div className="badges">
              <span className="badge">COPPA</span>
              <span className="badge">GDPR-K</span>
              <span className="badge">SOC 2</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
