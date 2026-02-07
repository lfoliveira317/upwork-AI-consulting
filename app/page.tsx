import Link from "next/link";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { company, services, products, portfolio } from "./data/siteData";
import { SectionHeader, Button, StatCard } from "./components/UI";

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────── */}
      <section
        className="hero-gradient grid-pattern text-white"
        style={{ paddingTop: "9rem", paddingBottom: "6rem" }}
      >
        <Container style={{ position: "relative", zIndex: 1 }}>
          <Row className="align-items-center">
            <Col lg={7}>
              <Badge
                className="mb-4 px-3 py-2 fw-semibold"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  backgroundColor: "rgba(37, 99, 235, 0.2)",
                  color: "#93c5fd",
                  border: "1px solid rgba(37, 99, 235, 0.3)",
                }}
              >
                AI Consulting &amp; Development
              </Badge>
              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                }}
              >
                {company.tagline}
              </h1>
              <p
                className="mb-5"
                style={{
                  fontSize: "1.2rem",
                  color: "#94a3b8",
                  lineHeight: 1.7,
                  maxWidth: 520,
                }}
              >
                {company.description}
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary btn-lg px-5">
                  Start a conversation
                  <i className="bi bi-arrow-right ms-2" />
                </Link>
                <Link
                  href="/services"
                  className="btn btn-outline-light btn-lg px-5"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  What we do
                </Link>
              </div>
            </Col>
            <Col lg={5} className="d-none d-lg-block">
              <div
                className="rounded-4 p-5 ms-auto"
                style={{
                  maxWidth: 380,
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="d-flex flex-column gap-4">
                  {[
                    { icon: "lightbulb", label: "Strategy & Consulting", desc: "Clear AI adoption roadmaps" },
                    { icon: "code-slash", label: "Full-Stack Development", desc: "Production-ready AI tools" },
                    { icon: "box-seam", label: "Products", desc: "Tools built & maintained in-house" },
                  ].map((item) => (
                    <div key={item.label} className="d-flex gap-3 align-items-start">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{
                          width: 44,
                          height: 44,
                          backgroundColor: "rgba(37, 99, 235, 0.15)",
                        }}
                      >
                        <i className={`bi bi-${item.icon}`} style={{ color: "#60a5fa", fontSize: "1.1rem" }} />
                      </div>
                      <div>
                        <p className="mb-0 fw-semibold text-white" style={{ fontSize: "0.9rem" }}>
                          {item.label}
                        </p>
                        <p className="mb-0" style={{ fontSize: "0.8rem", color: "#64748b" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ─── Stats Bar ────────────────────────────────── */}
      <section className="py-5 bg-white border-bottom">
        <Container>
          <Row className="g-4">
            {[
              { value: "50+", label: "Projects delivered", icon: "check-circle" },
              { value: "12", label: "Active products", icon: "box-seam" },
              { value: "98%", label: "Client retention", icon: "people" },
              { value: "<24h", label: "Response time", icon: "clock" },
            ].map((stat) => (
              <Col xs={6} md={3} key={stat.label}>
                <StatCard value={stat.value} label={stat.label} icon={stat.icon} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ─── Services Overview ────────────────────────── */}
      <section className="py-5 my-4">
        <Container>
          <SectionHeader
            eyebrow="Services"
            title="Two ways we work with you"
            description="Whether you need a clear strategy or a production-ready product, we cover both."
          />

          <Row className="g-4">
            {services.map((service, i) => (
              <Col md={6} key={service.id}>
                <Card className="h-100 border card-lift" style={{ borderRadius: 16 }}>
                  <Card.Body className="p-5">
                    <div className="icon-box mb-4">
                      <i className={`bi bi-${i === 0 ? "compass" : "braces"} fs-4`} />
                    </div>
                    <h3 className="fw-bold mb-2" style={{ fontSize: "1.35rem", color: "#0f172a" }}>
                      {service.title}
                    </h3>
                    <p className="mb-4" style={{ fontSize: "0.9rem", color: "#94a3b8", fontWeight: 500 }}>
                      {service.subtitle}
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.7 }}>
                      {service.description}
                    </p>
                    <Link
                      href={`/services#${service.id}`}
                      className="d-inline-flex align-items-center gap-2 fw-semibold text-decoration-none mt-2"
                      style={{ fontSize: "0.9rem", color: "#0f172a" }}
                    >
                      Learn more <i className="bi bi-arrow-right" />
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ─── Products Preview ─────────────────────────── */}
      <section className="py-5 my-4" style={{ backgroundColor: "#f8fafc" }}>
        <Container>
          <SectionHeader
            eyebrow="Products"
            title="What we've built"
            description="Tools and platforms developed in-house, now part of our company portfolio."
          />

          <Row className="g-4">
            {products.slice(0, 4).map((product) => (
              <Col sm={6} lg={3} key={product.name}>
                <Card className="h-100 border card-lift" style={{ borderRadius: 16 }}>
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: 44,
                          height: 44,
                          backgroundColor: product.status === "Active" ? "#f0fdf4" : "#fffbeb",
                        }}
                      >
                        <i
                          className="bi bi-box-seam"
                          style={{
                            color: product.status === "Active" ? "#16a34a" : "#d97706",
                            fontSize: "1.1rem",
                          }}
                        />
                      </div>
                      <span
                        className={`badge ${
                          product.status === "Active"
                            ? "status-active"
                            : ""
                        }`}
                        style={{
                          backgroundColor: product.status === "Active" ? "#f0fdf4" : "#fffbeb",
                          color: product.status === "Active" ? "#16a34a" : "#d97706",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          padding: "5px 10px",
                          borderRadius: 100,
                        }}
                      >
                        {product.status}
                      </span>
                    </div>
                    <h4 className="fw-bold mb-2" style={{ fontSize: "1.1rem", color: "#0f172a" }}>
                      {product.name}
                    </h4>
                    <p className="flex-grow-1" style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
                      {product.description}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-5">
            <Button href="/products" variant="secondary" icon="grid">
              View all products
            </Button>
          </div>
        </Container>
      </section>

      {/* ─── Selected Work Preview ────────────────────── */}
      <section className="py-5 my-4">
        <Container>
          <SectionHeader
            eyebrow="Portfolio"
            title="Selected work"
            description="Real problems, practical approaches, measurable outcomes."
          />

          <div className="d-flex flex-column gap-4">
            {portfolio.slice(0, 2).map((entry, i) => (
              <Card key={i} className="border" style={{ borderRadius: 16 }}>
                <Card.Body className="p-5">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <h3 className="fw-bold mb-0" style={{ fontSize: "1.2rem", color: "#0f172a", maxWidth: "80%" }}>
                      {entry.title}
                    </h3>
                    <span
                      className="fw-bold"
                      style={{ fontSize: "0.8rem", color: "#cbd5e1", fontFamily: "monospace" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <Row className="g-4">
                    {[
                      { label: "Problem", text: entry.problem, icon: "exclamation-triangle", color: "#ef4444" },
                      { label: "Approach", text: entry.approach, icon: "tools", color: "#2563eb" },
                      { label: "Outcome", text: entry.outcome, icon: "graph-up-arrow", color: "#16a34a" },
                    ].map((col) => (
                      <Col md={4} key={col.label}>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <i className={`bi bi-${col.icon}`} style={{ color: col.color, fontSize: "0.85rem" }} />
                          <p
                            className="mb-0 fw-semibold"
                            style={{
                              fontSize: "0.7rem",
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              color: "#94a3b8",
                            }}
                          >
                            {col.label}
                          </p>
                        </div>
                        <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.7 }}>
                          {col.text}
                        </p>
                      </Col>
                    ))}
                  </Row>

                  <div className="d-flex flex-wrap gap-2 mt-3 pt-3 border-top">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>

          <div className="mt-5">
            <Button href="/portfolio" variant="secondary" icon="collection">
              See all work
            </Button>
          </div>
        </Container>
      </section>

      {/* ─── CTA ──────────────────────────────────────── */}
      <section
        className="hero-gradient grid-pattern text-white"
        style={{ padding: "5rem 0" }}
      >
        <Container className="text-center" style={{ position: "relative", zIndex: 1 }}>
          <h2
            className="fw-bold mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em" }}
          >
            Ready to talk?
          </h2>
          <p className="mx-auto mb-5" style={{ color: "#94a3b8", fontSize: "1.1rem", maxWidth: 480, lineHeight: 1.7 }}>
            Whether you need a strategy session or a full build, we&apos;d like to hear what you&apos;re working on.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary btn-lg px-5"
          >
            Get in touch <i className="bi bi-arrow-right ms-2" />
          </Link>
        </Container>
      </section>
    </>
  );
}
