/**
 * Javascript to use
 */


import { UI } from './UI.js';
import { showAlert } from './utils.js';

/**
 * Principal function
 */
function main() {
  const ui = new UI();
  ui.manageClickName();

  // for the image button
  document.querySelector('#image-button').addEventListener('click', () => {
    alert('Image Clicked');
  });
}

main();



// only a test
// const names = ['Ana', 'Juan']

// let counter = 0;
// while (counter < names.length) {
//   let current = names[counter]
  
//   // in casse the is in the list
//   if (current == 'Ana') {
//     console.log(JSON.stringify(names));
//   } else {
//     console.log('Nothing');
//   }
//   counter++
// }