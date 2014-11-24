/**
 * Created by praetoriaen on 11/9/14.
 */
var fs = require("fs");


var parser = function Parser(path) {
        this.path = path;
};

parser.prototype.parse = function() {
    try {
            fs.readFileSync(this.path);

            return 0;
        } catch(e) {
            return -1;
        }
};

module.exports = parser;

