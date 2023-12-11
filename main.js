// Copyright 1999-2023. Plesk International GmbH. All rights reserved.

const gameBoard = document.getElementById("gameBoard");
const player = createPlayer();

// Define the ID of the target box
const targetBoxId = "36";

gameBoard.appendChild(player);

// Add click event listeners to the buttons
document
  .getElementById("atas")
  .addEventListener("click", () => movePlayer("atas"));
document
  .getElementById("bawah")
  .addEventListener("click", () => movePlayer("bawah"));
document
  .getElementById("kiri")
  .addEventListener("click", () => movePlayer("kiri"));
document
  .getElementById("kanan")
  .addEventListener("click", () => movePlayer("kanan"));

function createPlayer() {
  const playerElement = document.createElement("div");
  playerElement.className = "box player";
  playerElement.id = "player";
  return playerElement;
}

function movePlayer(direction) {
  const currentPosition = player.getBoundingClientRect();
  const newPosition = calculateNewPosition(currentPosition, direction);

  if (isValidBoxPosition(newPosition)) {
    player.style.top = newPosition.top + "px";
    player.style.left = newPosition.left + "px";

    if (
      newPosition.top === targetBoxPosition.top &&
      newPosition.left === targetBoxPosition.left
    ) {
      console.log("Player reached the target box!");
    }
  }
}

function calculateNewPosition(currentPosition, direction) {
  let newTop = currentPosition.top;
  let newLeft = currentPosition.left;

  switch (direction) {
    case "atas":
      newTop -= 40;
      break;
    case "bawah":
      newTop += 40;
      break;
    case "kiri":
      newLeft -= 40;
      break;
    case "kanan":
      newLeft += 40;
      break;
    default:
      break;
  }

  return { top: newTop, left: newLeft };
}

function isValidBoxPosition(position) {
  return validBoxPositions.some(
    (validPosition) =>
      validPosition.top === position.top && validPosition.left === position.left
  );
}

const targetBox = document.getElementById(targetBoxId);
const targetBoxPosition = targetBox.getBoundingClientRect();
