import { Router } from "express"

const router = Router();
const Post = require('../models/post')

router.get("/", (req, res) => res.send("Post + TypeScript Server"));
router.post('/',(req,res)=>{
    const post = new Post({
        title:req.body.title,
        description: req.body.description
    })
    post.save().then(data=>{
            res.json(data)
        }).catch(err=>{
            res.json({message:err})
    })
})
module.exports = router;
