var mymodule = require('./myModule.js');
mymodule(process.argv[2], process.argv[3], checkExt);
function checkExt(err, data) {
    if (err) console.log("Whoops");
    else {
        data.forEach(x => console.log(x) + '\n');
    }
}