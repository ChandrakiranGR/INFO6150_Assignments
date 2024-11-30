import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../redux/actions/jobActions';
import {
    Container,
    CircularProgress,
    Grid,
    Card,
    CardContent,
    Typography,
    Alert,
} from '@mui/material';

const Jobs = () => {
    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector((state) => state.jobs);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    return (
        <Container>
            <Typography variant="h4" style={{ margin: '20px 0' }}>
                Available Jobs
            </Typography>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Alert severity="error">{error}</Alert>
            ) : (
                <Grid container spacing={3}>
                    {jobs.map((job) => (
                        <Grid item xs={12} sm={6} md={4} key={job._id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">{job.jobTitle}</Typography>
                                    <Typography color="textSecondary">{job.companyName}</Typography>
                                    <Typography>{job.description}</Typography>
                                    <Typography>Salary: ${job.salary}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default Jobs;
