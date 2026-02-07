import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { company } from "../data/siteData";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "AI Consulting", href: "/services#consulting" },
  { label: "AI Development", href: "/services#development" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f172a", color: "#94a3b8" }}>
      <Container className="py-5">
        <Row className="g-5">
          {/* Brand column */}
          <Col lg={4}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="d-flex align-items-center justify-content-center rounded"
                style={{
                  width: 36,
                  height: 36,
                  background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
                }}
              >
                <i className="bi bi-cpu text-white" style={{ fontSize: "1rem" }} />
              </div>
              <span className="fw-bold fs-5 text-white" style={{ letterSpacing: "-0.03em" }}>
                Apex AI
              </span>
            </div>
            <p className="mb-4" style={{ fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 300 }}>
              AI consulting and development. We help companies adopt AI with clarity and build tools that work.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-secondary" aria-label="LinkedIn">
                <i className="bi bi-linkedin fs-5" />
              </a>
              <a href="#" className="text-secondary" aria-label="GitHub">
                <i className="bi bi-github fs-5" />
              </a>
              <a href="#" className="text-secondary" aria-label="Twitter">
                <i className="bi bi-twitter-x fs-5" />
              </a>
            </div>
          </Col>

          {/* Pages */}
          <Col sm={6} lg={2}>
            <h6 className="text-white fw-semibold mb-3" style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Pages
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-decoration-none"
                    style={{ color: "#94a3b8", fontSize: "0.875rem" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Services */}
          <Col sm={6} lg={2}>
            <h6 className="text-white fw-semibold mb-3" style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Services
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-decoration-none"
                    style={{ color: "#94a3b8", fontSize: "0.875rem" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={4}>
            <h6 className="text-white fw-semibold mb-3" style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Get in touch
            </h6>
            <p style={{ fontSize: "0.875rem" }}>
              <i className="bi bi-envelope me-2" />
              <a
                href={`mailto:${company.email}`}
                className="text-decoration-none"
                style={{ color: "#94a3b8" }}
              >
                {company.email}
              </a>
            </p>
            {company.calendarLink && (
              <a
                href={company.calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm mt-2 px-4"
                style={{ borderRadius: 8, fontSize: "0.8rem" }}
              >
                <i className="bi bi-calendar3 me-2" />
                Book a call
              </a>
            )}
          </Col>
        </Row>

        <hr style={{ borderColor: "#1e293b" }} className="my-4" />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <p className="mb-0" style={{ fontSize: "0.8rem", color: "#475569" }}>
            &copy; {new Date().getFullYear()} Apex AI. All rights reserved.
          </p>
          <p className="mb-0" style={{ fontSize: "0.8rem", color: "#475569" }}>
            Built with precision. No fluff.
          </p>
        </div>
      </Container>
    </footer>
  );
}
