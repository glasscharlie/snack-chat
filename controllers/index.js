const express = require('express');
const router = express.Router();
const apiRoutes = require("./api")

router.use("/api",apiRoutes)


router.get("/readsessions",(req,res)=>{
    res.json({
        sessions:req.session
    })
})


module.exports = router;