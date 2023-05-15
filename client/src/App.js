
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import Ask from './pages/Ask/Ask';
import PlanTrip from './pages/PlanTrip/PlanTrip';
import MyTrips from './pages/MyTrips/MyTrips';
import TripDetails from './pages/TripDetails/TripDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/my-trips' element={<MyTrips />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/ask/*' element={<Ask />} />
        <Route path='/plan-trip/*' element={<PlanTrip />} />
        <Route path='/trip/:id' element={<TripDetails />} />
        
      </Routes>
    </div>
  );
}

export default App;
