const Company = require('../models/company');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);
        if (extname && mimetype) {
            cb(null, true);
        } else {
            cb('Error: Images Only!');
        }
    }
});

exports.getCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        console.error("Error fetching companies:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.uploadCompany = async (req, res) => {
    upload.single('image')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err });
        }

        const { name, description } = req.body;
        const imagePath = `/uploads/${req.file.filename}`;

        if (!name || !req.file) {
            return res.status(400).json({ message: 'Name and image are required' });
        }

        try {
            const newCompany = new Company({ name, description, imagePath });
            await newCompany.save();
            res.status(201).json({ message: 'Company uploaded successfully', company: newCompany });
        } catch (error) {
            console.error("Error uploading company:", error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
};
