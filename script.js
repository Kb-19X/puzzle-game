"use strict";

const EMPTY_TILE = 0;
let board = [];

const initGame = () => {
  // Créer tableau de 1 à 15 :
  // -------------------------
  board = Array.from({ length: 15 }, (_, i) => i + 1);
  board.push(EMPTY_TILE);
  console.log(board);

  renderBoard();
};

//Render board :
const renderBoard = () => {
  const container = document.getElementById("puzzle-board");
  container.innerHTML = "";

  // Pour chaque itération nouvelle tuilles créer
  board.forEach((value, index) => {
    const tile = document.createElement("div");
    tile.classList.add("grid-tile");

    if (value === EMPTY_TILE) {
      tile.textContent = "";
    } else {
      tile.textContent = value;
      tile.addEventListener("click", () => {
        console.log("Clicked on tile", value, "at index", index);
      });
    }

    container.appendChild(tile);
  });
};

initGame();

// ---------------------
