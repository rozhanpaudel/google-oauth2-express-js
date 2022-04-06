const { use } = require("passport/lib");
const { sequelize } = require("../../../models");
const db = require("../../../models");
const { users, posts, comments } = db;

exports.getAllUsers = async (req, res, next) => {
  try {
    const userInfos = await users.findAll({
      include: [
        {
          model: posts,
        },
        {
          model: comments,
        },
      ],
    });

    return res.status(200).json({
      msg: "Fetched all users",
      data: userInfos,
    });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  const user = { email: req.body.email };

  try {
    let savedUser = await users.create(user);

    return res.status(201).json({
      msg: "User Created",
      data: savedUser,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.modify = async (req, res, next) => {
  try {
    const user = await users.findOne({
      where: {
        user_id: req.params.id,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    await users.update(req.body, {
      where: {
        user_id: req.params.id,
      },
    });

    return res.status(200).json({
      msg: "User Updated",
      data: req.params.id,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.removeUser = async (req, res, next) => {
  try {
    const user = await users.findOne({
      where: {
        user_id: req.params.id,
      },
    });

    if (!user) {
      let notFound = new Error("User not found");
      notFound.status = 404;
      throw notFound;
    }

    await users.destroy({
      where: {
        user_id: req.params.id,
      },
      truncate: true,
    });

    return res.status(202).json({
      msg: "User deleted",
      data: req.params.id,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
