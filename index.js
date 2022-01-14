process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("utils/db");
const config = require("config/index");
const listEndpoints = require('express-list-endpoints');
const formidable = require('express-formidable');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(formidable({
     encoding: 'utf-8',
     uploadDir: path.join(__dirname, '/temp/uploads'),
     multiples: true,
     keepExtensions: true
}));

const routes = require("routes/index");
app.use('/api', routes);

const PORT = config.port || 3000;
app.listen(PORT, function () {
    console.log(`✅ App listening on port ${PORT}!`);
    db.connect(config.mongodb.connectionString).then(() => {
        console.log('✅ Routes:')
        console.log(listEndpoints(app));
    });
});
