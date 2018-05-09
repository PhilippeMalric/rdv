
//Install express server
const express = require('express');
const app = express();
var path = require('path');

console.log(path.join(__dirname + '/dist/index.html'))

app.use(express.static(__dirname + '/public'));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname + '/dist/index.html'));
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);