/**
 * Handlers functions
 * to use for the buttons.
 */

import utils from "../helpers/utils.js";
import messages from "../data/messages.js";

function testButton() {
  // test button working
  document.getElementById("test-button").addEventListener("click", () => {
    // names to set
    let names = ["Daniel", "Oscar", "Mariel", "Carlos", "Maria"];

    let c = 0;
    while (c < names.length) {
      const namesDiv = document.createElement("div");
      namesDiv.className = "alert alert-dismissible alert-primary fade show my-3 mx-auto w-50";
      namesDiv.setAttribute("role", "alert");
      const button = document.createElement("button");
      button.className = "btn-close";
      button.setAttribute("data-bs-dismiss", "alert");

      namesDiv.innerHTML = `<strong class="text-center">Name ${names[c]}.</strong>`;
      namesDiv.append(button);

      document.getElementById("links").append(namesDiv);

      c++;
    }
  });
}

function knowButtons() {
  // getting the know buttons
  var knowButtons = utils.getKnowButtons();

  for (let i = 0; i < knowButtons.length; i++) {
    knowButtons[i].addEventListener("click", (e) => {
      // showing a alert
      utils.showAlert(messages.messageKnow);
      // no redirect to direction
      e.preventDefault();
    });
  }
}

function readMore() {
  // for the read more link
  document.getElementById("read-more-link").addEventListener("click", (e) => {
    const result = utils.askIfReadMore(messages.messageAsk);

    // validating the result
    if (!result) {
      // no redirect if not is value
      e.preventDefault();
    }
  });
}

export default {
  knowButtons,
  testButton,
  readMore,
}