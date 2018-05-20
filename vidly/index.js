const Joi = require('joi');
const home = require('./routes/home');
const genres = require('./routes/genres');
const express = require('express');
const app = express();

console.log(`NODE_ENV: ${process.env.NODE_ENV}`); // undefined
console.log(`app: ${app.get('env')}`);

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());

app.use('/', home);
app.use('/api/genres', genres);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));