import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import style from "./navigationStyles.scss";
import { Icon } from "@iconify/react";
import { Col, Row } from "react-bootstrap";

const Navigationbar = () => {
  const expand = "lg";
  const heightsIcon = 22;
  const widthIcon = 22;
  return (
    <>
      <Navbar
        key={expand}
        className={"mb-3" + style.navbar}
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
        className={"mb-3" + style.navbar}
        variant="dark"
        expand={expand}
      >
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
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
                <Nav.Link href="#action1">Accueil</Nav.Link>
                <Nav.Link href="#action2">Services</Nav.Link>
                <Nav.Link href="#action3">Compétences</Nav.Link>
                <Nav.Link href="#action4">A propos</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
