import React from "react";
import style from "./BarComponent.scss"
const BarComponent = ({ barCount }) => {
  const renderBars = () => {
    const bars = [];
    for (let i = 0; i < barCount; i++) {
      bars.push(<div className="bar-segment" key={i}></div>);
    }
    return bars;
  };

  return <div className="bar">{renderBars()}</div>;
};

export default BarComponent;
