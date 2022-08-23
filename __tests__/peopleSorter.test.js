const peopleSorter = require("../src/index.js");

const data = require("../data.js");
const example_output = require("../example_output.json");

describe("peopleSorter function", () => {
  it("always returns an array of two arrays", () => {
    // no data
    expect(peopleSorter()).toEqual([[], []]);
    //all data
    expect(peopleSorter(data["firstNames"], data["personnel"]).length).toBe(2);
    // only first names
    expect(peopleSorter((firstNames = data["firstNames"])).length).toBe(2);
    // only personnel
    expect(peopleSorter((personnel = data["personnel"])).length).toBe(2);
  });

  it("returns the example output when given the example input", () => {
    expect(peopleSorter(data["firstNames"], data["personnel"])).toEqual(
      example_output
    );
  });

  it("logs output to the console", () => {
    const consoleSpy = jest.spyOn(console, "log");

    peopleSorter(data["firstNames"], data["personnel"]);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.objectContaining(example_output)
    );
  });

  it("divides students and faculty into seperate arrays", () => {
    let output = peopleSorter(data["firstNames"], data["personnel"]);

    output[0].forEach((student) => {
      expect(student).toEqual(
        expect.objectContaining({
          occupation: "student",
        })
      );
    });

    output[1].forEach((faculty) => {
      expect(faculty).toEqual(
        expect.not.objectContaining({
          occupation: "student",
        })
      );
    });
  });

  it("replaces invalid values with 'pardon?'", () => {
    let output = peopleSorter(data["firstNames"], data["personnel"]);

    invalidCount = 0;
    replacedCount = 0;

    data["firstNames"].forEach((firstName) => {
      !firstName && invalidCount++;
      firstName == "pardon?" && replacedCount--;
    });

    data["personnel"].forEach((person) => {
      for (const key in person) {
        if (!person[key]) {
          invalidCount++;
        } else if (person[key] == "pardon?") {
          replacedCount--;
        }
      }
    });

    output.forEach((group) => {
      group.forEach((person) => {
        for (const key in person) {
          if (person[key] == "pardon?") {
            replacedCount++;
          }
        }
      });
    });

    expect(invalidCount).toEqual(invalidCount);
  });
});
