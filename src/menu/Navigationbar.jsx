import React, { useState } from "react";
import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import style from "./navigationStyles.scss";

const Navigationbar = () => {
  const expand = "lg";
  const location = useLocation();
  const [selectedNavLink, setSelectedNavLink] = useState("");

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
          <Navbar.Brand href="/react-portfolio-dev/">B S C E</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink
                  eventKey="1"
                  as={Link}
                  to="/react-portfolio-dev/"
                  onClick={() => setSelectedNavLink("accueil") }
                  active={selectedNavLink === "accueil"}
                >
                  Accueil
                </NavLink>
                <NavLink
                  eventKey="2"
                  as={Link}
                  to="competences"
                  onClick={() => setSelectedNavLink("competences")}
                  active={selectedNavLink === "competences"}
                >
                  Compétences
                </NavLink>
                <NavLink
                  eventKey="5"
                  as={Link}
                  to="contact"
                  onClick={() => setSelectedNavLink("contact")}
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
