const { sequelize } = require("../../../models");
const db = require("../../../models");
const { PostCreation } = require("../post-validators/postValidator");
const { users, posts } = db;

exports.getAllPosts = async (req, res, next) => {
  try {
    const postInfos = await posts.findAll({});

    return res.status(200).json({
      msg: "Fetched all posts",
      data: postInfos,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.create = async (req, res, next) => {
  const post = { desc: req.body.desc, user_id: req.body.user_id };

  try {
    await PostCreation.validateAsync(post, { abortEarly: false });
    let savedPost = await users.create(post);

    return res.json({
      msg: "Post Created",
      data: savedPost,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
