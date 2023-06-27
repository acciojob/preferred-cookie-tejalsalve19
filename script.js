// Function to set the font size and color as per user preferences
function applyPreferences(event) {
  event.preventDefault(); // Prevent form submission

  var fontSize = document.getElementById("fontsize").value;
  var fontColor = document.getElementById("fontcolor").value;

  document.body.style.fontSize = fontSize + "px";
  document.body.style.color = fontColor;

  // Store user preferences in cookies
  document.cookie = "fontSize=" + fontSize + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  document.cookie = "fontColor=" + fontColor + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

// Function to retrieve user preferences from cookies
function retrievePreferences() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();

    if (cookie.indexOf("fontSize=") === 0) {
      var fontSize = cookie.substring("fontSize=".length);
      document.getElementById("fontsize").value = fontSize;
      document.body.style.fontSize = fontSize + "px";
    } else if (cookie.indexOf("fontColor=") === 0) {
      var fontColor = cookie.substring("fontColor=".length);
      document.getElementById("fontcolor").value = fontColor;
      document.body.style.color = fontColor;
    }
  }
}

// Add event listener to the form on submit
document.querySelector("form").addEventListener("submit", applyPreferences);

// Retrieve and apply preferences when the page loads
window.addEventListener("load", retrievePreferences);
