/**
 * Created by praetoriaen on 11/9/14.
 */

var Gatherer = require("../libs/gatherer");
var Element = require("../libs/element");

describe("Gatherer", function() {
    describe("#gather(Element Element)", function() {
        it("Should return a continuous stream of data", function() {
            var element = new Element("a", "a");
            var testGatherer = new Gatherer();

            testGatherer.gather(element).should.be.type(Object);
        });
    });
    describe("#testElementi(Array elementi)", function() {
        it("Should return 0 if all elementi are operational", function() {
            var primus = new Element("a", "a");
            var secundus = new Element("b", "b");
            var tertius = new Element("c", "c");

            var testGatherer = new Gatherer();

            var arrayOfElementi = [ primus, secundus, tertius ];

            testGatherer.testElementi(arrayOfElementi).should.return(0);
        });
        it("Should return the faulty interface and error code -1 if the interface isn't operational", function() {
            var primus = new Element("a", "a");
            var secundus = new Element("b", "b");
            var tertius = new Element("c", "c");

            var testGatherer = new Gatherer();

            var arrayOfElementi = [ primus, secundus, tertius ];

            testGatherer.testElementi(arrayOfElementi).should.be.type(String).and.return(-1);
        });
        it("Should return 1 if the array of elementi is empty", function() {
            var arrayOfElementi = [];
            var testGatherer = new Gatherer();

            testGatherer.testElementi(arrayOfElementi).should.return(1);
        });
    });
});