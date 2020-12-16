const express = require('express');
const router = express.Router();

//This is a post route to get post from the user
router.get('/', async (req, res) =>{
    try{
        const posts = await posts.find();
        res.json(posts);
    } catch(err){
        res.json({message:err});
    }
});

//This helps to post data into the database on the post route

router.poster ('/', async (req, res) =>{
     const post = new post({
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

