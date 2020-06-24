// Including npm packages
const express = require('express');
const path = require('path');
const config = require('config');

// Including controllers
const ctrlMapViewer = require('./routes/mapViewer');

const app = express();

app.set("views", path.join(__dirname,"views"));
app.set('view engine','ejs');

app.use('/', ctrlMapViewer)

app.listen(config.server.port, (req, res) => {
    console.log("Succesfully running on port: " + config.server.port);
});




