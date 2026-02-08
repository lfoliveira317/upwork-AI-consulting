import { Link } from "react-router-dom";

/* ─── Section Header ────────────────────────────────── */
export function SectionHeader({
  label,
  title,
  subtitle,
  center = true,
}: {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-5 ${center ? "text-center" : ""}`} style={{ maxWidth: center ? 640 : undefined, margin: center ? "0 auto" : undefined }}>
      <span className="section-label mb-3">
        {label}
      </span>
      <h2 className="fw-bold mb-2" style={{ letterSpacing: "-0.03em", fontSize: "2rem", color: "var(--color-text)" }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-text-muted)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── Page Hero ─────────────────────────────────────── */
export function PageHero({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle: string;
  badge?: string;
}) {
  return (
    <section className="hero-gradient grid-pattern text-white" style={{ paddingTop: "9rem", paddingBottom: "5rem" }}>
      {/* Floating orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            {badge && (
              <span
                className="d-inline-block px-3 py-1 rounded-pill mb-3 animate-fade-in-down"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {badge}
              </span>
            )}
            <h1 className="fw-bold mb-3 animate-fade-in-up delay-1 glow-text" style={{ fontSize: "3rem", letterSpacing: "-0.03em" }}>
              {title}
            </h1>
            <p className="mb-0 animate-fade-in-up delay-2" style={{ color: "#64748b", fontSize: "1.15rem", lineHeight: 1.8 }}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Button ────────────────────────────────────── */
export function Button({
  href,
  children,
  variant = "dark",
  size = "",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: string;
  size?: string;
  className?: string;
}) {
  return (
    <Link to={href} className={`btn btn-${variant} ${size ? `btn-${size}` : ""} btn-glow ${className}`}>
      {children}
    </Link>
  );
}

/* ─── Stat Card ─────────────────────────────────────── */
export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="stat-number fw-bold mb-1" style={{ fontSize: "2.5rem", letterSpacing: "-0.03em" }}>
        {value}
      </div>
      <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--color-text-muted)" }}>
        {label}
      </div>
    </div>
  );
}
