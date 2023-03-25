import Note from "./Note";
import NoteForm from "./NoteForm";
import NoteButton from "./FalseButton";
import TrueButton from "./TrueButton";
import { useState } from "react";

const Column = ({ title, tasks }) => {
	const [addNote, setAddNote] = useState(false);

	const handleNoteButton = (e) => {
		e.preventDefault();
		setAddNote(!addNote);
	};

	return (
		<div className="column-container">
			<h2>{title}</h2>
			{tasks.map((task, index) => {
				return (
					<Note
						key={index}
						description={task.description}
					/>
				);
			})}
			{addNote ? (
				<NoteButton onNoteClick={handleNoteButton} />
			) : (
				<TrueButton
					onNoteClick={handleNoteButton}
					tasks={tasks}
				/>
			)}
		</div>
	);
};

export default Column;
