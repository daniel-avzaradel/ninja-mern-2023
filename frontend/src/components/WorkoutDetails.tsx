export interface WorkoutProps {
  workout: {
    _id: string,
    title: string,
    reps: number,
    load: number,
    createAt: string
  }
}

const WorkoutDetails = ({workout}: WorkoutProps) => {

    console.log(workout);

  return (
      <div>{workout.title}</div>
    )
}

export default WorkoutDetails
