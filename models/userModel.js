
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

// Sync the model with the database
// sequelize.sync({ alter: true })
//   .then(() => {
//     //console.log('Database & tables created!');
//   })
//   .catch(err => console.error('Error syncing database:', err));

module.exports = User;
