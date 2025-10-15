import { useEffect, useState } from "react";
import ExamDisplay from "./components/examDisplay";
import type { TExam } from "../lib/exams/types";
import { useExam } from "./hooks/useExam";
import ExamForm from "./components/examForm";

function App() {
	const { getAllExams } = useExam();

	const [exams, setExams] = useState<TExam[]>([]);

	const fetchExams = async () => {
		const examsData = await getAllExams();
		setExams(examsData);
	};

	// Load once on mount
	useEffect(() => {
		fetchExams();
	}, []);

	return (
		<div className="flex items-start justify-center gap-8 bg-gray-50 min-h-screen overflow-hidden p-8">
			<div className="flex gap-8 max-h-full">
				<ExamForm refetchExams={fetchExams} />
				<div className="w-[480px] border p-4 rounded-xl max-h-[85vh] overflow-y-auto bg-white shadow-md">
					<ExamDisplay exams={exams} onDeleteSuccess={fetchExams} />
				</div>
			</div>
		</div>
	);
}

export default App;
