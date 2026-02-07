import type { Metadata } from "next";
import { Container, Row, Col, Card } from "react-bootstrap";
import { team } from "../data/siteData";
import { PageHero } from "../components/UI";

export const metadata: Metadata = {
  title: "Team — Apex AI",
  description: "Meet the people behind Apex AI.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="The people behind the work"
        description="A small, senior team. Everyone here builds, consults, or both. No account managers, no layers."
      />

      <Container className="py-5 my-4">
        <Row className="g-4">
          {team.map((member, i) => (
            <Col md={6} lg={4} key={member.name}>
              <Card className="h-100 border card-lift" style={{ borderRadius: 16, overflow: "hidden" }}>
                {/* Photo / placeholder */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    height: 200,
                    background: [
                      "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
                      "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
                      "linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)",
                    ][i % 3],
                  }}
                >
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <span
                      className="fw-bold"
                      style={{
                        fontSize: "3rem",
                        color: [
                          "rgba(37, 99, 235, 0.2)",
                          "rgba(22, 163, 74, 0.2)",
                          "rgba(202, 138, 4, 0.2)",
                        ][i % 3],
                      }}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>

                <Card.Body className="p-4">
                  <h3 className="fw-bold mb-1" style={{ fontSize: "1.15rem", color: "#0f172a" }}>
                    {member.name}
                  </h3>
                  <p
                    className="fw-medium mb-3"
                    style={{
                      fontSize: "0.8rem",
                      color: "#2563eb",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {member.role}
                  </p>
                  <p className="mb-0" style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.7 }}>
                    {member.bio}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Join us callout */}
        <Card
          className="border-0 mt-5"
          style={{
            borderRadius: 20,
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          }}
        >
          <Card.Body className="p-5 text-center">
            <div className="icon-box mx-auto mb-3">
              <i className="bi bi-person-plus fs-4" />
            </div>
            <h3 className="fw-bold mb-2" style={{ fontSize: "1.3rem", color: "#0f172a" }}>
              Want to work with us?
            </h3>
            <p className="mx-auto mb-0" style={{ fontSize: "0.925rem", color: "#64748b", maxWidth: 420, lineHeight: 1.7 }}>
              We&apos;re always interested in hearing from experienced engineers and consultants who care about craft and clarity.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
