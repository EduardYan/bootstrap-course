/*
 * Have some functions for make a 
 * small animation for move
 * elements in the page.
*/


/**
 * 
 * @returns The list of divs elements to move
 */
function getGamesElements() {
  // getting the elements
  const gameOne = document.getElementById("game-1");
  const gameTwo = document.getElementById("game-2");
  const gameThree = document.getElementById("game-3");
  const gameFour = document.getElementById("game-4");

  const elements = [
    gameOne,
    gameTwo,
    gameThree,
    gameFour,
  ];

  return elements;


}

/**
 * 
 * @returns The list with the buttons
 */
function getButtonsGames() {
  // getting the elements
  const buttonGameOne = document.getElementById("button-game-1");
  const buttonGameTwo = document.getElementById("button-game-2");
  const buttonGameThree = document.getElementById("button-game-3");
  const buttonGameFour = document.getElementById("button-game-4");

  const elements = [
    buttonGameOne,
    buttonGameTwo,
    buttonGameThree,
    buttonGameFour,
  ];

  return elements;

}


/**
 * 
 * @param {HTMLElement} element The element to move adding a class
 */
function moveElement(element) {
  // element.className = "move"; // try adding the class

  // seting the animation to element passed for parameter
  element.setAttribute("style", "animation-name: moveGame; animation-duration: .5s;")
  
}


// alls the functions to export
export default {
  getGamesElements,
  getButtonsGames,
  moveElement
};
