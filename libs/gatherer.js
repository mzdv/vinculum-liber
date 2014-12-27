/**
 * Created by praetoriaen on 11/9/14.
 */
//var http = require("http");
//var _ = require("lodash");

var gatherer = function Gatherer(){};

//gatherer.prototype.elementiPinger = function(parsedData) {        // this here is something that will be implemented in the future, but can't be currently
//                                                                    // due to the simple fact that I'm in a rush and sick
//
//    var responses = [];
//
//    for(var i = 0; i < parsedData.elements.length; i++) {
//        http.get("http://localhost" + parsedData.elements[i], function (res) {
//            var parsedResponse = JSON.parse(res.body);
//
//            if (parsedResponse.status === "present") {
//                responses[parsedResponse.order] = 1;
//            }
//            else if (parsedResponse.status === "missing") {
//                responses[parsedResponse.order] = 0;
//            }
//
//        });
//    }
//
//    return _.contains(responses, 0);
//};
//
//gatherer.prototype.testElementi = function(parsedData) {
//    if(parsedData.elements.length === 0)
//        return 1;
//    else if(this.elementiPinger(parsedData))
//        return 0;
//    else
//        return -1;
//};

module.exports = gatherer;