const Joi = require('joi');
const express = require('express');
const router = express.Router();

const genres = [
 { id: 1, name: 'genre1' },
 { id: 2, name: 'genre2' },
 { id: 3, name: 'genre3' },
];

app.get('/', (req, res) => {
    res.send(genres);
});

app.get('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.'); // 404
    res.send(genre);
});

app.post('/', (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const genre = {
        id: genres.length + 1,
        name: req.body.name,
    };
    genres.push(genre);
    res.send(genre);
});

app.put('/:id', (req, res) => {
    // Look up the genre
    // If not existing, return 404
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.'); // 404

    // Validate
    // If invalid, return 400 - Bad request
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Update genre
    // Return the updated genre
    genre.name = req.body.name;
    res.send(genre);
});

app.delete('/:id', (req, res) => {
    // look up the genre
    // Not existing ,return 404
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.'); // 404

    // Delete
    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    // Return the same genre
    res.send(genre);
})

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}

module.exports = router;