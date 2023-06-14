import { useState } from "react";
import uniqid from "uniqid";

const AddTaskButton = ({ onToggleTaskForm, phaseTasks, addPhaseTasks }) => {
	const [noteText, setNoteText] = useState("");

	const handleTextChange = (e) => {
		setNoteText(e.target.value);
	};

	const handleAddNote = (e) => {
		e.preventDefault();
		const newId = uniqid();
		const newNote = {
			taskId: newId,
			description: noteText,
			priority: "normal",
			tags: [],
		};
		addPhaseTasks(phaseTasks.concat(newNote));
		setNoteText("");
		onToggleTaskForm();
	};

	return (
		<form>
			<label>Add a new Task:</label>
			<textarea
				onChange={handleTextChange}
				value={noteText}
			></textarea>
			<div>
				<button
					onClick={handleAddNote}
					className="bg-[#02f2f2] hover:bg-[#02d9d9] text-white font-bold py-1 px-2 rounded-full"
				>
					Add Task
				</button>
				<button
					onClick={onToggleTaskForm}
					className="bg-[#02f2f2] hover:bg-[#02d9d9] text-white font-bold py-1 px-2 rounded-full"
				>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default AddTaskButton;
