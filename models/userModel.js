
const { DataTypes } = require('sequelize');
const sequelize = require('../dbConfig'); // Import the connection

const User = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    }
});

User.sync({ alter: true });

module.exports = User;
