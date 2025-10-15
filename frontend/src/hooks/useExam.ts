// api hooks for exams
import type { TExam } from "../../lib/exams/types";
import apiClient from "../apiClient";
import addNotification from "../components/component-lib/addNotification";

export const useExam = () => {
	// get all exams
	const getAllExams = async () => {
		try {
			const response = await apiClient.get("/api/exams");
			return response.data;
		} catch (error) {
			console.error("Error fetching exams:", error);
			throw error;
		}
	};

	// function to create a new exam
	const createExam = async (examData: TExam) => {
		try {
			const response = await apiClient.post("/api/exams", examData);
			addNotification(
				"Success",
				"Exam created successfully!",
				"success",
				5000
			);
			return response.data;
		} catch (error) {
			console.error("Error creating exam:", error);
			addNotification(
				"Error",
				"Failed to create exam. Please try again.",
				"danger",
				8000
			);
			throw error;
		}
	};

	// function to delete an exam by id
	const deleteExam = async (examId: string) => {
		try {
			const response = await apiClient.delete(`/api/exams/${examId}`);
			addNotification(
				"Success",
				"Exam deleted successfully!",
				"success",
				5000
			);
			return response.data;
		} catch (error) {
			console.error("Error deleting exam:", error);
			addNotification(
				"Error",
				"Failed to delete exam. Please try again.",
				"danger",
				8000
			);
			throw error;
		}
	};

	return {
		createExam,
		getAllExams,
		deleteExam,
	};
};
