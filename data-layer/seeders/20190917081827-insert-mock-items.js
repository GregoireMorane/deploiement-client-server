"use strict";

const items = [
  {
    id: "MAYBE-1234",
    name: "Maybe"
  },
  {
    id: "MAYBENOT-5678",
    name: "Maybe Not"
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (process.env.SHOULD_SEED === true) {
      console.log("toto");
      return queryInterface.bulkInsert("Items", items, {});
    } else {
      console.log("tata");
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
