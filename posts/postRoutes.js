const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    res.status(200).send('POST /posts endpoint');
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