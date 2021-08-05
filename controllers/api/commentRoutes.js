const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post("/",(req,res)=>{
    db.Comment.create(req.body).then(comment=>{
        req.session.comment = {

            body:photo.review,
        }
        res.json(photo);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;