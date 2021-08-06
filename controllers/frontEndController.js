const express = require('express');
const router = express.Router();
const { User, Photos } = require('../models');

router.get('/', (req,res) => {
  res.render('home') 
});

router.get("/login", (req,res)=>{
    res.render("login");
})

router.get("/profile", (req,res)=>{
    res.render("profile");
})

router.get('/profile/:id', async (req, res) => {
    try {
      const userId = req.params.id;  
      console.log(userId);

      const dbUserData = await User.findByPk(userId); 
 
      // const user = dbUserData.get({ plain: true });
      console.log(dbUserData);
      // res.render('profile', { user });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get("/search", (req,res)=>{
    res.render("search");
})

router.get("/friends:id", (req,res)=>{
    User.findAll({
      where: {
        followers:req.params.id
      },
      include:[{
          model:Photos,
          include:[User]
      }]
    // res.render("friends");
})
});

module.exports = router;