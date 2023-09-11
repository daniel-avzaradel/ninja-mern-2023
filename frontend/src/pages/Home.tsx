import {useEffect, useState} from 'react'

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
                    return <p key={item._id}>{item.title}</p>})
                }
            </div>
        </div>
    )
}

export default Home
