import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Grid, Card, CardContent, CardActions } from '@mui/material';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                Welcome to the Job Portal
            </Typography>
            <Typography variant="h6" align="center" paragraph>
                Explore job opportunities, discover companies, and build your career.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Job Listings
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Find the latest job openings in various industries. Explore roles and apply for positions that match your skills.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth 
                                onClick={() => handleNavigation('/jobs')}
                            >
                                View Jobs
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Company Showcase
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Learn about top companies, their culture, and opportunities. Browse through a gallery of companies.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                fullWidth 
                                onClick={() => handleNavigation('/companies')}
                            >
                                Explore Companies
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                About Us
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Get to know more about our job portal and how we can assist you in achieving your career goals.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button 
                                variant="contained" 
                                color="info" 
                                fullWidth 
                                onClick={() => handleNavigation('/about')}
                            >
                                About Us
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Contact Us
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Reach out to us with any questions or support needs. We're here to help!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button 
                                variant="contained" 
                                color="success" 
                                fullWidth 
                                onClick={() => handleNavigation('/contact')}
                            >
                                Contact Us
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
