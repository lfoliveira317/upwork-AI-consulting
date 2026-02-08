import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { PageHero, SectionHeader, Button } from "../components/UI";
import { products } from "../data/siteData";

export default function Products() {
  return (
    <>
      <PageHero
        badge="Products"
        title="AI-Powered Platforms"
        subtitle="Production-ready tools and platforms built from years of consulting expertise. Proven solutions you can deploy today."
      />

      {/* ─── Products Grid ──────────────────────────────── */}
      <section className="py-5 my-4">
        <Container>
          <SectionHeader
            label="Our Platforms"
            title="Enterprise-Ready AI Products"
            subtitle="Each product is battle-tested across multiple enterprise deployments"
          />
          <Row className="g-4">
            {products.map((product, i) => (
              <Col md={6} key={product.id}>
                <Card className={`h-100 border-0 shadow-sm card-glow animate-fade-in-up delay-${(i % 2) + 1}`}>
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="icon-box">
                        <i className={`bi ${product.icon} fs-4`}></i>
                      </div>
                      <Badge bg={product.status === "Live" ? "success" : "warning"}>
                        {product.status}
                      </Badge>
                    </div>
                    <h4 className="fw-semibold mb-2" style={{ letterSpacing: "-0.02em" }}>{product.name}</h4>
                    <p className="text-secondary mb-3" style={{ lineHeight: 1.7 }}>{product.description}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
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

      <div className="section-divider" />

      {/* ─── Why Our Products ───────────────────────────── */}
      <section className="py-5 my-4">
        <Container>
          <SectionHeader
            label="Why Choose Us"
            title="Built Different"
            subtitle="Our products are born from real-world consulting engagements, not hypothetical use cases"
          />
          <Row className="g-4">
            {[
              {
                icon: "bi-shield-check",
                title: "Enterprise Security",
                description: "SOC 2 Type II compliant. End-to-end encryption. Role-based access control. Deployed in regulated industries.",
              },
              {
                icon: "bi-arrow-repeat",
                title: "Continuous Learning",
                description: "Models improve automatically with your data. Feedback loops built into every product for ongoing accuracy gains.",
              },
              {
                icon: "bi-plug",
                title: "Easy Integration",
                description: "REST APIs, webhooks, and native connectors for popular enterprise tools. Up and running in days, not months.",
              },
              {
                icon: "bi-headset",
                title: "Dedicated Support",
                description: "Direct access to the engineering team that built the product. SLA-backed support with guaranteed response times.",
              },
            ].map((feature) => (
              <Col md={6} lg={3} key={feature.title}>
                <div className="feature-card">
                  <div className="icon-box mx-auto mb-3">
                    <i className={`bi ${feature.icon} fs-4`}></i>
                  </div>
                  <h6 className="fw-semibold mb-2">{feature.title}</h6>
                  <p className="text-secondary small mb-0" style={{ lineHeight: 1.7 }}>{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section className="hero-gradient grid-pattern text-white py-5 cta-section">
        <div className="hero-orb hero-orb-1" />
        <Container className="position-relative py-4" style={{ zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col lg={7} className="text-center">
              <h2 className="fw-bold mb-3" style={{ fontSize: "2rem", letterSpacing: "-0.03em" }}>
                Want a <span className="gradient-text">Demo</span>?
              </h2>
              <p className="mb-4" style={{ color: "#94a3b8", lineHeight: 1.8 }}>
                See our products in action with a personalized walkthrough.
              </p>
              <Button href="/contact" variant="light" size="lg">
                Request a Demo <i className="bi bi-arrow-right ms-2"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
