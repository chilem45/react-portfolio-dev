import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import style from "./navigationStyles.scss";
import { Icon } from "@iconify/react";

const Navigationbar = () => {
  const expand = "lg";
  return (
    <>
      <ul class="nav justify-content-center nav-fill">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="#">
              <Icon icon="material-symbols:phone-enabled-outline" hFlip={true} />
              <span>+509 3128-2122</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Icon icon="material-symbols:mail-outline" />
                <span> chilemexantus@gmail.com</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <Navbar
        sticky="top"
        key={expand}
        className={style.navbar}
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
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
