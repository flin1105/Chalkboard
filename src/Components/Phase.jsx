import Task from "./Task";
import ToggleAddTaskForm from "./ToggleAddTaskForm";
import AddTaskButton from "./AddTaskButton";
import { useState } from "react";
import "./Column.css";
import PriorityDropdown from "./PriorityDropdown";
import ToggleTagFormButton from "./ToggleTagFormButton";
import AddTagsForm from "./AddTagsForm";

//Original Phase
// const Phase = ({ id, title, tasks, phases, setPhases }) => {
// 	const [addNote, setAddNote] = useState(true);
// 	const [phaseTasks, setPhaseTasks] = useState(tasks);

// 	const handleDeleteClick = (e) => {
// 		e.preventDefault();
// 		const filteredColumn = phases.filter((phase) => phase.id !== id);
// 		setColumns(filteredColumn);
// 	};

// 	return (
// 		<div className="column-container flex-1 border-4 rounded-lg border-teal-600">
// 			<div className="column-header flex justify-between">
// 				<h2>{title}</h2>
// 				<button
// 					className="column-delete-button"
// 					onClick={handleDeleteClick}
// 				>
// 					&times;
// 				</button>
// 			</div>
// 			{phaseTasks.map((task, index) => {
// 				return (
// 					<Task
// 						key={index}
// 						id={task.taskId}
// 						description={task.description}
// 						phaseTasks={phaseTasks}
// 						editNote={setPhaseTasks}
// 						priority={task.priority}
// 						tags={task.tags}
// 					/>
// 				);
// 			})}
// 			{addNote ? (
// 				<NoteButton
// 					addNote={addNote}
// 					onAddNoteClick={setAddNote}
// 				/>
// 			) : (
// 				<TrueButton
// 					addNote={addNote}
// 					onAddNoteClick={setAddNote}
// 					phaseTasks={phaseTasks}
// 					addPhaseTasks={setPhaseTasks}
// 				/>
// 			)}
// 		</div>
// 	);
// };

const Phase = ({ phase, onDeletePhase }) => {
	const [addNote, setAddNote] = useState(true);
	const [phaseTasks, setPhaseTasks] = useState(phase.tasks);

	const toggleTaskForm = () => {
		setAddNote(!addNote);
	};

	return (
		<div>
			<div className="column-container flex-1 border-4 rounded-lg border-teal-600">
				<div className="column-header flex justify-between">
					<h2 className="font-bold text-center">{phase.name}</h2>
					<button
						className="column-delete-button"
						onClick={() => onDeletePhase(phase.id)}
					>
						&times;
					</button>
				</div>
				{phaseTasks.map((task) => (
					<Task
						key={task.taskId}
						task={task}
						phaseTasks={phaseTasks}
						editNote={setPhaseTasks}
					>
						<ToggleTagFormButton
							id={task.taskId}
							phaseTasks={phaseTasks}
							editNote={setPhaseTasks}
						/>
						<PriorityDropdown
							id={task.taskId}
							taskPriority={task.priority}
							phaseTasks={phaseTasks}
							editNote={setPhaseTasks}
						/>
					</Task>
				))}
				{addNote ? (
					<ToggleAddTaskForm onToggleTaskForm={toggleTaskForm} />
				) : (
					<AddTaskButton
						onToggleTaskForm={toggleTaskForm}
						phaseTasks={phaseTasks}
						addPhaseTasks={setPhaseTasks}
					/>
				)}
			</div>
		</div>
	);
};

export default Phase;
