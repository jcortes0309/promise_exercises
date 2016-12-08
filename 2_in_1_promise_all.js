// 2-in-1
//
// Write a program to take two input file names and one output file name. The program will read in the two input files, break the text of each file into arrays of lines, and intersperse them, then write the results to the output file. Example:
//
// haiku1.txt has the content:
//   old pond
//   a frog leaps in
//   water's sound

// haiku2.txt has the content:
//   the first cold shower
//   even the monkey seems to want
//   a little coat of straw

// If you run the program:
// $ node intersperse.js haiku1.txt haiku2.txt output.txt

// output.txt will contain:
//   old pond
//   the first cold shower
//   a frog leaps in
//   even the monkey seems to want
//   water's sound
//   a little coat of straw

var fs = require("fs-promise");
var input_file_1 = process.argv[2];
var input_file_2 = process.argv[3];
var outputFile = process.argv[4];

Promise.all([fs.readFile(input_file_1), fs.readFile(input_file_2)])
  .then(function(buffers) {
    var file_1_content = buffers[0].toString().split("\n");
    var file_2_content = buffers[1].toString().split("\n");
    var intersperse = [];
    file_1_content.forEach(function(line, idx) {
      intersperse.push(line);
      intersperse.push(file_2_content[idx]);
    });
    return fs.writeFile(outputFile, intersperse.join("\n"));
  })
  .then(function() {
    // We use this .then to provide a message that let us know we successfully wrote to the file
    console.log("It worked!");
  })
  .catch(function(error) {
    console.log("\nSorry, there is no such file or directory: ");
    console.log(error.message, "\n");
  });
