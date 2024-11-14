const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    imagePath: { type: String, required: true },
    description: { type: String }
});

module.exports = mongoose.model('Company', companySchema);