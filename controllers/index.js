const express = require('express');
const app = express();

// const handlebars = require('express-handlebars').create({defaultLayout:'main'});

const router = express.Router();
const apiRoutes = require("./api")
const frontEndRoutes = require("./frontEndController")

// app.engine('handlebars', handlebars.engine);
// app.set('view engine', 'handlebars');

// router.get('/', (req,res) => {
//     res.render('home') 
// });

// router.get('/login', (req,res) => {
//     res.render('home') 
// });

// router.get('/profile', (req,res) => {
//     res.render('profile') 
// });

// router.get('/friends', (req,res) => {
//     res.render('friends') 
// });

// router.get('/search', (req,res) => {
//     res.render('search') 
// });

router.use("/api",apiRoutes)
router.use(frontEndRoutes)


router.get("/readsessions",(req,res)=>{
    res.json({
        sessions:req.session
    })
})


module.exports = router;