import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Nav, NavLink } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import style from "./navigationStyles.scss";
import { Icon } from "@iconify/react";
import Aos from "aos";
import "aos/dist/aos.css";
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
        key={expand}
        className={"mb-3" + style.navbar}
        id="firstNavbar"
        variant="dark"
        expand={expand}
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <Nav class="nav justify-content-start" id="nav-01">
              <NavLink data-aos={"fade-down"} id="facebookIcon">
                <Icon
                  icon="line-md:facebook"
                  hFlip={true}
                  width={widthIcon}
                  height={heightsIcon}
                />
              </NavLink>
              <NavLink data-aos={"fade-up"} id="instagramIcon">
                <Icon
                  icon="line-md:instagram"
                  hFlip={true}
                  width={widthIcon}
                  height={heightsIcon}
                />
              </NavLink>
              <NavLink data-aos={"fade-down"} id="githubIcon">
                <Icon
                  icon="line-md:github-loop"
                  hFlip={true}
                  width={widthIcon}
                  height={heightsIcon}
                />
              </NavLink>
              <NavLink data-aos={"fade-up"} id="linkedinIcon">
                <Icon
                  icon="line-md:linkedin"
                  width={widthIcon}
                  height={heightsIcon}
                />
              </NavLink>
            </Nav>
          </Navbar.Brand>
          <Navbar.Text>
            <Nav class="nav justify-content-end" id="nav-02">
              <NavLink data-aos={"fade-up"}>
                <Icon
                  icon="material-symbols:phone-enabled-outline"
                  width={widthIcon}
                  height={heightsIcon}
                  hFlip={true}
                />
                <span>+509 3128-2122</span>
              </NavLink>
              <NavLink data-aos={"fade-down"}>
                <Icon
                  icon="line-md:email"
                  width={widthIcon}
                  height={heightsIcon}
                />
                <span> chilemexantus@gmail.com</span>
              </NavLink>
            </Nav>
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
                <NavLink evenKey="1" onClick={() => scrollToComponent("home")}>
                  Accueil
                </NavLink>
                <NavLink
                  evenKey="2"
                  onClick={() => scrollToComponent("competences")}
                >
                  Compétences
                </NavLink>
                <NavLink
                  evenKey="3"
                  onClick={() => scrollToComponent("services")}
                >
                  Services
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
