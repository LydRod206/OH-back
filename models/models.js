const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

// Define your models using Sequelize

// Example model for the "Jobs" table
const Job = sequelize.define('Job', {
  // Define the columns and their data types
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // Other columns...
  date: {
    type: DataTypes.DATE,
  },
  address: {
    type: DataTypes.STRING,
  },
  client_name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
});

// Define relationships between models if needed

// Example relationship between "Job" and "JobCategory"
Job.belongsTo(JobCategory);
JobCategory.hasMany(Job);

// Export the sequelize instance and models
module.exports = {
  sequelize,
  Job,
  JobCategory,
};
