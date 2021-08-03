const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require('../../models');


module.exports = router;

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