import React from "react";
import style from "./Home.scss";
import Square from "../services/composant_frangement/Square";
import { Terminal } from "../../index";
import { Icon } from "@iconify/react";
import {
  Container,
  NavLink,
  Row,
  Col,
  Nav,
  Image,
  Ratio,
} from "react-bootstrap";
const Home = () => {
  const widthIcon = 19;
  const heightsIcon = 19;
  return (
    <>
      <Container fluid id="home">
        <Row className="containerRow">
          <Col className="containerLeft">
            <Row className="containerLeft-photo">
              <Col className="containerLeft-square">
                <Square size={11} id="containerLeft-square-id" />
              </Col>
              <Col className="containerLeft-photo-col-image">
                <Image
                  className="containerLeft-photo-col-image-image"
                  src={process.env.PUBLIC_URL + "/images/profile.png"}
                />
              </Col>
              <Col className="containerLeft-photo-col-square">
                <Row>
                  <Col className="containerLeft-photo-col-square-col">
                    <Terminal className="containerLeft-photo-col-square-col-icon" />
                  </Col>
                  <Col
                    className="containerLeft-photo-col-square-col-input-field"
                    xm={1}
                  >
                    <Row className="input-field"></Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="containerLeft-header">
              <h4>B.S Chilem EXANTUS</h4>
              <h5>Développeur Full Stack</h5>
            </Row>
            <Row className="containerLeft-body">
              <p>
                Jeune de 25 ans passionné par le monde du codage, de la
                programmation et de l'informatique, je m'intéresse à tous ces
                domaines. Je consacre un nombre d'heures indéterminé pour
                élaborer la meilleure solution possible dans la réalisation de
                tous projets qui me font face.
              </p>
              <Row className="containerLeft-body-icon">
                <Nav className="nav justify-content-center">
                  <NavLink id="facebookIcon" href="h">
                    <Icon
                      icon="line-md:facebook"
                      width={widthIcon}
                      height={heightsIcon}
                    />
                  </NavLink>
                  <NavLink id="instagramIcon">
                    <Icon
                      icon="line-md:instagram"
                      width={widthIcon}
                      height={heightsIcon}
                    />
                  </NavLink>
                  <NavLink id="githubIcon">
                    <Icon
                      icon="line-md:github-loop"
                      width={widthIcon}
                      height={heightsIcon}
                    />
                  </NavLink>
                  <NavLink id="linkedinIcon">
                    <Icon
                      icon="line-md:linkedin"
                      width={widthIcon}
                      height={heightsIcon}
                    />
                  </NavLink>
                </Nav>
              </Row>
            </Row>
            <Row className="containerRight-contact">
              <Nav class="nav justify-content-center" id="nav-02">
                <NavLink>
                  <Icon
                    icon="material-symbols:phone-enabled-outline"
                    width={widthIcon}
                    height={heightsIcon}
                    hFlip={true}
                  />
                  <span>+509 3128-2122</span>
                  <span>/</span>
                  <span>+509 4369-5462</span>
                </NavLink>
                <NavLink>
                  <Icon
                    icon="line-md:email"
                    width={widthIcon}
                    height={heightsIcon}
                  />
                  <span> chilemexantus@gmail.com</span>
                </NavLink>
              </Nav>
            </Row>
          </Col>
          <Col className="containerRight">
            <Row className="containerRight-photo">
              <Col className="containerRight-square">
                <Square size={11} id="containerRight-square-id" />
              </Col>
              <Col className="containerRight-photo-col-image">
                <Image
                  className="containerRight-photo-col-image-image"
                  src={process.env.PUBLIC_URL + "/images/profile.png"}
                />
              </Col>
              <Col className="containerRight-photo-col-square">
                <Row>
                  <Col className="containerRight-photo-col-square-col">
                    <Terminal className="containerRight-photo-col-square-col-icon" />
                  </Col>
                  <Col
                    className="containerRight-photo-col-square-col-input-field"
                    lg={1}
                    md={1}
                    sm={1}
                    xm={1}
                  >
                    <Row className="input-field"></Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="containerRight-contact">
              <Nav class="nav justify-content-center" id="nav-02">
                <NavLink>
                  <Icon
                    icon="material-symbols:phone-enabled-outline"
                    width={widthIcon}
                    height={heightsIcon}
                    hFlip={true}
                  />
                  <span>+509 3128-2122</span>
                  <span>/</span>
                  <span>+509 4369-5462</span>
                </NavLink>
                <NavLink>
                  <Icon
                    icon="line-md:email"
                    width={widthIcon}
                    height={heightsIcon}
                  />
                  <span> chilemexantus@gmail.com</span>
                </NavLink>
              </Nav>
            </Row>
          </Col>
          <Row className="containerLeft-square">
            <Square size={10} id="containerLeft-square-id" />
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Home;
