/**
 * Created by praetoriaen on 11/10/14.
 */
var mongoose = require("mongoose");

var Schema = mongoose.Schema;



var logger = function Logger() {
    this.result = '';

};

logger.prototype.passThrough = function(dataToLog) {
    this.result = dataToLog;
    return this.result;
};

logger.prototype.logInto = function(dataToLog) {
    mongoose.connect("mongodb://127.0.0.1/vinculum-liber");

    var loggingSchema = Schema({
        timestamp: String,
        data: String
    });

    var loggingModel = mongoose.model("logs", loggingSchema);

            var date = new Date();

            var loggingObject = new loggingModel( {
                timestamp: date.toJSON(),
                data: dataToLog.toString()
            });

            loggingObject.save(function(err) {
                if(err) {
                    console.error(err);
                    mongoose.connection.close();
                    return -1;
                }
            });

        mongoose.connection.close();

    return dataToLog;   // this here is a very bad monkey patch; I ought to fix it once.
};

module.exports = logger;