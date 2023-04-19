import PriorityDropdown from "./PriorityDropdown";
import "./Note.css";

const Note = ({ id, description, priority, columnTasks, deleteNote }) => {
	const handleDeleteClick = (e) => {
		e.preventDefault();
		const newTaskList = columnTasks.filter((task) => task.taskId !== id);
		deleteNote(newTaskList);
	};

	console.log("From Note priority", priority);

	return (
		<div className="note-container">
			<div></div>
			<p>{description}</p>
			<button
				onClick={handleDeleteClick}
				className="note-delete-button"
			>
				X
			</button>
			<PriorityDropdown taskPriority={priority} />
		</div>
	);
};

export default Note;
