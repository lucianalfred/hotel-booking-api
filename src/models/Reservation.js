const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Room = require('./Room');

const Reservation = sequelize.define('Reservation',{
    userId: {type: DataTypes.INTEGER,allowNull:false},
    checkIn: {type:DataTypes.DATE, allowNull: false},
    checkOut:{type: DataTypes.DATE, allowNull:false},
});

Reservation.belongsTo(Room);
Room.hasMany(Reservation);

module.exports = Reservation;
