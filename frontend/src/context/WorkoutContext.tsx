import { createContext, useReducer } from "react";

export type dispatchType = {
        type: string,
        payload: any
}

export type GlobalContent = {
    workouts: {
        title: string,
        reps: number,
        load: number,
    }
    dispatch: ({type, payload}: dispatchType) => void
  }

export const WorkoutContext = createContext<GlobalContent | any>({});

export const workoutsReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workout.filter((w: any) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const WorkoutContextProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    });

    return (
        <WorkoutContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutContext.Provider>
    )
}