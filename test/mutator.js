/**
 * Created by praetoriaen on 11/9/14.
 */

var Mutator = require("../libs/mutator");   //more thorough explanation in mutator.js about the general conception

describe("Mutator", function() {
    describe("#additionMutate(String, String, delimeter)", function() {
        it("Should mutate the given object by addition", function () {
            var gathered = "Gathered text";
            var mutation = "Text that will be added";
            var delimeter = ' ';
            var additionMutator = new Mutator(gathered, mutation);

            additionMutator.additionMutate(delimeter).should.equal("Gathered text Text that will be added");
        });
    });

    describe("#passThrough()", function() {
            it("Should do nothing", function() {
                var gathered = "Sample gatherer data";
                var mutation = "Text that will used for mutation";
                var passThroughMutator = new Mutator(gathered, mutation);

                passThroughMutator.passThrough().should.equal("Sample gatherer data");
            });
        });
});
