/**
 * Created by praetoriaen on 11/10/14.
 */

var combiner = require("../libs/combiner");

var parser = require("../libs/parser");
var gatherer = require("../libs/gatherer");
var mutator = require("../libs/mutator");
var logger = require("../libs/logger");

describe("Combiner", function() {
    describe("#combine(Parser parser, Gatherer Gatherer, Mutator mutator, Logger logger)", function() {
        it("Should return JSON which is an array of other JSONs", function() {
            var testCombiner = new combiner();

            testCombiner.combine(parser, gatherer, mutator, logger).should.be.type(Object);
        });
    });
});