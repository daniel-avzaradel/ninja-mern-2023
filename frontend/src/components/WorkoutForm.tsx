import { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutForm = () => {

    const { dispatch, workouts } = useWorkoutsContext()

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        const workout = { title, load, reps };
        console.log(JSON.stringify(workout));
        
        const response = await fetch('http://localhost:4000/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json()
    
        if (!response.ok) {
          setError(json.error)
        }
        if (response.ok) {
          setError(null)
          setTitle('')
          setLoad('')
          setReps('')
          console.log('new workout added:', json);
          dispatch({type: 'CREATE_WORKOUT', payload: workout })
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
          {error && <div className='error'>{ error }</div>}
    </form>
  )
}

export default WorkoutForm