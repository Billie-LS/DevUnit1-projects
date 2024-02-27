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

    // Event listener for the landButton click event
    landButton.addEventListener("click", () => {
      // Confirm landing
      const confirmed = window.confirm(
        "Confirm that you want to land the shuttle."
      );

      // If confirmed, proceed with landing
      if (confirmed) {
        // Alert the user that the shuttle is landing
        window.alert("The shuttle is landing. Landing gear engaged.");

        // Update flight status, background color, and shuttle height text content
        flightStatus.textContent = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.textContent = "0 miles";

        // Reset rocket position to center at the bottom after landing
        rocket.style.left = `${
          shuttleBackground.offsetWidth / 2 - rocket.offsetWidth / 2
        }px`;
        rocket.style.bottom = "0";
      }
    });

    // Event listener for the abortButton click event
    abortButton.addEventListener("click", () => {
      // Confirmation dialog for aborting the mission
      const confirmed = window.confirm(
        "Confirm that you want to abort the mission."
      );

      // If the user confirms the abort
      if (confirmed) {
        // Update flight status, background color, and shuttle height text content
        [
          flightStatus.textContent,
          shuttleBackground.style.backgroundColor,
          spaceShuttleHeight.textContent,
        ] = ["Mission aborted.", "green", "0 miles"];

        // Reset rocket position to center at the bottom after aborting mission
        rocket.style.left = `${
          shuttleBackground.offsetWidth / 2 - rocket.offsetWidth / 2
        }px`;
        rocket.style.bottom = "0";
      }
    });

    const moveRocket = (direction) => {
      let currentPosition = parseFloat(rocket.style.bottom) || 0; // Use bottom for vertical position
      let distanceChange = direction === "up" ? 10 : -10;
      let heightChange = direction === "up" ? 10000 : -10000;

      currentPosition += distanceChange;
      spaceShuttleHeight.textContent =
        parseFloat(spaceShuttleHeight.textContent) + heightChange + " miles";

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
      let currentPosition = parseFloat(rocket.style.left) || 0;
      currentPosition -= 10;
      rocket.style.left = currentPosition + "px";
    });
  });
}

init();
