const express = require('express');
const {
	getExams,
	getExam,
	createExam,
	deleteExam,
	updateExam
} = require('../controllers/examController');

const router = express.Router();

// GET all exams
router.get('/', getExams);

// GET a single exam
router.get('/:id', getExam);

// POST a new exam
router.post('/', createExam);

// DELETE an exam
router.delete('/:id', deleteExam);

// UPDATE an exam
router.patch('/:id', updateExam);

module.exports = router;