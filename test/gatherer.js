/**
 * Created by praetoriaen on 11/9/14.
 */

var Gatherer = require("../libs/gatherer");
var Element = require("../libs/element");
var Parser = require("../libs/parser");

describe("Gatherer", function() {
    describe("#gather(Array resources)", function() {
        it("Should return a continuous stream of data from resourceList", function() {
            var testGatherer = new Gatherer();
            var parser = new Parser("elementum.json");
            parser.parse();

            testGatherer.gather(parser.getResourceList()).should.be.type(Object);
        });
    });
    //describe("#testElementi(Array resources)", function() {                   // check garherer.js to see why this is commented out
    //    it("Should return 0 if all elementi are operational", function() {
    //        var parser = new Parser("elementum.json");
    //        parser.parse();
    //
    //        var testGatherer = new Gatherer();
    //
    //        testGatherer.testElementi(parser.getParsedData()).should.equal(0);
    //    });
    //    it("Should return the faulty interface and error code -1 if the interface isn't operational", function() {
    //        var parser = new Parser("elementum.json");
    //        parser.parse();
    //
    //        var testGatherer = new Gatherer();
    //
    //        testGatherer.testElementi(parser.getParsedData()).should.equal(-1);
    //    });
    //    it("Should return 1 if the array of elementi is empty", function() {
    //        var parser = new Parser("elementumEmpty.json");
    //        parser.parse();
    //
    //        var testGatherer = new Gatherer();
    //
    //        testGatherer.testElementi(parser.getParsedData()).should.equal(1);
    //    });
    //});
});