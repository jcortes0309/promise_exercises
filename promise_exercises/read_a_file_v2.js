// Read a file
//
// Write a program to take a file name as a command line argument, read in the contents of the file, convert the text to all caps, and print it out.
//
// Assuming the file file1.txt contains the text: Hello, I am file 1.. Example output:
//
// $ node print_file.js file1.txt
// HELLO, I AM FILE 1.
// Trigger an error condition by running the program on a non-existent file. Your program should display the error message, and it should display something like:
//
// $ node print_file.js blah.txt
// ENOENT: no such file or directory, open 'blah.txt'

var fileName = process.argv[2];
var fs = require("fs-promise");

var promise = fs.readFile(fileName);
promise.then(function(buffer) {
  var fileContent = buffer.toString();
  fileContent = fileContent.toUpperCase();
  console.log("\nThe content of " + fileName + " changed to uppercase is:", fileContent);
});
promise.catch(function(error) {
  console.log("\nSorry, there is no such file or directory: ", fileName);
  console.log(error.message, "\n");
});
