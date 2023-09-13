import { FormEvent, useState } from 'react'

const WorkoutForm = () => {

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        const workout = { title, load, reps }
        
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null);
            console.log('New workout added');
            setTitle('');
            setReps('');
            setLoad('');
        }
    }

  return (
      <form className="create" onSubmit={handleSubmit}>
          <h3>Add a new Workout</h3>

          <label>Exercise Title:</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />

          <label>Load (in Kgs):</label>
          <input type="text" onChange={(e) => setLoad(e.target.value)} value={load} />

          <label>Reps:</label>
          <input type="text" onChange={(e) => setReps(e.target.value)} value={reps} />

          <button>Add Workout</button>
    </form>
  )
}

export default WorkoutForm