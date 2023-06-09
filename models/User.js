
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// User.sync({ force: true })
//   .then(() => {
//     console.log('User table created successfully.');
//   })
//   .catch((error) => {
//     console.error('Error creating User table:', error);
//   });
  
module.exports = User;








// joes stuff:
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// const bcrypt = require("bcrypt")

// class User extends Model {}

// User.init({
//     // properties
//     username: {
//          type: DataTypes.STRING,
//          unique:true,
//          allowNull:false
//     },
//     password:{
//         type: DataTypes.STRING,
//          allowNull:false,
//          validate:{
//             len:[8]
//          }
//     }

// },{
//     sequelize,
//     hooks:{
//         beforeCreate:userObj=>{
//             userObj.password = bcrypt.hashSync(userObj.password,4);
//             return userObj
//         }
//     }
// });

// module.exports=User





