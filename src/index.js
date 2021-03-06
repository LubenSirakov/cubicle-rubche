const express = require('express');
const path = require('path');
const routes = require('./routes.js');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const initDatabase = require('./config/database.js');
const cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/authMiddleware.js');
const { errorHandler } = require('./middlewares/errorHandlerMiddleware.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(auth);
const initHandlebars = require('./config/handlebars.js');
initHandlebars(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);
app.use(errorHandler);

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`))
    })
    .catch(err => {
        console.log('Application init failed: ', err);
    })