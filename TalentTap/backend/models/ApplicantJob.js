const mongoose = require('mongoose');
require('mongoose-type-email');

const schema = mongoose.Schema({
    applicantName: {
        type: String,
        required: true,
    },
    skills: {
        type: [String], // Array of strings for skills
    },
    applicantMail: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        unique: true,
    },
    messageToRecruiter: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Applicant", schema);