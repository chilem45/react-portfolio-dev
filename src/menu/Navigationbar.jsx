import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Nav, NavLink } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import style from "./navigationStyles.scss";
import { Icon } from "@iconify/react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  const expand = "lg";
  const heightsIcon = 15;
  const widthIcon = 15;

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar
        key={expand}
        className={"mb-3" + style.navbar}
        id="firstNavbar"
        variant="dark"
        expand={expand}
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <ul class="nav">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="facebookIcon"
                  aria-current="page"
                  href="#"
                >
                  <Icon
                    icon="cib:facebook-f"
                    hFlip={true}
                    width={widthIcon}
                    height={heightsIcon}
                  />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="instagramIcon"
                  aria-current="page"
                  href="#"
                >
                  <Icon
                    icon="cib:instagram"
                    hFlip={true}
                    width={widthIcon}
                    height={heightsIcon}
                  />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="githubIcon"
                  aria-current="page"
                  href="#"
                >
                  <Icon
                    icon="cib:github"
                    hFlip={true}
                    width={widthIcon}
                    height={heightsIcon}
                  />
                </a>
              </li>
            </ul>
          </Navbar.Brand>
          <Navbar.Text>
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Icon
                    icon="material-symbols:phone-enabled-outline"
                    width={widthIcon}
                    height={heightsIcon}
                    hFlip={true}
                  />
                  <span>+509 3128-2122</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Icon
                    icon="material-symbols:mail-outline"
                    width={widthIcon}
                    height={heightsIcon}
                  />
                  <span> chilemexantus@gmail.com</span>
                </a>
              </li>
            </ul>
          </Navbar.Text>
        </Container>
      </Navbar>

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
                <NavLink
                  evenKey="1"
                  onClick={() => scrollToComponent("home")}
                >
                  Accueil
                </NavLink>
                <NavLink
                  evenKey="2"
                  onClick={() => scrollToComponent("services")}
                >
                  Services
                </NavLink>
                <NavLink
                  evenKey="3"
                  onClick={() => scrollToComponent("competence")}
                >
                  Compétences
                </NavLink>
                <NavLink
                  evenKey="4"
                  onClick={() => scrollToComponent("apropos")}
                >
                  A propos
                </NavLink>
                <NavLink
                  evenKey="5"
                  onClick={() => scrollToComponent("apropos")}
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
