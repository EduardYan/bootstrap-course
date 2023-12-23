/*
 * Principal javascript
 *
 */

import move from "./move.js";
import { manageConfirmation } from "./confirmations.js";

// getting the elemetns
const games = move.getGamesElements();
const buttonGames = move.getButtonsGames();

// for move the elements
for (let i = 0; i < buttonGames.length; i++) {
  buttonGames[i].addEventListener("click", () => {
    move.moveElement(games[i]);
  });
}

manageConfirmation();