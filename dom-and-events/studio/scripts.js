// Write your JavaScript code here.
// Remember to pay attention to page loading!

// add event listener to window object, listening for the 'load' event
window.addEventListener("load", () => {
  // BUTTONS
  // get references to buttons
  const takeOffButton = document.getElementById("takeoff"); // object represent takeoff button element
  const landingButton = document.getElementById("landing"); // object represent landing button element
  const missionAbortButton = document.getElementById("missionAbort"); // object represent mission abort button element

  // AREAS
  // references to the areas
  const flightStatus = document.getElementById("flightStatus"); // object represent flight status area
  const shuttleBackGround = document.getElementById("shuttleBackground"); // object represent shuttle background area
  const spaceShuttleHeight = document.getElementById("spaceShuttleHeight"); // object represent space shuttle height area

  // add event listener to takeoffButton
  takeOffButton.addEventListener("click", () => {
    // ask confirmation for Take off
    let shouldTakeOff = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    //
    if (shouldTakeOff) {
      // Update the flight status
      flightStatus.innerHTML = "Shuttle in flight.";
      // change shuttleBackGround color
      shuttleBackGround.style.backgroundColor = "blue";
      // update spaceShuttleHeight
      spaceShuttleHeight.innerHTML = "10000";
    }
  });

  landingButton.addEventListener("click", () => {
    window.alert("The shuttle is landing. Landing gear engaged.");
    // Update the flight status
    flightStatus.innerHTML = "The shuttle has landed.";
    // change shuttleBackGround color
    shuttleBackGround.style.backgroundColor = "green";
    // update spaceShuttleHeight
    spaceShuttleHeight.innerHTML = "0";
  });

  missionAbortButton.addEventListener("click", () => {
    // ask confirmation to abort
    let shouldAbort = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (shouldAbort) {
      // Update the flight status
      flightStatus.innerHTML = "Mission aborted.";
      // change shuttleBackGround color
      shuttleBackGround.style.backgroundColor = "green";
      // update spaceShuttleHeight
      spaceShuttleHeight.innerHTML = "0";
    }
  });
});
