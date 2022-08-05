const express =  require('express');
const posts = require('../models/Posts');

const router =  express.Router();

//gets all the posts
router.get('/',(req,res)=>{
    posts.find().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.json({
            message:err.message
        })
    })
})

//creates a posts
router.post('/',(req,res)=>{
    const post = new posts({
        title:req.body.title,
        body:req.body.body
    })
    post.save().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.json({
            message:err.message
        })
    })
})

//finds a specific post 
router.get('/:id',(req,res)=>{
    posts.findById(req.params.id).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.json({
            message:err.message
        })
    })
})

//removes a post
router.delete('/:id',(req,res)=>{
    posts.remove({
        _id:req.params.id
    }).then(response=>{
        res.json(response)
    }).catch(err=>{
        res.json({
            message:err.message
        })
    })
})

//patching on a single post
router.patch('/:id',(req,res)=>{
    posts.updateOne({
        _id:req.params.id
    },
    {
        $set:{
            title:req.body.title,
        }
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.json({
            message:err.message
        })
    })
})
module.exports = router;