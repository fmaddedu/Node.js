var http = require('http');

exports.server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(
'<!DOCTYPE html>'+
'<html>'+
'    <head>'+
'        <meta http-equiv= "Content-type" content = "text/html"; charset="utf-8" />'+
'        <title>Welcome</title>'+
'    </head>'+
'    <body>'+
'     	<p>Greetings Traveler !</p>'+
'    </body>'+
'</html>');
res.end();
});