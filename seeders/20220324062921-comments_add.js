"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "comments",
      [
        {
          comment_desc: Date.now(),
          user_id: 1,
          post_id: 1,
        },
        {
          comment_desc: Date.now(),
          user_id: 1,
          post_id: 1,
        },
        {
          comment_desc: Date.now(),
          user_id: 2,
          post_id: 1,
        },
        {
          comment_desc: Date.now(),
          user_id: 2,
          post_id: 1,
        },
        {
          comment_desc: Date.now(),
          user_id: 3,
          post_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("comments", null, {});
  },
};
