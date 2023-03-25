import { useState } from "react";

const TrueButton = ({
	addNote,
	onAddNoteClick,
	columnTasks,
	addColumnTasks,
}) => {
	const [noteText, setNoteText] = useState("");

	const handleTextChange = (e) => {
		setNoteText(e.target.value);
	};

	const handleAddNote = (e) => {
		e.preventDefault();
		const newNote = { description: noteText, urgency: 0 };
		addColumnTasks(columnTasks.concat(newNote));
		setNoteText("");
		onAddNoteClick(!addNote);
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
