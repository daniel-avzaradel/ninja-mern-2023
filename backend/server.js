require('dotenv').config();

// express app
const express = require('express');
const workoutRoutes = require('./routes/workouts')

const app = express();
const PORT = process.env.PORT

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)


// listen for requests
app.listen(PORT, () => {
    console.log('Server is running on PORT: ', PORT)
});