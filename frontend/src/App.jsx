import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import ContactUs from './pages/ContactUs'
import SchedulingForm from './pages/Scheduling';
import InvocedPage from './pages/InvocedPage';
import VolunteerSignup from './components/VolunteerSignup';
import Progress from './pages/Progress';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path="*" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contactus" element={<ContactUs />} />
         <Route path="/schedule" element={<SchedulingForm />} />
         <Route path="/invoced" element={<InvocedPage />} />
         <Route path="/volunteersignup" element={<VolunteerSignup />} />
         <Route path="/progress" element={<Progress />} />
         <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>  
  )
}

export default App
