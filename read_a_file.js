var fileName = process.argv[2];
var fs = require("fs-promise");

fs.readFile(fileName)
  .then(function(buffer) {
    var fileContent = buffer.toString();
    fileContent = fileContent.toUpperCase();
    console.log("\nThe content of " + fileName + " changed to uppercase is:", fileContent);
  })
  .catch(function(error) {
    console.log("\nSorry, there is no such file or directory: ", fileName);
    console.log(error.message, "\n");
  });
