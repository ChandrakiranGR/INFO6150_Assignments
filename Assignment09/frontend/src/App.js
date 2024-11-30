import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EmployeeNav from './components/EmployeeNav';
import AdminNav from './components/AdminNav';
import Login from './components/Login';
import Employees from './pages/admin/Employees';
import AddJobs from './pages/admin/AddJobs';
import Jobs from './pages/employee/Jobs';

const App = () => {
    const { userType, isAuthenticated } = useSelector((state) => state.auth);

    return (
        <Router>
            {isAuthenticated && userType === 'admin' && <AdminNav />}
            {isAuthenticated && userType === 'employee' && <EmployeeNav />}
            <Routes>
                <Route path="/" element={<Login />} />
                {isAuthenticated && userType === 'admin' && (
                    <>
                        <Route path="/admin/employees" element={<Employees />} />
                        <Route path="/admin/add-jobs" element={<AddJobs />} />
                    </>
                )}
                {isAuthenticated && userType === 'employee' && (
                    <Route path="/employee/jobs" element={<Jobs />} />
                )}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
