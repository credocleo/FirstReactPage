
'use strict';

var express = require('./config/express');

var app = express();

app.listen(4040, function() {
	console.log('server on port 4040');
});