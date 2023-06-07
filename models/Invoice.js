const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Invoice = sequelize.define('Invoice', {
  invoice_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  services: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  client_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  work_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  expenses: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  payment_due: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Invoice.sync({ force: true })
  .then(() => {
    console.log('Invoice table created successfully.');
  })
  .catch((error) => {
    console.error('Error creating Invoice table:', error);
  });

module.exports = Invoice;





// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database'); 

// const Invoice = sequelize.define('Invoice', {
//   invoice_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   services: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   date: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   address: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   client_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   work_description: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   cost: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   expenses: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   payment_due: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   status: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// Invoice.sync({ force: true })
//   .then(() => {
//     console.log('Invoice table created successfully.');
//   })
//   .catch((error) => {
//     console.error('Error creating Invoice table:', error);
//   });

// module.exports = Invoice;
