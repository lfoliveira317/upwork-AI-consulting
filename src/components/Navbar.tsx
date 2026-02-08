import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar as BSNavbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { company, navigation } from "../data/siteData";

export default function Navbar() {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <BSNavbar
      fixed="top"
      expand="lg"
      className={`py-2 animate-fade-in-down ${scrolled ? "shadow-sm" : ""}`}
      style={{
        backgroundColor: scrolled ? "rgba(8, 12, 20, 0.95)" : "rgba(8, 12, 20, 0.6)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <Container>
        <BSNavbar.Brand
          as={Link}
          to="/"
          className="fw-bold d-flex align-items-center gap-2"
          style={{ color: "#e2e8f0", letterSpacing: "-0.03em", fontSize: "1.15rem" }}
        >
          <span
            className="d-flex align-items-center justify-content-center"
            style={{
              width: 36,
              height: 36,
              background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
              color: "#fff",
              fontSize: "0.9rem",
              fontWeight: 700,
              borderRadius: 10,
              boxShadow: "0 2px 12px rgba(14, 165, 233, 0.3)",
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
          data-bs-theme="dark"
          style={{ backgroundColor: "#0d1117" }}
        >
          <Offcanvas.Header closeButton className="border-0" data-bs-theme="dark">
            <Offcanvas.Title className="fw-bold text-white">{company.name}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="" style={{ backgroundColor: "#0d1117" }}>
            <Nav className="ms-auto align-items-lg-center gap-lg-1">
              {navigation.map((item) => (
                <Nav.Link
                  key={item.href}
                  as={Link}
                  to={item.href}
                  onClick={() => setShowMenu(false)}
                  className={`px-3 py-2 rounded-2 ${
                    pathname === item.href
                      ? "fw-semibold text-white"
                      : ""
                  }`}
                  style={{
                    fontSize: "0.9rem",
                    backgroundColor: pathname === item.href ? "rgba(14, 165, 233, 0.1)" : "transparent",
                    color: pathname === item.href ? "#38bdf8" : "#8892a4",
                  }}
                >
                  {item.name}
                </Nav.Link>
              ))}
              <Link
                to="/contact"
                className="btn btn-dark btn-sm ms-lg-3 mt-2 mt-lg-0"
                style={{ padding: "9px 22px", fontSize: "0.875rem", borderRadius: 10 }}
                onClick={() => setShowMenu(false)}
              >
                Get Started <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </Nav>
          </Offcanvas.Body>
        </BSNavbar.Offcanvas>
      </Container>
    </BSNavbar>
  );
}
