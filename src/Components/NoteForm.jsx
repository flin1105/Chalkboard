import { useState } from "react";

const NoteForm = () => {
	const [addNote, setAddNote] = useState(false);

	console.log("addNote status", addNote);

	const addNoteButton = () => {
		return <button onClick={handleHideButton}>Add a note</button>;
	};

	const testButton = () => {
		return <button>Test Button</button>;
	};

	return <div>{addNote === false ? addNoteButton : testButton}</div>;
};

export default NoteForm;
