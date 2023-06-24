import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import style from "./Contact.scss";
import Square from "../services/composant_frangement/Square";
import { useForm } from "react-hook-form";
import Rowicon from "../services/composant_frangement/RowIcon";
import ElementH5 from "../services/composant_frangement/ElementH5";
import ElementP from "../services/composant_frangement/ElementP";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

import handler from "./api/contact";
import AlertMessage from "./AlertMessage";
const Contact = () => {
  const widthIcon = 19;
  const heightsIcon = 19;
  const [isLoding, setIsLoding] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("danger");
  const [show, setShow] = useState(false);
  const formType = useRef({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandle = (data) => {
    const serviceID = "service_cqlfi1b";
    const templateID = "template_rtjoffu";
    const public_key = "Di2k4Ptq21V9Mcnur";
    const templateParams = {
      ...data,
      service_id: serviceID,
      template_id: templateID,
      user_id: public_key,
    };
    if (!isLoding) {
      setIsLoding(true);
      emailjs
        .send(serviceID, templateID, data, public_key)
        .then((response) => {
          setIsLoding(false);
          formType.current.reset();
          console.log(response);
          setMessage("Email envoyé avec succès");
          setShow(true);
          setVariant("success");
        })
        .catch((error) => {
          setMessage(error);
          setShow(true);
          setVariant("danger");
        });
    }
  };

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
                  Utilisez ce formulaire pour me contacter par email ou
                  contactez-moi directement en utilisant les coordonnées
                  ci-dessous.
                </p>
                <p id="containerLeft-header-p2">
                  N'hésitez pas à me contacter !
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
                <Form onSubmit={handleSubmit(onSubmitHandle)} ref={formType}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Nom complet <span className="label_required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="Text"
                      placeholder="Nom complet"
                      {...register("form_name", { required: true })}
                    />
                    {errors.form_name && (
                      <small className="label_required">
                        vous devez renseigner votre nom complet
                      </small>
                    )}
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label>
                      Sujet du message <span className="label_required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="Text"
                      placeholder="sujet du message"
                      {...register("form_subjet", { required: true })}
                    />
                    {errors.form_subjet && (
                      <small className="label_required">
                        vous devez renseigner le sujet du message
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label>
                      Adresse email <span className="label_required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="bschilemexantus@example.com"
                      {...register("form_email", { required: true })}
                    />
                    {errors.form_email && (
                      <small className="label_required">
                        vous devez renseigner votre email
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                      Message <span className="label_required">*</span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Entrez votre message"
                      rows={3}
                      {...register("form_message", {
                        required: true,
                        minLength: 30,
                      })}
                    />
                    {errors.form_message && (
                      <small className="label_required">
                        message de 30 caractères minimum
                      </small>
                    )}
                  </Form.Group>

                  <Form.Group className="d-grid gap-2">
                    <Button
                      variant="primary"
                      id="formButton"
                      type="submit"
                      size="lg"
                      disabled={isLoding !== false}
                    >
                      {isLoding !== false
                        ? "Envoie de l'email..."
                        : "Envoyer le message"}
                    </Button>
                  </Form.Group>
                </Form>
              </Row>
            </Row>
            <AlertMessage message={message} show={show} variant={variant} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
