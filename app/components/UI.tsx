import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

/* ─── Section Header ────────────────────────────────── */
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-5 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className="mb-2 fw-semibold"
          style={{
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#2563eb",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="fw-bold mb-3"
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          letterSpacing: "-0.03em",
          color: "#0f172a",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`${centered ? "mx-auto" : ""}`}
          style={{
            fontSize: "1.1rem",
            color: "#64748b",
            maxWidth: centered ? 600 : 550,
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ─── Page Hero ─────────────────────────────────────── */
interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section
      className="hero-gradient grid-pattern text-white"
      style={{ paddingTop: "8rem", paddingBottom: "5rem" }}
    >
      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row>
          <Col lg={8}>
            {eyebrow && (
              <p
                className="mb-3 fw-semibold d-inline-block px-3 py-1 rounded-pill"
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  backgroundColor: "rgba(37, 99, 235, 0.2)",
                  color: "#93c5fd",
                  border: "1px solid rgba(37, 99, 235, 0.3)",
                }}
              >
                {eyebrow}
              </p>
            )}
            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#94a3b8",
                lineHeight: 1.7,
                maxWidth: 580,
              }}
            >
              {description}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

/* ─── Button ────────────────────────────────────────── */
interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  icon?: string;
}

export function Button({ href, children, variant = "primary", icon }: ButtonProps) {
  const classMap = {
    primary: "btn btn-dark",
    secondary: "btn btn-outline-dark",
    outline: "btn btn-outline-secondary",
  };

  return (
    <Link href={href} className={`${classMap[variant]} d-inline-flex align-items-center gap-2`}>
      {icon && <i className={`bi bi-${icon}`} />}
      {children}
    </Link>
  );
}

/* ─── Stat Card ─────────────────────────────────────── */
interface StatCardProps {
  value: string;
  label: string;
  icon: string;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="text-center p-4">
      <div className="icon-box mx-auto mb-3">
        <i className={`bi bi-${icon} fs-4`} />
      </div>
      <p className="stat-number fw-bold mb-1" style={{ fontSize: "2.25rem", letterSpacing: "-0.03em" }}>
        {value}
      </p>
      <p className="mb-0" style={{ fontSize: "0.85rem", color: "#64748b" }}>
        {label}
      </p>
    </div>
  );
}
