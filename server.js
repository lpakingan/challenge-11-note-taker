// packages required for running the note taker app
const express = require('express');
const html = require('./routes/html_routes.js');
const api = require('./routes/api_routes.js');

const app = express();

// specified port for running server.js
const PORT = process.env.PORT || 3111;

// middleware for parsing the JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// using the routes that were created for the html/api
app.use('/', html);
app.use('/api', api);

// specifies that the app is launched at the specified port
app.listen(PORT, () =>
  console.log(`App listening at PORT ${PORT}!`)
);