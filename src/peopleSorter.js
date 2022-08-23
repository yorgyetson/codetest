const peopleSorter = (firstNames = [], personnel = []) => {
  let students = [];
  let faculty = [];

  // Determine length of longest array
  let count =
    firstNames.length > personnel.length ? firstNames.length : personnel.length;

  // Iterate through longest array value to ensure all entities are parsed in both objects
  for (let i = 0; i < count; i++) {
    // make sure we at least have the required keys for sorting
    let person = {
      firstName: firstNames[i] || "pardon?",
      lastName: personnel[i]?.lastName || "pardon?",
      occupation: personnel[i]?.occupation || "pardon?",
    };

    // include keys not listed in original data example
    for (let key in personnel[i]) {
      person[key] = personnel[i][key] || "pardon?";
    }

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

module.exports = peopleSorter;