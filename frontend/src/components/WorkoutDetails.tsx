export interface WorkoutProps {
  workout: {
    _id: string,
    title: string,
    reps: number,
    load: number,
    createdAt: string
  }
}

const WorkoutDetails = ({workout}: WorkoutProps) => {

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (Kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>Create at: {workout.createdAt}</p>
      </div>
    )
}

export default WorkoutDetails
