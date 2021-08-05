const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/auth",(req,res)=>{
    if(req.session.user?.id){
        res.redirect("/profile")
    } else {
        res.render("auth",{loggedInUser:req.session.user});
    }
})


module.exports = router;