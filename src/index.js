const data = require("../data/data.js");
const peopleSorter = require("./peopleSorter.js");

const [students, faculty] = peopleSorter(data["firstNames"], data["personnel"]);

