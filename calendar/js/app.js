/*
  Script for work with
  the html

*/

/**
 *
 * @param {string} value The value for show in a alert
 */
function showMessage(value) {
  alert(value);
}

document.getElementById("send-button").addEventListener("click", () => {
  // getting the value to show in alert
  const valueDate = $("#mydate")[0].value;

  showMessage(`The date is ${valueDate}`);
});

$(window).load(function () {
  // configuration for the calendar
  const configCalendar = {
    showAlways: false,
    dowOffset: 2,
  };

  $("#mydate").glDatePicker(configCalendar);
});
