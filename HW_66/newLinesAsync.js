const fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
    if (err) {
        console.error(err);
    } else {
        mySum = data.toString().split('\n').length - 1;
        console.log(mySum);
    }
});