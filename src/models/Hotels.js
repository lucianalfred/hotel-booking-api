const {DataTypes} = require("sequelize");
const sequelize = require('../config/database');

const Hotel = sequelize.define('Hotel',{
    name: {type:DataTypes.STRING, allowNull:false},
    address:{type:DataTypes.STRING, allowNull:false},
});

module.exports = Hotel;