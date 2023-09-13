import './index.css'

import {createRoot} from "react-dom/client";
import {WorkoutContextProvider} from './context/WorkoutContext.jsx';
import App from './App.tsx';

createRoot(document.getElementById("root")!).render (
    <WorkoutContextProvider>
        <App/>
    </WorkoutContextProvider>
);
