import { useState } from "react";
import Column from "./Column";
import AddColumnButton from "./AddColumnButton";
import FilteredButton from "./FilterButton";
import AddTagsForm from "./AddTagsForm";

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
					tags: ["Bug"],
				},
				{
					taskId: 1,
					description: "Test item",
					priority: "normal",
					tags: ["Other"],
				},
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
					tags: ["Other"],
				},
				{
					taskId: 1,
					description: "Test item",
					priority: "normal",
					tags: ["Other", "Bug"],
				},
			],
		},
		{
			id: 3,
			name: "In Progress",
			tasks: [
				{
					taskId: 0,
					description: "Current tasks",
					priority: "normal",
					tags: ["New Feature"],
				},
				{
					taskId: 1,
					description: "Test item",
					priority: "normal",
					tags: ["New Feature", "Quality of Life"],
				},
			],
		},
		{
			id: 4,
			name: "Review/Testing",
			tasks: [
				{
					taskId: 0,
					description: "Tasks in review",
					priority: "normal",
					tags: ["New Feature", "Quality of Life"],
				},
				{
					taskId: 1,
					description: "Test item",
					priority: "normal",
					tags: ["New Feature", "Quality of Life"],
				},
			],
		},
		{
			id: 5,
			name: "Complete",
			tasks: [
				{
					taskId: 0,
					description: "Finished Tasks",
					priority: "normal",
					tags: ["Bug"],
				},
				{
					taskId: 1,
					description: "Test item",
					priority: "normal",
					tags: ["Bug"],
				},
			],
		},
	]);

	const generateUniqueTags = () => {
		let allTags = [];
		for (let column of columns) {
			for (let task of column.tasks) {
				if (task !== undefined) {
					allTags.push(...task.tags);
				}
			}
		}
		return [...new Set(allTags)];
	};

	const uniqueTags = generateUniqueTags();

	return (
		<>
			<h2>
				<strong>THIS IS MY CHALKBOARD</strong>
				<FilteredButton />
			</h2>
			<div className="main-board flex items-start gap-10">
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
