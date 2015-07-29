var express = require('express');
var app = express();
var path  = require('path');

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./public/views/index.html"));
});

app.listen(app.get('port'), function(){
    console.log("Hey! Listening on the port: " + app.get('port'));
});