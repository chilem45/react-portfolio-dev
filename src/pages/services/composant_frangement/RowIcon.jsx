import React,{useEffect} from "react";
import { Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Aos from "aos";
import "aos/dist/aos.css";
const Rowicon = ({ icon, className }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Col lg={2} className={className} data-aos={"flip-right"}>
      <Icon className="iconService" icon={icon} />
    </Col>
  );
};
export default Rowicon;
