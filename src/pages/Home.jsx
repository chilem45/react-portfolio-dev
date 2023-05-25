import React from "react";
import style from "./home.scss";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
            <Carousel className={style.carousel}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={
                    process.env.PUBLIC_URL + "/images/business-2717063_640.jpg"
                  }
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + "/images/laptop-2838917_640.jpg"}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={
                    process.env.PUBLIC_URL + "/images/coding-1853305_640.jpg"
                  }
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
      <Container>mjj</Container>
    </>
  );
};
export default Home;
