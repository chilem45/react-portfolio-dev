import { Icon } from "@iconify/react";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import SlowProgressBar from "./SlowProgressBar";
import style from "./panelComponent.scss";

const PanelComponement = ({ SrcImage, label, classNameLabel,niveau }) => {
  return (
    <>
      <Row className="panelComponent">
        <Col className="panelComponent-col-icon" lg={2} >
          <SrcImage className="image" />
        </Col>
        <Col className="panelComponent-col-label" lg={4}>
          <p className={classNameLabel}>{label}</p>
        </Col>
        <Col className="panelComponent-col-progressBar" lg={6}>
          <SlowProgressBar value={niveau} className="panelComponent-col-progressBar-bar"/>
        </Col>
      </Row>
    </>
  );
};
export default PanelComponement;
