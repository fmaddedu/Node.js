//create a module named check_types, which will contain a check function. 
var ct = require('./check_types');

console.log(ct.check(["hello", [0, 0], 5]));