var http = require('http');
var ipAddress = "127.0.0.1";
var port = 1974;
var contentTypeHTML = "'Content-Type': 'text/html'";
var contentTypeJSON = "'Content-Type': 'text/json'";
var fs = require('fs');

var welcomeMessageHTML = "Hello, Welcome...";

var server = http.createServer(function(req, res){

  res.writeHead(200, contentTypeHTML);

  var readStream;
  switch(req.url){
    case '/GET':
      console.log('Getting images for requested: ' + req.url);
      break;
    case "/about": //load the about file
    console.log("/about");
      readStream = fs.createReadStream(__dirname + '\\about.html', 'utf8');
      //var writeStream = fs.createWriteStream(__dirname + '/content/outputFile.html', 'utf8');
      readStream.pipe(res);
      console.log("ABOUT");
      break;
    case '/':
    default:
      welcomeMessageHTML = "<html><head><title>Playback</title><body><h2>Image Playback Broker</h2></body></html>";
      res.end(welcomeMessageHTML);
      break;

  }
  //console.log(req.url);
});

server.listen(port, ipAddress);
console.log('\n\nPlayback image broker running, waiting for clients  to connect on port: ' + port);
