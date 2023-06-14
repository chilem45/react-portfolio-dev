import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Aos from "aos";
import "aos/dist/aos.css";
import style from "./competences.scss";
import PanelComponement from "./PanelComponent";
import Square from "../services/composant_frangement/Square";
import Rowicon from "../services/composant_frangement/RowIcon";
import ElementH5 from "../services/composant_frangement/ElementH5";
import ElementP from "../services/composant_frangement/ElementP";
import {
  Php,
  Figma,
  VueIcon,
  ReactIcon,
  JavaEE,
  AdobeXd,
  JqueryIcon,
  Bootstrap,
  HtmlCssJs,
  Springboot,
} from "../../index";

const Competences = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [Aos.duration]);
  return (
    <Container fluid id="competences">
      <Row className="containerRow">
        <Row id="competences-01-container">
          <Row data-aos={"fade-down"}>
            <h4>Mes Compétences</h4>
          </Row>
        </Row>
        <Row >
          <Col className="containerLeft">
            <Row className="containerLeft-row">
              <Rowicon
                className={"container-row-col-2-xm"}
                icon={"gg:radio-checked"}
              />

              <Col>
                <ElementH5 text={`CONCEPTION GRAPHIQUE & WEBDESIGN`} />
                <ElementP
                  text={`Logos, templates Web, plaquettes publicitaires, cartes de visite, newsletters...`}
                />
              </Col>
            </Row>
            <Row className="containerLeft-row">
              <Rowicon
                className={"container-row-col-2-xm"}
                icon={"gg:radio-checked"}
              />

              <Col>
                <ElementH5
                  text={`APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION`}
                />
                <ElementP
                  text={`
                    Html - CSS - JS - Bootstrap - React.js - Vue.js - JQuery `}
                />
              </Col>
            </Row>
            <Row className="containerLeft-row">
              <Rowicon
                className={"container-row-col-2-xm"}
                icon={"gg:radio-checked"}
              />

              <Col>
                <ElementH5 text={`INTÉGRATION (X)HTML / CSS`} />
                <ElementP
                  text={`
                Codage à la main respectueux des standards du Web
                  `}
                />
              </Col>
            </Row>
            <Row className="containerLeft-row">
              <Rowicon
                className={"container-row-col-2-xm"}
                icon={"gg:radio-checked"}
              />

              <Col>
                <ElementH5 text={`CREATION D'API`} />
                <ElementP
                  text={`développer une interface qui permet à différentes applications
                 d'échanger des informations entre elles de manière organisée. `}
                />
              </Col>
            </Row>
            <Row className="containerLeft-row">
              <Rowicon
                className={"container-row-col-2-xm"}
                icon={"gg:radio-checked"}
              />

              <Col>
                <ElementH5 text={`INTEGRATION API`} />
                <ElementP
                  text={`créer une liaison et d'établir un échange de
                 données entre différentes applications ou systèmes.`}
                />
              </Col>
            </Row>
            <Row className="containerLeft-row">
              <Rowicon
                className={"container-row-col-2-xm"}
                icon={"gg:radio-checked"}
              />
              <Col>
                <ElementH5 text={`CONCEPTION MULTI-PLATEFORMES`} />
                <ElementP
                  text={`
                Compatible tous supports, tablette & application mobile  `}
                />
              </Col>
            </Row>
            <Row className="containerLeft-row">
              <Rowicon
                className={"container-row-col-2-xm"}
                icon={"gg:radio-checked"}
              />
              <Col>
                <ElementH5 text={`VALIDATION W3C, RÉFÉRENCEMENT NATUREL SEO`} />
                <ElementP text={`Accessibilité & ergonomie des pages web`} />
              </Col>
            </Row>
          </Col>
          <Col className="containerRight" lg={7}>
            <Row className="containerRight-row-header">
              <ElementH5 text={`Frontend`} />
            </Row>
            <Row className="containerRight-row">
              <PanelComponement
                SrcImage={HtmlCssJs}
                niveau={95}
                label={"HTML, CSS, JS"}
              />
            </Row>
            <Row className="containerRight-row">
              <PanelComponement
                SrcImage={Bootstrap}
                niveau={90}
                label={"Bootstrap"}
              />
            </Row>
            <Row className="containerRight-row">
              <PanelComponement
                SrcImage={JqueryIcon}
                niveau={80}
                label={"JQuery"}
              />
            </Row>
            <Row className="containerRight-row">
              <PanelComponement
                SrcImage={VueIcon}
                niveau={70}
                label={"Vue.js"}
              />
            </Row>
            <Row className="containerRight-row">
              <PanelComponement
                SrcImage={ReactIcon}
                niveau={80}
                label={"React.js"}
              />
            </Row>
            <Row className="containerRight-row-header">
              <ElementH5 text={`Backend`} />
            </Row>
            <Row className="containerRight-row">
              <PanelComponement
                SrcImage={Springboot}
                niveau={70}
                label={"Java(springboot)"}
              />
            </Row>
            <Row className="containerRight-row">
              <PanelComponement
                SrcImage={JavaEE}
                niveau={65}
                label={"Java EE"}
              />
            </Row>
            <Row className="containerRight-row">
              <PanelComponement SrcImage={Php} niveau={60} label={"PHP"} />
            </Row>
          </Col>
        </Row>
        <Row className="containerLeft-square">
            <Square size={10} id="containerLeft-square-id" />
          </Row>
      </Row>
    </Container>
  );
};

export default Competences;
