const express = require('express')
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
router.post('/', (req, res) => {
    res.json({message: 'POST a new Workout'})
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