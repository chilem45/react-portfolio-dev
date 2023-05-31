import { Container, Card, Row, Col } from "react-bootstrap";
import style from "./services.scss";
import { Icon } from "@iconify/react";
const Services = () => {
  return (
    <Card className="text-white" id="services">
      <Card.Img
        id="MySvg"
        src={process.env.PUBLIC_URL + "/images/World-Map.svg"}
        alt="Card image"
      />
      <Card.ImgOverlay id="cardImgOverlay">
        <h4>MES SERVICES</h4>
        <p id="cardImgOverlay-p">Des prestations adaptées à vos besoins</p>
        <Card.Text>
          <Row className="containerRow">
            <Col className="containerLeft">
              <Row className="containerLeft-row">
                <Col lg={2} className="container-row-col-2-xm">
                  <Icon className="iconService" icon="mdi:idea" />
                </Col>
                <Col>
                  <h5>GESTION DE PROJETS WEB</h5>
                  <p>
                    Site vitrine, corporate, évènementiel, e-commerce, intranet,
                    application mobile.
                  </p>
                </Col>
                <Col lg={2} className="containerLeft-row-col-2-lg">
                  <Icon className="iconService" icon="mdi:idea" />
                </Col>
              </Row>
              <Row className="containerLeft-row">
                <Col lg={2} className="container-row-col-2-xm">
                  <Icon className="iconService" icon="lucide:edit" />
                </Col>
                <Col>
                  <h5>INTÉGRATION WEB</h5>
                  <p>
                    Des intégrations (X)HTML / CSS respectueuses des standards
                    du Web.
                  </p>
                </Col>
                <Col lg={2} className="containerLeft-row-col-2-lg">
                  <Icon className="iconService" icon="lucide:edit" />
                </Col>
              </Row>
              <Row className="containerLeft-row">
                <Col lg={2} className="container-row-col-2-xm">
                  <Icon
                    className="iconService"
                    icon="streamline:interface-setting-wrench-crescent-tool-construction-tools-wrench-setting-edit-adjust"
                  />
                </Col>
                <Col>
                  <h5>DÉVELOPPEMENTS SPÉCIFIQUES</h5>
                  <p>
                    Des outils adaptés à votre coeur de métier, applications &
                    solutions personnalisées.
                  </p>
                </Col>
                <Col lg={2} className="containerLeft-row-col-2-lg">
                  <Icon
                    className="iconService"
                    icon="streamline:interface-setting-wrench-crescent-tool-construction-tools-wrench-setting-edit-adjust"
                  />
                </Col>
              </Row>
              <Row className="containerLeft-row">
                <Col lg={2} className="container-row-col-2-xm">
                  <Icon className="iconService" icon="raphael:checked" />
                </Col>
                <Col>
                  <h5>RÉFÉRENCEMENT NATUREL</h5>
                  <p>
                    Affichage sémantique des informations, des pages propres
                    pour un référencement optimal.
                  </p>
                </Col>
                <Col lg={2} className="containerLeft-row-col-2-lg">
                  <Icon className="iconService" icon="raphael:checked" />
                </Col>
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
                <Col lg={2} className="container-row-col-2-xm">
                  <Icon className="iconService" icon="line-md:pencil" />
                </Col>
                <Col>
                  <h5>CONCEPTION GRAPHIQUE & WEBDESIGN</h5>
                  <p>
                    Logos, templates Web, plaquettes publicitaires, cartes de
                    visite...
                  </p>
                </Col>
              </Row>
              <Row className="containerRight-row">
                <Col lg={2} className="container-row-col-2-xm">
                  <Icon className="iconService" icon="solar:refresh-outline" />
                </Col>
                <Col>
                  <h5>DYNAMISME DES PAGES</h5>
                  <p>
                    Des animations de contenu non intrusives pour embellir votre
                    projet.
                  </p>
                </Col>
              </Row>
              <Row className="containerRight-row">
                <Col lg={2} className="container-row-col-2-xm">
                  <Icon
                    className="iconService"
                    icon="icon-park-solid:setting"
                  />
                </Col>
                <Col>
                  <h5>INTERFACE D'ADMINISTRATION</h5>
                  <p>
                    Outils spécifiques au bon fonctionnement de votre
                    entreprise.
                  </p>
                </Col>
              </Row>
              <Row className="containerRight-row">
                <Col lg={2} className="container-row-col-2-xm">
                  <Icon
                    className="iconService"
                    icon="material-symbols:screen-rotation-up-rounded"
                    rotate={3}
                  />
                </Col>
                <Col>
                  <h5>RESPONSIVE DESIGN</h5>
                  <p>
                    Compatible tous supports, tablette & application mobile.
                  </p>
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
