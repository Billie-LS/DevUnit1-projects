window.addEventListener("load", () => {
  // Get container element for astronaut data to display
  const container = document.getElementById("container");
  // fetch with traditional syntax
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then((res) => {
    res.json().then((data) => {
      for (let i = 0; i < data.length; i++) {
        let astronaut = data[i];
        container.innerHTML += `
          <div class="astronaut">
              <div class="bio">
                  <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                      <ul>
                          <li>Hours in space: ${astronaut.hoursInSpace}</li>
                          <li>Active: ${astronaut.active}</li>
                          <li>Skills: ${astronaut.skills.join(", ")}</li>
                      </ul>
              </div>
              <img class="avatar" src="${astronaut.picture}">
          </div>
          `;
      }
    });
  });
});
