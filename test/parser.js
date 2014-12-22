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

            testParser.getData().should.equal("{\n  \"name\": \"elementum\",\n  \"description\": \"elementum.json test file\",\n  \"elements\": [\n    {\n      \"callsign\": \"callsign1\",\n      \"location\": \"callsign1.js\"\n    },\n    {\n      \"callsign\": \"callsign2\",\n      \"location\": \"callsign2.js\"\n    },\n    {\n      \"callsign\": \"callsign3\",\n      \"location\": \"callsign3.js\"\n    }\n  ]\n}");
        });
        it("Should return the parsed data from elementum.json", function () {
            var testParser = new Parser("elementum.json");
            testParser.parse();

            testParser.getParsedData().name.should.equal("elementum");
        });
    });

    describe("#listResources()", function () {
        it("Should return the array of resources that are used for monitoring", function () {
            var testParser = new Parser("elementum.json");
            testParser.parse();

            testParser.getResourceList().should.equal([
                "callsign1/callsign1.js",
                "callsign2/callsign2.js",
                "callsign3/callsign3.js"
            ]);
        });
    });
});