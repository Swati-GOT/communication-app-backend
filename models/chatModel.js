
const { DataTypes } = require('sequelize');
const sequelize = require('../dbConfig'); // Import the connection
const User = require('./userModel');


const Chat = sequelize.define('Chats', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING
    }
    ,
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
    }
});

// Define associations
Chat.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasMany(Chat, { foreignKey: 'userId' });

// Sync the model with the database
// sequelize.sync({ alter: true })
//   .then(() => {
//     //console.log('Database & tables created!');
//   })
//   .catch(err => console.error('Error syncing database:', err));

module.exports = Chat;
