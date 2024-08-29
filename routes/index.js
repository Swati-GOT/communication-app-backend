
const userRoutes = require('./userRoutes');
const uploadRoutes = require('./uploadRoutes');
const chatRoutes = require('./chatRoutes');

module.exports = (app) => {
    userRoutes(app);
    uploadRoutes(app);
    chatRoutes(app);
};
