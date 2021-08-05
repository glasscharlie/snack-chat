const express = require('express');
const router = express.Router();
const userRoutes = require("./userRoutes");
const photoRoutes = require("./photoRoutes");

router.use("/users",userRoutes);
router.use("/photos",photoRoutes);


module.exports = router;