//TODO: Add Your Code Below
// listen for window load before to execute script
window.addEventListener("load", () => {
  // Get container element for astronaut data to display
  const container = document.getElementById("container");

  // fetch with modern async and await syntax
  async function fetchAndDisplayAstronauts() {
    let res = await fetch(
      "https://handlers.education.launchcode.org/static/astronauts.json"
    );
    let astronauts = await res.json();

    // bonus 1
    // sort by keys of object with JS sort function logic
    astronauts.sort((a, b) => {
      return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
    });

    // iterate each astronaut in data
    astronauts.forEach((astronaut) => {
      // generate div element for each astronaut's data
      const astronautDiv = document.createElement("div");
      astronautDiv.classList.add("astronaut");

      // generate div element for each astronaut's bio
      const bioDiv = document.createElement("div");
      bioDiv.classList.add("bio");

      // bonus 2
      let activeClass = astronaut.active ? "active" : "";

      // fill bio div with astronaut's bio
      bioDiv.innerHTML = `
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li class= "${activeClass}">Active: ${
        astronaut.active ? "Yes" : "No"
      }</li>
                    <li>Skills: ${astronaut.skills.join(", ")}</li>
                </ul>
            `;

      // generate img element for astronaut's pic
      const avatarImg = document.createElement("img");
      avatarImg.classList.add("avatar");
      avatarImg.src = astronaut.picture;

      // append bio and pic elements to astronaut div
      astronautDiv.appendChild(bioDiv);
      astronautDiv.appendChild(avatarImg);

      // append astronaut div to container
      container.appendChild(astronautDiv);
    });
  }

  // Call the async function to fetch and display astronauts
  fetchAndDisplayAstronauts();
});
