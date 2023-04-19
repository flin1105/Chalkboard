import { useState } from "react";
import Column from "./Column";
import AddColumnButton from "./AddColumnButton";
import "./Chalkboard.css";

const Chalkboard = () => {
	const [addTask, setAddTask] = useState(false);

	const [columns, setColumns] = useState([
		{
			id: 1,
			name: "Backlog",
			tasks: [
				{
					taskId: 0,
					description: "Here are items that are backlogged",
					priority: "normal",
				},
				{ taskId: 1, description: "Test item", priority: "normal" },
				,
			],
		},
		{
			id: 2,
			name: "To Do List",
			tasks: [
				{
					taskId: 0,
					description: "You can add items to your to do list",
					priority: "normal",
				},
				{ taskId: 1, description: "Test item", priority: "normal" },
			],
		},
		{
			id: 3,
			name: "In Progress",
			tasks: [
				{ taskId: 0, description: "Current tasks", priority: "normal" },
				{ taskId: 1, description: "Test item", priority: "normal" },
			],
		},
		{
			id: 4,
			name: "Review/Testing",
			tasks: [
				{ taskId: 0, description: "Tasks in review", priority: "normal" },
				{ taskId: 1, description: "Test item", priority: "normal" },
			],
		},
		{
			id: 5,
			name: "Complete",
			tasks: [
				{ taskId: 0, description: "Finished Tasks", priority: "normal" },
				{ taskId: 1, description: "Test item", priority: "normal" },
			],
		},
	]);

	console.log("columns from Chalkboard component,", columns);

	return (
		<>
			<h2>
				<strong>THIS IS MY CHALKBOARD</strong>
			</h2>
			<div className="main-board">
				{columns.map((column) => {
					return (
						<Column
							key={column.id}
							id={column.id}
							title={column.name}
							tasks={column.tasks}
							columns={columns}
							setColumns={setColumns}
						/>
					);
				})}
				<AddColumnButton
					columns={columns}
					setColumns={setColumns}
				/>
			</div>
		</>
	);
};

export default Chalkboard;
