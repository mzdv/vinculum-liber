/**
 * Created by praetoriaen on 11/9/14.
 */
var fs = require("fs");

var parser = function Parser(path) {
    this.path = path;
    this.resources = [];
};

parser.prototype.getResourceList = function() {
    return this.resources;
};

parser.prototype.setResourceList = function(parsedData) {

    for(var i = 0; i < parsedData.elements.length; i++) {
        this.resources.push(parsedData.elements[i].callsign + '/' + parsedData.elements[i].port);
    }
};

parser.prototype.getData = function () {
    return this.data;
};

parser.prototype.getParsedData = function () {
    return this.parsedData;
};

parser.prototype.parse = function () {
    try {
        this.data = fs.readFileSync(this.path).toString();
        this.parsedData = JSON.parse(this.data);
        this.setResourceList(this.parsedData);

    } catch (e) {
        return -1;
    }
    return 0;
};

module.exports = parser;

