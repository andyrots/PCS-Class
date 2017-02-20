const fs = require('fs');

fs.readFile('reverse.js', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        myString = data.toString().split('').reverse().join('');
        console.log('File Contents Reversed:\n', myString);
    }
});