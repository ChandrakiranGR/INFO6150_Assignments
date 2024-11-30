const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const { fullName, email, password, type } = req.body;
        if (!fullName || !email || !password || !type) {
            return res.status(400).json({ message: 'Full name, email, password, and type are required.' });
        }

        const validTypes = ['employee', 'admin'];
        if (!validTypes.includes(type)) {
            return res.status(400).json({ message: 'Type must be either "employee" or "admin".' });
        }

        const strongPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!strongPassword.test(password)) {
            return res.status(400).json({ message: 'Password must be strong.' });
        }

        const newUser = new User({ fullName, email, password, type });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error: ' + error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error: ' + error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful', type: user.type });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
