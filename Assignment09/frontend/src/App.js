import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import JobListings from './components/JobListings';
import CompanyShowcase from './components/CompanyShowcase';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/jobs" element={<JobListings />} />
                <Route path="/companies" element={<CompanyShowcase />} />
            </Routes>
        </Router>
    );
}

export default App;
