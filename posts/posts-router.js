const express = require('express');

const Posts = require('./posts-model.js')

const router = express.Router();

// handles urls with /api/posts

// /api/posts -- POST
router.post('/', async (req, res) => {
    try {
        let post = req.body;  // set full query of posts to variable

        if (post.title === null || post.contents === null) {  // if title or contents missing, send error
            res.status(400).json( { errorMessage: 'Please provide title and contents for this post.' });
        } else {
            let postResult = await Posts.insert(post) // create the new post in the database
            res.status(201).json(await Posts.findById(postResult.id)); // return created and the created posts based on the found new ID
        }
    } catch (error) {  // catch all error with database logging
        console.log(error); // log error
        res.status(500).json ( { error: 'There was an error while saving the post to the database.' }) // send error code and message
    };
});

// /api/posts -- GET
router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find(); // get all posts from database
        res.status(200).json(posts); // 200 OK if posts retrieved
    } catch (error) { // error if posts not retrieved correctly
        res.status(500).json( { error: 'The posts information could not be retrieved' } );
    }
});

// /api/posts:id -- GET
router.get('/:id', async (req, res) => {
    try {
        const getPost = await Posts.findById(req.params.id); // find the post using ID via param

        if (getPost) { 
            res.status(200).json(getPost);
        } else {
            res.status(404).json( { message: 'The post with the specific ID does not exist.' } );
        }
    } catch (error) {
        console.log(error);
        res.status(500).json( { error: 'The post information could not be retrieved.' } );
    }
});

// /api/posts:id -- DELETE
router.delete('/:id', async (req, res) => {
    try {
        const delPost = await Posts.remove(req.params.id);
        if (count > 0) {
            res.status(200).json(delPost);
        } else {
            res.status(404).json( { message: 'The post with the specified ID does not exist.' } );
        } 
    } catch (error) {
            console.log(error);
            res.status(500).json( { error: 'The post could not be removed.' } );
    }
});

// /api/posts:id -- PUT
router.put('/:id', async (res, req) => {
    try {
        const putPost = await Posts.update(req.param.id, req.body);
        if (putPost) {
            res.status(200).json(putPost);
        } else if (post.title === null || post.contents === null) {
            res.status().json();
        } else {
            res.status(400).json( { message: 'Please provide title and contents for the post.' } );
        }
    } catch (error) {
        console.log(error);
        res.status(500).json( { error: 'The post information could not be modified' } );
    }
});

module.exports = router;