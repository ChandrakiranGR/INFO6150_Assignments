import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    TextField,
    Button,
    Alert,
    CircularProgress,
    Typography,
    Box,
    Paper,
} from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await dispatch(login(email, password));
            const userType = localStorage.getItem('userType');
            navigate(userType === 'admin' ? '/admin/employees' : '/employee/jobs');
        } catch (err) {
            console.error('Login failed', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 10 }}>
            <Paper elevation={3} sx={{ padding: 4 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h3" gutterBottom>
                        Welcome to Job Portal
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Enter your credentials to access your account
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
                    <Box display="flex" justifyContent="center" mt={3}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ py: 1.5 }}
                            disabled={loading}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
