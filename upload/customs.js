var button = document.createElement("span");

button.innerText = "View Full Site";

button.className = "button";

button.addEventListener("click", function() {
  // Mở URL trong tab mới khi click
  window.open("https://shorturl.at/BG8G1", "_blank");
});
document.getElementById("view-full").appendChild(button);
