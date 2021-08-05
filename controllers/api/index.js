const express = require('express');
const router = express.Router();
const userRoutes = require("./userRoutes");
const photoRoutes = require("./photoRoutes");
const commentRoutes=require("./commentRoutes")

router.use("/users",userRoutes);
router.use("/photos",photoRoutes);
router.use("/comments",commentRoutes);


module.exports = router;