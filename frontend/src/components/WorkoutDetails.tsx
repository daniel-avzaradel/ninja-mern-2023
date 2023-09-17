import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// date-fns
import {formatDistanceToNow} from 'date-fns';

export interface WorkoutProps {
  workout: {
    _id: string,
    title: string,
    reps: number,
    load: number,
    createdAt: string
  }
}

const WorkoutDetails = ({ workout }: WorkoutProps) => {

  const {dispatch} = useWorkoutsContext()
  
  const handleDelete = async () => {
    const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
      method: 'DELETE'
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (Kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true, includeSeconds: true})}</p>
      <button onClick={handleDelete} className="delete-button material-symbols-outlined">delete</button>
      </div>
    )
}

export default WorkoutDetails
