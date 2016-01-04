var express = require('express');
var app = express();


app.use(express.static('../public'));

var port = process.env.PORT || 3250 ;

app.listen(port, function(){
  console.log('Now listening on localhost:' + port);
});
