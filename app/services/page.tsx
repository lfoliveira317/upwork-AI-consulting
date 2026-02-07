import type { Metadata } from "next";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { services } from "../data/siteData";
import { PageHero, Button } from "../components/UI";

export const metadata: Metadata = {
  title: "Services — Apex AI",
  description:
    "AI consulting and full-stack development. From strategy to production-ready tools.",
};

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We start with your actual operations — not a template. What are your goals, constraints, and data realities?",
    icon: "search",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We map out a concrete, prioritized plan. Every recommendation is tied to measurable outcomes.",
    icon: "map",
  },
  {
    step: "03",
    title: "Execution",
    description: "Depending on the engagement, we build, integrate, or hand off — with full documentation every step of the way.",
    icon: "rocket-takeoff",
  },
  {
    step: "04",
    title: "Handoff",
    description: "Your team takes ownership. We provide training, documentation, and optional ongoing support.",
    icon: "check2-circle",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Clear strategy. Reliable engineering."
        description="We offer two core services: AI consulting to help you figure out what to build, and full-stack development to build it. Both are designed to create lasting value, not vendor dependency."
      />

      {/* ─── Service Details ──────────────────────────── */}
      <Container className="py-5 my-4">
        <div className="d-flex flex-column gap-5">
          {services.map((service, i) => (
            <section key={service.id} id={service.id} className="scroll-mt-5">
              <Card className="border" style={{ borderRadius: 20, overflow: "hidden" }}>
                <Card.Body className="p-0">
                  <Row className="g-0">
                    {/* Accent sidebar */}
                    <Col lg={1} className="d-none d-lg-flex align-items-center justify-content-center"
                      style={{
                        background: i === 0
                          ? "linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)"
                          : "linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)",
                        minHeight: 300,
                      }}
                    >
                      <span
                        className="fw-bold"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                          fontSize: "0.75rem",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: i === 0 ? "#2563eb" : "#16a34a",
                        }}
                      >
                        0{i + 1} — {service.title}
                      </span>
                    </Col>

                    <Col lg={11}>
                      <div className="p-5">
                        <Row className="g-5">
                          {/* Left */}
                          <Col lg={5}>
                            <div className="icon-box mb-4" style={{
                              background: i === 0
                                ? "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)"
                                : "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
                            }}>
                              <i
                                className={`bi bi-${i === 0 ? "compass" : "braces"} fs-4`}
                                style={{ color: i === 0 ? "#2563eb" : "#16a34a" }}
                              />
                            </div>
                            <h2 className="fw-bold mb-2" style={{ fontSize: "1.75rem", color: "#0f172a", letterSpacing: "-0.02em" }}>
                              {service.title}
                            </h2>
                            <p className="fw-medium" style={{ color: "#94a3b8", fontSize: "1rem" }}>
                              {service.subtitle}
                            </p>
                          </Col>

                          {/* Right */}
                          <Col lg={7}>
                            <p style={{ fontSize: "1rem", color: "#475569", lineHeight: 1.8, marginBottom: "2rem" }}>
                              {service.description}
                            </p>

                            <p
                              className="fw-semibold mb-3"
                              style={{
                                fontSize: "0.75rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                                color: "#94a3b8",
                              }}
                            >
                              What this includes
                            </p>
                            <Row className="g-3">
                              {service.deliverables.map((item) => (
                                <Col sm={6} key={item}>
                                  <div className="d-flex align-items-start gap-2">
                                    <i
                                      className="bi bi-check2 flex-shrink-0 mt-1"
                                      style={{ color: i === 0 ? "#2563eb" : "#16a34a", fontSize: "1rem" }}
                                    />
                                    <span style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.5 }}>
                                      {item}
                                    </span>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </section>
          ))}
        </div>
      </Container>

      {/* ─── Process ──────────────────────────────────── */}
      <section className="py-5 my-4" style={{ backgroundColor: "#f8fafc" }}>
        <Container>
          <div className="text-center mb-5">
            <p
              className="fw-semibold mb-2"
              style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2563eb" }}
            >
              How we work
            </p>
            <h2 className="fw-bold" style={{ fontSize: "2rem", color: "#0f172a", letterSpacing: "-0.03em" }}>
              A straightforward process
            </h2>
          </div>

          <Row className="g-4">
            {processSteps.map((step, i) => (
              <Col md={6} lg={3} key={step.step}>
                <div className="position-relative p-4 h-100">
                  <span className="step-number">{step.step}</span>
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div className="icon-box mb-3">
                      <i className={`bi bi-${step.icon} fs-5`} />
                    </div>
                    <h4 className="fw-bold mb-2" style={{ fontSize: "1.1rem", color: "#0f172a" }}>
                      {step.title}
                    </h4>
                    <p className="mb-0" style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.7 }}>
                      {step.description}
                    </p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="d-none d-lg-block position-absolute top-50 end-0" style={{ transform: "translateX(50%)" }}>
                      <i className="bi bi-chevron-right" style={{ color: "#cbd5e1", fontSize: "1.2rem" }} />
                    </div>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ─── CTA ──────────────────────────────────────── */}
      <Container className="py-5 my-4">
        <Card
          className="border-0 text-white"
          style={{
            borderRadius: 20,
            background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
            overflow: "hidden",
          }}
        >
          <Card.Body className="p-5">
            <Row className="align-items-center">
              <Col lg={8}>
                <h3 className="fw-bold mb-2" style={{ fontSize: "1.5rem" }}>
                  Not sure which service fits?
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "1rem", maxWidth: 480 }}>
                  Most engagements start with a conversation. Tell us what you&apos;re working on and we&apos;ll suggest the right approach.
                </p>
              </Col>
              <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
                <Link href="/contact" className="btn btn-primary btn-lg px-5">
                  Let&apos;s talk <i className="bi bi-arrow-right ms-2" />
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
