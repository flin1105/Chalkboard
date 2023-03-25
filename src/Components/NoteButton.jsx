const NoteButton = ({ addNote, onAddNoteClick }) => {
	return <button onClick={() => onAddNoteClick(!addNote)}>Add a note</button>;
};

export default NoteButton;
