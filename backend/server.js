require('dotenv').config();
const express = require('express');

// express app
const app = express();
const PORT = process.env.PORT

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({message: 'Welcome to the app'})
})


// listen for requests
app.listen(PORT, () => {
    console.log('Server is running on PORT: ', PORT)
});