const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const JobCategory = require('./JobCategory');

const Job = sequelize.define('Job', {
  job_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: JobCategory,
      key: 'category_id',
    },
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
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Job.belongsTo(JobCategory, { foreignKey: 'category_id' });

module.exports = Job;





// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database'); 
// const JobCategory = require('../models/JobCategory');

// const Job = sequelize.define('Job', {
//   job_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   category_id: {
//     type: DataTypes.INTEGER,
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
//   phone: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   price: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   notes: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
// });

// // Job.sync({ force: true })
// //   .then(() => {
// //     console.log('Job table created successfully.');
// //   })
// //   .catch((error) => {
// //     console.error('Error creating Job table:', error);
// //   });

// module.exports = Job;
