import React,{useEffect} from "react";
import { Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
const ElementH5 = ({ text }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Row >
      <h5>{text}</h5>
    </Row>
  );
};
export default ElementH5;
