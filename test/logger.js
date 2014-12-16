/**
 * Created by praetoriaen on 11/9/14.
 */

var Logger = require("../libs/logger");

describe("Logger", function() {
    describe("#logInto(string, string)", function() {
        it("Should log the object into the database", function() {
            var dataToLog = "{ a: \"abc\" }";
            var connectionToDB = "connectionString";
            var testLogger = new Logger(dataToLog, connectionToDB);

            testLogger.logInto().should.return(0);
        });
    });

    describe("#passThrough()", function() {
        it("Should do nothing", function() {
            var dataToLog = "{ a: \"abc\" }";
            var connectionToDB = "connectionString";
            var testLogger = new Logger(dataToLog, connectionToDB);

            testLogger.passThrough().should.equal("{ a: \"abc\" }");
        });
    });
});