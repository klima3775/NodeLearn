const fs = require("fs/promises");

fs.writeFile("./first.txt", "Hello from Node.js")
  .then(() => {
    console.log("File created");
  })
  .then(() => fs.appendFile("./first.txt", " \n Hello again"))
  .then(() => {
    console.log("File updated");
  })
  .then(() => fs.rename("./first.txt", "./second.txt"))
  .then(() => {
    console.log("File renamed");
  })
  .catch((err) => {
    console.error(err);
  });
