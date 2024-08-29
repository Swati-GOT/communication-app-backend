
const { DataTypes } = require('sequelize');
const sequelize = require('../dbConfig'); // Import the connection

const Upload = sequelize.define('Uploads', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    label: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    file_name: {
        type: DataTypes.STRING
    },
    download_url: {
        type: DataTypes.STRING
    }
});

// Sync the model with the database
// sequelize.sync({ alter: true })
//   .then(() => {
//     //console.log('Database & tables created!');
//   })
//   .catch(err => console.error('Error syncing database:', err));

module.exports = Upload;
