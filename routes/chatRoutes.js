const { createChat, getChats } = require("../controller/chatController");

module.exports = (app) => {
    app.post('/chats', createChat);
    app.get('/chats', getChats);
}