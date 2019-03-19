const express = require('express');

const Posts = require('./posts-model.js')

const router = express.Router();

// handles urls with /api/posts

// /api/posts
router.post('/', (req, res) => {
    res.status(200).send('POST /posts endpoint');
});

// /api/posts
router.get('/', (req, res) => {
    res.status(200).send('GET /posts endpoint');
});

// /api/posts:id
router.get('/:id', (req, res) => {
    res.status(200).send('GET /posts/:id endpoint');
});

// /api/posts:id
router.delete('/:id', (req, res) => {
    res.status(200).send('DELETE  /posts/:id endpoint');
});

// /api/posts:id
router.put('/:id', (res, req) => {
    res.status(200).send('PUT /posts/:id endpoint');
});

module.exports = router;