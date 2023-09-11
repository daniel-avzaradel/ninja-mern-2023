require('dotenv').config();

const express = require('express');
const colors = require('colors');
const cors = require('cors');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI

// middleware
app.use((req, res, next) => {
    next()
});
app.use(express.json());
app.use(cors());

// routes
app.use('/api/workouts', workoutRoutes);

// connect to mongodb
mongoose.connect(MONGO_URI).then(() => {
    console.log(`Connection to the MongoDB established successfully`.cyan);
});

// listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`.magenta.underline)
});