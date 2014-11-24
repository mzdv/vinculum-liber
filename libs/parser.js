/**
 * Created by praetoriaen on 11/9/14.
 */
var fs = require("fs");


var parser = function Parser(path) {
    this.path = path;
    this.data = null;
};

parser.prototype.parse = function() {
    try {
        this.data = fs.readFileSync(this.path).toString();

    } catch(e) {
        return -1;
    }
    return 0;
};

parser.prototype.getData = function() {
    return this.data;
};

module.exports = parser;

