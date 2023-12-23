/**
 * Scripts for use
 */

import { message } from "./data.js";

/**
 *
 * @returns The html button to show the alert
 */
function getButton() {
  const button = document.getElementById("liveAlertBtn");
  return button;
}

/**
 *
 * @param {string} message The message to show in the alert
 * @param {string} type The type of alert
 */
function showAlert(message, type) {
  // options to validate
  const options = [
    "success",
    "primary",
    "info",
    "danger",
    "warning",
    "dark",
    "light",
    "secondary",
  ];

  // validating if the type not in the list
  if (!options.includes(type)) {
    throw new Error("The type to show the alert is invalid.");
  }

  var alertPlaceholder = document.getElementById("liveAlertPlaceholder");

  var wrapper = document.createElement("div");
  // new content to add
  wrapper.innerHTML =
    '<div class="alert alert-' +
    type +
    ' alert-dismissible d-flex align-items-center" role="alert">' +
    '<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#info-fill" /></svg>' + 
    `<div>${message}</div>` +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

  // adding to wrapper
  alertPlaceholder.append(wrapper);

}

// button for the alert
var alertTrigger = getButton();

if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    showAlert(message, "primary");
  });
}
