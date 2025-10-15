const Exam = require('../models/exam');
const mongoose = require('mongoose');

// get exams
const getExams = async (req, res) => {
	try {
		const exams = await Exam.find();
		res.status(200).json(exams);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};


// get single exam
const getExam = async (req, res) => {
	const { id } = req.params;

	//validate id
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ message: 'Exam id does not exist' });
	}

	try {
		const exam = await Exam.findById(id);
		if (!exam) {
			return res.status(404).json({ message: 'Exam not found' });
		}
		res.status(200).json(exam);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

//post a new exam
const createExam = async (req, res) => {
	const { title, subject, date, duration, additionalInfo } = req.body;

	// add doc to db
	try {
		const exam = await Exam.create({ title, subject, date, duration, additionalInfo });
		res.status(200).json(exam);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

// delete an exam
const deleteExam = async (req, res) => {
	const { id } = req.params;

	//validate id
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ message: 'Exam id does not exist' });
	}

	try {
		const exam = await Exam.findOneAndDelete({ _id: id });
		if (!exam) {
			return res.status(404).json({ message: 'Exam not found' });
		}
		res.status(200).json(exam);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

// update an exam
const updateExam = async (req, res) => {
	const { id } = req.params;

	//validate id
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ message: 'Exam id does not exist' });
	}

	try {
		const exam = await Exam.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
		if (!exam) {
			return res.status(404).json({ message: 'Exam not found' });
		}
		res.status(200).json(exam);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = {
	getExams,
	getExam,
	createExam,
	deleteExam,
	updateExam
};