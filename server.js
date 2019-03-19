const express = require('express');

const postsRouter = require('./posts/posts-router');

const server = express();

server.get('/', (req, res) => {
    res.send(`<h1>Web API II Challenge</h1>`);
});

server.use('/api/posts', postsRouter);

module.exports = server;