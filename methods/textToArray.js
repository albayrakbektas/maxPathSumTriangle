const fs = require("fs");

const textToArray = (path) => {
  let text = fs.readFileSync(path, "utf8");
  return text.split("\n").map((line) => line.split(" ").map(string => Number(string)));
};

module.exports = textToArray;
