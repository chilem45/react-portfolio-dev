import React from "react";
import "./Square.scss";

const Square = ({id,size}) => {
  const squareSize = size; // Taille du carré
  const fragmentSize = 1; // Taille d'un fragment

  const renderSquare = () => {
    const rows = [];

    // Triangle supérieur
    for (let i = 1; i <= squareSize; i++) {
      const fragments = [];

      const fragmentCount = i+0.5; // Nombre de fragments dans la ligne
      for (let j = 1; j <= fragmentCount; j++) {
        const isLastFragment = j === fragmentCount; // Vérifier si c'est le dernier fragment dans la ligne
        const width = isLastFragment ? fragmentSize * 2 : fragmentSize; // Largeur du fragment
        const height = fragmentSize; // Hauteur du fragment
        fragments.push(
          <div className="fragment" style={{ width, height }} key={j}></div>
        );
      }

      rows.push(
        <div className="row" key={i}>
          {fragments}
        </div>
      );
    }

    // Triangle inférieur (inversé)
    const reversedRows = [...rows].reverse();

    // Combinaison des deux triangles pour former le carré
    const square = [...rows, ...reversedRows];

    return square;
  };

  return <div id={id} className="square rotated">{renderSquare()}</div>;
};

export default Square;
