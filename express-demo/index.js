const debug = require('debug')('app:startup');
// const dbDebugger = require('debug')('app:db');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');

const home = require('./routes/home');
const courses = require('./routes/courses');
const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const authenticater = require('./middleware/authenticate');

app.use(logger);
app.use(authenticater);

console.log(`NODE_ENV: ${process.env.NODE_ENV}`); // undefined
console.log(`app: ${app.get('env')}`);

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());

// Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan enabled...'); 
}

// Db work...
debug('Connected to the database...');
app.use('/', home);
app.use('/api/courses', courses);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));