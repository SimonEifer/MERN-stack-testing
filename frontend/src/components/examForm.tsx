import { useState } from "react";
import SubmitExamButton from "./submitExamButton";
import { handleSubmit } from "./utils/appUtils";

const ExamForm = ({ refetchExams }: { refetchExams: () => void }) => {
	const [title, setTitle] = useState<string | null>(null);
	const [subject, setSubject] = useState("");
	const [date, setDate] = useState("");
	const [duration, setDuration] = useState<number | null>(null);
	const [additionalInfo, setAdditionalInfo] = useState<string | null>(null);

	const exam = {
		title,
		subject,
		date: date ? new Date(date) : new Date(),
		duration: duration ?? 0,
		additionalInfo,
	};

	return (
		<div className="bg-white border rounded-xl p-8 shadow-md w-96 flex flex-col max-h-full overflow-auto">
			<h2 className="text-2xl font-semibold mb-6">
				Fill in exam details
			</h2>

			<input
				type="text"
				placeholder="Title"
				value={title ?? ""}
				onChange={(e) => setTitle(e.target.value || null)}
				className="border border-gray-300 p-3 rounded mb-5 focus:outline-blue-500"
			/>

			<input
				type="text"
				placeholder="Subject"
				value={subject}
				onChange={(e) => setSubject(e.target.value)}
				className="border border-gray-300 p-3 rounded mb-5 focus:outline-blue-500"
			/>

			<input
				type="date"
				placeholder="Date"
				value={date}
				onChange={(e) => setDate(e.target.value)}
				className="border border-gray-300 p-3 rounded mb-5 focus:outline-blue-500"
			/>

			<input
				type="number"
				placeholder="Duration (in minutes)"
				value={duration ?? ""}
				onChange={(e) => setDuration(Number(e.target.value))}
				className="border border-gray-300 p-3 rounded mb-5 focus:outline-blue-500"
			/>

			<textarea
				placeholder="Additional Information"
				value={additionalInfo ?? ""}
				onChange={(e) => setAdditionalInfo(e.target.value || null)}
				className="border border-gray-300 p-3 rounded mb-6 resize-none focus:outline-blue-500"
				rows={4}
			/>

			<SubmitExamButton
				onSubmit={() => {
					handleSubmit(exam, () => refetchExams());
				}}
				isSubmitting={false}
			/>
		</div>
	);
};
export default ExamForm;
