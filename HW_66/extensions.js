const fs = require('fs');

fs.readdir(process.argv[2], (err, data) => {
    if (err) {
        console.error(err);
    } else {
        myExt = '.' + process.argv[3];
        data.filter(x => x.endsWith(myExt))
            .forEach(x => console.log(x) + '\n');
    }
});