// Class to use for the ui


import { showAlert } from './utils.js';

export class UI {
  constructor() { }


  clearInput() {
    // getting to clean
    const input = document.getElementById('name');
    input.value = ''; // cleaning
  }

  manageClickName() {
    const button = document.getElementById('name-button');

    button.addEventListener('click', () => {
      // getting the name to use
      let name = document.getElementById('name').value;

      // // validating the name is none value
      if (name === '') {
        showAlert(`Write your name please.`);
      } else {
        showAlert(`Your name is ${name}`);
      }

      this.clearInput();
    });
  }

}