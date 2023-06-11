const Client = require('./Client');
const Job = require('./Job');
const Invoice = require('./Invoice');


// Define associations
Job.belongsTo(Client, { foreignKey: 'client_id' });
Invoice.belongsTo(Job, { foreignKey: 'job_id' });
Client.hasMany(Job, { foreignKey: 'client_id' });

//Invoice.belongsTo(Job, { foreignKey: 'job_id' });
//Job.hasMany(Invoice, { foreignKey: 'job_id' });

//Receipt.belongsTo(Job, { foreignKey: 'job_id' });
//Job.hasMany(Receipt, { foreignKey: 'job_id' });

//Job.belongsTo(JobCategory, { foreignKey: 'category_id' });
//JobCategory.hasMany(Job, { foreignKey: 'category_id' });

module.exports = {
  Client,
  Invoice,
  Job,
  //Receipt,
  //User,
  //JobCategory,
};
