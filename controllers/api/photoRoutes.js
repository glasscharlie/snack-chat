const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get("/",(req,res)=>{
    db.Photos.findAll({include:[db.User]}).then(photos=>{
       res.json(photos);
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
            restaurant:photo.restaurant
        }
        res.json(photo);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})

router.get("/:restaurant",(req,res)=>{
    db.Photos.findByPk(req.params.restaurant,{
        include:[{
            model:db.User
        }]
    }).then(photo=>{
        res.json(photo);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;