import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

const SlowProgressBar = ({ value, className, id }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        if (nextProgress === value) {
          clearInterval(timer);
        }
        return nextProgress;
      });
    }, 100); // Ajustez ici pour régler la vitesse de progression
    return () => {
      clearInterval(timer);
    };
  }, [value]);
  return (
    <ProgressBar
      now={progress}
      visuallyHidden
      label={`${progress}%`}
      max={100}
      className={className}
      id={id} 
    />
  );
};

export default SlowProgressBar;
