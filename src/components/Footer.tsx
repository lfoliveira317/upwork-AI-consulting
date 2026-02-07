import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { company, navigation } from "../data/siteData";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f172a", color: "#94a3b8" }}>
      <Container className="py-5">
        <Row className="g-4">
          {/* Brand */}
          <Col lg={4}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <span
                className="d-flex align-items-center justify-content-center rounded-2"
                style={{
                  width: 32,
                  height: 32,
                  background: "linear-gradient(135deg, #2563eb, #1e3a5f)",
                  color: "#fff",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                }}
              >
                A
              </span>
              <span className="fw-bold text-white" style={{ fontSize: "1.1rem" }}>
                {company.name}
              </span>
            </div>
            <p className="small mb-3" style={{ maxWidth: 320, lineHeight: 1.7 }}>
              {company.description}
            </p>
            <div className="d-flex gap-3">
              {Object.entries(company.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  className="text-secondary"
                  style={{ fontSize: "1.1rem", transition: "color 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  <i className={`bi bi-${platform}`}></i>
                </a>
              ))}
            </div>
          </Col>

          {/* Navigation */}
          <Col sm={6} lg={2}>
            <h6 className="text-white fw-semibold mb-3" style={{ fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Company
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-decoration-none text-secondary small"
                    style={{ transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Services snippet */}
          <Col sm={6} lg={3}>
            <h6 className="text-white fw-semibold mb-3" style={{ fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Services
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {["ML Engineering", "AI Strategy", "Data Engineering", "NLP Solutions", "Computer Vision"].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-decoration-none text-secondary small"
                    style={{ transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={3}>
            <h6 className="text-white fw-semibold mb-3" style={{ fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Contact
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope"></i>
                {company.email}
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone"></i>
                {company.phone}
              </li>
              <li className="d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt mt-1"></i>
                {company.address}
              </li>
            </ul>
          </Col>
        </Row>

        {/* Bottom bar */}
        <div
          className="mt-5 pt-4 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2"
          style={{ borderTop: "1px solid #1e293b" }}
        >
          <p className="small mb-0">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="d-flex gap-3 small">
            <a href="#" className="text-secondary text-decoration-none">
              Privacy
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
