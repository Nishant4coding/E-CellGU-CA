import logo from './logo.svg';
// import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Team from './Components/Team';
import Event from './Components/Events';
import Incentives from './Components/Incentives';
import { Route, Routes } from "react-router-dom";
import Profile from './Components/Profile';
import About from './Components/About';
import JoiningPage from './Components/JoiningPage';


function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/join" element={<JoiningPage />}/>
    </Routes>
    {/* <LandingPage/> */}
    {/* <Incentives/>
    <Event/>
    <Team/> */}
    </>
  );
}

export default App;
