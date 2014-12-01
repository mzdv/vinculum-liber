/**
 * Created by praetoriaen on 11/9/14.
 */

var Parser = require("../libs/parser");

describe("Parser", function () {
    describe("#parse()", function () {
        it("Should return -1 when the elementum.json is invalid", function () {
            var testParser = new Parser("dummyfile");

            testParser.parse().should.equal(-1);
        });

        it("Should return 0 when the elementum.json is valid", function () {
            var testParser = new Parser("elementum.json");

            testParser.parse().should.equal(0);
        });
        it("Should return the raw data from elementum.json", function () {
            var testParser = new Parser("elementum.json");
            testParser.parse();

            testParser.getData().should.equal("{\n  \"name\": \"elementum.json test file\",\n  \"description\": \"elementum.json test file\",\n  \"elements\": [\n    {\n      \"callsign\": \"callsign1\",\n      \"port\": \"13371\"\n    },\n    {\n      \"callsign\": \"callsign2\",\n      \"port\": \"13372\"\n    },\n    {\n      \"callsign\": \"callsign3\",\n      \"port\": \"13373\"\n    }\n  ]\n}");
        });
        it("Should return the parsed data from elementum.json", function () {
            var testParser = new Parser("elementum.json");
            testParser.parse();

            testParser.getParsedData().name.should.equal("elementum.json test file");
        });
    });

    describe("#listResources()", function () {
        it("Should return the array of resources that are used for monitoring", function () {
            var testParser = new Parser("elementum.json");
            testParser.parse();

            testParser.getResourceList().should.equal(["resourceOne", "resourceTwo", "resourceThree"]);
        })
    });

    describe("#listElementi()", function () {
        it("Should return the array of elementi that are used for monitoring", function () {
            var arrayOfInterfaces = "{ resourceOne: \"interfaceOne\", resourceTwo: \"interaceTwo\", resourceThree: \"interfaceThree\"}";
            var testParser = new Parser();

            testParser.listInterfaces(arrayOfInterfaces).should.equal(["interfaceOne", "interfaceTwo", "interfaceThree"]);
        });
    })
});