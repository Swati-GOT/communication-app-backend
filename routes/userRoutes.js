
const { createUser, getUsers, getUserById, updateUser, deleteUser, login } = require('../controller/userController');
const { authenticate } = require('../middleware/authenticate');

module.exports = (app) => {
    app.post('/users', createUser);
    app.post('/login', login);
    app.get('/users',authenticate, getUsers);
    app.get('/users/:id',authenticate,getUserById)
    app.put('/users/:id',authenticate, updateUser);
    app.delete('/users/:id', authenticate,deleteUser);
}

