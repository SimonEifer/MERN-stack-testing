import type { TExam } from "../../../lib/exams/types";
import { useExam } from "../../hooks/useExam";

//
const ExamList = ({
	exams,
	onDeleteSuccess,
}: {
	exams: TExam[];
	onDeleteSuccess: () => void;
}) => {
	const { deleteExam } = useExam();

	const handleDelete = async (id: string) => {
		await deleteExam(id);
		onDeleteSuccess();
	};
	return (
		<div>
			<span className="text-2xl font-bold">Exam Details</span>
			<ul>
				{exams.map((exam) => (
					<li
						key={exam._id}
						className="mb-4 p-4 border rounded shadow"
					>
						<div className="font-semibold text-lg">
							{exam.title}
						</div>
						<div className="text-gray-600">
							Subject: {exam.subject}
						</div>
						<div className="text-gray-600">
							Date: {exam.date.toString()}
						</div>
						<div className="text-gray-600">
							Duration: {exam.duration} mins
						</div>
						<div className="text-gray-600">
							Additional Info: {exam.additionalInfo}
						</div>
						<span className="space-x-4">
							<button
								className="text-red-500 hover:underline hover:text-red-600 hover:cursor-pointer"
								onClick={() => handleDelete(exam._id!)}
							>
								delete
							</button>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};
export default ExamList;
