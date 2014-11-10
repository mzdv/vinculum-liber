/**
 * Created by praetoriaen on 11/9/14.
 */

var gatherer = require("../libs/gatherer");

describe("Gatherer", function() {
    describe("#gather()", function() {
        it("Should return a continuous stream of data", function() {
            var element = ["primus"];
            gatherer.gather(element).should.be.type(Object);
        });
    });
    describe("#testElementi()", function() {
        it("Should return 0 if all elementi are operational", function() {
            var arrayOfInterfaces = ["primus", "secundus", "tertius"];

            gatherer.testInterfaces(arrayOfInterfaces).should.return(0);
        });
        it("Should return the faulty interface and error code -1 if the interface isn't operational", function() {
            var arrayOfInterfaces = ["primus", "secundus", "tertiusD"];

            gatherer.testInterfaces(arrayOfInterfaces).should.be.type(String).and.return(-1);
        });
        it("Should return 1 if the array of interfaces is empty", function() {
            var arrayOfInterfaces = [];

            gatherer.testInterfaces(arrayOfInterfaces).should.return(1);
        });
    });
});