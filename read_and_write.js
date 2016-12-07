// Read and write
//
// Write a program to take two file names as command line arguments, the first file will be the input and the second file will be the output. The program will read in the contents of the input file, convert its text to all caps, and then write the resulting contents to the output file.
//
// Example:
//
// $ node convert_file.js file1.txt output.txt
// As a result, output.txt should now contain the text HELLO, I AM FILE 1.
//
// Trigger an error by running the program with an non-existing input file, ensure that the error is properly displayed. Trigger an error by running the program with an output file in a non-existant directory, such as thisdirdoesntexist/output.txt, ensure that the error is properly displayed.

var inputFileName = process.argv[2];
var outputFileName = process.argv[3];
var fs = require("fs-promise");

fs.readFile(inputFileName)
  .then(function(buffer) {
    var fileContent = buffer.toString();
    console.log(fileContent);
    return fs.writeFile(outputFileName, fileContent);
  })
  .catch(function(error) {
    console.log("\nSorry, there is no such file or directory: ");
    console.log(error.message, "\n");
  });
