const express = require("express");
const postRouter = express.Router();
const posts = require("./methods");

postRouter.get("/", posts.getAllPosts);
postRouter.post("/", posts.create);

module.exports = postRouter;
