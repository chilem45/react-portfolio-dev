import React from "react";
import { motion } from "framer-motion";
import "./Square.scss";

const Square = ({ id, size }) => {
  const squareSize = size;
  const fragmentSize = 1;

  const renderSquare = () => {
    const rows = [];

    for (let i = 1; i <= squareSize; i++) {
      const fragments = [];

      const fragmentCount = i;
      for (let j = 1; j <= fragmentCount; j++) {
        const isLastFragment = j === fragmentCount;
        const width = isLastFragment ? fragmentSize * 2 : fragmentSize;
        const height = fragmentSize;
        const color = `hsl(${(i + j) * 40}, 120%, 30%)`;

        fragments.push(
          <motion.div
            className="fragment"
            style={{ width, height, background: color }}
            key={j}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              delay: (i - 1) * 1 + j * 0.5,
            }}
          ></motion.div>
        );
      }

      rows.push(
        <div className="row" key={i}>
          {fragments}
        </div>
      );
    }

    const reversedRows = [...rows].reverse();

    const square = [...rows, ...reversedRows];

    return square;
  };

  return (
    <div id={id} className="square rotated">
      {renderSquare()}
    </div>
  );
};

export default Square;
