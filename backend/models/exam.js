const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema({
	title: {
		type: String,
	},
	subject: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true
	},
	duration: {
		type: Number, // duration in minutes
		required: true
	},
	additionalInfo: {
		type: String
	}
}, { timestamps: true });

module.exports = mongoose.model('Exam', examSchema);