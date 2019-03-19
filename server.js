// server with routes

// uses functions from db.js
const DB = require('./data/db');

const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    let titleContents = req.body;
    if (titleContents.title === null || titleContents.contents === null) {
        res.status(400).send( { errorMessage: 'Please provide title and contents for the post.'});
    } else {
        
    }
});

router.get('/', (req, res) => {
    res.status(200).send('GET /posts endpoint');
});

router.get('/:id', (req, res) => {
    res.status(200).send('GET /posts/:id endpoint');
});

router.delete('/:id', (req, res) => {
    res.status(200).send('DELETE  /posts/:id endpoint');
});

router.put('/:id', (res, req) => {
    res.status(200).send('PUT /posts/:id endpoint');
});

module.exports = router;