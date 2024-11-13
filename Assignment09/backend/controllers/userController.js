const userService = require('../services/userService');

exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = userService.authenticate(username, password);

    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
