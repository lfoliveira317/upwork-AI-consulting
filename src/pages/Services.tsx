import { Container, Row, Col, Card } from "react-bootstrap";
import { PageHero, SectionHeader, Button } from "../components/UI";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <>
      <PageHero
        badge="Services"
        title="AI & ML Services"
        subtitle="End-to-end artificial intelligence solutions tailored to your business needs. From strategy to deployment, we've got you covered."
      />

      {/* ─── Services Grid ──────────────────────────────── */}
      <section className="py-5 my-4">
        <Container>
          <SectionHeader
            label="What We Offer"
            title="Comprehensive AI Solutions"
            subtitle="Each service is backed by deep expertise and proven methodologies"
          />
          <Row className="g-4">
            {services.map((service, i) => (
              <Col md={6} lg={4} key={service.id}>
                <Card className={`h-100 border-0 shadow-sm card-glow animate-fade-in-up delay-${(i % 3) + 1}`}>
                  <Card.Body className="p-4">
                    <div className="icon-box mb-3">
                      <i className={`bi ${service.icon} fs-4`}></i>
                    </div>
                    <h5 className="fw-semibold mb-2" style={{ letterSpacing: "-0.02em" }}>{service.title}</h5>
                    <p className="text-secondary small mb-3" style={{ lineHeight: 1.7 }}>{service.description}</p>
                    <ul className="list-unstyled mb-0">
                      {service.features.map((feature) => (
                        <li key={feature} className="d-flex align-items-center gap-2 small text-secondary mb-2">
                          <i className="bi bi-check-circle-fill" style={{ color: "var(--color-primary)", fontSize: "0.7rem" }}></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ─── Process ────────────────────────────────────── */}
      <section className="py-5 my-4">
        <Container>
          <SectionHeader
            label="Our Process"
            title="How We Work"
            subtitle="A proven methodology that ensures successful AI implementation"
          />
          <Row className="g-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your business processes, data landscape, and objectives to identify the highest-impact AI opportunities.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our team architects a solution that fits your technical environment, data constraints, and scalability requirements.",
              },
              {
                step: "03",
                title: "Develop",
                description:
                  "Iterative development with regular checkpoints. We build, test, and refine until the solution meets performance targets.",
              },
              {
                step: "04",
                title: "Deploy",
                description:
                  "Production deployment with monitoring, documentation, and knowledge transfer to ensure long-term success.",
              },
            ].map((phase) => (
              <Col md={6} lg={3} key={phase.step}>
                <div className="feature-card position-relative">
                  <span className="step-number">{phase.step}</span>
                  <div className="position-relative" style={{ zIndex: 1 }}>
                    <h5 className="fw-semibold mb-2 mt-4" style={{ letterSpacing: "-0.02em" }}>{phase.title}</h5>
                    <p className="text-secondary small mb-0" style={{ lineHeight: 1.7 }}>{phase.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section className="hero-gradient grid-pattern text-white py-5 cta-section">
        <div className="hero-orb hero-orb-2" />
        <Container className="position-relative py-4" style={{ zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col lg={7} className="text-center">
              <h2 className="fw-bold mb-3" style={{ fontSize: "2rem", letterSpacing: "-0.03em" }}>
                Need a Custom <span className="gradient-text">AI Solution</span>?
              </h2>
              <p className="mb-4" style={{ color: "#94a3b8", lineHeight: 1.8 }}>
                Tell us about your challenge and we'll design the right approach.
              </p>
              <Button href="/contact" variant="light" size="lg">
                Start a Conversation <i className="bi bi-arrow-right ms-2"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
