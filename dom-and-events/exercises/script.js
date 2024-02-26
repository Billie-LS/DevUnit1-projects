function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  // Add event listener to liftoffButton
  button.addEventListener("click", function () {
    // Revert background color to original when cursor leaves
    // button.style.backgroundColor = "";

    // Change text content when button is clicked
    paragraph.textContent = "Houston, we have liftoff!";
  });

  // Add event listener to abortMission button
  missionAbort.addEventListener("mouseleave", function () {
    // Revert background color to original when cursor leaves
    // missionAbort.style.backgroundColor = "";
  });
}

window.addEventListener("load", init);
