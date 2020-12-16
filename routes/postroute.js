const express = require('express');
const router = express.Router();
const Post = require('../model/Post');

//This is a post route to get post from the user
router.get('/', async (req, res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);

    } catch(err){
        res.json({message:err});
    }
});

//This helps to post data into the database on the post route

router.post('/', async (req, res) =>{
     const post = new Post({
         userName: req.body.userName,
         title: req.body.title
     });
     try{
        const savedPost = await post.save();
        res.json(savedPost);
        } catch (err) {
            res.json({ message: err});
        }

});

//This helps find a specific user from the database
router.get('/:postId', async (req,res) => {
    try{
    const post = await Post.findById(req.params,postId);
    res.json(post);
    } catch(err){
        res.json({message: err});
    }
});

//This helps delete a user from database
router.delete('/:postId', async (req, res) =>{
    try{
    const removedPost = await Post.remove({_id: req.params.postId});
    res.json(removedPost);
    } catch(err){
        res.json({message: err});
    }
});



module.exports = router;