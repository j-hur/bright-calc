// LUMINENCE CALCULATOR

// Event Listener
document.getElementById("totalBtn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let red = +document.getElementById("redIn").value;
  let green = +document.getElementById("greenIn").value;
  let blue = +document.getElementById("blueIn").value;
  // Process
  let brightness = Math.sqrt(
    0.299 * red ** 2 + 0.587 * green ** 2 + 0.114 * blue ** 2
  );
  // Output
  document.getElementById("brightOut").innerHTML = Math.round(brightness);
}
