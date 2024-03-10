import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentDashboard from './pages/StudentDashboard'
import TutorProfile from './pages/TutorProfile';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/studentDashboard" element={<StudentDashboard/>} />
        <Route path="/tutor-profile/1" element={<TutorProfile/>} />

        
      </Routes>
    </Router>
    </>
  );
}

export default App;
