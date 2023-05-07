
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SignUp from './pages/SignUp/SignUp';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import Ask from './pages/Ask/Ask';
import PlanTrip from './pages/PlanTrip/PlanTrip';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/ask' element={<Ask />} />
        <Route path='/plan-trip' element={<PlanTrip />} />
      </Routes>
    </div>
  );
}

export default App;
