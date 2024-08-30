const { createChat, getChats } = require("../controller/chatController");
const { authenticate } = require("../middleware/authenticate");

module.exports = (app) => {
    app.post('/chats',authenticate, createChat);
    app.get('/chats', authenticate,getChats);
}