const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const JobCategory = sequelize.define('JobCategory', {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// JobCategory.sync({ force: true })
//   .then(() => {
//     console.log('JobCategory table created successfully.');
//   })
//   .catch((error) => {
//     console.error('Error creating JobCategory table:', error);
//   });

module.exports = JobCategory;



