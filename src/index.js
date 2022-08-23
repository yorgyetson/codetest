const data = require("../data.js");

const peopleSorter = (firstNames = [], personnel = []) => {
  if (!Array.isArray(firstNames)) {
    firstNames = [];
  }

  if (!Array.isArray(personnel)) {
    personnel = [];
  }

  let combined = personnel.map((person, i) => ({
    occupation: null,
    lastName: null,
    ...person,
    firstName: firstNames[i],
  }));

  let students = [];
  let faculty = [];

  // Replace invalid data with 'pardon?' and sort people by occupation
  combined.forEach((person) => {
    Object.entries(person).forEach(([key, value]) => {
      if (!value) {
        person[key] = "pardon?";
      }
    });
    person["occupation"].toLowerCase() === "student"
      ? students.push(person)
      : faculty.push(person);
  });

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

const [students, faculty] = peopleSorter(data["firstNames"], data["personnel"]);

module.exports = peopleSorter;
