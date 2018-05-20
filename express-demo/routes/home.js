const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('user ' + req.params.id);
    // res.send('Hello World!!!');
    res.render('index', {title: 'My Express App', message: 'Hello'});
});