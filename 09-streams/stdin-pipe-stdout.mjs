import { Transform } from "stream";

const upperCaseStream = new Transform({
  transform: function (chunk, encoding, cb) {
    const upperCased = chunk.toString().toUpperCase();
    cb(null, upperCased);
  },
});

const reverseStream = new Transform({
  transform: function (chunk, encoding, cb) {
    const reversed = chunk.toString().split("").reverse().join("");
    cb(null, reversed);
  },
});

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout);

// // Pipe to file
// const filePath = "./files/stdin-dump.txt";
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

// // Pipe to stdout
// process.stdin.pipe(process.stdout);
