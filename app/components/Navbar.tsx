"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container, Nav, Navbar as BSNavbar, Offcanvas } from "react-bootstrap";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      className="bg-white bg-opacity-90 border-bottom py-2"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <Container>
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2" style={{ textDecoration: "none" }}>
          <div
            className="d-flex align-items-center justify-content-center rounded"
            style={{
              width: 36,
              height: 36,
              background: "linear-gradient(135deg, #0f172a 0%, #2563eb 100%)",
            }}
          >
            <i className="bi bi-cpu text-white" style={{ fontSize: "1rem" }} />
          </div>
          <span className="fw-bold fs-5" style={{ letterSpacing: "-0.03em", color: "#0f172a" }}>
            Apex AI
          </span>
        </Link>

        <BSNavbar.Toggle
          aria-controls="main-nav"
          onClick={() => setShow(true)}
          className="border-0 shadow-none"
        />

        {/* Desktop nav */}
        <BSNavbar.Collapse id="main-nav" className="d-none d-lg-flex">
          <Nav className="ms-auto align-items-center gap-1">
            {navLinks.map((link) => (
              <Nav.Item key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link px-3 py-2 rounded-2 ${
                    pathname === link.href
                      ? "fw-semibold text-dark bg-light"
                      : "text-secondary"
                  }`}
                  style={{ fontSize: "0.875rem", transition: "all 0.15s ease" }}
                >
                  {link.label}
                </Link>
              </Nav.Item>
            ))}
            <Nav.Item className="ms-2">
              <Link href="/contact" className="btn btn-dark btn-sm px-4 py-2">
                Get in touch
              </Link>
            </Nav.Item>
          </Nav>
        </BSNavbar.Collapse>

        {/* Mobile offcanvas */}
        <Offcanvas show={show} onHide={() => setShow(false)} placement="end" className="d-lg-none">
          <Offcanvas.Header closeButton className="border-bottom">
            <Offcanvas.Title>
              <span className="fw-bold" style={{ color: "#0f172a" }}>Apex AI</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column gap-1">
              {navLinks.map((link) => (
                <Nav.Item key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setShow(false)}
                    className={`nav-link px-3 py-3 rounded-2 ${
                      pathname === link.href
                        ? "fw-semibold text-dark bg-light"
                        : "text-secondary"
                    }`}
                    style={{ fontSize: "1rem" }}
                  >
                    {link.label}
                  </Link>
                </Nav.Item>
              ))}
              <div className="mt-3 pt-3 border-top">
                <Link
                  href="/contact"
                  onClick={() => setShow(false)}
                  className="btn btn-dark w-100 py-3"
                >
                  Get in touch
                </Link>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </BSNavbar>
  );
}
