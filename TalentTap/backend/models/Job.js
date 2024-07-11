const mongoose = require('mongoose');
const schema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	company:{
		type:String,
		required:true,
	},
	dateOfPosting: {
		type: Date,
		default: Date.now,
	},
	location: {
		type: String,
		required: true,
	},
	requirements:[String],
	responsibilities:[String],
	salary: {
		type: Number,
		validate: [
			{
				validator: Number.isInteger,
				msg: 'Salary should be a number',
			},
			{
				validator: function (v) {
					return v >= 0;
				},
				msg: 'Salary should be positive',
			},
		],
		required:true,
	},
	description: {
		type: String,
		required: true,
	},
	status:{
		type:String,
		enum:['applied','accepted','rejected','open'],
		default:'open',
		required:true,
	}
});

schema.set('toJSON',{
	transform:(document,returnObject)=>{
		returnObject.id=returnObject._id.toString();
		delete returnObject._id
		delete returnObject.__v
	}
})


module.exports = mongoose.model('Job', schema);
