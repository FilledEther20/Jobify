const mongoose = require('mongoose');
require('mongoose-type-email');
const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: mongoose.SchemaTypes.email,
		required: true,
	},
	phoneNumber: {
		type: String,
		validate: {
			validator: function (v) {
				return v !== '' ? /\d{3}-\d{3}-\d{4}/.test(v) : true;
			},
			message: (props) => `${props.value} is not a valid phone number!`,
		},
		required: [true, 'User phone number required'],
	},
	company:{
		type:String,
		required:true
	},
	position:{
		type:String,
		required:true
	},
    bio:{
        type:String,
    }
});

module.exports=mongoose.model("Recruiter",schema)