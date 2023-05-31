import { useState } from "react";

const PriorityDropdown = ({ taskPriority }) => {
	const taskOptions = ["low", "normal", "high"];
	const [priority, setPriority] = useState(taskPriority);

	const handleOptionChange = (e) => {
		setPriority(e.target.value);
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
