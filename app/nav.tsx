"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .nav-link {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #5a5550;
          transition: color .25s;
          text-decoration: none;
        }
        .nav-link:hover { color: #c8a96e; }

        .cta-btn-sm {
          display: inline-block;
          background: #c8a96e;
          color: #0e0e0e;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: 9px 22px;
          border-radius: 2px;
          text-decoration: none;
          transition: background .25s, transform .2s;
          white-space: nowrap;
        }
        .cta-btn-sm:hover { background: #d9bc85; transform: translateY(-1px); }

        .mobile-nav-link {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #6a6560;
          text-decoration: none;
          display: block;
          padding: 14px 0;
          border-bottom: 1px solid #191919;
          transition: color .2s;
        }
        .mobile-nav-link:last-of-type { border-bottom: none; }
        .mobile-nav-link:hover { color: #c8a96e; }

        .cta-btn-full {
          display: block;
          text-align: center;
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
          margin-top: 16px;
          transition: background .25s;
        }
        .cta-btn-full:hover { background: #d9bc85; }

        .ham-bar {
          display: block;
          height: 1px;
          width: 22px;
          background: #e2ddd6;
          transition: transform .25s ease, opacity .2s ease;
          transform-origin: center;
        }
        .ham-open .ham-bar:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .ham-open .ham-bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .ham-open .ham-bar:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu { animation: slideDown .22s ease both; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .hamburger-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(14,14,14,0.97)" : "rgba(14,14,14,0.88)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid #1a1a1a",
        transition: "background .3s",
      }}>
        {/* bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 6%", height: "60px",
        }}>
          <a href="#" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, letterSpacing: "-.02em", color: "#e2ddd6" }}>
              ashik<span style={{ color: "#c8a96e" }}>.dev</span>
            </span>
          </a>

          {/* desktop */}
          <div className="desktop-nav" style={{ alignItems: "center", gap: 36 }}>
            {["Services", "Process", "Contact"].map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} className="nav-link">{n}</a>
            ))}
            <a href="#contact" className="cta-btn-sm">Hire Me</a>
          </div>

          {/* hamburger */}
          <button
            className={`hamburger-btn ${menuOpen ? "ham-open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              display: "none", flexDirection: "column", justifyContent: "center",
              gap: "5px", background: "none", border: "none",
              cursor: "pointer", padding: "8px", width: 38, height: 38,
            }}
          >
            <span className="ham-bar" />
            <span className="ham-bar" />
            <span className="ham-bar" />
          </button>
        </div>

        {/* mobile dropdown */}
        {menuOpen && (
          <div className="mobile-menu" style={{
            background: "#0e0e0e", borderTop: "1px solid #191919",
            padding: "6px 6% 20px",
          }}>
            {["Services", "Process", "Contact"].map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} className="mobile-nav-link" onClick={close}>{n}</a>
            ))}
            <a href="#contact" className="cta-btn-full" onClick={close}>Hire Me</a>
          </div>
        )}
      </nav>
    </>
  );
}