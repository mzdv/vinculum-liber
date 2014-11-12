/**
 * Created by praetoriaen on 11/9/14.
 */

var parser = require("../libs/parser");

describe("Parser", function() {
    describe("#parse(String JSONString)", function() {
        it("Should return -1 when the JSON is invalid", function() {
            var fakeJSON = "{ fakejsonbonanza; jsonparty }";
            var testParser = new parser();

            testParser.parse(fakeJSON).should.equal(-1);
        });

        it("Should return 0 when the JSON is valid", function() {
            var realJSON = "{ a: \"abc\"}";
            var testParser = new parser();

            testParser.parse(realJSON).should.equal(0);
        })
    });

    describe("#listResources()", function() {
        it("Should return the array of resources that are used for monitoring", function() {
            var arrayOfEvents = "{ resourceOne: \"interfaceOne\", resourceTwo: \"interaceTwo\", resourceThree: \"interfaceThree\"}";
            var testParser = new parser();

            testParser.resourceList(arrayOfEvents).should.equal(["resourceOne", "resourceTwo", "resourceThree"]);
        })
    });

    describe("#listElementi()", function() {
        it("Should return the array of elementi that are used for monitoring", function() {
            var arrayOfInterfaces = "{ resourceOne: \"interfaceOne\", resourceTwo: \"interaceTwo\", resourceThree: \"interfaceThree\"}";
            var testParser = new parser();

            testParser.listInterfaces(arrayOfInterfaces).should.equal(["interfaceOne", "interfaceTwo", "interfaceThree"]);
        });
    })
});