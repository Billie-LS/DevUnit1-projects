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
      }
    });
  });
});
