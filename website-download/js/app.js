/*
 Principal javascript
 to use.
*/

import { showAlert } from "./utils.js";

const listFollowButtons = document.querySelectorAll('.follow-button');
listFollowButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    showAlert('');
    e.preventDefault();
  });
});
