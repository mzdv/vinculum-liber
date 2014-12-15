/**
 * Created by praetoriaen on 11/9/14.
 */

var gatherer = function Gatherer(){};

gatherer.prototype.testElementi = function(parsedData) {
    if(parsedData.elements.length === 0)
        return 1;
};

module.exports = gatherer;