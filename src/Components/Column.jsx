import Note from "./Note";
import NoteForm from "./NoteForm";
import NoteButton from "./NoteButton";
import TrueButton from "./TrueButton";
import { useState } from "react";

const Column = ({ title, tasks }) => {
	const [addNote, setAddNote] = useState(true);
	const [columnTasks, addColumnTasks] = useState(tasks);

	const handleNoteButton = (e) => {
		e.preventDefault();
		setAddNote(!addNote);
		console.log("Current button", addNote);
	};

	return (
		<div className="column-container">
			<h2>{title}</h2>
			{columnTasks.map((task, index) => {
				return (
					<Note
						key={index}
						description={task.description}
					/>
				);
			})}
			{addNote ? (
				<NoteButton
					addNote={addNote}
					onAddNoteClick={setAddNote}
				/>
			) : (
				<TrueButton
					addNote={addNote}
					onAddNoteClick={setAddNote}
					columnTasks={columnTasks}
					addColumnTasks={addColumnTasks}
				/>
			)}
		</div>
	);
};

export default Column;
