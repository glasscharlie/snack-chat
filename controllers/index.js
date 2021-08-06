const express = require('express');
const app = express();

const handlebars = require('express-handlebars').create({defaultLayout:'main'});
const router = express.Router();
const apiRoutes = require("./api")

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

router.get('/', (req,res) => {
    res.render('home') 
});

router.get('/login', (req,res) => {
    res.render('home') 
});

router.get('/profile', (req,res) => {
    res.render('profile') 
});

// Ran added route below:

router.get('/profile/:id', async (req, res) => {
    try {
      const dbUserData = await User.findByPk(req.params.id, {
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

router.get('/friends', (req,res) => {
    res.render('friends') 
});

router.get('/search', (req,res) => {
    res.render('search') 
});

router.use("/api",apiRoutes)


router.get("/readsessions",(req,res)=>{
    res.json({
        sessions:req.session
    })
})


module.exports = router;