/**
 * Created by praetoriaen on 11/9/14.
 */

var mutator = require("../libs/mutator");

describe("Mutator", function() {
    describe("#mutate(Object objectToMutate, Object mutation)", function() {
        it("Should mutate the given object", function () {
            var objectToMutate = "{ a: \"abc\", b: \"cde\" }";
            var mutation = "{ c: \"efg\" }";

            mutator.mutate(objectToMutate, mutation).should.be.type(Object);
        });
    });

    describe("#passThrough()", function() {
            it("Should do nothing", function() {
                mutator.passThrough().should.return(0);
            });
        });
});
