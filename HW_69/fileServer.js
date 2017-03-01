module.exports = function (req, res, next) {
    const fs = require('fs');
    fs.readFile('.' + req.url, 'utf-8', (err, data) => {
        if (err) {
            next();           
        }
        res.end(data);
    });
};