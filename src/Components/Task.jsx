import PriorityDropdown from "./PriorityDropdown";
import ToggleTagFormButton from "./ToggleTagFormButton";
import "./Note.css";

const Task = ({ task, children, phaseTasks, editNote }) => {
	const handleDeleteClick = (e) => {
		e.preventDefault();
		const newTaskList = phaseTasks.filter(
			(currentTask) => task.taskId !== currentTask.taskId
		);
		editNote(newTaskList);
	};

	let priorityStyle = undefined;
	switch (task.priority) {
		case "low":
			priorityStyle = "bg-green-200";
			break;
		case "high":
			priorityStyle = "bg-red-200";
			break;
		default:
			priorityStyle = "bg-[#d7ffff]";
	}

	return (
		<div className={`${priorityStyle}`}>
			<div className="flex justify-between">
				<p className="">{task.description}</p>
				<button
					onClick={handleDeleteClick}
					className="note-delete-button"
				>
					&times;
				</button>
			</div>
			{children}
			<div className="flex">
				<div>
					{task.tags.map((tag, index) => (
						<span
							className="inline-block rounded-lg bg-[#02d9d9] m-1"
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

export default Task;
