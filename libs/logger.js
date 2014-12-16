/**
 * Created by praetoriaen on 11/10/14.
 */

var logger = function Logger(dataToLog, connectionString) {
    this.dataToLog = dataToLog;
    this.connectionString = connectionString;
    this.result = '';
};

logger.prototype.passThrough = function() {
    this.result = this.dataToLog;
    return this.result;
};

module.exports = logger;