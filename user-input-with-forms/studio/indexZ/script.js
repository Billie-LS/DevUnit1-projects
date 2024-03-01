// JavaScript code for indexZ.html goes here!
// function setSearchEngine() {
//   // console.log('clicked');
//   // event.preventDefault();
//   const buttonSelected = document.querySelector("input[name=engine]:checked");
//   const form = document.getElementById("searchForm");
//   let url = buttonSelected.value;
//   // let url = actions[buttonSelected.value];
//   form.action = url;
// }

// window.addEventListener("load", () => {
//   const form = document.getElementById("searchForm");
//   // note that 'setSearchEngine' is referenced but not 'called'
//   form.addEventListener("submit", setSearchEngine);
// });

function setSearchEngine(event) {
  const buttonSelected = document.querySelector("input[name=engine]:checked");
  const form = document.getElementById("searchForm");
  let url = buttonSelected.value;
  form.action = url;
}

window.addEventListener("load", () => {
  const form = document.getElementById("searchForm");
  form.addEventListener("submit", setSearchEngine);
});
