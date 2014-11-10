/**
 * Created by praetoriaen on 11/9/14.
 */

var logger = require("../libs/logger");

describe("Logger", function() {
    describe("#logInto(Object objectToBeLogged, string connectionToDB)", function() {
        it("Should log the object into the database", function() {
            var objectToBeLogged = "{ a: \"abc\" }";
            var connectionToDB = "connectionString";

            logger.logInto(objectToBeLogged, connectionToDB).should.return(0);
        });
    });

    describe("#passThrough()", function() {
        it("Should do nothing", function() {

            logger.logInto.should.return(0);
        });
    });
});