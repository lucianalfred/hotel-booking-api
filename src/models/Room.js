const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Hotel = require('./Hotel');

const Room = sequelize.define('Room',{
    number: {type:DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.FLOAT, allowNull: false},
    status:{type: DataTypes.ENUM('avaliable','booked'), defaultValue: 'avaliable'},
});

Room.belongsTo(Hotel);
Hotel.hasMany(Room);

module.exports = Room;