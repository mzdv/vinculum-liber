/**
 * Created by praetoriaen on 11/9/14.
 */

var mutator = require("../libs/mutator");

describe("Mutator", function() {
    describe("#mutate(Gatherer Gatherer, Object mutation)", function() {
        it("Should mutate the given object", function () {
            var gatherer = "{ a: \"abc\", b: \"cde\" }";
            var mutation = "{ c: \"efg\" }";
            var testMutator = new mutator();

            testMutator.mutate(gatherer, mutation).should.be.type(Object);
        });
    });

    describe("#passThrough()", function() {
            it("Should do nothing", function() {
                var testMutator = new mutator();

                testMutator.passThrough().should.return(0);
            });
        });
});
