import { useState } from "react";

const PriorityDropdown = ({ id, phaseTasks, editNote, taskPriority }) => {
	const taskOptions = ["low", "normal", "high"];
	const [priority, setPriority] = useState(taskPriority);

	const handleOptionChange = (e) => {
		setPriority(e.target.value);
		const updatedNote = phaseTasks.map((task) => {
			if (task.taskId === id) {
				return { ...task, priority: e.target.value };
			} else {
				return { ...task };
			}
		});

		editNote(updatedNote);
	};

	return (
		<span className="text-right">
			<label>Task Priority:</label>
			<select
				value={priority}
				onChange={handleOptionChange}
			>
				{taskOptions.map((taskOption, index) => {
					return (
						<option
							key={index}
							value={taskOption}
						>
							{taskOption}
						</option>
					);
				})}
			</select>
		</span>
	);
};

export default PriorityDropdown;
