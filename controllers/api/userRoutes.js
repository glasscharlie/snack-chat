const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require('../../models');
const path = require('path');

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

router.get("/getusername/:username",(req,res)=>{
    db.User.findOne({
        where: {username:req.params.username}
    }).then(user=>{
        res.json(user);
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
        console.log(req.session.user.id)
        db.User.findByPk(req.session.user.id)
        .then(yourData=>{
            console.log(req.body.follow)
            yourData.addFollowed(req.body.follow).then(done=>{
                res.json({
                    message:"followed!"
                })
                console.log('followed')
            })
        })
    }
})

router.post("/unfollow/:id",(req,res)=>{
    if(!req.session?.user?.id){
        res.status(401).json({
            message:"login first!"
        })
    } else {
        db.User.findByPk(req.session.user.id).then(yourData=>{
            yourData.removeFollowed(req.params.id).then(done=>{
                res.status(200).redirect('/friends')
                console.log('unfollowed')
            })
        })
    }
})

module.exports = router;