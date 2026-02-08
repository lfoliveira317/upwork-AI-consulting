import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { SectionHeader, StatCard, Button } from "../components/UI";
import { company, services, products, portfolio, stats } from "../data/siteData";

export default function Home() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────── */}
      <section
        className="hero-gradient grid-pattern text-white d-flex align-items-center"
        style={{ minHeight: "100vh", paddingTop: "6rem" }}
      >
        {/* Floating orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        <Container className="position-relative" style={{ zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col lg={9} className="text-center">
              <span
                className="d-inline-block px-3 py-2 rounded-pill mb-4 status-active animate-fade-in-down"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Now accepting new enterprise clients
              </span>

              <h1
                className="fw-bold mb-4 animate-fade-in-up delay-1"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                }}
              >
                AI Solutions That
                <br />
                <span className="gradient-text-shine">Drive Results</span>
              </h1>

              <p
                className="mx-auto mb-5 animate-fade-in-up delay-2"
                style={{
                  color: "#94a3b8",
                  fontSize: "1.2rem",
                  lineHeight: 1.8,
                  maxWidth: 580,
                }}
              >
                {company.description}
              </p>

              <div className="d-flex gap-3 justify-content-center flex-wrap animate-fade-in-up delay-3">
                <Link to="/contact" className="btn btn-light btn-lg px-5 btn-glow" style={{ padding: "14px 32px" }}>
                  Start a Project <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <Link
                  to="/portfolio"
                  className="btn btn-outline-light btn-lg px-5"
                  style={{ borderColor: "rgba(255,255,255,0.15)", padding: "14px 32px" }}
                >
                  View Our Work
                </Link>
              </div>

              {/* Trusted by logos placeholder */}
              <div className="mt-5 pt-4 animate-fade-in-up delay-5">
                <p className="text-uppercase small mb-3" style={{ color: "#4a5568", letterSpacing: "0.1em", fontSize: "0.7rem" }}>
                  Trusted by innovative companies
                </p>
                <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap" style={{ opacity: 0.4 }}>
                  {["Fortune 500 Tech", "Global Bank", "Healthcare Network", "Auto Manufacturer"].map((name) => (
                    <span key={name} className="text-white fw-medium" style={{ fontSize: "0.85rem", letterSpacing: "-0.02em" }}>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ─── Stats ─────────────────────────────────────── */}
      <section className="py-5" style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <Container>
          <Row className="g-4">
            {stats.map((stat, i) => (
              <Col xs={6} md={3} key={stat.label}>
                <div className="stat-card">
                  <StatCard value={stat.value} label={stat.label} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ─── Services Preview ──────────────────────────── */}
      <section className="py-5 my-4">
        <Container>
          <SectionHeader
            label="What We Do"
            title="Enterprise AI Services"
            subtitle="End-to-end AI solutions from strategy to deployment"
          />
          <Row className="g-4">
            {services.slice(0, 3).map((service, i) => (
              <Col md={4} key={service.id}>
                <Card className="h-100 border-0 card-glow" style={{ background: "var(--color-surface-elevated)" }}>
                  <Card.Body className="p-4">
                    <div className="icon-box mb-3">
                      <i className={`bi ${service.icon} fs-4`}></i>
                    </div>
                    <h5 className="fw-semibold mb-2" style={{ letterSpacing: "-0.02em", color: "var(--color-text)" }}>{service.title}</h5>
                    <p className="small mb-3" style={{ lineHeight: 1.7, color: "var(--color-text-muted)" }}>{service.description}</p>
                    <ul className="list-unstyled mb-0">
                      {service.features.slice(0, 2).map((f) => (
                        <li key={f} className="d-flex align-items-center gap-2 small mb-1" style={{ color: "var(--color-text-muted)" }}>
                          <i className="bi bi-check-circle-fill" style={{ color: "var(--color-primary)", fontSize: "0.7rem" }}></i> {f}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button href="/services" variant="outline-dark" size="sm">
              All Services <i className="bi bi-arrow-right ms-1"></i>
            </Button>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ─── Portfolio Preview ─────────────────────────── */}
      <section className="py-5 my-4">
        <Container>
          <SectionHeader
            label="Our Work"
            title="Recent Projects"
            subtitle="Real results for enterprise clients"
          />
          <Row className="g-4">
            {portfolio.slice(0, 2).map((project) => (
              <Col md={6} key={project.id}>
                <Card className="h-100 border-0 card-glow" style={{ background: "var(--color-surface-elevated)" }}>
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <Badge bg="light" text="dark">
                        {project.industry}
                      </Badge>
                      <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                        {project.client}
                      </span>
                    </div>
                    <h5 className="fw-semibold mb-2" style={{ letterSpacing: "-0.02em", color: "var(--color-text)" }}>{project.title}</h5>
                    <p className="small mb-3" style={{ lineHeight: 1.7, color: "var(--color-text-muted)" }}>{project.description}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {project.metrics.map((m) => (
                        <span key={m} className="metric-tag">
                          {m}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button href="/portfolio" variant="outline-dark" size="sm">
              View All Projects <i className="bi bi-arrow-right ms-1"></i>
            </Button>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ─── Products Preview ──────────────────────────── */}
      <section className="py-5 my-4">
        <Container>
          <SectionHeader
            label="Products"
            title="AI-Powered Platforms"
            subtitle="Production-ready tools built from our consulting expertise"
          />
          <Row className="g-4">
            {products.slice(0, 3).map((product) => (
              <Col md={4} key={product.id}>
                <Card className="h-100 border-0 card-glow" style={{ background: "var(--color-surface-elevated)" }}>
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="icon-box">
                        <i className={`bi ${product.icon} fs-4`}></i>
                      </div>
                      <Badge bg={product.status === "Live" ? "success" : "warning"}>
                        {product.status}
                      </Badge>
                    </div>
                    <h5 className="fw-semibold mb-2" style={{ letterSpacing: "-0.02em", color: "var(--color-text)" }}>{product.name}</h5>
                    <p className="small mb-0" style={{ lineHeight: 1.7, color: "var(--color-text-muted)" }}>{product.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button href="/products" variant="outline-dark" size="sm">
              All Products <i className="bi bi-arrow-right ms-1"></i>
            </Button>
          </div>
        </Container>
      </section>

      {/* ─── CTA ───────────────────────────────────────── */}
      <section className="hero-gradient grid-pattern text-white py-5 my-0 cta-section">
        <div className="hero-orb hero-orb-2" />
        <Container className="position-relative py-5" style={{ zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col lg={7} className="text-center">
              <h2 className="fw-bold mb-3" style={{ fontSize: "2.25rem", letterSpacing: "-0.03em" }}>
                Ready to Transform Your Business with{" "}
                <span className="gradient-text">AI</span>?
              </h2>
              <p className="mb-4" style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1.05rem" }}>
                Let's discuss how our solutions can drive measurable impact for your organization.
              </p>
              <Link to="/contact" className="btn btn-light btn-lg px-5 btn-glow" style={{ padding: "14px 36px" }}>
                Get in Touch <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
