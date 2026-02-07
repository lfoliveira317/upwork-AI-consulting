import type { Metadata } from "next";
import { Container, Row, Col, Card } from "react-bootstrap";
import { products } from "../data/siteData";
import { PageHero } from "../components/UI";

export const metadata: Metadata = {
  title: "Products — Apex AI",
  description:
    "Production-ready tools and platforms built by Apex AI. Internal products now part of our company portfolio.",
};

const productIcons: Record<string, string> = {
  Beacon: "speedometer2",
  DocScheduler: "calendar-check",
  ContainerTrack: "truck",
  CalculatorHub: "calculator",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Tools we've built and maintain"
        description="These are products developed in-house — some started as internal tools, others as client solutions. They now sit under our company portfolio and are actively maintained."
      />

      <Container className="py-5 my-4">
        <Row className="g-4">
          {products.map((product, i) => (
            <Col md={6} key={product.name}>
              <Card className="h-100 border card-lift" style={{ borderRadius: 16, overflow: "hidden" }}>
                {/* Colored top bar */}
                <div
                  style={{
                    height: 4,
                    background: product.status === "Active"
                      ? "linear-gradient(90deg, #16a34a, #22c55e)"
                      : "linear-gradient(90deg, #d97706, #f59e0b)",
                  }}
                />
                <Card.Body className="p-5 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: 52,
                        height: 52,
                        backgroundColor: product.status === "Active" ? "#f0fdf4" : "#fffbeb",
                      }}
                    >
                      <i
                        className={`bi bi-${productIcons[product.name] || "box-seam"} fs-4`}
                        style={{
                          color: product.status === "Active" ? "#16a34a" : "#d97706",
                        }}
                      />
                    </div>
                    <span
                      className={`badge d-flex align-items-center ${
                        product.status === "Active" ? "status-active" : ""
                      }`}
                      style={{
                        backgroundColor: product.status === "Active" ? "#f0fdf4" : "#fffbeb",
                        color: product.status === "Active" ? "#16a34a" : "#d97706",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "6px 12px",
                        borderRadius: 100,
                      }}
                    >
                      {product.status}
                    </span>
                  </div>

                  <h2 className="fw-bold mb-3" style={{ fontSize: "1.4rem", color: "#0f172a" }}>
                    {product.name}
                  </h2>
                  <p className="flex-grow-1" style={{ fontSize: "0.925rem", color: "#475569", lineHeight: 1.7 }}>
                    {product.description}
                  </p>

                  <div className="mt-4 pt-4 border-top">
                    <p
                      className="fw-semibold mb-1"
                      style={{
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "#94a3b8",
                      }}
                    >
                      Purpose
                    </p>
                    <p className="mb-0" style={{ fontSize: "0.9rem", color: "#334155", fontWeight: 500 }}>
                      {product.purpose}
                    </p>
                  </div>

                  {product.url && (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-inline-flex align-items-center gap-2 fw-semibold text-decoration-none mt-4"
                      style={{ fontSize: "0.9rem", color: "#2563eb" }}
                    >
                      View product <i className="bi bi-arrow-up-right" />
                    </a>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
