var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
   response.sendfile('index.html');
})

app.get('/cars', function(request, response) {
  response.sendfile('cars.html');
})

app.get('/cats', function(request, response) {
  response.sendfile('cats.html');
})

app.get('/cars/new', function(request, response) {
  response.sendfile('newcar.html');
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})