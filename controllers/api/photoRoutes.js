const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get("/",(req,res)=>{
    db.Photos.findAll().then(users=>{
       res.json(users);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
});

router.post("/",(req,res)=>{
    db.Photos.create(req.body).then(photo=>{
        req.session.photo = {
            id:photo.id,
            user_id:photo.user_id,
            review:photo.review,
            url:photo.url,
        }
        res.json(photo);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;