// Write your JavaScript code here.
function init() {
  window.addEventListener("load", function () {
    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");

    // Calculate initial rocket position
    rocket.style.left =
      shuttleBackground.offsetWidth / 2 - rocket.offsetWidth / 2 + "px";
    rocket.style.bottom = "0"; // Position at the bottom

    takeoffButton.addEventListener("click", function () {
      const confirmed = window.confirm(
        "Confirm that the shuttle is ready for takeoff."
      );
      if (confirmed) {
        flightStatus.textContent = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.textContent =
          parseFloat(spaceShuttleHeight.textContent) + 10000 + " miles";
      }
    });

    landButton.addEventListener("click", function () {
      window.alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.textContent = "The shuttle has landed.";
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.textContent = "0 miles";
      // Reset rocket position to center at the bottom after landing
      rocket.style.left =
        shuttleBackground.offsetWidth / 2 - rocket.offsetWidth / 2 + "px";
      rocket.style.bottom = "0";
    });

    abortButton.addEventListener("click", function () {
      const confirmed = window.confirm(
        "Confirm that you want to abort the mission."
      );
      if (confirmed) {
        flightStatus.textContent = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.textContent = "0 miles";
        // Reset rocket position to center at the bottom after aborting mission
        rocket.style.left =
          shuttleBackground.offsetWidth / 2 - rocket.offsetWidth / 2 + "px";
        rocket.style.bottom = "0";
      }
    });

    const moveRocket = function (direction) {
      let currentPosition = parseFloat(rocket.style.bottom) || 0; // Use bottom for vertical position
      if (direction === "up") {
        currentPosition += 10;
        spaceShuttleHeight.textContent =
          parseFloat(spaceShuttleHeight.textContent) + 10000 + " miles";
      } else if (direction === "down") {
        currentPosition -= 10;
        spaceShuttleHeight.textContent =
          parseFloat(spaceShuttleHeight.textContent) - 10000 + " miles";
      }
      rocket.style.bottom = currentPosition + "px"; // Update bottom for vertical position
    };

    document.getElementById("up").addEventListener("click", function () {
      moveRocket("up");
    });

    document.getElementById("down").addEventListener("click", function () {
      moveRocket("down");
    });

    // Add event listeners for left and right buttons (horizontal movement)
    // Adjust the rocket's horizontal position based on the button clicked
    document.getElementById("right").addEventListener("click", function () {
      let currentPosition = parseFloat(rocket.style.left) || 0;
      currentPosition += 10;
      rocket.style.left = currentPosition + "px";
    });

    document.getElementById("left").addEventListener("click", function () {
      let currentPosition = parseInt(rocket.style.left) || 0;
      currentPosition -= 10;
      rocket.style.left = currentPosition + "px";
    });
  });
}

init();

// function init() {
//   window.addEventListener("load", function () {
//     const takeoffButton = document.getElementById("takeoff");
//     const landButton = document.getElementById("landing");
//     const abortButton = document.getElementById("missionAbort");
//     const flightStatus = document.getElementById("flightStatus");
//     const shuttleBackground = document.getElementById("shuttleBackground");
//     const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
//     const rocket = document.getElementById("rocket");

//     // Calculate initial rocket position
//     rocket.style.left =
//       shuttleBackground.offsetWidth / 2 - rocket.offsetWidth / 2 + "px";
//     rocket.style.bottom = "0"; // Position at the bottom

//     takeoffButton.addEventListener("click", function () {
//       const confirmed = window.confirm(
//         "Confirm that the shuttle is ready for takeoff."
//       );
//       if (confirmed) {
//         flightStatus.textContent = "Shuttle in flight.";
//         shuttleBackground.style.backgroundColor = "blue";
//         spaceShuttleHeight.textContent =
//           parseFloat(spaceShuttleHeight.textContent) + 10000 + " miles";
//       }
//     });

//     landButton.addEventListener("click", function () {
//       window.alert("The shuttle is landing. Landing gear engaged.");
//       flightStatus.textContent = "The shuttle has landed.";
//       shuttleBackground.style.backgroundColor = "green";
//       spaceShuttleHeight.textContent = "0 miles";
//       // Reset rocket position after landing
//       rocket.style.left =
//         shuttleBackground.offsetWidth / 2 - rocket.offsetWidth / 2 + "px";
//       rocket.style.bottom = "0";
//     });

//     // Rest of the JavaScript code remains unchanged...
//   });
// }

// init();

// function init() {
//   window.addEventListener("load", function () {
//     const takeoffButton = document.getElementById("takeoff");
//     const landButton = document.getElementById("landing");
//     const abortButton = document.getElementById("missionAbort");
//     const flightStatus = document.getElementById("flightStatus");
//     const shuttleBackground = document.getElementById("shuttleBackground");
//     const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
//     const rocket = document.getElementById("rocket");

//     // Calculate initial rocket position
//     rocket.style.left =
//       shuttleBackground.offsetWidth / 2 - rocket.offsetWidth / 2 + "px";
//     rocket.style.bottom = "0"; // Position at the bottom

//     // // Initial position of the rocket (center of shuttle background)
//     // rocket.style.top =
//     //   shuttleBackground.offsetHeight / 2 - rocket.offsetHeight / 2 + "px";
//     // rocket.style.left =
//     //   shuttleBackground.offsetWidth / 2 - rocket.offsetWidth / 2 + "px";

//     const moveRocket = function (direction) {
//       let currentPositionX = parseFloat(rocket.style.left) || 0;
//       let currentPositionY = parseFloat(rocket.style.top) || 0;
//       const step = 10; // Number of pixels to move

//       switch (direction) {
//         case "up":
//           currentPositionY -= step;
//           spaceShuttleHeight.textContent =
//             parseFloat(spaceShuttleHeight.textContent) + 10000 + " miles";
//           break;
//         case "down":
//           currentPositionY += step;
//           spaceShuttleHeight.textContent =
//             parseFloat(spaceShuttleHeight.textContent) - 10000 + " miles";
//           break;
//         case "right":
//           currentPositionX += step;
//           break;
//         case "left":
//           currentPositionX -= step;
//           break;
//       }

//       // Ensure the rocket stays within the shuttle background container
//       currentPositionX = Math.max(
//         0,
//         Math.min(
//           currentPositionX,
//           shuttleBackground.offsetWidth - rocket.offsetWidth
//         )
//       );
//       currentPositionY = Math.max(
//         0,
//         Math.min(
//           currentPositionY,
//           shuttleBackground.offsetHeight - rocket.offsetHeight
//         )
//       );

//       rocket.style.left = currentPositionX + "px";
//       rocket.style.top = currentPositionY + "px";
//     };

//     takeoffButton.addEventListener("click", function () {
//       const confirmed = window.confirm(
//         "Confirm that the shuttle is ready for takeoff."
//       );
//       if (confirmed) {
//         flightStatus.textContent = "Shuttle in flight.";
//         shuttleBackground.style.backgroundColor = "blue";
//         spaceShuttleHeight.textContent =
//           parseFloat(spaceShuttleHeight.textContent) + 10000 + " miles";
//       }
//     });

//     landButton.addEventListener("click", function () {
//       window.alert("The shuttle is landing. Landing gear engaged.");
//       flightStatus.textContent = "The shuttle has landed.";
//       shuttleBackground.style.backgroundColor = "green";
//       spaceShuttleHeight.textContent = "0 miles";

//       // Return the rocket to its initial position
//       rocket.style.top =
//         shuttleBackground.offsetHeight / 2 - rocket.offsetHeight / 2 + "px";
//       rocket.style.left =
//         shuttleBackground.offsetWidth / 2 - rocket.offsetWidth / 2 + "px";
//     });

//     abortButton.addEventListener("click", function () {
//       const confirmed = window.confirm(
//         "Confirm that you want to abort the mission."
//       );
//       if (confirmed) {
//         flightStatus.textContent = "Mission aborted.";
//         shuttleBackground.style.backgroundColor = "green";
//         spaceShuttleHeight.textContent = "0 miles";

//         // Return the rocket to its initial position
//         rocket.style.top =
//           shuttleBackground.offsetHeight / 2 - rocket.offsetHeight / 2 + "px";
//         rocket.style.left =
//           shuttleBackground.offsetWidth / 2 - rocket.offsetWidth / 2 + "px";
//       }
//     });

//     document.getElementById("up").addEventListener("click", function () {
//       moveRocket("up");
//     });

//     document.getElementById("down").addEventListener("click", function () {
//       moveRocket("down");
//     });

//     document.getElementById("right").addEventListener("click", function () {
//       moveRocket("right");
//     });

//     document.getElementById("left").addEventListener("click", function () {
//       moveRocket("left");
//     });
//   });
// }

// init();

// function init() {
//   window.addEventListener("load", function () {
//     const takeoffButton = document.getElementById("takeoff");
//     const landButton = document.getElementById("landing");
//     const abortButton = document.getElementById("missionAbort");
//     const flightStatus = document.getElementById("flightStatus");
//     const shuttleBackground = document.getElementById("shuttleBackground");
//     const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
//     const rocket = document.getElementById("rocket");

//     takeoffButton.addEventListener("click", function () {
//       const confirmed = window.confirm(
//         "Confirm that the shuttle is ready for takeoff."
//       );
//       if (confirmed) {
//         liftOff();
//       }
//     });

//     landButton.addEventListener("click", function () {
//       land();
//     });

//     abortButton.addEventListener("click", function () {
//       const confirmed = window.confirm(
//         "Confirm that you want to abort the mission."
//       );
//       if (confirmed) {
//         abortMission();
//       }
//     });

//     document.getElementById("up").addEventListener("click", function () {
//       moveRocket("up");
//     });

//     document.getElementById("down").addEventListener("click", function () {
//       moveRocket("down");
//     });

//     document.getElementById("right").addEventListener("click", function () {
//       moveRocket("right");
//     });

//     document.getElementById("left").addEventListener("click", function () {
//       moveRocket("left");
//     });

//     function liftOff() {
//       flightStatus.textContent = "Shuttle in flight.";
//       shuttleBackground.style.backgroundColor = "blue";
//       spaceShuttleHeight.textContent =
//         parseFloat(spaceShuttleHeight.textContent) + 10000 + " miles";
//     }

//     function land() {
//       window.alert("The shuttle is landing. Landing gear engaged.");
//       flightStatus.textContent = "The shuttle has landed.";
//       shuttleBackground.style.backgroundColor = "green";
//       spaceShuttleHeight.textContent = "0 miles";
//     }

//     function abortMission() {
//       flightStatus.textContent = "Mission aborted.";
//       shuttleBackground.style.backgroundColor = "green";
//       spaceShuttleHeight.textContent = "0 miles";
//     }

//     function moveRocket(direction) {
//       let currentPositionX = parseFloat(rocket.style.left) || 0;
//       let currentPositionY = parseFloat(rocket.style.top) || 0;

//       switch (direction) {
//         case "up":
//           currentPositionY -= 10;
//           spaceShuttleHeight.textContent =
//             parseFloat(spaceShuttleHeight.textContent) + 10000 + " miles";
//           break;
//         case "down":
//           currentPositionY += 10;
//           spaceShuttleHeight.textContent =
//             parseFloat(spaceShuttleHeight.textContent) - 10000 + " miles";
//           break;
//         case "right":
//           currentPositionX += 10;
//           break;
//         case "left":
//           currentPositionX -= 10;
//           break;
//       }

//       rocket.style.left = currentPositionX + "px";
//       rocket.style.top = currentPositionY + "px";
//     }
//   });
// }

init();

// function init() {
//   window.addEventListener("load", function () {
//     const takeoffButton = document.getElementById("takeoff");
//     const landButton = document.getElementById("landing");
//     const abortButton = document.getElementById("missionAbort");
//     const flightStatus = document.getElementById("flightStatus");
//     const shuttleBackground = document.getElementById("shuttleBackground");
//     const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
//     const rocket = document.getElementById("rocket");

//     takeoffButton.addEventListener("click", function () {
//       const confirmed = window.confirm(
//         "Confirm that the shuttle is ready for takeoff."
//       );
//       if (confirmed) {
//         flightStatus.textContent = "Shuttle in flight.";
//         shuttleBackground.style.backgroundColor = "blue";
//         spaceShuttleHeight.textContent =
//           parseFloat(spaceShuttleHeight.textContent) + 10000 + " miles";
//       }
//     });

//     landButton.addEventListener("click", function () {
//       window.alert("The shuttle is landing. Landing gear engaged.");
//       flightStatus.textContent = "The shuttle has landed.";
//       shuttleBackground.style.backgroundColor = "green";
//       spaceShuttleHeight.textContent = "0 miles";
//     });

//     abortButton.addEventListener("click", function () {
//       const confirmed = window.confirm(
//         "Confirm that you want to abort the mission."
//       );
//       if (confirmed) {
//         flightStatus.textContent = "Mission aborted.";
//         shuttleBackground.style.backgroundColor = "green";
//         spaceShuttleHeight.textContent = "0 miles";
//       }
//     });

//     const moveRocket = function (direction) {
//       let currentPosition = parseInt(rocket.style.top) || 0;
//       if (direction === "up") {
//         currentPosition -= 10;
//         spaceShuttleHeight.textContent =
//           parseFloat(spaceShuttleHeight.textContent) + 10000 + " miles";
//       } else if (direction === "down") {
//         currentPosition += 10;
//         spaceShuttleHeight.textContent =
//           parseFloat(spaceShuttleHeight.textContent) - 10000 + " miles";
//       }
//       rocket.style.top = currentPosition + "px";
//     };

//     document.getElementById("up").addEventListener("click", function () {
//       moveRocket("up");
//     });

//     document.getElementById("down").addEventListener("click", function () {
//       moveRocket("down");
//     });

//     document.getElementById("right").addEventListener("click", function () {
//       let currentPosition = parseFloat(rocket.style.left) || 0;
//       currentPosition += 10;
//       rocket.style.left = currentPosition + "px";
//     });

//     document.getElementById("left").addEventListener("click", function () {
//       let currentPosition = parseInt(rocket.style.left) || 0;
//       currentPosition -= 10;
//       rocket.style.left = currentPosition + "px";
//     });
//   });
// }

// init();

//     takeoffButton.addEventListener("click", function () {
//       const confirmed = window.confirm(
//         "Confirm that the shuttle is ready for takeoff."
//       );
//       if (confirmed) {
//         flightStatus.textContent = "Shuttle in flight.";
//         shuttleBackground.style.backgroundColor = "blue";
//         spaceShuttleHeight.textContent =
//           parseInt(spaceShuttleHeight.textContent) + 10000 + " miles";
//       }
//     });

//     landButton.addEventListener("click", function () {
//       window.alert("The shuttle is landing. Landing gear engaged.");
//       flightStatus.textContent = "The shuttle has landed.";
//       shuttleBackground.style.backgroundColor = "green";
//       spaceShuttleHeight.textContent = "0 miles";
//     });
//   });
// }

// init();

//   takeoffButton.addEventListener("click", function () {
//     // Prompt user for confirmation
//     let confirmTakeoff = window.confirm(
//       "Confirm that the shuttle is ready for takeoff."
//     );
//     if (confirmTakeoff) {
//       // Change flight status
//       flightStatus.textContent = "Shuttle in flight";

//       // Change background color
//       shuttleBackground.style.backgroundColor = "blue";

//       // Increase shuttle height
//       let currentHeight = parseInt(spaceShuttleHeight.textContent);
//       spaceShuttleHeight.textContent = currentHeight + 10000;
//     }
//   });
// });

// window.addEventListener("load", function () {
//   // Put your code for the exercises here.
// });
