/**
 * Utils functions to use.
 */

/**
 * 
 * @param {string} message The message to show
 */
export function showAlert(message) {
  // list for validate the messages
  const listForValidate = ['Followed'];
  if (message in listForValidate) {
    alert(message);
  } else if (message === null || message === '') {
    alert(listForValidate[0]);
  } else {
    throw new Error(`The message "${message}" not is in the list for show messages.`);
  }
}