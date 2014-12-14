/**
 * Created by praetoriaen on 11/10/14.
 */

/* Mutator is a generic description for something that changes a value of the input data. In this case, I have implemented
   only one mutator: the additionMutator. All other Mutators are implemented in the same way, depending on the context;
   Remember, modular is king in this case.
 */

var mutator = function Mutator(gathered, mutation) {
    this.gathered = gathered;
    this.mutation = mutation;
    this.result = '';       //not redundant; keeps the last value mutated (or passed through)
};

mutator.prototype.passThrough = function() {
    this.result = this.gathered;
    return this.result;
};

mutator.prototype.additionMutate = function(delimeter) {
    this.result = this.gathered.concat(delimeter).concat(this.mutation);
    return this.result;
};

module.exports = mutator;