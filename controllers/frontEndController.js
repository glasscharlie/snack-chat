const express = require('express');
const session = require('express-session');
const router = express.Router();
const { User, Photos,} = require('../models');

router.get('/', (req,res) => {
  res.render('home',{loggedInUser:req.session.user}) 
});

router.get("/login", (req,res)=>{
    res.render("login",{loggedInUser:req.session.user});
});

router.get("/profile", (req,res)=>{
    res.render("profile",{loggedInUser:req.session.user});
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
    res.render("search",{loggedInUser:req.session.user});
});


router.get(`/friends`, (req,res)=>{
  // console.log(req.session.user.id)
    User.findByPk(1,{
      include:[{
        model: User,
        as:"Followed", include:[Photos]} ]
    }).then(posts=>{ 
      console.log(posts.Followed[0].name);
      Following = []
      for (let i = 0; i < posts.Followed.length; i++) {
        console.log(posts.Followed[i].Photos[posts.Followed[i].Photos.length -1].review)
        data = {"username":posts.Followed[i].username, "img":posts.Followed[i].Photos[posts.Followed[i].Photos.length -1].url, "description": posts.Followed[i].Photos[posts.Followed[i].Photos.length -1].review}

      }
      res.render("friends");
})
});
router.get("/profile",(req,res)=>{
  if(req.session.user?.id){
    (console.log("its working!"))
      res.redirect("/profile")
  } else {
      res.render("login",{logged_in:req.session.user});
  }
})

router.get("/logout",(req,res)=>{
  req.session.destroy(()=>{
      res.redirect("/")
  })
})

module.exports = router;