import {useEffect, useState} from 'react'
import WorkoutDetails from '../components/WorkoutDetails';

const Home = () => {

    const [workouts, setWorkouts] = useState < any[] > ([]);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts');
            const data = await response.json();

            if (response.ok) {
                setWorkouts(data)
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
        </div>
    )
}

export default Home
