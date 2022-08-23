const peopleSorter = (firstNames = [], personnel = []) => {

  if (firstNames.constructor != Array) {
    firstNames = [];
  }

  if (personnel.constructor != Array) {
    personnel = [];
  }

  let students = [];
  let faculty = [];

  // Determine length of longest array
  let count =
    firstNames.length > personnel.length ? firstNames.length : personnel.length;

  // Iterate through longest array value to ensure all entities are parsed in both objects
  for (let i = 0; i < count; i++) {
    let person = {
      ...personnel[i],
      firstName: firstNames[i],
      lastName: personnel[i]?.lastName,
      occupation: personnel[i]?.occupation,
    };

    Object.entries(person).forEach(([key, value]) => {
      if (!value) {
        person[key] = "pardon?";
      }
    });
    // Push person to respective array
    person["occupation"].toLowerCase() === "student"
      ? students.push(person)
      : faculty.push(person);
  }

  // Sort students array ascending by first name
  students.sort((a, b) => {
    return a.firstName.localeCompare(b.firstName, undefined, {
      sensitivity: "base",
    });
  });

  // Sort faculty array descending by last name
  faculty
    .sort((a, b) => {
      return a.lastName.localeCompare(b.lastName, undefined, {
        sensitivity: "base",
      });
    })
    .reverse();

  console.log([students, faculty]);

  return [students, faculty];
};

data = require("../data.js");
peopleSorter([], data["personnel"]);

module.exports = peopleSorter;
