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
    db.Photos.findAll({
        where: {
            restaurant:req.params.restaurant
        },
        include:[
            {
            model: db.User,
            include:[{
                model:db.Comment,
                include:[db.User]
            }],
    }]
    }).then(photo=>{
        res.json(photo);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})

router.delete("/:id",(req,res)=>{
    if(!req.session?.user?.id){
        res.status(401).json({message:"login first!"})
    } else {
       db.Photos.destroy({
           where:{
               id:req.params.id,
               user_id:req.session.user.id
           }
       }).then(delPhoto=>{
           if(delPhoto){
               res.json({
                   message:"succesful delete!"
               });
            } else {
                res.status(400).json({message:"Photo doesnt exist or isnt yours!"})
            }
       }).catch(err=>{
        console.log(err)
        res.status(500).json({
            message:"error!",
            error:err
        })
    })
    }
})

module.exports = router;