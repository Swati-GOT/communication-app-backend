const express = require('express');
const cors = require('cors');
const swaggerSetup = require('./swagger');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json()); 
app.use(cors());
swaggerSetup(app);

require('./dbConfig');
require('./routes')(app);

app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


