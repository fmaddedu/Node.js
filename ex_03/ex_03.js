//Your script will take two file names as argument. 
//Upon execution, the first file content will be copied into the second one.
//If the second file already exists, its content must be replaced.
//If it does not, it must be created and filled.
//If the first file does not exist, it does not have to be created.
//If an error happens, you must display “Error:_Critical_failure.”

var fs = require('fs');

try { 
	if (process.argv[2] && process.argv[3]){
		var file1 = process.argv[2];
		var file2 = process.argv[3];

// Using fs.access() to check for the accessibility of a file before calling fs.open(), fs.readFile() or fs.writeFile() is not recommended (SOURCE DOC)
		// get content
  	fs.readFile(file1, (err, data) => {
			if (err) console.log("Error: Critical failure");
				// copy content
				fs.writeFile(file2, data, (err) => {
		  		if (err) console.log("Error: Critical failure");	 
  		});	 
  	});				
  }
}
catch (err) {
  console.error("Error: Critical failure", err);
}