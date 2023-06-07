'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('receipts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      client_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      // category_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: true,
      //   defaultValue: null, // Add the default value here
      //   references: {
      //     model: 'JobCategory',
      //     key: 'id',
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('receipts');
  },
};






// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('Receipts', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       job_id: {
//         type: Sequelize.INTEGER,
//         allowNull: true,
//         defaultValue: null,
//         references: {
//           model: 'Jobs',
//           key: 'id'
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE'
//       },
//       receipt_number: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         defaultValue: "",
//         unique: true
//       },
//       amount: {
//         type: Sequelize.FLOAT,
//         allowNull: false,
//         defaultValue: 0.0, // or any other valid default value
//       },
//       date: {
//         type: Sequelize.DATE,
//         allowNull: false,
//       },
//       address: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       client_name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       phone: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       price: {
//         type: Sequelize.FLOAT,
//         allowNull: false,
//       },
//       notes: {
//         type: Sequelize.STRING,
//         allowNull: true,
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
//     await queryInterface.dropTable('Receipts');
//   }
// };
