const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const generateToken = (req) => {
  const { id, email } = req.body;
  const token = jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '7d' });
  return token;
};

const authenticate = async(req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'No token provided, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const {email} = decoded;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'User Not Found' });
    }
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports ={
    generateToken,
    authenticate
}
