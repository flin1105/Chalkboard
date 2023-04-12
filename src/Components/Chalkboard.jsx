import { useState } from "react";
import Column from "./Column";
import AddColumnButton from "./AddColumnButton";
import "./Chalkboard.css";

const Chalkboard = () => {
	const [addTask, setAddTask] = useState(false);

	const [columns, addColumns] = useState([
		{
			id: 1,
			name: "Backlog",
			tasks: [
				{ description: "Here are items that are backlogged", urgency: 0 },
				{ description: "Test item", urgency: 0 },
				,
			],
		},
		{
			id: 2,
			name: "To Do List",
			tasks: [
				{ description: "You can add items to your to do list", urgency: 0 },
				{ description: "Test item", urgency: 0 },
			],
		},
		{
			id: 3,
			name: "In Progress",
			tasks: [
				{ description: "Current tasks", urgency: 0 },
				{ description: "Test item", urgency: 0 },
			],
		},
		{
			id: 4,
			name: "Review/Testing",
			tasks: [
				{ description: "Tasks in review", urgency: 0 },
				{ description: "Test item", urgency: 0 },
			],
		},
		{
			id: 5,
			name: "Complete",
			tasks: [
				{ description: "Finished Tasks", urgency: 0 },
				{ description: "Test item", urgency: 0 },
			],
		},
	]);

	console.log("columns from Chalkboard component,", columns);

	return (
		<>
			<div>This is my Chalkboard</div>
			<div className="main-board">
				{columns.map((column) => {
					return (
						<Column
							key={column.id}
							title={column.name}
							tasks={column.tasks}
						/>
					);
				})}
				<AddColumnButton
					columns={columns}
					addColumns={addColumns}
				/>
			</div>
		</>
	);
};

export default Chalkboard;
