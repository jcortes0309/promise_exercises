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
var file_1_content = "";
var file_2_content = "";
var intersperse = [];

fs.readFile(input_file_1)
  .then(function(file_1_buffer) {
    file_1_content = file_1_buffer.toString();
    file_1_content = file_1_content.split("\n");
    return fs.readFile(input_file_2);
  })
  .then(function(file_2_buffer) {
    var file_2_content = file_2_buffer.toString();
    file_2_content = file_2_content.split("\n");
    file_1_content.forEach(function(line, idx) {
      intersperse.push(line);
      intersperse.push(file_2_content[idx]);
    });
    console.log(intersperse);
    return fs.writeFile(outputFile, intersperse.join("\n"));
  })
  .catch(function(error) {
    console.log("\nSorry, there is no such file or directory: ");
    console.log(error.message, "\n");
  });
