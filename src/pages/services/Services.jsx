import { Container, Card, Row, Col } from "react-bootstrap";
import style from "./services.scss";
import { Icon } from "@iconify/react";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
const Services = () => {
  const ElementH5 = ({ text }) => {
    return (
      <Row data-aos={"fade-up"}>
        <h5>{text}</h5>
      </Row>
    );
  };
  const ElementP = ({ text }) => {
    return (
      <Row data-aos={"fade-down"}>
        <p>{text}</p>
      </Row>
    );
  };
  const Rowicon = ({ icon, className }) => {
    return (
      <Col lg={2} className={className} data-aos={"flip-right"}>
        <Icon className="iconService" icon={icon} />
      </Col>
    );
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Card className="text-white" id="services">
      <Card.Img
        id="MySvg"
        src={process.env.PUBLIC_URL + "/images/World-Map.svg"}
        alt="Card image"
      />
      <Card.ImgOverlay id="cardImgOverlay">
        <Row data-aos={"fade-down"}>
          <h4>MES SERVICES</h4>
        </Row>
        <Row data-aos={"fade-up"}>
          <p id="cardImgOverlay-p">Des prestations adaptées à vos besoins</p>
        </Row>
        <Card.Text>
          <Row className="containerRow">
            <Col className="containerLeft">
              <Row className="containerLeft-row">
                <Rowicon
                  className={"container-row-col-2-xm"}
                  icon={"mdi:idea"}
                />
                <Col>
                  <ElementH5 text={`GESTION DE PROJETS WEB`} />
                  <ElementP
                    text={` Site vitrine, corporate, 
                     évènementiel, e-commerce, intranet,  application mobile.`}
                  />
                </Col>
                <Rowicon
                  className={"containerLeft-row-col-2-lg"}
                  icon={"mdi:idea"}
                />
              </Row>
              <Row className="containerLeft-row">
                <Rowicon
                  className={"container-row-col-2-xm"}
                  icon={"lucide:edit"}
                />

                <Col>
                  <ElementH5 text={`INTÉGRATION WEB`} />
                  <ElementP
                    text={` Des intégrations (X)HTML / CSS respectueuses des standards
                    du Web.`}
                  />
                </Col>
                <Rowicon
                  className={"containerLeft-row-col-2-lg"}
                  icon={"lucide:edit"}
                />
              </Row>
              <Row className="containerLeft-row">
                <Rowicon
                  className={"container-row-col-2-xm"}
                  icon={
                    "streamline:interface-setting-wrench-crescent-tool-construction-tools-wrench-setting-edit-adjust"
                  }
                />

                <Col>
                  <ElementH5 text={`DÉVELOPPEMENTS SPÉCIFIQUES`} />
                  <ElementP
                    text={`
                    Des outils adaptés à votre coeur de métier, applications &
                    solutions personnalisées.`}
                  />
                </Col>
                <Rowicon
                  className={"containerLeft-row-col-2-lg"}
                  icon={
                    "streamline:interface-setting-wrench-crescent-tool-construction-tools-wrench-setting-edit-adjust"
                  }
                />
              </Row>
              <Row className="containerLeft-row">
                <Rowicon
                  className={"container-row-col-2-xm"}
                  icon={"raphael:checked"}
                />

                <Col>
                  <ElementH5 text={`RÉFÉRENCEMENT NATUREL`} />
                  <ElementP
                    text={`
                    Affichage sémantique des informations, des pages propres
                    pour un référencement optimal.
                  `}
                  />
                </Col>
                <Rowicon
                  className={"containerLeft-row-col-2-lg"}
                  icon={"raphael:checked"}
                />
              </Row>
            </Col>
            <Col lg={2} id="col-image-lg2">
              <Card.Img
                src={process.env.PUBLIC_URL + "/images/pc.png"}
                alt="Card image"
              />
            </Col>
            <Col className="containerRight">
              <Row className="containerRight-row">
                <Rowicon
                  className={"container-row-col-2-xm"}
                  icon={"line-md:pencil"}
                />

                <Col>
                  <ElementH5 text={`CONCEPTION GRAPHIQUE & WEBDESIGN`} />
                  <ElementP
                    text={`
                    Logos, templates Web, plaquettes publicitaires, cartes de
                    visite...
                  `}
                  />
                </Col>
              </Row>
              <Row className="containerRight-row">
                <Rowicon
                  className={"container-row-col-2-xm"}
                  icon={"solar:refresh-outline"}
                />

                <Col>
                  <ElementH5 text={`DYNAMISME DES PAGES`} />
                  <ElementP
                    text={`Des animations de contenu non intrusives pour embellir votre
                    projet.`}
                  />
                </Col>
              </Row>
              <Row className="containerRight-row">
                <Rowicon
                  className={"container-row-col-2-xm"}
                  icon={"icon-park-solid:setting"}
                />
                <Col>
                  <ElementH5 text={`INTERFACE D'ADMINISTRATION`} />
                  <ElementP
                    text={`
                    Outils spécifiques au bon fonctionnement de votre
                    entreprise.`}
                  />
                </Col>
              </Row>
              <Row className="containerRight-row">
                <Rowicon
                  className={"container-row-col-2-xm"}
                  icon={"material-symbols:screen-rotation-up-rounded"}
                />
                <Col>
                  <ElementH5 text={`RESPONSIVE DESIGN`} />
                  <ElementP
                    text={`
                    Compatible tous supports, tablette & application mobile.`}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Services;
