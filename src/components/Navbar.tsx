import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar as BSNavbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { company, navigation } from "../data/siteData";

export default function Navbar() {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <BSNavbar
      fixed="top"
      expand="lg"
      className="py-3"
      style={{ backgroundColor: "rgba(255,255,255,0.92)", borderBottom: "1px solid #e5e7eb" }}
    >
      <Container>
        <BSNavbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-5 d-flex align-items-center gap-2"
          style={{ color: "#0f172a", letterSpacing: "-0.03em" }}
        >
          <span
            className="d-flex align-items-center justify-content-center rounded-2"
            style={{
              width: 32,
              height: 32,
              background: "linear-gradient(135deg, #0f172a, #1e3a5f)",
              color: "#fff",
              fontSize: "0.85rem",
              fontWeight: 700,
            }}
          >
            A
          </span>
          {company.name}
        </BSNavbar.Brand>

        <BSNavbar.Toggle
          aria-controls="main-nav"
          onClick={() => setShowMenu(true)}
          className="border-0 shadow-none"
        />

        <BSNavbar.Offcanvas
          id="main-nav"
          placement="end"
          show={showMenu}
          onHide={() => setShowMenu(false)}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fw-bold">{company.name}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto align-items-lg-center gap-lg-1">
              {navigation.map((item) => (
                <Nav.Link
                  key={item.href}
                  as={Link}
                  to={item.href}
                  onClick={() => setShowMenu(false)}
                  className={`px-3 py-2 rounded-2 ${
                    pathname === item.href
                      ? "fw-semibold"
                      : "text-secondary"
                  }`}
                  style={{
                    fontSize: "0.9rem",
                    backgroundColor: pathname === item.href ? "#f1f5f9" : "transparent",
                  }}
                >
                  {item.name}
                </Nav.Link>
              ))}
              <Link
                to="/contact"
                className="btn btn-dark btn-sm ms-lg-2 mt-2 mt-lg-0"
                style={{ padding: "8px 20px", fontSize: "0.875rem" }}
                onClick={() => setShowMenu(false)}
              >
                Get Started
              </Link>
            </Nav>
          </Offcanvas.Body>
        </BSNavbar.Offcanvas>
      </Container>
    </BSNavbar>
  );
}
