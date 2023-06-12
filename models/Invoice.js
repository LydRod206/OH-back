const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Invoice extends Model {}

Invoice.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    job_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    services: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
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
    }
}, {
    sequelize,
    modelName: 'Invoice',
    tableName: 'invoices',
});

module.exports = Invoice;