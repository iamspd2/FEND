// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 3000;
const server = app.listen(port, ()=>{ console.log(`server running on port:${port}`)});

// Initialize all route with a callback function
app.get('/all', getData);

// Callback function to complete GET '/all'
function getData(req, res) {
	res.send(JSON.stringify(projectData));
}

// Post Route
app.post('/addData', postData);

// Callback function for POST
function postData(req, res) {
	projectData = {
		date: req.body.date,
		temp: req.body.temp,
		content: req.body.content
	};
	console.log(projectData);
	//console.log(JSON.stringify(projectData));
	res.end();
}
