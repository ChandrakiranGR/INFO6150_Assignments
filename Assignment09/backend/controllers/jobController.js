const Job = require('../models/job');

exports.createJob = async (req, res) => {
    try {
        const { companyName, jobTitle, description, salary } = req.body;

        if (!companyName || !jobTitle || !description || !salary) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const newJob = new Job({ companyName, jobTitle, description, salary });
        await newJob.save();

        res.status(201).json({ message: 'Job created successfully', job: newJob });
    } catch (error) {
        console.error('Error creating job:', error);
        res.status(500).json({ message: 'Internal Server Error: ' + error.message });
    }
};

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.status(200).json(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ message: 'Internal Server Error: ' + error.message });
    }
};
