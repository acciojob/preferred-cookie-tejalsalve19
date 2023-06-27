// Function to set the cookie with the user's preferences
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to get the cookie value by name
function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Function to apply the saved preferences
function applyPreferences() {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  // Get the saved preferences from cookies
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  // Set the input values to the saved preferences
  fontSizeInput.value = savedFontSize || fontSizeInput.value;
  fontColorInput.value = savedFontColor || fontColorInput.value;

  // Apply the preferences to the document
  document.documentElement.style.setProperty("--fontsize", fontSizeInput.value + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColorInput.value);
}

// Event listener for form submission
document.getElementById("preferencesForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form submission

  // Get the input values
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;

  // Save the preferences as cookies for 365 days
  setCookie("fontsize", fontSize, 365);
  setCookie("fontcolor", fontColor, 365);

  // Apply the preferences to the document
  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);
});

// Apply
applyPreferences();
