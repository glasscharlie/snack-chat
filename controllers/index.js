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

router.use("/api",apiRoutes)


router.get("/readsessions",(req,res)=>{
    res.json({
        sessions:req.session
    })
})


module.exports = router;