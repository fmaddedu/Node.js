//readdirSync -> list all files in the directory
//existsSync -> check if var exists
//unlinkSync -> remove file
//mkdirSync -> create a repo
//appendFileSync -> create a file
var fs = require('fs');
var dir = './garbage';

emptyDir = function(dirPath){
	var files = fs.readdirSync(dirPath); 
  if (files.length > 0){
    for (var i = 0; i < files.length; i++){
      var filePath = dirPath + '/' + files[i];
      // if (fs.statSync(filePath).isFile()) is equal
      if (fs.existsSync(filePath))
        fs.unlinkSync(filePath);
    }
  }
};

try { 
	if (!isNaN(process.argv[2])){
		if (fs.existsSync(dir)){
			emptyDir(dir);
		} else {
		  fs.mkdirSync(dir);
		}
		for (var i = 1; i < parseInt(process.argv[2]) + 1; i++){
			fs.appendFileSync(dir + '/' + i, '');
			console.log('Created file ' + i);
		}
	}
	else
  console.log("Error: Critical failure");	 
}
catch (err) {
  console.error("Error: Critical failure", err);
}
console.log("Done");

//The script creates a garbage directory. This directory must be filled with a number of empty files equal to the number passed as argument
//The files name will be numbered from 1 to the entered number. Each time a file is created, you must display “Created file x"
//If the garbage directory already exists, it must be emptied beforehand (without deleting it).
//The last line of your script MUST BE console.log("Done").
//In case an error occurs, you will display “Error: Critical failure” ("Done" will still be displayed).


