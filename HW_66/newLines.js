const fs = require('fs');

const fileContents = fs.readFileSync(process.argv[2]).toString();
mySum = fileContents.split('\n').length - 1;
console.log(mySum);