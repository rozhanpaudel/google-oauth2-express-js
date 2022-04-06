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
      "users",
      [
        {
          email: "rozhan.paudel98@gmail.com",
        },
        {
          email: "roshan@gmail.com",
        },
        {
          email: "paudel98@gmail.com",
        },
        {
          email: "rozhan.paudel998@gmail.com",
        },
        {
          email: "rozhan.paudel989@gmail.com",
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
  },
};
