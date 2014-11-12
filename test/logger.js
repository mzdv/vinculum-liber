/**
 * Created by praetoriaen on 11/9/14.
 */

var logger = require("../libs/logger");

describe("Logger", function() {
    describe("#logInto(Mutate mutate, string connectionToDB)", function() {
        it("Should log the object into the database", function() {
            var mutate = "{ a: \"abc\" }";
            var connectionToDB = "connectionString";
            var testLogger = new logger();

            testLogger.logInto(mutate, connectionToDB).should.return(0);
        });
    });

    describe("#passThrough()", function() {
        it("Should do nothing", function() {
            var testLogger = new logger();

            testLogger.logInto.should.return(0);
        });
    });
});