//Your script will be provided a directory name as the first argument and a file extension as the second argument. 
//Your script will print the list of files matching this extension within the given directory.
//The list of files should be printed on the console, one file per line.
//If an error happens, you must display “Error: Critical failure”.
//Warning: the second argument will not come prefixed with “.”.

var fs = require('fs');
var path = require('path');


if (process.argv[2] && process.argv[3]){
	var dirPath = process.argv[2];
	var extFilter = process.argv[3];

	function extension(element) {
	  var extName = path.extname(element);
	  //returns matching extensions
	  if (extName === '.' + extFilter)
	  	return element; 
	};

	fs.readdir(dirPath, (err, files) => {
		if (err){ 
			console.log("Error: Critical failure");
			return;
		}
	  files.filter(extension).forEach((value) => {
	    console.log(value);
	  });
	});
}
	  //path.extname(element) -> returns the extension of the element
		//.forEach -> takes a callback function and run that callback function on each element of array one by one
		//.filter(function) -> same but returns a filtered array