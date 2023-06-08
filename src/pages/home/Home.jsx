import React, { useEffect, useState } from "react";
import style from "./home.scss";
import { Carousel, Row, Image } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const interval = 5000;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleSlideChange = () => {
      const carouselImages = document.querySelectorAll(".carousel-item img");

      carouselImages.forEach((img, index) => {
        if (index === activeIndex) {
          img.classList.add("zoom-in");
        } else {
          img.classList.remove("zoom-in");
        }
      });
    };

    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, interval);

    handleSlideChange();

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        fade
        indicators={false}
        className={style.carousel}
        activeIndex={activeIndex}
        onSelect={handleSelect}
        id="home"
      >
        <Carousel.Item interval={interval}>
          <Image
            className={`d-block w-100 ${activeIndex === 0 ? "zoom-in" : ""}`}
            src={process.env.PUBLIC_URL + "/images/workspace-1280538.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <Row className="carouselContainer">
              <p>B.S. Chilem Exantus</p>
              <h3>Développeur informatique</h3>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={interval}>
          <img
            className={`d-block w-100 ${activeIndex === 1 ? "zoom-in" : ""}`}
            src={process.env.PUBLIC_URL + "/images/laptop-1478822.jpg"}
            alt="Second slide"
          />
          <Carousel.Caption>
            <Row className="carouselContainer" id="N02">
              <h3>Web design</h3> <h3>Conception graphique</h3>
              <p>Logo, plaquette publicitaire, carte de visite</p>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={interval}>
          <img
            className={`d-block w-100 ${activeIndex === 2 ? "zoom-in" : ""}`}
            src={process.env.PUBLIC_URL + "/images/cup-of-coffee-1280537.jpg"}
            alt="Third slide"
          />
          <Carousel.Caption>
            <Row className="carouselContainer">
              <h3>Creation de site web</h3>
              <p>site vitrine, corporate, évènementiel, e-commerce</p>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
