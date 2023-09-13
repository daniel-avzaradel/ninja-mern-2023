import {useEffect} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {

    const { workouts, dispatch } = useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts');
            const data = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: data})
            }
        };
        fetchWorkouts()
    }, [])

    return (
        <div className='home'>
            <div className="workouts">
                {workouts && workouts.map((item : any) => {
                    return <WorkoutDetails workout={item} key={item._id} />})
                }
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home
