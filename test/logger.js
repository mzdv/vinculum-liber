/**
 * Created by praetoriaen on 11/9/14.
 */

var Logger = require("../libs/logger");

describe("Logger", function() {
    describe("#logInto(string)", function() {
        it("Should log the string into the database", function() {
            var dataToLog = "Some cool data";

            var testLogger = new Logger();

            testLogger.logInto(dataToLog).should.equal("Some cool data");
        });
    });

    describe("#passThrough()", function() {
        it("Should do nothing", function() {
            var dataToLog = "Some cool data";
            var testLogger = new Logger();

            testLogger.passThrough(dataToLog).should.equal("Some cool data");
        });
    });
});