import React from "react";
import style from "./Home.scss";
import Square from "../services/composant_frangement/Square";
import { Terminal } from "../../index";
import { Icon } from "@iconify/react";
import { LogoSite } from "../../index";
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
                <Image
                  className="containerLeft-photo-col-square-col-icon"
                  src={process.env.PUBLIC_URL + "/images/logo site.png"}
                />
              </Col>
            </Row>
            <Row className="containerLeft-header">
              <h4>B.S Chilem EXANTUS</h4>
              <h5>Développeur Full Stack</h5>
            </Row>
            <Row className="containerLeft-body">
              <p>
                Jeune passionné par le monde du codage, de la programmation et
                de l'informatique, je m'intéresse à tous ces domaines. Je
                consacre un nombre d'heures indéterminé pour élaborer la
                meilleure solution possible dans la réalisation de tous projets
                qui me font face.
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
          </Col>
          <Col className="containerRight">
            <Row className="containerRight-photo">
              <Col className="containerRight-square">
                <Square size={15} id="containerRight-square-id" />
              </Col>
              <Col className="containerRight-photo-col-image">
                <Image
                  className="containerRight-photo-col-image-image"
                  src={process.env.PUBLIC_URL + "/images/profile.png"}
                />
              </Col>
              <Col className="containerRight-photo-col-square">
                <Row>
                  <LogoSite />
                </Row>
              </Col>
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
