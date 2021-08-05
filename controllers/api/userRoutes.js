const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require('../../models');


module.exports = router;

router.get("/",(req,res)=>{
    db.User.findAll({
        include:[
            {
            model: db.Photos,
            include:[{
                model:db.Comment,
                include:[db.User]
            }],
    }]
    }).then(users=>{
       res.json(users);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
});

router.post("/",(req,res)=>{
    db.User.create(req.body).then(user=>{
        req.session.user = {
            id:user.id,
            username:user.username,
            email:user.email,
        }
        res.json(user);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})

router.get("/:id",(req,res)=>{
    db.User.findByPk(req.params.id,{
        include:[{
            model:db.Photos
        }, {model:db.User,
            as:"Followers"
        },
        {
         model:db.User,
         as:"Followed"}]
    }).then(users=>{
        res.json(users);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})

router.post("/login",(req,res)=>{
    db.User.findOne({
        where:{
            username:req.body.username
        }
    }).then(user=>{
        if(!user){
            res.status(403).json({
                message:"incorrect username or password, please try again"
            })
        }else {
            const isPasswordCorrect = bcrypt.compareSync(req.body.password,user.password);
            if(isPasswordCorrect){
                req.session.user = {
                    id:user.id,
                    username:user.username,
                    email:user.email
                }
                res.json(user);
            } else {
                res.status(403).json({
                    message:"incorrect username or password, please try again"
                })
            }
        }
    })
})

router.delete("/:id",(req,res)=>{
    db.User.destroy({
        where:{
            id:req.params.id
        }
    }).then(user=>{
        res.json(user);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})

router.post("/follow",(req,res)=>{
    if(!req.session?.user?.id){
        res.status(401).json({
            message:"login first!"
        })
    } else {
        db.User.findByPk(req.session.user.id).then(yourData=>{
            yourData.addFollow(req.body.follow).then(done=>{
                res.json({
                    message:"followed!"
                })
            })
        })
    }
})

router.post("/unfollow",(req,res)=>{
    if(!req.session?.user?.id){
        res.status(401).json({
            message:"login first!"
        })
    } else {
        db.User.findByPk(req.session.user.id).then(yourData=>{
            yourData.removeFollow(req.body.unfollow).then(done=>{
                res.json({
                    message:"unfollowed!"
                })
            })
        })
    }
})

module.exports = router;