/**
 * Created by praetoriaen on 11/9/14.
 */

var gatherer = function Gatherer(){};

gatherer.prototype.elementiPinger = function(parsedData) {
    // Run a loop and send a packet to each element; if packets are undeliverable or failed, raise false, else raise true
    return false;
};

gatherer.prototype.testElementi = function(parsedData) { // some comment not to end my streak
    if(parsedData.elements.length === 0)
        return 1;
    else if(!this.elementiPinger(parsedData))
        return -1;
    else
        return 0;
};

module.exports = gatherer;