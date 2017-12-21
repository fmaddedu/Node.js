var fs = require('fs');
var dir = './garbage';

function garbageDir(number){
	if (isNaN(number)){
	  console.log("Error: Critical failure");	 
		return;
	}
	else {
		fs.access(dir, (err) => {
  		if (err){ 
			  fs.mkdir(dir, (err) => {
		  		if (err){ 
						console.log("Error: Critical failure");
						return;
					}
				});
			}
			fs.readdir(dir, (err, files) => {
				if (err){ 
					console.log("Error: Critical failure");
					return;
				}
		    for (var i = 0; i < files.length; i++){
		      var filePath = dir + '/' + files[i];
		    	fs.unlink(filePath, (err) => {
						if (err){ 
							console.log("Error: Critical failure");
							return;
						}
			   	});	
		  	}
				createFiles(number);
			});
		});
	}
	console.log("Done");
}

createFiles = function(number){
	for (var i = 1; i < parseInt(number) + 1; i++){
		fs.appendFile(dir + '/' + i, '', (err) => {
  		if (err){ 
				console.log("Error: Critical failure");
				return;
			}
		});
		console.log('Created file ' + i);
	}
}

garbageDir(process.argv[2]);

//The script creates a garbage directory. This directory must be filled with a number of empty files equal to the number passed as argument
//The files name will be numbered from 1 to the entered number. Each time a file is created, you must display “Created file x"
//If the garbage directory already exists, it must be emptied beforehand (without deleting it).
//The last line of your script MUST BE console.log("Done").
//In case an error occurs, you will display “Error: Critical failure” ("Done" will still be displayed).


