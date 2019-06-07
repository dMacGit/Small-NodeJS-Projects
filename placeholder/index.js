const request = require('request');
const express = require('express');

//Start express
const app = express();

const hostname = '127.0.0.1';
const port = 6556;

//Setup express for aditional folders
app.use(express.static('static'));

function someAsyncCall()
{

}

app.get('main.html', function(req, res) 
{ 
	//var webContent = 'Hello World\n';
	//res.send(webContent);
	res.send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));