const mongoose = require('mongoose');
require('mongoose-type-email');

const candidateSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: mongoose.SchemaTypes.Email,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	education: {
		degree: String,
		institution: String,
		yearOfCompletion: {
			type: Number,
			min: [1900, 'Year must be after 1900'],
			max: [new Date().getFullYear(), 'Year cannot be in the future']
		},
	},
	skills: [String],
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	}
});

candidateSchema.pre('save', function (next) {
	this.updatedAt = Date.now();
	next();
});

candidateSchema.pre('findOneAndUpdate', function (next) {
	this._update.updatedAt = Date.now();
	next();
});

module.exports = mongoose.model('Candidate', candidateSchema);
