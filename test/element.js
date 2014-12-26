/**
 * Created by praetoriaen on 11/10/14.
 */
var element = require("../libs/element");

var should = require("should");

describe("Element", function() {
    describe("#newElement(String callsign, String path)", function() {
        it("Should create a new Element with the callsign and path", function() {

            var callsign = "a";
            var path = "a";

            var testElement = new element(callsign, path);

            testElement.getCallsign().should.equal(callsign);
            testElement.getPath().should.equal(path);

        });
    });
});
