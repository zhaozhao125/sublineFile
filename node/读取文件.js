const fs = require("fs");
fs.readFile("./process.js", "utf-8", (error, data) => {
  console.log(error, "error");
  console.log(data, "data");
});
