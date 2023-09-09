const express = require('express');
const Workout = require('../models/workoutModel')
const router = express.Router();

// get all workouts
router.get('/', (req, res) => {
    res.json({message: 'GET all the Workouts'})
})

// get one workout
router.get('/:id', (req, res) => {
    res.json({message: 'GET a single Workout'})
})

// create a new workout
router.post('/', async (req, res) => {
    const { title, reps, load } = req.body
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(201).send(workout);
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

// update an existing workout
router.put('/', (req, res) => {
    res.json({message: 'UPDATE an existing Workout'})
})

// delete a workout
router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE a Workout'})
})

module.exports = router;