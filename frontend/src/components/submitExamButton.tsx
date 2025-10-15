// Submit Exam Button Component

type SubmitExamButtonProps = {
	onSubmit: () => void;
	isSubmitting: boolean;
};

const SubmitExamButton = ({
	onSubmit,
	isSubmitting,
}: SubmitExamButtonProps) => {
	return (
		<div className="p-2 bg-blue-500 rounded-xl border border-black text-white hover:cursor-pointer hover:bg-blue-600 text-center">
			<button
				onClick={onSubmit}
				disabled={isSubmitting}
				className="hover:cursor-pointer"
			>
				{isSubmitting ? "Submitting..." : "Submit Exam"}
			</button>
		</div>
	);
};

export default SubmitExamButton;
