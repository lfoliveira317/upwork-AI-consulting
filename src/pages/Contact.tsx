import { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { PageHero } from "../components/UI";
import { company } from "../data/siteData";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        badge="Contact"
        title="Let's Talk"
        subtitle="Ready to explore how AI can transform your business? We'd love to hear from you."
      />

      <section className="py-5 my-4">
        <Container>
          <Row className="g-5">
            {/* ─── Contact Form ──────────────────────────── */}
            <Col lg={7}>
              <Card className="border-0 shadow-sm card-glow animate-fade-in-up delay-1">
                <Card.Body className="p-4 p-lg-5">
                  {submitted ? (
                    <div className="text-center py-5">
                      <div
                        className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: 64,
                          height: 64,
                          backgroundColor: "#dcfce7",
                          color: "#16a34a",
                        }}
                      >
                        <i className="bi bi-check-lg fs-3"></i>
                      </div>
                      <h4 className="fw-semibold mb-2">Message Sent!</h4>
                      <p className="text-secondary">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h4 className="fw-semibold mb-1">Send us a message</h4>
                      <p className="text-secondary small mb-4">
                        Fill out the form below and we'll get back to you within one business day.
                      </p>
                      <Form onSubmit={handleSubmit}>
                        <Row className="g-3">
                          <Col sm={6}>
                            <Form.Group>
                              <Form.Label className="small fw-medium">First Name</Form.Label>
                              <Form.Control type="text" placeholder="John" required style={{ borderRadius: 8 }} />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group>
                              <Form.Label className="small fw-medium">Last Name</Form.Label>
                              <Form.Control type="text" placeholder="Doe" required style={{ borderRadius: 8 }} />
                            </Form.Group>
                          </Col>
                          <Col xs={12}>
                            <Form.Group>
                              <Form.Label className="small fw-medium">Work Email</Form.Label>
                              <Form.Control type="email" placeholder="john@company.com" required style={{ borderRadius: 8 }} />
                            </Form.Group>
                          </Col>
                          <Col xs={12}>
                            <Form.Group>
                              <Form.Label className="small fw-medium">Company</Form.Label>
                              <Form.Control type="text" placeholder="Company Inc." style={{ borderRadius: 8 }} />
                            </Form.Group>
                          </Col>
                          <Col xs={12}>
                            <Form.Group>
                              <Form.Label className="small fw-medium">What are you interested in?</Form.Label>
                              <Form.Select style={{ borderRadius: 8 }}>
                                <option>AI Strategy Consulting</option>
                                <option>ML Engineering</option>
                                <option>Data Engineering</option>
                                <option>NLP Solutions</option>
                                <option>Computer Vision</option>
                                <option>Product Demo</option>
                                <option>Other</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col xs={12}>
                            <Form.Group>
                              <Form.Label className="small fw-medium">Message</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Tell us about your project or challenge..."
                                required
                                style={{ borderRadius: 8, resize: "none" }}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={12}>
                            <button type="submit" className="btn btn-dark w-100">
                              Send Message <i className="bi bi-arrow-right ms-2"></i>
                            </button>
                          </Col>
                        </Row>
                      </Form>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>

            {/* ─── Contact Info ──────────────────────────── */}
            <Col lg={5}>
              <div className="d-flex flex-column gap-4">
                {[
                  {
                    icon: "bi-envelope",
                    title: "Email",
                    detail: company.email,
                    sub: "We respond within 24 hours",
                  },
                  {
                    icon: "bi-telephone",
                    title: "Phone",
                    detail: company.phone,
                    sub: "Mon-Fri, 9am-6pm PT",
                  },
                  {
                    icon: "bi-geo-alt",
                    title: "Office",
                    detail: company.address,
                    sub: "By appointment only",
                  },
                ].map((item) => (
                  <Card key={item.title} className="border-0 shadow-sm card-glow">
                    <Card.Body className="p-4 d-flex gap-3">
                      <div className="icon-box flex-shrink-0">
                        <i className={`bi ${item.icon} fs-5`}></i>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1">{item.title}</h6>
                        <p className="mb-0 small">{item.detail}</p>
                        <p className="mb-0 text-secondary" style={{ fontSize: "0.75rem" }}>
                          {item.sub}
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                ))}

                {/* Social */}
                <Card className="border-0 shadow-sm card-glow">
                  <Card.Body className="p-4">
                    <h6 className="fw-semibold mb-3">Follow Us</h6>
                    <div className="d-flex gap-2">
                      {Object.entries(company.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className="social-icon text-decoration-none"
                          style={{ background: "linear-gradient(135deg, #eff6ff, #f0f9ff)" }}
                        >
                          <i className={`bi bi-${platform}`}></i>
                        </a>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
