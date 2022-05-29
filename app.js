const express = require('express');
const app = express();
require('dotenv').config();

// Middleware

app.use(express.json());



// run server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});