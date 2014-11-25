/**
 * Created by praetoriaen on 11/10/14.
 */

var element = function(callsign, path) {
    this.callsign = callsign;
    this.path = path;
};

element.prototype.getCallsign = function() {
    return this.callsign;
};

element.prototype.getPath = function () {
    return this.path;
};

module.exports = element;