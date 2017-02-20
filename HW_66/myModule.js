const fs = require('fs');
module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, data) => {
        if (err) {
            return callback(err);
        }
        myExt = '.' + ext;
        myData = data.filter(x => x.endsWith(myExt));
        callback(null, myData);
    });
};
