const express = require("express");
const router = express.Router();

const userRouter = require("../modules/users");
router.use("/users", userRouter);

const postRouter = require("../modules/posts");
router.use("/posts", postRouter);

module.exports = router;
