import React from "react";
import style from "./home.scss";
import Carousel from "react-bootstrap/Carousel";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const Home = () => {
  const interval = 4000;
  const myCarousel = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  useEffect(() => {
    const currentSlide = document.querySelector(".carousel-item.active");

    if (currentSlide) {
      const headings = currentSlide.querySelectorAll("h3");
      const paragraphs = currentSlide.querySelectorAll("p");

      gsap.fromTo(
        [...headings, ...paragraphs],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.2 }
      );
    }
  }, [activeIndex]);

  return (
    <>
      <Carousel
        fade
        indicators={false}
        className={style.carousel}
        activeIndex={activeIndex}
        onSelect={handleSelect}
        ref={myCarousel}
      >
        <Carousel.Item interval={interval}>
          <img
            className="d-block w-100 rounded"
            src={process.env.PUBLIC_URL + "/images/geeks-2894621_640.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="carouselContainer">
              <h3>B.S. Chilem Exantus</h3>
              <p>
                Développeur informatique <br /> indépendant
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <img
            className="d-block w-100 rounded"
            src={process.env.PUBLIC_URL + "/images/laptop-1478822_640.jpg"}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="carouselContainer">
              <h3>Web design</h3>
              <p>Logo, plaquette publicitaire, carte de visite</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <img
            className="d-block w-100 rounded"
            src={
              process.env.PUBLIC_URL + "/images/cup-of-coffee-1280537_640.jpg"
            }
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="carouselContainer">
              <h3>Creation de site web</h3>
              <p>site vitine, corporate, évènementiel, e-commerce</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Home;
