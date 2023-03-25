import { useState } from "react";

const TrueButton = ({ onNoteClick, tasks }) => {
	const [noteText, setNoteText] = useState("");
	const handleTextChange = (e) => {
		setNoteText(e.target.value);
	};

	const handleAddNote = (e) => {
		console.log(e);
		e.preventDefault();
		const newNote = { description: noteText, urgency: 0 };
		console.log(newNote);
		tasks.concat(newNote);
		console.log(tasks);
		// onNoteClick();
	};

	return (
		<form>
			<label>Add a new note:</label>
			<textarea
				onChange={handleTextChange}
				value={noteText}
			></textarea>
			<button onClick={handleAddNote}>Add Note</button>
		</form>
	);
};

export default TrueButton;
