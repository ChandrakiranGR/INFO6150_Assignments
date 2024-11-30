import React, { useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';

const AddJobs = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        jobTitle: '',
        description: '',
        salary: '',
    });
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(null);
        setError(null);

        try {
            const response = await axiosInstance.post('/create/job', formData);
            if (response.status === 201) {
                setSuccess('Job created successfully!');
                setFormData({ companyName: '', jobTitle: '', description: '', salary: '' }); // Reset form
            }
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4" gutterBottom>
                    Add Job
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Company Name"
                        name="companyName"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Job Title"
                        name="jobTitle"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Description"
                        name="description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Salary"
                        name="salary"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="number"
                        value={formData.salary}
                        onChange={handleChange}
                        required
                    />
                    {success && (
                        <Alert severity="success" sx={{ mt: 2 }}>
                            {success}
                        </Alert>
                    )}
                    {error && (
                        <Alert severity="error" sx={{ mt: 2 }}>
                            {error}
                        </Alert>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                    >
                        Save Job
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default AddJobs;
