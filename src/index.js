const express = require('express');
const path = require('path');
const routes = require('./routes.js');

const initHandlebars = require('./config/handlebars.js');
const app = express();

app.use(express.urlencoded({extended: true}));

initHandlebars(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);

app.listen(5000, console.log.bind(console, 'Application is running on http://localhost:5000'))