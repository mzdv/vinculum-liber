/**
 * Created by praetoriaen on 11/10/14.
 */
//var elementi = [];

var Element = {                         //refactoring inbound

    newElement: function(callsign, path){
        this.callsign = callsign;
        this.path = path;
    },

    createVault: function() {
        console.log("To be implemented");
        return 0;
    }
};

//elementi.push(Element);               what to do with this?

module.exports = Element;