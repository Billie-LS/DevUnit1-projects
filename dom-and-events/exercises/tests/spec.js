describe("Take off button click event", function () {
  beforeEach(() => {
    // Mocking HTML structure
    document.body.innerHTML = `
          <button id="liftoffButton">Take off</button>
          <p id="statusReport">The shuttle is on the ground</p>
          <button id="abortMission">Abort mission</button>
      `;
  });

  let consoleSpy;

  beforeEach(() => {
    // Spy on console.log to check if the text content is updated
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    // Clear the spy
    consoleSpy.mockRestore();
  });

  // Test case
  it("should change the text when Take off button is clicked", () => {
    // Import script.js file
    require("../script.js");

    // Click event simulation for liftoffButton
    const liftoffButton = document.getElementById("liftoffButton");
    liftoffButton.click();

    expect(document.getElementById("statusReport").textContent).toEqual(
      "Houston, we have liftoff!"
    );
  });

  // Test case for console.log
  it('should log "Houston, we have liftoff!" to the console', () => {
    // Import script.js file
    require("../script.js");

    // Click event simulation for liftoffButton
    const liftoffButton = document.getElementById("liftoffButton");
    liftoffButton.click();

    expect(consoleSpy).toHaveBeenCalledWith("Houston, we have liftoff!");
  });

  // Test case for mouse hover color change
  it("changes background color to red when hovered over", function () {
    // Import script.js file
    require("../script.js");

    // Simulate hovering over the Abort Mission button
    const abortButton = document.getElementById("abortMission");
    abortButton.dispatchEvent(new MouseEvent("mouseenter"));

    // Get the computed background color of the button
    const computedStyle = window.getComputedStyle(abortButton);
    const backgroundColor = computedStyle.backgroundColor;

    // Expect the background color to be red
    expect(backgroundColor).toEqual("rgb(255, 0, 0)");
  });
});
