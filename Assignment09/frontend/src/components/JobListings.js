import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, CardActions } from '@mui/material';

const jobPosts = [
    {
        id: 1,
        title: 'Full Stack Developer',
        description: 'Join our dynamic team...',
        lastUpdated: 'Last updated 2 days ago',
        applyLink: 'https://example.com/apply/full-stack-developer',
    },
    {
        id: 2,
        title: 'Digital Marketing Specialist',
        description: "Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.",
        lastUpdated: 'Last updated 1 day ago',
        applyLink: 'https://example.com/apply/digital-marketing-specialist',
    },
    {
        id: 3,
        title: 'UX/UI Designer',
        description: 'Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.',
        lastUpdated: 'Last updated 4 hours ago',
        applyLink: 'https://example.com/apply/ux-ui-designer',
    },
    {
        id: 4,
        title: 'Data Scientist',
        description: 'Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.',
        lastUpdated: 'Last updated 3 days ago',
        applyLink: 'https://example.com/apply/data-scientist',
    },
    {
        id: 5,
        title: 'Customer Support Representative',
        description: 'Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.',
        lastUpdated: 'Last updated 6 hours ago',
        applyLink: 'https://example.com/apply/customer-support-representative',
    },
    {
        id: 6,
        title: 'Project Manager',
        description: 'Guide and coordinate project teams',
        lastUpdated: 'Last updated 6 hours ago',
        applyLink: 'https://example.com/apply/project-manager',
    }
];

const JobListings = () => (
    <Container>
        <Typography variant="h4" align="center" gutterBottom>
            Job Listings
        </Typography>
        <Grid container spacing={4}>
            {jobPosts.map((job) => (
                <Grid item key={job.id} xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {job.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" paragraph>
                                {job.description}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                {job.lastUpdated}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                href={job.applyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                fullWidth
                            >
                                Apply Now
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default JobListings;
