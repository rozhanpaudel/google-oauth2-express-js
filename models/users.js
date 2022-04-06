"use strict";
const { Model } = require("sequelize");
const db = require(".");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.posts, {
        foreignKey: "user_id",
      });

      users.hasMany(models.comments, {
        foreignKey: "user_id",
      });
    }
  }
  users.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
