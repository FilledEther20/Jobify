const mongoose = require('mongoose');
require('mongoose-type-email');
const bcrypt=require("bcrypt")
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
			max: [2050,'Year of completion is not valid'],
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
	},
	phone: {
		type: Number,
	},
});

candidateSchema.pre('save', function (next) {
	this.updatedAt = Date.now();
	next();
});

candidateSchema.pre('findOneAndUpdate', function (next) {
	this._update.updatedAt = Date.now();
	next();
});

//password hashing
candidateSchema.pre('save', function (next) {
	let user = this;

	if (!user.isModified('password')) {
		return next();
	}

	bcrypt.hash(user.password, 10, (err, hash) => {
		if (err) {
			return next(err);
		}
		user.password = hash;
		next();
	});
});

candidateSchema.methods.login = function (password) {
	let user = this;
	return new Promise((resolve, reject) => {
		bcrypt.compare(password, user.password, (err, result) => {
			if (err) {
				reject(err);
			}
			if (result) {
				resolve();
			} else {
				reject();
			}
		});
	});
};

module.exports = mongoose.model('Candidate', candidateSchema);
