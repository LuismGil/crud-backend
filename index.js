const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

const app = express();

// Database
dbConnection();

// CORS
app.use(cors());

app.use(express.static('public'));

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/list', require('./routes/list'));

app.listen(process.env.PORT, () => {
  console.log(`Server runing in port ${process.env.PORT}`);
});
