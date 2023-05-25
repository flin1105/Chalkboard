import Note from "./Note";
import NoteButton from "./NoteButton";
import TrueButton from "./TrueButton";
import { useState } from "react";
import "./Column.css";

const Column = ({ id, title, tasks, columns, setColumns }) => {
	const [addNote, setAddNote] = useState(true);
	const [columnTasks, setColumnTasks] = useState(tasks);

	const handleDeleteClick = (e) => {
		e.preventDefault();
		const filteredColumn = columns.filter((column) => column.id !== id);
		setColumns(filteredColumn);
	};

	return (
		<div className="column-container flex-1 border-4 rounded-lg border-teal-600">
			<div className="column-header flex justify-between">
				<h2>{title}</h2>
				<button
					className="column-delete-button"
					onClick={handleDeleteClick}
				>
					X
				</button>
			</div>
			{columnTasks.map((task, index) => {
				return (
					<Note
						key={index}
						id={task.taskId}
						description={task.description}
						columnTasks={columnTasks}
						deleteNote={setColumnTasks}
						priority={task.priority}
						tags={task.tags}
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
					addColumnTasks={setColumnTasks}
				/>
			)}
		</div>
	);
};

export default Column;
