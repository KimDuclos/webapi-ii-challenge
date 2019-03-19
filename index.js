const express = require('express');

// require routes from postRoutes.js
const postRoutes = require('./posts/postRoutes');

const server = express();

server.use('/', (req, res) => res.send('API running'));

// server to make use of routes on postRouters.js
server.use('/posts', postRoutes);

server.listen(8000, () => console.log('API running on port 8000'));


