window.addEventListener("load", () => {
  // Get container element for astronaut data to display
  const container = document.getElementById("container");
  // fetch with traditional syntax
  //   fetch(
  //     "https://handlers.education.launchcode.org/static/astronauts.json"
  //   ).then((res) => {
  //     res.json().then((data) => {
  //       for (let i = 0; i < data.length; i++) {
  //         let astronaut = data[i];
  //         container.innerHTML += `
  //         <div class="astronaut">
  //             <div class="bio">
  //                 <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
  //                     <ul>
  //                         <li>Hours in space: ${astronaut.hoursInSpace}</li>
  //                         <li>Active: ${astronaut.active}</li>
  //                         <li>Skills: ${astronaut.skills.join(", ")}</li>
  //                     </ul>
  //             </div>
  //             <img class="avatar" src="${astronaut.picture}">
  //         </div>
  //         `
  //       }
  //     });
  //   });

  // fetch with modern async and await syntax
  async function fetchAndDisplayAstronauts() {
    let res = await fetch(
      "https://handlers.education.launchcode.org/static/astronauts.json"
    );
    let data = await res.json();

    // bonus 1
    // sort by keys of object
    data.sort((a, b) => {
      return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
    });

    // bonus 3
    const count = document.getElementById("count");
    count.innerHTML = `The ${data.length} astronauts have explored space!`;

    for (let i = 0; i < data.length; i++) {
      let astronaut = data[i];

      // bonus 2
      let activeClass = astronaut.active ? "active" : "";

      container.innerHTML += `
        <div class="astronaut">
            <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>

                        <li class= "${activeClass}">Active: ${
        astronaut.active
      }</li>
                        <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
        </div>
        `;
    }
  }
  // call async function
  fetchAndDisplayAstronauts();
});
