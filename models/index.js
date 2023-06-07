const { Sequelize } = require('sequelize');
const Invoice = require('./Invoice');
const Job = require('./Job');
const Receipt = require('./Receipt');
const User = require('./User');
const JobCategory = require('./JobCategory');

// Create a new Sequelize instance
const sequelize = new Sequelize('onlyhands_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define associations
Job.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Job, { foreignKey: 'user_id' });

Invoice.belongsTo(Job, { foreignKey: 'job_id' });
Job.hasMany(Invoice, { foreignKey: 'job_id' });

Receipt.belongsTo(Job, { foreignKey: 'job_id' });
Job.hasMany(Receipt, { foreignKey: 'job_id' });

Job.belongsTo(JobCategory, { foreignKey: 'category_id' });
JobCategory.hasMany(Job, { foreignKey: 'category_id' });

module.exports = {
  sequelize,
  Invoice,
  Job,
  Receipt,
  User,
  JobCategory,
};






// const Invoice = require('./Invoice');
// const Job = require('./Job');
// const Receipt = require('./Receipt');
// const User = require('./User');
// const JobCategory = require('./JobCategory');

// // Define associations
// Job.belongsTo(User, { foreignKey: 'user_id' });
// User.hasMany(Job, { foreignKey: 'user_id' });

// Invoice.belongsTo(Job, { foreignKey: 'job_id' });
// Job.hasMany(Invoice, { foreignKey: 'job_id' });

// Receipt.belongsTo(Job, { foreignKey: 'job_id' });
// Job.hasMany(Receipt, { foreignKey: 'job_id' });

// Job.belongsTo(JobCategory, { foreignKey: 'category_id' });
// JobCategory.hasMany(Job, { foreignKey: 'category_id' });

// module.exports = {
//   Invoice,
//   Job,
//   Receipt,
//   User,
//   JobCategory,
// };
