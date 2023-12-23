/**
 * Functions for use in case the confirmations
 */

export function manageConfirmation() {
  const messageToShow = "Do You want watch more games?";

  // selecting to show the confirmation
  document.querySelector(".footer a").addEventListener("click", (e) => {
    if (!confirm(messageToShow)) {
      e.preventDefault();
    }
  });
}
