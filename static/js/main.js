const fs = require("fs");

const filePath = "static/js/main.js";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Process the file content
  console.log(data);
});