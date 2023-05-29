import React from "react";
import Typewriter from "react-typewriter";

const TypingAnimation = ({ text }) => {
  return (
    <Typewriter delay={100} cursor={true}>
      {text}
    </Typewriter>
  );
};

export default TypingAnimation;
