function applyPreferences(event) {
  event.preventDefault();

  var fontSize = document.getElementById("fontsize").value;
  var fontColor = document.getElementById("fontcolor").value;

  document.body.style.fontSize = fontSize + "px";
  document.body.style.color = fontColor;

  // Store user preferences in cookies with an explicit path
  document.cookie = "fontSize=" + fontSize + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  document.cookie = "fontColor=" + fontColor + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}
