const User = require('./user');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);
        if (extname && mimetype) cb(null, true);
        else cb('Error: Images Only!');
    }
}).single('image');

exports.createUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const strongPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!strongPassword.test(password)) {
            return res.status(400).json({ message: 'Password must be strong.' });
        }
        const newUser = new User({ fullName, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User created.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { email, fullName, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found.' });
        if (fullName) user.fullName = fullName;
        if (password) user.password = await bcrypt.hash(password, 10);
        await user.save();
        res.status(200).json({ message: 'User updated.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOneAndDelete({ email });
        if (!user) return res.status(404).json({ message: 'User not found.' });
        res.status(200).json({ message: 'User deleted.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { fullName: 1, email: 1, password: 1});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.uploadImage = (req, res) => {
    upload(req, res, async (error) => {
        if (error) return res.status(400).json({ message: error });
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).json({ message: 'User not found.' });
        user.imagePath = req.file.path;
        await user.save();
        res.status(200).json({ message: 'Image uploaded.', filePath: req.file.path });
    });
};
