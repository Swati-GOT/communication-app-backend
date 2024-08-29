const Chat = require('../models/chatModel');
const User = require('../models/userModel');

// Create a new chat
const createChat = async (req, res) => {
  try {
    const chat = await Chat.create(req.body);
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create chat' });
  }
};

// Get all uploads
const getChats = async (req, res) => {
  try {
    const chats = await Chat.findAll({
      include: [{
        model: User,
        attributes: ['fullname'], 
      }],
    });
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve chats' });
  }
};

module.exports = {
  createChat,
  getChats
};
