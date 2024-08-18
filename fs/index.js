const fs = require("fs");

fs.writeFile("./first.txt", "Hello from Node.js", (err) => {
  if (err) console.log(err);
  else {
    console.log("File created");
    fs.appendFile("./first.txt", " \n Hello again", (err) => {
      if (err) console.log(err);
      else {
        console.log("File updated");
        fs.rename("./first.txt", "./second.txt", (err) => {
          if (err) console.log(err);
          else {
            console.log("File renamed");
          }
        });
      }
    });
  }
});
