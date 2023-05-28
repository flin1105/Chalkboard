import PriorityDropdown from "./PriorityDropdown";
import "./Note.css";

const Note = ({ id, description, priority, columnTasks, tags, deleteNote }) => {
	const handleDeleteClick = (e) => {
		e.preventDefault();
		const newTaskList = columnTasks.filter((task) => task.taskId !== id);
		deleteNote(newTaskList);
	};

	console.log("tags", tags);

	return (
		<div className="note-container">
			<div className="flex justify-between">
				<p className="">{description}</p>
				<button
					onClick={handleDeleteClick}
					className="note-delete-button"
				>
					X
				</button>
			</div>
			<PriorityDropdown taskPriority={priority} />
			<div className="flex">
				<div>
					{tags.map((tag, index) => (
						<span
							className="inline-block rounded-lg bg-green-400 text-gray-200 m-1"
							key={index}
						>
							#{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Note;
