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
    mongoose.connect("mongodb://localhost/vinculum-liber");

    var db = mongoose.connection;

    var loggingSchema = Schema({
        timestamp: String,
        data: String
    });

    var loggingModel = mongoose.model("Logs", loggingSchema);

    db
        .on("open", function() {
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
            })
        })
        .on("error", console.error.bind(console, "Error in MongoDB: "));

        mongoose.connection.close();

    return dataToLog;   // this here is a very bad monkey patch; I ought to fix it once.
};

module.exports = logger;