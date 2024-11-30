import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { logout } from '../redux/actions/authActions';

const AdminNav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Admin Portal
                </Typography>
                <Button color="inherit" component={NavLink} to="/admin/add-jobs">
                    Add Jobs
                </Button>
                <Button color="inherit" component={NavLink} to="/admin/employees">
                    View Users
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default AdminNav;
