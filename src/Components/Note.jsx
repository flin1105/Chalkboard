const Note = ({ id, description, columnTasks, deleteNote }) => {
	const handleDeleteClick = (e) => {
		e.preventDefault();
		const newTaskList = columnTasks.filter((task) => task.taskId !== id);
		deleteNote(newTaskList);
	};

	return (
		<div>
			<button onClick={handleDeleteClick}>Delete {description}</button>
			<p>{description}</p>
		</div>
	);
};

export default Note;
