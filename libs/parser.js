/**
 * Created by praetoriaen on 11/9/14.
 */
var fs = require("fs");


var parser = function Parser(path) {
    "use strict";
    this.path = path;
};

parser.prototype.parse = function () {
    "use strict";
    try {
        this.data = fs.readFileSync(this.path).toString();
        this.parsedData = JSON.parse(this.data);
    } catch (e) {
        return -1;
    }
    return 0;
};

parser.prototype.getData = function () {
    "use strict";
    return this.data;
};

parser.prototype.getParsedData = function () {
    "use strict";
    return this.parsedData;
};

module.exports = parser;

