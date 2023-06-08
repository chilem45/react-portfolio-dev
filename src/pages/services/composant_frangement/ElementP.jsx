import React,{useEffect} from "react";
import { Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
const ElementP = ({ text }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Row data-aos={"fade-down"}>
      <p>{text}</p>
    </Row>
  );
};
export default ElementP;
