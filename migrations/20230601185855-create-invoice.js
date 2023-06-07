'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Invoices', {
      invoice_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      services: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      client_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      work_description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cost: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      expenses: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      payment_due: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Invoices');
  }
};





// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('Invoices', {
//       invoice_id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       services: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       date: {
//         type: Sequelize.DATE,
//         allowNull: false
//       },
//       address: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       client_name: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       work_description: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       cost: {
//         type: Sequelize.FLOAT,
//         allowNull: false
//       },
//       expenses: {
//         type: Sequelize.FLOAT,
//         allowNull: false
//       },
//       payment_due: {
//         type: Sequelize.DATE,
//         allowNull: false
//       },
//       status: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('Invoices');
//   }
// };
