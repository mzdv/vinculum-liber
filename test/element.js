/**
 * Created by praetoriaen on 11/10/14.
 */
var Element = require("../libs/element");

describe("Element", function() {
    describe("#newElement(String callsign, String path)", function() {
        it("Should create a new Element with the callsign and path", function() {

            var callsign = "a";
            var path = "a";

            var testElement = new Element.newElement(callsign, path);

            testElement.callsign.should.equal(callsign);
            testElement.path.should.equal(path);

        });
    });
    describe("#createVault()", function() {
        it("Should return 0 on successful elementi.json creation", function() {
            Element.createVault().should.be(0);
        })
    })
});
