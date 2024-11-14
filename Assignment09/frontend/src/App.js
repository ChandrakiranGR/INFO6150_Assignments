import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/LoginPage';
// import JobListings from './pages/JobListings';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import CompanyShowcase from './components/CompanyShowcase';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job-listings" element={<JobListings />} />
        <Route path="/company-showcase" element={<CompanyShowcase />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
