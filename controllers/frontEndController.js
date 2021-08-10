const express = require('express');
const session = require('express-session');
const router = express.Router();
const { User, Photos,} = require('../models');

router.get('/', (req,res) => {
  res.render('home',{loggedInUser:req.session.user});
});

router.get("/login", (req,res)=>{
    res.render("login",{loggedInUser:req.session.user});
});

// router.get("/profile", (req,res)=>{
//     res.render("profile",{loggedInUser:req.session.user});
// });

// router.get('/profile/:id', async (req, res) => {
// try {
//   console.log('\nUSER ID: ' + req.params.id);
//   const dbProfileData = await User.findByPk(req.params.id, {
//     include: [
//       {
//         // model: User,
//         model: Photos,
//       },
//     ],
//   });

//   console.log('\ndbProfileData:');
//   console.log(dbProfileData);

//   const profile = dbProfileData.get({ plain: true });

//   console.log('\nprofile:');
//   console.log(profile);

//   res.render('profile', { profile });

// } catch (err) {
//   console.log(err);
//   res.status(500).json(err);
// }

// original code for "get profile/:id" follows:
//     try {

//       // const userId = req.params.id;  
//       console.log(req.params.id);

//       const dbUserData = await User.findByPk(req.params.id); 
 
//       const user = dbUserData.get({ plain: true });
//       console.log(dbUserData);
//       res.render('profile', { user });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// });

// });

router.get(`/profile/:id`, (req,res)=>{
  if(req.session.user?.id){
    User.findByPk(req.params.id,{
      include:[{
        model:Photos
    }, {model:User,
        as:"Followers"
    },
    {
     model:User,
     as:"Followed"}]
    }).then(posts=>{ 
      console.log(posts.username)
      dataArr = []
      dataArr.push({"user":posts.name, "username":posts.username, "email":posts.email })
      console.log(posts.Photos)
      
      if (posts.Photos.length > 0) {
      for (let i = 0; i < posts.Photos.length; i++) {
        data = {"id":posts.Photos[i].id, "username":posts.Photos[i].username, "img":posts.Photos[i].url, "description": posts.Photos[i].review}
        dataArr.push(data)
      }
    }
    if (posts.Followed.length > 0) {
      for (let x = 0; x < posts.Followed.length; x++) {
        data = {"followed_id":posts.Followed[x].id, "followed_username":posts.Followed[x].username}
        dataArr.push(data)
      }

    }
    if (posts.Followers.length > 0) {
      for (let z = 0; z < posts.Followers.length; z++) {
        data = {"followers_id":posts.Followers[z].id, "followers_username":posts.Followers[z].username}
        dataArr.push(data)
      }

    }
      
      res.render("profile",{profileData:dataArr});
})
  }
  else {
    res.render("login",{logged_in:req.session.user});
}
});

router.get("/search", (req,res)=>{
    res.render("search",{loggedInUser:req.session.user});
});


router.get(`/friends`, (req,res)=>{
  if(req.session.user?.id){
    User.findByPk(req.session.user.id,{
      include:[{
        model: User,
        as:"Followed", include:[Photos]} ]
    }).then(posts=>{ 
      following = []
      for (let i = 0; i < posts.Followed.length; i++) {
        if (posts.Followed[i].Photos.length > 0) {
        data = {"id":posts.Followed[i].id, "username":posts.Followed[i].username, "img":posts.Followed[i].Photos[posts.Followed[i].Photos.length -1].url, "description": posts.Followed[i].Photos[posts.Followed[i].Photos.length -1].review}
      }
      else{
        data = {"username":posts.Followed[i].username}
      }
        following.push(data)
      }
      res.render("friends", {following:following});
})
  }
  else {
    res.render("login",{logged_in:req.session.user});
}
});

// router.get("/profile",(req,res)=>{
//   if(req.session.user?.id){
//     (console.log("its working!"))
//       res.redirect("/profile")
//   } else {
//       res.render("login",{logged_in:req.session.user});
//   }
// })

router.get("/logout",(req,res)=>{
  req.session.destroy(()=>{
      res.redirect("/")
  })
})

module.exports = router;