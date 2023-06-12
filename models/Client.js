const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Client extends Model {}

Client.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Client',
    tableName: 'clients',
});

module.exports = Client;