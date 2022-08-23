const example_output = require("../example_output.json");

describe("application entrypoint", () => {
  it("outputs the example data", () => {
    const consoleSpy = jest.spyOn(console, "log");
    require("../src/index.js");

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.objectContaining(example_output)
    );
  });
});
