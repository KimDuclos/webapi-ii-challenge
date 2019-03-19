const express = require('express');

const Posts = require('./posts-model.js')

const router = express.Router();

// handles urls with /api/posts

// /api/posts -- POST
router.post('/', async (req, res) => {
    try {
        const post = await Posts.find();  // set full query of posts to variable

        if (post.title === null || post.contents === null) {  // if title or contents missing, send error
            res.status(400).json( { errorMessage: 'Please provide title and contents for this post.' });
        } else {
            Posts.insert(post) // create the new post in the database
                .then(newPost => { // take that result
                    Posts.findById(newPost.id) // and find it by its new ID
                    .then(newPost2 => {  // then take the new result of that 
                        res.status(201).json(newPost2); // return 201 (created) with full new post
                    });
                });        
        }
    } catch (error) {  // catch all error with database logging
        console.log(error); // log error
        res.status(500).json ( { error: 'There was an error while saving the post to the database.' }) // send error code and message
    };
});


// /api/posts -- GET
router.get('/', async (req, res) => {
    try {
        const postsReturn = await Posts.find(); // set variable to posts query
        res.status(200).json(postsReturn); // if retrieved, return 200 OK and posts
    }
    catch(error) { // data is not retrieved correctly
            res.status(500).json( { error: 'The posts information could not be retrieved.' } );
    }
});

// /api/posts:id -- GET
router.get('/:id', (req, res) => {
    res.status(200).send('GET /posts/:id endpoint');
});

// /api/posts:id -- DELETE
router.delete('/:id', (req, res) => {
    res.status(200).send('DELETE  /posts/:id endpoint');
});

// /api/posts:id -- PUT
router.put('/:id', (res, req) => {
    res.status(200).send('PUT /posts/:id endpoint');
});

module.exports = router;