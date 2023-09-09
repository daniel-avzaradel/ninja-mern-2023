const { createWorkout, getAllWorkouts, getOneWorkout, deleteWorkout, updateWorkout } = require('../controller/workoutController');

const express = require('express');
const router = express.Router();

// get all workouts
router.get('/', getAllWorkouts)

// get one workout
router.get('/:id', getOneWorkout)

// create a new workout
router.post('/', createWorkout)

// update an existing workout
router.patch('/:id', updateWorkout)

// delete a workout
router.delete('/:id', deleteWorkout)

module.exports = router;