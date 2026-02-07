import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { PageHero, SectionHeader, Button } from "../components/UI";
import { portfolio, stats } from "../data/siteData";
import { StatCard } from "../components/UI";

export default function Portfolio() {
  return (
    <>
      <PageHero
        badge="Portfolio"
        title="Our Work"
        subtitle="Real-world AI implementations delivering measurable business impact across industries."
      />

      {/* ─── Stats ──────────────────────────────────────── */}
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

      {/* ─── Case Studies ───────────────────────────────── */}
      <section className="py-5 my-4">
        <Container>
          <SectionHeader
            label="Case Studies"
            title="Featured Projects"
            subtitle="Detailed look at how we've helped enterprise clients achieve their AI goals"
          />
          <Row className="g-4">
            {portfolio.map((project) => (
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
                    <h4 className="fw-semibold mb-2">{project.title}</h4>
                    <p className="text-secondary mb-3">{project.description}</p>

                    {/* Metrics */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="px-2 py-1 rounded-2"
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            backgroundColor: "#eff6ff",
                            color: "#2563eb",
                          }}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="d-flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section className="hero-gradient grid-pattern text-white py-5">
        <Container className="position-relative py-4" style={{ zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col lg={7} className="text-center">
              <h2 className="fw-bold mb-3" style={{ letterSpacing: "-0.03em" }}>
                Want Similar Results?
              </h2>
              <p className="mb-4" style={{ color: "#94a3b8" }}>
                Let's discuss how we can deliver measurable AI impact for your business.
              </p>
              <Button href="/contact" variant="light" size="lg">
                Start a Project <i className="bi bi-arrow-right ms-2"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
