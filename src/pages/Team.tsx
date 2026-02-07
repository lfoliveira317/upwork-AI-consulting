import { Container, Row, Col, Card } from "react-bootstrap";
import { PageHero, SectionHeader, Button } from "../components/UI";
import { team } from "../data/siteData";

export default function Team() {
  return (
    <>
      <PageHero
        badge="Team"
        title="Meet Our Team"
        subtitle="World-class AI researchers, engineers, and strategists committed to delivering exceptional results."
      />

      {/* ─── Team Grid ──────────────────────────────────── */}
      <section className="py-5 my-4">
        <Container>
          <SectionHeader
            label="Leadership"
            title="The People Behind the AI"
            subtitle="Decades of combined experience from the world's leading technology companies and research institutions"
          />
          <Row className="g-4">
            {team.map((member) => (
              <Col md={6} lg={4} key={member.name}>
                <Card className="h-100 border-0 shadow-sm card-lift text-center" style={{ borderRadius: 12 }}>
                  <Card.Body className="p-4">
                    <div
                      className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: 80,
                        height: 80,
                        backgroundColor: "#f1f5f9",
                        color: "#64748b",
                      }}
                    >
                      <i className={`bi ${member.icon}`} style={{ fontSize: "2rem" }}></i>
                    </div>
                    <h5 className="fw-semibold mb-1">{member.name}</h5>
                    <p className="text-primary small fw-medium mb-3">{member.role}</p>
                    <p className="text-secondary small mb-0" style={{ lineHeight: 1.7 }}>
                      {member.bio}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ─── Values ─────────────────────────────────────── */}
      <section className="py-5 my-4">
        <Container>
          <SectionHeader
            label="Our Values"
            title="What Drives Us"
            subtitle="The principles that guide every project and decision"
          />
          <Row className="g-4">
            {[
              {
                icon: "bi-bullseye",
                title: "Impact First",
                description: "Every solution we build is measured by the business value it creates. We don't do AI for AI's sake.",
              },
              {
                icon: "bi-people",
                title: "Client Partnership",
                description: "We work as an extension of your team, not as outside vendors. Your success is our success.",
              },
              {
                icon: "bi-lightbulb",
                title: "Continuous Innovation",
                description: "We stay at the frontier of AI research and bring the latest advances to practical business applications.",
              },
              {
                icon: "bi-lock",
                title: "Ethical AI",
                description: "We build responsible AI systems with fairness, transparency, and accountability at their core.",
              },
            ].map((value) => (
              <Col md={6} lg={3} key={value.title}>
                <div className="text-center p-3">
                  <div className="icon-box mx-auto mb-3">
                    <i className={`bi ${value.icon} fs-4`}></i>
                  </div>
                  <h6 className="fw-semibold mb-2">{value.title}</h6>
                  <p className="text-secondary small mb-0">{value.description}</p>
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
                Join Our Team
              </h2>
              <p className="mb-4" style={{ color: "#94a3b8" }}>
                We're always looking for talented people who are passionate about AI.
              </p>
              <Button href="/contact" variant="light" size="lg">
                Get in Touch <i className="bi bi-arrow-right ms-2"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
