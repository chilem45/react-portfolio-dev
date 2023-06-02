import React, { useEffect, useState } from "react";
import style from "./home.scss";
import Carousel from "react-bootstrap/Carousel";

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
          <img
            className={`d-block w-100 ${activeIndex === 0 ? "zoom-in" : ""}`}
            src={process.env.PUBLIC_URL + "/images/geeks-2894621_640.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="carouselContainer">
              <p>B.S. Chilem Exantus</p>
              <h3>Développeur informatique indépendant</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <img
            className={`d-block w-100 ${activeIndex === 1 ? "zoom-in" : ""}`}
            src={process.env.PUBLIC_URL + "/images/laptop-1478822_640.jpg"}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="carouselContainer" id="N02">
              <h3>Web design</h3> <h3>Conception graphique</h3>
              <p>Logo, plaquette publicitaire, carte de visite</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <img
            className={`d-block w-100 ${activeIndex === 2 ? "zoom-in" : ""}`}
            src={process.env.PUBLIC_URL + "/images/cup-of-coffee-1280537_640.jpg"}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="carouselContainer">
              <h3>Creation de site web</h3>
              <p>site vitrine, corporate, évènementiel, e-commerce</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
