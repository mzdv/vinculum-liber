/**
 * Created by praetoriaen on 11/9/14.
 */

var parser = require("../libs/parser");

describe("Parser", function() {
    describe("#parse()", function() {
        it("Should return -1 when the elementum.json is invalid", function() {
            var testParser = new parser("dummyfile");

            testParser.parse().should.equal(-1);
        });

        it("Should return 0 when the elementum.json is valid", function() {
            var testParser = new parser("elementum.json");

            testParser.parse().should.equal(0);
        });
        it("Should return the raw data from elementum.json", function() {
            var testParser = new parser("elementum.json");
            testParser.parse();

            testParser.getData().should.equal('{\n  "name": "elementum.json test file",\n  ' +
                                                    '"description": "elementum.json test file",\n  ' +
                                                    '"element_callsign_one": "path_to_element",\n  ' +
                                                    '"element_callsign_two": "path_to_element",\n  ' +
                                                    '"element_callsign_three": "path_to_element",\n  ' +
                                                    '"element_callsign_four": "path_to_element"\n}');
        });
        it("Should return the parsed data from elementum.json", function() {
            var testParser = new parser("elementum.json");
            testParser.parse();

            testParser.parse().getParsedData().name.should.equal("elementum.json test file");
        });
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