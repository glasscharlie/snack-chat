const express = require('express');
const router = express.Router();
const db = require('../models');
const { User, Photo } = require('../models');

router.get("/login", (req,res)=>{
    res.render("login");
})

router.get("/profile", (req,res)=>{
    res.render("profile");
})

router.get('/profile/:id', async (req, res) => {
    try {
      const dbUserData = await User.findByPk(req.body.id, {
        include: [
          {
            model: User,
            attributes: [
              'id',
              'name',
              'username',
              'email',
            ],
          },
        ],
      });
  
      const user = dbUserData.get({ plain: true });
      res.render('profile', { user });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get("/search", (req,res)=>{
    res.render("search");
})

router.get("/friends", (req,res)=>{
    res.render("friends");
})




module.exports = router;