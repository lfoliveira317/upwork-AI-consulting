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
        style={{ minHeight: "92vh", paddingTop: "6rem" }}
      >
        <Container className="position-relative" style={{ zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <span
                className="d-inline-block px-3 py-1 rounded-pill mb-4 status-active"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                Now accepting new enterprise clients
              </span>

              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                }}
              >
                AI Solutions That
                <br />
                <span style={{ color: "#60a5fa" }}>Drive Results</span>
              </h1>

              <p
                className="mx-auto mb-5"
                style={{
                  color: "#94a3b8",
                  fontSize: "1.15rem",
                  lineHeight: 1.8,
                  maxWidth: 560,
                }}
              >
                {company.description}
              </p>

              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/contact" className="btn btn-light btn-lg px-4">
                  Start a Project <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <Link
                  to="/portfolio"
                  className="btn btn-outline-light btn-lg px-4"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  View Our Work
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ─── Stats ─────────────────────────────────────── */}
      <section className="py-5" style={{ backgroundColor: "#fff", borderBottom: "1px solid #e5e7eb" }}>
        <Container>
          <Row className="g-4">
            {stats.map((stat) => (
              <Col xs={6} md={3} key={stat.label}>
                <StatCard value={stat.value} label={stat.label} />
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
            {services.slice(0, 3).map((service) => (
              <Col md={4} key={service.id}>
                <Card className="h-100 border-0 shadow-sm card-lift" style={{ borderRadius: 12 }}>
                  <Card.Body className="p-4">
                    <div className="icon-box mb-3">
                      <i className={`bi ${service.icon} fs-4`}></i>
                    </div>
                    <h5 className="fw-semibold mb-2">{service.title}</h5>
                    <p className="text-secondary small mb-3">{service.description}</p>
                    <ul className="list-unstyled mb-0">
                      {service.features.slice(0, 2).map((f) => (
                        <li key={f} className="d-flex align-items-center gap-2 small text-secondary mb-1">
                          <i className="bi bi-check2 text-primary"></i> {f}
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
                <Card className="h-100 border-0 shadow-sm card-lift" style={{ borderRadius: 12 }}>
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <Badge bg="light" text="dark" className="px-2 py-1" style={{ fontSize: "0.7rem" }}>
                        {project.industry}
                      </Badge>
                      <span className="text-secondary" style={{ fontSize: "0.75rem" }}>
                        {project.client}
                      </span>
                    </div>
                    <h5 className="fw-semibold mb-2">{project.title}</h5>
                    <p className="text-secondary small mb-3">{project.description}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {project.metrics.map((m) => (
                        <span key={m} className="tag">
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
                <Card className="h-100 border-0 shadow-sm card-lift" style={{ borderRadius: 12 }}>
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="icon-box">
                        <i className={`bi ${product.icon} fs-4`}></i>
                      </div>
                      <Badge
                        bg={product.status === "Live" ? "success" : "warning"}
                        className="px-2 py-1"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <h5 className="fw-semibold mb-2">{product.name}</h5>
                    <p className="text-secondary small mb-0">{product.description}</p>
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
      <section className="hero-gradient grid-pattern text-white py-5 my-0">
        <Container className="position-relative py-5" style={{ zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col lg={7} className="text-center">
              <h2 className="fw-bold mb-3" style={{ letterSpacing: "-0.03em" }}>
                Ready to Transform Your Business with AI?
              </h2>
              <p className="mb-4" style={{ color: "#94a3b8", lineHeight: 1.7 }}>
                Let's discuss how our solutions can drive measurable impact for your organization.
              </p>
              <Link to="/contact" className="btn btn-light btn-lg px-4">
                Get in Touch <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
