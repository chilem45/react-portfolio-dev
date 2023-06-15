import React, { useState } from "react";
import style from "./Contact.scss";
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
  Form,
  Button,
} from "react-bootstrap";
import Rowicon from "../services/composant_frangement/RowIcon";
import ElementH5 from "../services/composant_frangement/ElementH5";
import ElementP from "../services/composant_frangement/ElementP";
const Contact = () => {
  const widthIcon = 19;
  const heightsIcon = 19;

  const [name, setName] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <Container fluid id="contact">
        <Row className="containerRow">
          <Col className="containerLeft" lg={7}>
            <Row className="containerLeft-square">
              <Col className="containerLeft-square-col">
                <Square size={11} id="containerLeft-square-id" />
              </Col>
            </Row>
            <Row className="containerLeft-content">
              <Row className="containerLeft-header">
                <h4>Entrer en contact</h4>
                <p id="containerLeft-header-p1">
                  Utilisez ce formulaire de contact pour toute demande
                  d'information ou contactez-moi directement en utilisant les
                  coordonnées ci-dessous.
                </p>
                <p id="containerLeft-header-p2">
                  N'hésitez pas à me contacter par e-mail ou par téléphone
                </p>
                <hr />
              </Row>
              <Row>
                <Row className="containerLeft-body">
                  <Row className="containerLeft-row">
                    <Rowicon
                      className={"container-row-col-2-xm"}
                      icon={"mdi:address-marker"}
                    />
                    <Col>
                      <ElementH5 text={`Domicile`} />
                      <ElementP
                        text={`
                    39, 2eme Avenue Bolosse, Port-au-Prince, Haiti`}
                      />
                    </Col>
                  </Row>
                  <Row className="containerLeft-row">
                    <Rowicon
                      className={"container-row-col-2-xm"}
                      icon={"bx:phone"}
                    />
                    <Col className="containerLeft-row-col">
                      <ElementH5 text={`Téléphone`} />
                      <ElementP text={`+509 3128-2122 `} />
                      <ElementP text={`+509 4369-5462 `} />
                    </Col>
                  </Row>
                </Row>
              </Row>
            </Row>
          </Col>
          <Col className="containerRight">
            <Row className="containerRight-content">
              <Row className="containerRight-header">
                <h4>Envoie moi un email </h4>
              </Row>
              <Row className="containerRight-body">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Sujet du message</Form.Label>
                    <Form.Control type="Text" placeholder="sujet du message" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Adresse email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="bschilemexantus@example.com"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Entrez votre message"
                      rows={5}
                    />
                  </Form.Group>

                  <Form.Group className="d-grid gap-2">
                    <Button
                      variant="primary"
                      id="formButton"
                      type="submit"
                      size="lg"
                    >
                      Envoyer le message
                    </Button>
                  </Form.Group>
                </Form>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
