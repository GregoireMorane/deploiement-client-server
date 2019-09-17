"use strict";

const items = [
  {
    id: "MAYBE-1234",
    name: "Hammer"
  },
  {
    id: "MAYBENOT-5678",
    name: "Nails"
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (process.env.SHOULD_SEED === true) {
      return queryInterface.bulkInsert("Items", items, {});
    } else {
      return new Promise((resolve, reject) => {
        return;
      });
    }
  },

  down: (queryInterface, Sequelize) => {
    if (process.env.SHOULD_SEED === true) {
      return queryInterface.bulkDelete(
        "Items",
        {
          id: { [Sequelize.Op.in]: items.map(item => item.id) }
        },
        {}
      );
    } else {
      return new Promise((resolve, reject) => {
        return;
      });
    }
  }
};
