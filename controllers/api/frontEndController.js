const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/login", (req,res)=>{
    res.render("login");
})
router.get("/profile", (req,res)=>{
    res.render("profile");
})
router.get("/search", (req,res)=>{
    res.render("search");
})
router.get("/friends", (req,res)=>{
    res.render("friends");
})



module.exports = router;