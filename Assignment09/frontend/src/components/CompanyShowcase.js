// src/components/CompanyShowcase.js
import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const CompanyShowcase = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axiosInstance.get('/companies');
                setCompanies(response.data);
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        };
        fetchCompanies();
    }, []);

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Company Showcase
            </Typography>
            <Grid container spacing={4}>
                {companies.map((company) => (
                    <Grid item key={company.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={`http://localhost:3000${company.imagePath}`} // Path to image
                                alt={company.name}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {company.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CompanyShowcase;
