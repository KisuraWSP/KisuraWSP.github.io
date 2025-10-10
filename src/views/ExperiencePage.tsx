import { memo } from "react";
import { useScroll, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import KNavBar from "../components/Nav.component";
import KFoot from "../components/Footer.component";

/**
 * Simple Experience item shape so you can add more later.
 */
type Exp = {
  role: string;
  company: string;
  type: string;
  dates: string;     // e.g., "Oct 2024 – Jun 2025"
  duration: string;  // e.g., "8 mos"
  location?: string; // e.g., "Hybrid"
  summary?: string[];
  skills?: string[];
  logoSrc?: string;  // optional: /assets/images/company.png
};

const experiences: Exp[] = [
  {
    role: "Game Development Intern",
    company: "ZinCaT Technology",
    type: "Internship",
    dates: "Jul 2025 – Present",
    duration: "3 mos", // corrected
    summary: [
      "Building 2D games using the construct3 game engine",
    ],
    skills: ["2D Game Development", "2D Software", "Collaboration"],
  },
  {
    role: "Software Engineer Intern",
    company: "Antler IT Solutions",
    type: "Internship",
    dates: "Oct 2024 – Jun 2025",
    duration: "8 mos", // corrected
    location: "Hybrid",
    summary: [
      "Made custom modules and features for Odoo ERP systems using Python and XML.",
      "Created/modified business logic, reports, and user interfaces for specific system requirements.",
      "Built web pages using Odoo Website Builder and delivered user-friendly solutions.",
      "Gained hands-on knowledge of real-world business processes and how ERP systems support them."
    ],
    skills: ["Odoo", "Python", "XML", "ERP", "Web Development"]
  }
];

function Experience() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-liquid">
      {!isMobile && <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />}
      <KNavBar />

      {/* Page Header */}
      <section className="k-shell glass section" style={{ textAlign: isMobile ? "center" : "left" }}>
        <h1 style={{ fontWeight: "bold" }}>Experience</h1>
        <p style={{ color: "var(--muted)", marginTop: 6 }}>
          Roles, timelines, and what I actually shipped.
        </p>
      </section>

      {/* Timeline list */}
      <section className="k-shell glass section">
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "var(--space-2)" }}>
          {experiences.map((xp, i) => (
            <li key={i} className="glass" style={{
              padding: "clamp(14px, 2.2vw, 22px)",
              borderRadius: "var(--radius)"
            }}>
              {/* Header row */}
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
                gap: "10px",
                alignItems: "start"
              }}>
                <div>
                  <h2 style={{ margin: 0 }}>{xp.role}</h2>
                  <p style={{ margin: "2px 0 0 0", color: "var(--muted)" }}>
                    {xp.company} · {xp.type}
                  </p>
                  <p style={{ margin: "2px 0 0 0", color: "var(--muted)" }}>
                    {xp.dates} · {xp.duration}{xp.location ? ` · ${xp.location}` : ""}
                  </p>
                </div>

                {/* Right chip stack */}
                {xp.skills && xp.skills.length > 0 && (
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    justifyContent: isMobile ? "center" : "flex-end"
                  }}>
                    {xp.skills.slice(0, 9).map((s, idx) => (
                      <span
                        key={idx}
                        className="glass"
                        style={{
                          borderRadius: 999,
                          padding: "6px 10px",
                          fontSize: 12,
                          color: "var(--fg)",
                          background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
                          border: "1px solid var(--stroke)"
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Divider */}
              <hr style={{ margin: "14px 0", borderColor: "var(--stroke)" }} />

              {/* Body */}
              {xp.summary && xp.summary.length > 0 && (
                <div style={{ display: "grid", gap: "8px" }}>
                  {xp.summary.map((line, idx) => (
                    <p key={idx} style={{ margin: 0, color: "var(--muted)" }}>{line}</p>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <KFoot />
    </div>
  );
}

export default memo(Experience);
