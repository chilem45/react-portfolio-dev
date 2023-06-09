import React from "react";
import "./Square.scss";

const Square = () => {
  const squareSize = 10; // Taille du carré
  const fragmentSize = 1; // Taille d'un fragment

  const renderSquare = () => {
    const rows = [];

    // Triangle supérieur
    for (let i = 1; i <= squareSize; i++) {
      const fragments = [];

      const fragmentCount = i; // Nombre de fragments dans la ligne
      const isZigzagRow = i % 2 === 0; // Vérifier si c'est une ligne en zigzag

      for (let j = 1; j <= fragmentCount; j++) {
        const isLastFragment = j === fragmentCount; // Vérifier si c'est le dernier fragment dans la ligne
        const width = isLastFragment ? fragmentSize * 2 : fragmentSize; // Largeur du fragment
        const height = fragmentSize; // Hauteur du fragment
        const marginLeft =
          isZigzagRow && isLastFragment ? -fragmentSize / 2 : 0; // Décalage pour le zigzag

        fragments.push(
          <div
            className="fragment"
            style={{ width, height, marginLeft }}
            key={j}
          ></div>
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

  return <div className="square rotated">{renderSquare()}</div>;
};

export default Square;
