const express = require('express');
const session = require('express-session');
const router = express.Router();
const { User, Photos } = require('../models');

router.get('/', (req,res) => {
  res.render('home') 
});

router.get("/login", (req,res)=>{
    res.render("login");
});

router.get("/profile", (req,res)=>{
    res.render("profile");
});

router.get('/profile/:id', async (req, res) => {
    try {

      // const userId = req.params.id;  
      console.log(req.params.id);

      const dbUserData = await User.findByPk(req.params.id); 
 
      const user = dbUserData.get({ plain: true });
      console.log(dbUserData);
      res.render('profile', { user });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get("/search", (req,res)=>{
    res.render("search");
});


router.get(`/friends`, (req,res)=>{
  // console.log(req.params.id)
  //   User.findByPk({
  //     where: {
  //       id:req.session.user.id
  //     },
  //     include:[{
  //         model:Photos,
  //         include:[User]
  //     }]
  //   }).then(posts=>{ 
  //     console.log(posts)
      res.render("friends");
// })
});

module.exports = router;