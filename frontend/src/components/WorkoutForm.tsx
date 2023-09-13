import React, { useState } from 'react'

const WorkoutForm = () => {

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState(0);
    const [reps, setReps] = useState(0);

  return (
      <form className="create">
          <h3>Add a new Workout</h3>
          <label>Exercise Title:</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
    </form>
  )
}

export default WorkoutForm