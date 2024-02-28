function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  // Put your code for the exercises here.

  // Add event listener to the "Take off" button
  liftoffButton.addEventListener("click", function () {
    // Update the text content of the paragraph
    statusReport.textContent = "Houston, we have liftoff!";
  });

  // Add event listener to the "Take off" button
  missionAbort.addEventListener("mouseout", function (event) {
    // Revert background color to original when cursor leaves
    event.target.style.backgroundColor = "";
  });
}

window.addEventListener("load", init);
