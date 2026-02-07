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
            {services.map((service) => (
              <Col md={6} lg={4} key={service.id}>
                <Card className="h-100 border-0 shadow-sm card-lift" style={{ borderRadius: 12 }}>
                  <Card.Body className="p-4">
                    <div className="icon-box mb-3">
                      <i className={`bi ${service.icon} fs-4`}></i>
                    </div>
                    <h5 className="fw-semibold mb-2">{service.title}</h5>
                    <p className="text-secondary small mb-3">{service.description}</p>
                    <ul className="list-unstyled mb-0">
                      {service.features.map((feature) => (
                        <li key={feature} className="d-flex align-items-center gap-2 small text-secondary mb-2">
                          <i className="bi bi-check2 text-primary"></i>
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
                <div className="position-relative p-4">
                  <span className="step-number">{phase.step}</span>
                  <div className="position-relative" style={{ zIndex: 1 }}>
                    <h5 className="fw-semibold mb-2 mt-4">{phase.title}</h5>
                    <p className="text-secondary small mb-0">{phase.description}</p>
                  </div>
                </div>
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
                Need a Custom AI Solution?
              </h2>
              <p className="mb-4" style={{ color: "#94a3b8" }}>
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
