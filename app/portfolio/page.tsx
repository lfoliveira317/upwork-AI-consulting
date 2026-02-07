import type { Metadata } from "next";
import { Container, Row, Col, Card } from "react-bootstrap";
import { portfolio } from "../data/siteData";
import { PageHero } from "../components/UI";

export const metadata: Metadata = {
  title: "Portfolio — Apex AI",
  description:
    "Selected work from Apex AI. Real problems, practical approaches, measurable outcomes.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected work"
        description="Each entry follows the same structure: what was the problem, how we approached it, and what happened. No embellishment."
      />

      <Container className="py-5 my-4">
        <div className="d-flex flex-column gap-5">
          {portfolio.map((entry, i) => (
            <Card key={i} className="border" style={{ borderRadius: 20, overflow: "hidden" }}>
              <Card.Body className="p-0">
                <Row className="g-0">
                  {/* Number accent */}
                  <Col
                    lg={1}
                    className="d-none d-lg-flex align-items-center justify-content-center"
                    style={{
                      background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
                      minHeight: 280,
                    }}
                  >
                    <span
                      className="fw-bold"
                      style={{
                        fontSize: "3rem",
                        color: "#e2e8f0",
                        fontFamily: "monospace",
                        letterSpacing: "-0.05em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Col>

                  <Col lg={11}>
                    <div className="p-5">
                      <h2 className="fw-bold mb-4" style={{ fontSize: "1.35rem", color: "#0f172a", letterSpacing: "-0.02em" }}>
                        {entry.title}
                      </h2>

                      <Row className="g-4 mb-4">
                        {[
                          { label: "Problem", text: entry.problem, icon: "exclamation-triangle", color: "#ef4444", bg: "#fef2f2" },
                          { label: "Approach", text: entry.approach, icon: "tools", color: "#2563eb", bg: "#eff6ff" },
                          { label: "Outcome", text: entry.outcome, icon: "graph-up-arrow", color: "#16a34a", bg: "#f0fdf4" },
                        ].map((col) => (
                          <Col md={4} key={col.label}>
                            <div
                              className="rounded-3 p-4 h-100"
                              style={{ backgroundColor: col.bg }}
                            >
                              <div className="d-flex align-items-center gap-2 mb-3">
                                <div
                                  className="rounded-2 d-flex align-items-center justify-content-center"
                                  style={{
                                    width: 32,
                                    height: 32,
                                    backgroundColor: "rgba(255,255,255,0.8)",
                                  }}
                                >
                                  <i className={`bi bi-${col.icon}`} style={{ color: col.color, fontSize: "0.85rem" }} />
                                </div>
                                <span
                                  className="fw-semibold"
                                  style={{
                                    fontSize: "0.7rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    color: col.color,
                                  }}
                                >
                                  {col.label}
                                </span>
                              </div>
                              <p className="mb-0" style={{ fontSize: "0.875rem", color: "#334155", lineHeight: 1.7 }}>
                                {col.text}
                              </p>
                            </div>
                          </Col>
                        ))}
                      </Row>

                      <div className="d-flex flex-wrap gap-2 pt-3 border-top">
                        {entry.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
