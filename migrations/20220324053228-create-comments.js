"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("comments", {
      comment_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      comment_desc: Sequelize.STRING,
      user_id: Sequelize.INTEGER,
      post_id: Sequelize.INTEGER,

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("comments");
  },
};
