//the function check takes an array of values as parameter and returns an array containing the result of the string method of the type-of-is module for each passed value.
var fs = require('fs');
var Type = require('type-of-is');

exports.check = function(array){
	
	var result = []; 
	array.forEach((value) => {
		result.push(Type.string(value));
	});
	return result;
}