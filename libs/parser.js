/**
 * Created by praetoriaen on 11/9/14.
 */
var fs = require("fs");


var parser = function Parser(path) {
    this.path = path;
};

parser.prototype.parse = function () {
    try {
        this.data = fs.readFileSync(this.path).toString();
        this.parsedData = JSON.parse(this.data);
    } catch (e) {
        return -1;
    }
    return 0;
};

parser.prototype.setResourceList = function() {
    //TO-DO
};
parser.prototype.getResourceList = function() {
    return this.resourceList;
};

parser.prototype.getData = function () {
    return this.data;
};

parser.prototype.getParsedData = function () {
    return this.parsedData;
};

module.exports = parser;

