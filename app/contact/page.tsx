"use client";

import { useState, type FormEvent } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { company } from "../data/siteData";
import { PageHero } from "../components/UI";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us what you're working on. We'll get back to you within one business day."
      />

      <Container className="py-5 my-4">
        <Row className="g-5">
          {/* Form */}
          <Col lg={7}>
            {submitted ? (
              <Card className="border-0" style={{ borderRadius: 16, backgroundColor: "#f0fdf4" }}>
                <Card.Body className="p-5 text-center">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                    style={{ width: 64, height: 64, backgroundColor: "#dcfce7" }}
                  >
                    <i className="bi bi-check-lg fs-2" style={{ color: "#16a34a" }} />
                  </div>
                  <h3 className="fw-bold mb-2" style={{ color: "#14532d", fontSize: "1.3rem" }}>
                    Message sent
                  </h3>
                  <p style={{ color: "#166534", fontSize: "0.95rem" }}>
                    Thanks for reaching out. We&apos;ll be in touch soon.
                  </p>
                </Card.Body>
              </Card>
            ) : (
              <Card className="border" style={{ borderRadius: 16 }}>
                <Card.Body className="p-5">
                  <h3 className="fw-bold mb-1" style={{ fontSize: "1.3rem", color: "#0f172a" }}>
                    Send us a message
                  </h3>
                  <p className="mb-4" style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
                    Fill out the form below and we&apos;ll get back to you shortly.
                  </p>

                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3 mb-3">
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium" style={{ fontSize: "0.85rem", color: "#334155" }}>
                            Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            required
                            placeholder="Your name"
                            style={{ borderRadius: 10, padding: "12px 16px", fontSize: "0.9rem" }}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium" style={{ fontSize: "0.85rem", color: "#334155" }}>
                            Email
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            required
                            placeholder="you@company.com"
                            style={{ borderRadius: 10, padding: "12px 16px", fontSize: "0.9rem" }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-medium" style={{ fontSize: "0.85rem", color: "#334155" }}>
                        Company <span style={{ color: "#94a3b8", fontWeight: 400 }}>(optional)</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="company"
                        placeholder="Company name"
                        style={{ borderRadius: 10, padding: "12px 16px", fontSize: "0.9rem" }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-medium" style={{ fontSize: "0.85rem", color: "#334155" }}>
                        What are you looking for?
                      </Form.Label>
                      <Form.Select
                        name="service"
                        style={{ borderRadius: 10, padding: "12px 16px", fontSize: "0.9rem" }}
                      >
                        <option value="">Select an option</option>
                        <option value="consulting">AI Consulting</option>
                        <option value="development">AI Full-Stack Development</option>
                        <option value="both">Both</option>
                        <option value="other">Something else</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-medium" style={{ fontSize: "0.85rem", color: "#334155" }}>
                        Tell us about your project
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        required
                        placeholder="What problem are you trying to solve? What does success look like?"
                        style={{ borderRadius: 10, padding: "12px 16px", fontSize: "0.9rem", resize: "none" }}
                      />
                    </Form.Group>

                    <button type="submit" className="btn btn-dark px-5 py-3 w-100 w-sm-auto">
                      <i className="bi bi-send me-2" />
                      Send message
                    </button>
                  </Form>
                </Card.Body>
              </Card>
            )}
          </Col>

          {/* Sidebar */}
          <Col lg={5}>
            <div className="d-flex flex-column gap-4">
              {/* Email */}
              <Card className="border" style={{ borderRadius: 16 }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="icon-box flex-shrink-0">
                      <i className="bi bi-envelope fs-5" />
                    </div>
                    <div>
                      <p
                        className="fw-semibold mb-1"
                        style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#94a3b8" }}
                      >
                        Email
                      </p>
                      <a
                        href={`mailto:${company.email}`}
                        className="fw-semibold text-decoration-none"
                        style={{ color: "#0f172a", fontSize: "1rem" }}
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Calendar */}
              {company.calendarLink && (
                <Card className="border" style={{ borderRadius: 16 }}>
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-start gap-3">
                      <div className="icon-box flex-shrink-0">
                        <i className="bi bi-calendar3 fs-5" />
                      </div>
                      <div>
                        <p
                          className="fw-semibold mb-1"
                          style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#94a3b8" }}
                        >
                          Schedule a call
                        </p>
                        <a
                          href={company.calendarLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fw-semibold text-decoration-none d-inline-flex align-items-center gap-2"
                          style={{ color: "#2563eb", fontSize: "0.95rem" }}
                        >
                          Book a time <i className="bi bi-arrow-up-right" style={{ fontSize: "0.8rem" }} />
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              )}

              {/* Response time */}
              <Card className="border" style={{ borderRadius: 16 }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="icon-box flex-shrink-0">
                      <i className="bi bi-clock fs-5" />
                    </div>
                    <div>
                      <p
                        className="fw-semibold mb-1"
                        style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#94a3b8" }}
                      >
                        Response time
                      </p>
                      <p className="mb-0" style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.6 }}>
                        We respond within one business day. If your project is time-sensitive, mention that in your message.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Trust signals */}
              <Card
                className="border-0"
                style={{
                  borderRadius: 16,
                  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                }}
              >
                <Card.Body className="p-4">
                  <div className="d-flex flex-column gap-3">
                    {[
                      { icon: "shield-check", text: "100% confidential — NDAs available" },
                      { icon: "globe", text: "Working with teams across time zones" },
                      { icon: "lightning-charge", text: "Most projects start within 2 weeks" },
                    ].map((item) => (
                      <div key={item.text} className="d-flex align-items-center gap-3">
                        <i className={`bi bi-${item.icon}`} style={{ color: "#2563eb", fontSize: "1rem" }} />
                        <span style={{ fontSize: "0.85rem", color: "#475569" }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
