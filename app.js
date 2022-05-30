const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();


// connect to mongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error:', err.message);
});


// Middleware
app.use(morgan('tiny'));
app.use(express.json());

app.use('/registration', require('./routes/registration'));


// Routes

app.get('/', (req, res) => {
    res.send('Hello World1');
});



// run server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});