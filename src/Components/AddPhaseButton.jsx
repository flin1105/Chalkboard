import { useState } from "react";
import uniqid from "uniqid";

const AddPhaseButton = ({ phases, setPhases }) => {
	const [newPhaseTitle, setNewPhaseTitle] = useState("");
	const handleInputChange = (e) => {
		setNewPhaseTitle(e.target.value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const newPhase = {
			id: uniqid(),
			name: newPhaseTitle,
			tasks: [{ description: "Test item", priority: "normal", tags: [] }],
		};
		setPhases(phases.concat(newPhase));
		setNewPhaseTitle(null);
	};

	return (
		<form
			onSubmit={handleOnSubmit}
			className="space-x-2"
		>
			<input
				type="text"
				id="newColumn"
				placeholder="Add new phase"
				onChange={handleInputChange}
			/>
			<input
				type="submit"
				value="Add Phase"
				className="bg-[#02f2f2] hover:bg-[#02d9d9] text-white font-bold py-1 px-2 rounded"
			/>
		</form>
	);
};

export default AddPhaseButton;
