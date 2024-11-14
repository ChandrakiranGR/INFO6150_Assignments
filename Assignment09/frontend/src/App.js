import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import JobListings from './components/JobListings';
import CompanyShowcase from './components/CompanyShowcase';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/jobs" element={<JobListings />} />
                <Route path="/companies" element={<CompanyShowcase />} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/contact" element={<ContactUs/>} />
            </Routes>
        </Router>
    );
}

export default App;
