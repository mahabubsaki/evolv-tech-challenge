import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Nutrition from './Components/Nutrition';
import Workout from './Components/Workout';
import 'react-circular-progressbar/dist/styles.css';
export const MyContext = createContext()


function App() {
  const data = [{ userId: '1', name: 'John', email: 'john@example.com', stepsWalked: 2000, stepsTarget: 5000, performedDate: 'Jul 26', sheduledDate: 'Jul 29', calorieInTake: 2500, calorieTarget: 3000, proteinConsumed: 50, proteinTarget: 70, crabsConsumed: 40, crabsTarget: 100, fatConsumed: 60, fatTarget: 90, feedback: true },
  { userId: '2', name: 'Kristen', email: 'kristen@example.com', stepsWalked: 1500, stepsTarget: 5500, performedDate: 'Jul 27', sheduledDate: '31 Jul', calorieInTake: 2000, calorieTarget: 3200, proteinConsumed: 40, proteinTarget: 60, crabsConsumed: 30, crabsTarget: 90, fatConsumed: 80, fatTarget: 95, feedback: false },
  { userId: '3', name: 'Chris', email: 'chris@example.com', stepsWalked: 3500, stepsTarget: 6000, performedDate: '29 Jul', sheduledDate: '2 Aug', calorieInTake: 1100, calorieTarget: 1800, proteinConsumed: 50, proteinTarget: 110, crabsConsumed: 50, crabsTarget: 80, fatConsumed: 50, fatTarget: 135, feedback: true }
  ]
  return (
    <MyContext.Provider value={{ data }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="nutrition/:userId" element={<Nutrition />} />
          <Route path="workout/:userId" element={<Workout />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
