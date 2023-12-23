/* 
  Some utils functions to use 
*/

/**
 *
 * @returns The list of nodes with the elements with know-button class
 */
export function getKnowButtons() {
  const buttons = document.querySelectorAll(".know-button");

  return buttons;
}

/**
 *
 * @param {string} message The message to show in the alert
 */
function showAlert(message) {
  // validating if the message not is valid
  if (message == "" || message == null) {
    throw new Error("The message to show in the alert not is valid.");
  } else {
    // showing in a alert
    alert(message);
  }
}

/**
 *
 * @param {string} message The message to show in the ask
 * @returns The result of the ask
 */
const askIfReadMore = (message) => {
  // asking with the message passed for parameter
  const result = confirm(message);

  return result;
};


// function saveVisitsList(visits) {
//   localStorage.setItem("visits", JSON.stringify(visits));
// }


export default { showAlert, askIfReadMore, getKnowButtons };