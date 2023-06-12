import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Nav, NavLink } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import style from "./navigationStyles.scss";
import { Icon } from "@iconify/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Navigationbar = () => {
  const expand = "lg";
  const heightsIcon = 18;
  const widthIcon = 18;

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>

      <Navbar
        sticky="top"
        key={expand}
        id="secondNavbar"
        className={"mb-3" + style.navbar}
        variant="dark"
        expand={expand}
      >
        <Container fluid>
          <Navbar.Brand href="#">B S C E</Navbar.Brand>
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
                <Nav.Link evenKey="1" as={Link} to="/">
                  Accueil
                </Nav.Link>
                <NavLink evenKey="2" as={Link} to="/competences">
                  Compétences
                </NavLink>
                <NavLink evenKey="3" as={Link} to="/services">
                  Services
                </NavLink>
                <NavLink evenKey="5" as={Link} to="/contact">
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
