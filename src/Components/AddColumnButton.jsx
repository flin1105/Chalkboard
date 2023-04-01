import { useState } from "react";

const AddColumnButton = ({ columns, addColumns }) => {
	const [newColumnTitle, setNewColumnTitle] = useState("");
	const handleInputChange = (e) => {
		setNewColumnTitle(e.target.value);
		console.log(newColumnTitle);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		console.log("Adding Column");
		const newColumn = {
			id: columns.length + 1,
			name: newColumnTitle,
			tasks: [{ description: "Test item", urgency: 0 }],
		};
		addColumns(columns.concat(newColumn));
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<span>Add another column</span>
			<input
				type="text"
				id="newColumn"
				defaultValue={newColumnTitle}
				onChange={handleInputChange}
			/>
			<input
				type="submit"
				value="Add Column"
			/>
		</form>
	);
};

export default AddColumnButton;
