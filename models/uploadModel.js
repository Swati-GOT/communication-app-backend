
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

Upload.sync({ alter: true });

module.exports = Upload;
