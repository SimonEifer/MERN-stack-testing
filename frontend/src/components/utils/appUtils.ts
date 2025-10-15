import { ZodError } from "zod";
import { examSchema } from "../../../lib/exams/schemas";
import type { TExam } from "../../../lib/exams/types";
import { useExam } from "../../hooks/useExam";

const { createExam } = useExam();

export const handleSubmit = async (exam: TExam, refetch: () => void) => {
	const rawData = {
		title: exam.title,
		subject: exam.subject,
		date: exam.date.toString(),
		duration: exam.duration,
		additionalInfo: exam.additionalInfo,
	};

	try {
		const validatedData: TExam = examSchema.parse(rawData);
		await createExam(validatedData);
		refetch();
	} catch (err) {
		if (err instanceof ZodError) {
			console.error("Validation errors:", err.message);
		} else {
			console.error("Submission failed:", err);
		}
	}
};
