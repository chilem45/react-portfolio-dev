import React, { useState } from "react";
import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import style from "./navigationStyles.scss";

const Navigationbar = () => {
  const expand = "lg";
  const location = useLocation();
  const [selectedNavLink, setSelectedNavLink] = useState("accueil");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleNavLinkClick = (navLink) => {
    setSelectedNavLink(navLink);
    setTimeout(() => {
      setShowOffcanvas(false);
    }, 800);
  };

  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  const handleOffcanvasShow = () => {
    setShowOffcanvas(true);
  };

  return (
    <>
      <Navbar
        location={location}
        fixed="top"
        key={expand}
        id="secondNavbar"
        className={"mb-3" + style.navbar}
        variant="dark"
        expand={expand}
      >
        <Container fluid>
          <Navbar.Brand href="/react-portfolio-dev/" className="navbar-brand">
            Développeur Full Stack
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            onClick={handleOffcanvasShow}
          />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={handleOffcanvasClose}
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink
                  eventKey="1"
                  as={Link}
                  to="/react-portfolio-dev/"
                  onClick={() => handleNavLinkClick("accueil")}
                  active={selectedNavLink === "accueil"}
                >
                  Accueil
                </NavLink>
                <NavLink
                  eventKey="2"
                  as={Link}
                  to="/react-portfolio-dev/competences"
                  onClick={() => handleNavLinkClick("competences")}
                  active={selectedNavLink === "competences"}
                >
                  Compétences
                </NavLink>
                <NavLink
                  eventKey="5"
                  as={Link}
                  to="/react-portfolio-dev/contact"
                  onClick={() => handleNavLinkClick("contact")}
                  active={selectedNavLink === "contact"}
                >
                  Contactez-moi
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
