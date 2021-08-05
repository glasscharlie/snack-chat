const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post("/",(req,res)=>{
    db.Comment.create(req.body).then(comment=>{
        req.session.comment = {
            body:comment.body,
            userId:comment.userId,
            PhotoId:comment.PhotoId
        }
        res.json(comment);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})

router.get("/",(req,res)=>{
    db.Comment.findAll({
        include:[db.User,{
            model:db.Photos,
            include:[db.User]
        }]
    }).then(comment=>{
        res.json(comment);
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            message:"error!",
            error:err
        })
    })
})

router.get("/:id",(req,res)=>{
    db.Comment.findByPk(req.params.id,{
        include:[db.User,{
            model:db.Photos,
            include:[db.User]
        }]
    }).then(comment=>{
        res.json(comment);
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            message:"error!",
            error:err
        })
    })
})

router.delete("/:id",(req,res)=>{
    if(!req.session?.user?.id){
        res.status(401).json({message:"login first!"})
    } else {
       db.Comment.destroy({
           where:{
               id:req.params.id,
               UserId:req.session.user.id
           }
       }).then(del=>{
           if(del){
               res.json({
                   message:"succesful delete!"
               });
            } else {
                res.status(400).json({message:"comment does not exist or isnt yours"})
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