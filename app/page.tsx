import type { Metadata } from "next";
import Nav from "./nav";

export const metadata: Metadata = {
  title: "Ashik — Adobe Plugin Developer",
  description:
    "Custom Adobe plugins built with CEP & UXP. Automate complex Photoshop, Illustrator, and InDesign workflows.",
};

const services = [
  {
    tag: "UXP · CEP",
    app: "Photoshop",
    icon: "Ps",
    color: "#31A8FF",
    title: "Photoshop Automation",
    desc: "Batch processing, smart object pipelines, layer management automation, and custom export workflows that eliminate repetitive manual work.",
    bullets: [
      "Batch image processing & export",
      "Layer / smart object automation",
      "Custom panel UI with live preview",
      "Script-driven asset generation",
    ],
  },
  {
    tag: "UXP · CEP",
    app: "Illustrator",
    icon: "Ai",
    color: "#FF9A00",
    title: "Illustrator Workflow Tools",
    desc: "Automate vector production, symbol libraries, artboard management, and complex multi-file operations directly inside Illustrator.",
    bullets: [
      "Artboard & symbol management",
      "Bulk SVG / PDF export pipelines",
      "Dynamic text & data-driven design",
      "Custom toolbars & shortcut panels",
    ],
  },
  {
    tag: "UXP · CEP",
    app: "InDesign",
    icon: "Id",
    color: "#FF3366",
    title: "InDesign Publishing",
    desc: "Data merge at scale, automated layout generation, style enforcement, and one-click multi-format publishing for print and digital.",
    bullets: [
      "Data-driven layout automation",
      "Paragraph & style enforcement",
      "Multi-format export (PDF, EPUB, HTML)",
      "Template & master page scripting",
    ],
  },
];

const steps = [
  { step: "01", title: "Discovery",     desc: "We map your current workflow, find the friction points, and define exactly what the plugin needs to do." },
  { step: "02", title: "Architecture",  desc: "I design the plugin structure — CEP panel or UXP manifest, host communication layer, and UI scaffold." },
  { step: "03", title: "Build",         desc: "Iterative development with regular check-ins. You see working prototypes early, not just at the end." },
  { step: "04", title: "Deliver",       desc: "Packaged, signed, and documented. I handle installation and provide support to keep things running smoothly." },
];

const appIcons = [
  { label: "Ps", color: "#31A8FF", bg: "#001a2e" },
  { label: "Ai", color: "#FF9A00", bg: "#2a1800" },
  { label: "Id", color: "#FF3366", bg: "#2a0015" },
];

export default function Page() {
  return (
    <div className="bg-[#0e0e0e] text-[#e2ddd6] min-h-screen antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=IBM+Plex+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-mono    { font-family: 'IBM Plex Mono', monospace; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .fade-up { animation: fadeUp .7s ease both; }
        .d1 { animation-delay: .08s; }
        .d2 { animation-delay: .20s; }
        .d3 { animation-delay: .34s; }
        .d4 { animation-delay: .48s; }
        .d5 { animation-delay: .62s; }

        .shimmer-text {
          background: linear-gradient(90deg, #c8a96e 0%, #f0d89a 40%, #c8a96e 60%, #9a7a45 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }

        .section-eyebrow {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: #c8a96e;
        }

        .tech-pill {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: .1em;
          text-transform: uppercase;
          border: 1px solid #2a2a2a;
          color: #5a5550;
          padding: 5px 12px;
          border-radius: 1px;
          transition: border-color .2s, color .2s;
        }
        .tech-pill:hover { border-color: #c8a96e44; color: #c8a96e; }

        .cta-btn {
          display: inline-block;
          background: #c8a96e;
          color: #0e0e0e;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 2px;
          text-decoration: none;
          transition: background .25s, box-shadow .25s, transform .2s;
          white-space: nowrap;
        }
        .cta-btn:hover {
          background: #d9bc85;
          box-shadow: 0 8px 32px rgba(200,169,110,.25);
          transform: translateY(-1px);
        }

        .ghost-btn {
          display: inline-block;
          border: 1px solid #2e2e2e;
          color: #5a5550;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 2px;
          text-decoration: none;
          transition: border-color .25s, color .25s;
          white-space: nowrap;
        }
        .ghost-btn:hover { border-color: #c8a96e44; color: #c8a96e; }

        .service-card {
          background: #141414;
          border: 1px solid #222;
          border-radius: 2px;
          padding: 32px 28px;
          transition: border-color .3s, transform .3s;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, transparent 60%, rgba(200,169,110,0.04) 100%);
          pointer-events: none;
        }
        .service-card:hover { border-color: #c8a96e44; transform: translateY(-3px); }

        .app-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px; height: 44px;
          border-radius: 10px;
          font-family: 'IBM Plex Mono', monospace;
          font-weight: 500; font-size: 13px;
          letter-spacing: -0.03em;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11.5px;
          color: #6a6560;
          line-height: 1.6;
          padding: 7px 0;
          border-bottom: 1px solid #1c1c1c;
        }
        .bullet-item:last-child { border-bottom: none; }
        .bullet-item::before { content: '—'; color: #c8a96e; flex-shrink: 0; margin-top: 1px; }

        .process-row {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 0 24px;
          padding: 28px 0;
          border-bottom: 1px solid #1c1c1c;
          transition: background .2s;
        }
        .process-row:hover { background: #0d0d0d; }
        .process-row:last-child { border-bottom: none; }

        .contact-card {
          background: #141414;
          border: 1px solid #222;
          border-radius: 2px;
          padding: 24px 26px;
          display: flex; flex-direction: column; gap: 14px;
          text-decoration: none;
          transition: border-color .3s, transform .3s;
        }
        .contact-card:hover { border-color: #c8a96e44; transform: translateY(-2px); }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero-layout { flex-direction: column !important; }
          .hero-icons-desktop { display: none !important; }
          .hero-icons-mobile  { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hero-icons-desktop { display: flex !important; }
          .hero-icons-mobile  { display: none !important; }
        }
      `}</style>

      {/* ── Client nav (hamburger state lives here only) ── */}
      <Nav />

      {/* ══════════════════════════════════════════════════
          HERO  — fully SSR, great for SEO
      ══════════════════════════════════════════════════ */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "120px 6% 80px",
        position: "relative", overflow: "hidden",
      }}>
        {/* bg decorations */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{
            position: "absolute", top: "10%", right: "-5%",
            width: 600, height: 600, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%)",
          }} />
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .03 }}>
            <defs>
              <pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#c8a96e" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)" />
          </svg>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative" }}>
          <div className="hero-layout" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>

            {/* text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="fade-up d1" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
                <span className="section-eyebrow">Adobe Plugin Developer</span>
                <span style={{ height: 1, background: "#2a2a2a", width: 40 }} />
                <span className="font-mono" style={{ fontSize: 10, color: "#3a3530", letterSpacing: ".1em" }}>CEP · UXP · ExtendScript</span>
              </div>

              <h1 className="font-display fade-up d2" style={{
                fontSize: "clamp(2.4rem, 7vw, 6rem)",
                lineHeight: 1.02, fontWeight: 900, letterSpacing: "-.03em", marginBottom: 24,
              }}>
                Automate the<br />
                <span className="shimmer-text">Impossible</span><br />
                in Adobe.
              </h1>

              <p className="fade-up d3" style={{ fontSize: "1rem", lineHeight: 1.8, color: "#6a6560", maxWidth: 520, marginBottom: 36 }}>
                I build production-grade plugins for Photoshop, Illustrator, and InDesign — turning multi-hour manual workflows into a single button click using CEP panels and UXP APIs.
              </p>

              <div className="fade-up d4" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
                <a href="#contact" className="cta-btn">Start a Project</a>
                <a href="#services" className="ghost-btn">See What I Build ↓</a>
              </div>

              {/* app icons — mobile row */}
              <div className="fade-up d4 hero-icons-mobile" style={{ display: "none", gap: 10, marginBottom: 32 }}>
                {appIcons.map(({ label, color, bg }) => (
                  <div key={label} style={{
                    width: 44, height: 44, borderRadius: 10, background: bg,
                    border: `1px solid ${color}22`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500,
                    fontSize: 12, color, letterSpacing: "-.02em",
                  }}>{label}</div>
                ))}
              </div>

              <div className="fade-up d5" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["CEP Panels", "UXP APIs", "ExtendScript", "React UI", "Node Bridge", "ZXP Packaging"].map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>

            {/* app icons — desktop column */}
            <div className="hero-icons-desktop" style={{ flexDirection: "column", gap: 14, flexShrink: 0 }}>
              {appIcons.map(({ label, color, bg }) => (
                <div key={label} style={{
                  width: 56, height: 56, borderRadius: 12, background: bg,
                  border: `1px solid ${color}22`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500,
                  fontSize: 14, color, letterSpacing: "-.02em",
                }}>{label}</div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════ */}
      <section id="services" style={{ padding: "100px 6%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <p className="section-eyebrow" style={{ marginBottom: 14 }}>What I Build</p>
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,4.5vw,3.2rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-.02em" }}>
              One plugin. Thousands of{" "}
              <span style={{ fontStyle: "italic", color: "#c8a96e" }}>hours saved.</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
            {services.map((s) => (
              <div key={s.app} className="service-card">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
                  <div className="app-badge" style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}30` }}>
                    {s.icon}
                  </div>
                  <span className="font-mono" style={{ fontSize: 10, color: "#3a3530", letterSpacing: ".12em", textTransform: "uppercase" }}>{s.tag}</span>
                </div>
                <h3 className="font-display" style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: 12, letterSpacing: "-.015em" }}>{s.title}</h3>
                <p style={{ fontSize: "0.87rem", color: "#6a6560", lineHeight: 1.75, marginBottom: 24 }}>{s.desc}</p>
                <div>{s.bullets.map(b => <div key={b} className="bullet-item">{b}</div>)}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, padding: "18px 22px", border: "1px solid #1c1c1c", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
            <p className="font-mono" style={{ fontSize: 11, color: "#4a4540", letterSpacing: ".06em" }}>
              Need a plugin for multiple Adobe apps? I build unified cross-app toolchains.
            </p>
            <a href="#contact" className="cta-btn" style={{ fontSize: 11, padding: "10px 24px" }}>Let's Talk →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════════════ */}
      <section id="process" style={{ padding: "100px 6%", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <p className="section-eyebrow" style={{ marginBottom: 14 }}>How It Works</p>
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,4.5vw,3.2rem)", fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1.1 }}>
              From idea to{" "}
              <span style={{ fontStyle: "italic", color: "#c8a96e" }}>installed plugin</span>
              <br />in four steps.
            </h2>
          </div>
          <div style={{ borderTop: "1px solid #1c1c1c" }}>
            {steps.map((p) => (
              <div key={p.step} className="process-row">
                <div><span className="font-mono" style={{ fontSize: 11, color: "#c8a96e", letterSpacing: ".1em" }}>{p.step}</span></div>
                <div>
                  <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-.01em", marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ fontSize: "0.87rem", color: "#6a6560", lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════ */}
      <section id="contact" style={{ padding: "100px 6% 120px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <p className="section-eyebrow" style={{ marginBottom: 14 }}>Get in Touch</p>
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,4.5vw,3.2rem)", fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1.1 }}>
              Have a workflow that{" "}
              <br />
              <span style={{ fontStyle: "italic", color: "#c8a96e" }}>deserves automation?</span>
            </h2>
            <p style={{ marginTop: 16, fontSize: "0.9rem", color: "#6a6560", lineHeight: 1.8, maxWidth: 480 }}>
              Tell me what you're building — or what's slowing you down. I'll respond within a few hours.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
            <a href="mailto:ashikex49@gmail.com" className="contact-card">
              <div style={{ width: 40, height: 40, borderRadius: 8, background: "#c8a96e15", border: "1px solid #c8a96e22", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="font-mono" style={{ fontSize: 10, color: "#3a3530", textTransform: "uppercase", letterSpacing: ".15em", marginBottom: 5 }}>Email</p>
                <p style={{ fontSize: "0.85rem", color: "#c8d0cc", wordBreak: "break-all" }}>ashikex49@gmail.com</p>
              </div>
              <span style={{ marginTop: "auto", alignSelf: "flex-end", color: "#c8a96e", fontSize: 18 }}>↗</span>
            </a>

            <a href="https://wa.me/8801786066566" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div style={{ width: 40, height: 40, borderRadius: 8, background: "#c8a96e15", border: "1px solid #c8a96e22", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#c8a96e">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-mono" style={{ fontSize: 10, color: "#3a3530", textTransform: "uppercase", letterSpacing: ".15em", marginBottom: 5 }}>WhatsApp</p>
                <p style={{ fontSize: "0.85rem", color: "#c8d0cc" }}>01786066566</p>
              </div>
              <span style={{ marginTop: "auto", alignSelf: "flex-end", color: "#c8a96e", fontSize: 18 }}>↗</span>
            </a>

            <a href="https://www.youtube.com/@frontendonly" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div style={{ width: 40, height: 40, borderRadius: 8, background: "#c8a96e15", border: "1px solid #c8a96e22", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#c8a96e">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div>
                <p className="font-mono" style={{ fontSize: 10, color: "#3a3530", textTransform: "uppercase", letterSpacing: ".15em", marginBottom: 5 }}>YouTube</p>
                <p style={{ fontSize: "0.85rem", color: "#c8d0cc" }}>@frontendonly</p>
              </div>
              <span style={{ marginTop: "auto", alignSelf: "flex-end", color: "#c8a96e", fontSize: 18 }}>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid #1a1a1a",
        padding: "20px 6%",
        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
      }}>
        <p className="font-mono" style={{ fontSize: 11, color: "#3a3530" }}>
          © {new Date().getFullYear()} ashik.dev · Adobe Plugin Developer
        </p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[["Services", "#services"], ["Process", "#process"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} className="font-mono" style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#5a5550", textDecoration: "none" }}>{label}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}