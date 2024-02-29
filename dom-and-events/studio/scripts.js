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

  // ROCKET IMAGE
  // get rocket element
  const rocket = document.getElementById("rocket");

  // initialize rocket position
  let rocketPositionX = 0; // initialize rocket X-axis position
  let rocketPositionY = 0; // initialize rocket Y-axis position
  let altitude = 0; // initialize altitude to zero

  // add event listener to takeoffButton
  takeOffButton.addEventListener("click", () => {
    // ask confirmation for Take off
    let shouldTakeOff = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    //
    if (shouldTakeOff) {
      // update the flight status
      flightStatus.innerHTML = "Shuttle in flight.";
      // change shuttleBackGround color
      shuttleBackGround.style.backgroundColor = "blue";
      // re-assign altitude to 10000 feet
      altitude = 10000;
      // update spaceShuttleHeight
      spaceShuttleHeight.innerHTML = altitude;
    }
  });

  landingButton.addEventListener("click", () => {
    window.alert("The shuttle is landing. Landing gear engaged.");
    // update the flight status
    flightStatus.innerHTML = "The shuttle has landed.";
    // // change shuttleBackGround color
    // shuttleBackGround.style.backgroundColor = "green";
    // // re-assign altitude to 0 feet
    // altitude = 0;
    // // update spaceShuttleHeight
    // spaceShuttleHeight.innerHTML = altitude;
    // call resetRocket to initial state
    resetRocket();
  });

  missionAbortButton.addEventListener("click", () => {
    // ask confirmation to abort
    let shouldAbort = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (shouldAbort) {
      // update the flight status
      flightStatus.innerHTML = "Mission aborted.";
      //   // change shuttleBackGround color
      //   shuttleBackGround.style.backgroundColor = "green";
      // // re-assign altitude to 0 feet
      //   altitude = 0;
      //   // update spaceShuttleHeight
      //   spaceShuttleHeight.innerHTML = altitude;
      // call resetRocket to initial state
      resetRocket();
    }
  });

  // using event delegation for directional buttons
  document.addEventListener("click", (event) => {
    // Determine background width
    let bkgWidth = parseFloat(
      window.getComputedStyle(shuttleBackGround).getPropertyValue("width")
    );

    // rocket moves relative to background per directional button click
    // logic check left button click AND ensure rocket within left boundary
    if (event.target.id === "left" && rocketPositionX > -(bkgWidth / 2 - 35)) {
      // decrease rocket X-axis position by 10
      rocketPositionX -= 10;
      // set rocket element left margin to updated X-axis in pixels
      rocket.style.marginLeft = rocketPositionX + "px";
    }
    // logic check right button click AND ensure rocket stays within right boundary
    if (event.target.id === "right" && rocketPositionX < bkgWidth / 2 - 35) {
      // increase rocket X-axis position by 10
      rocketPositionX += 10;
      // set rocket element left margin to updated X-axis in pixels
      rocket.style.marginLeft = rocketPositionX + "px";
    }
    // logic check up button click AND ensure altitude below set maximum limit
    if (event.target.id === "up" && altitude < 250000) {
      // increase rocket Y-axis position 10
      rocketPositionY += 10;
      // set rocket element bottom margin to updated Y-axis in pixels
      rocket.style.marginBottom = rocketPositionY + "px";
      // increase altitude 10000 feet
      altitude += 10000;
      // update spaceShuttleHeight
      spaceShuttleHeight.innerHTML = altitude;
    }
    // logic check down button click AND ensure rocket not at bottom
    if (event.target.id === "down" && rocketPositionY > 0) {
      // decrease rocket Y-axis position 10
      rocketPositionY -= 10;
      // set rocket element bottom margin to updated Y-axis in pixels
      rocket.style.marginBottom = rocketPositionY + "px";
    }
  });
  // function to reset rocket to initial state
  function resetRocket() {
    // change shuttleBackGround color
    shuttleBackGround.style.backgroundColor = "green";
    altitude = 0;
    // update spaceShuttleHeight
    spaceShuttleHeight.innerHTML = altitude;
    // reset rocket X-axis position
    rocketPositionX = 0;
    // reset rocket Y-axis position
    rocketPositionY = 0;
    // set rocket element left margin to reset X-axis
    rocket.style.marginLeft = rocketPositionX + "px";
    // set rocket element bottom margin to reset Y-axis
    rocket.style.marginBottom = rocketPositionY + "px";
  }
});
