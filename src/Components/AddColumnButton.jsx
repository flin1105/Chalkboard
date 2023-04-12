import { useState } from "react";
import uniqid from "uniqid";

const AddColumnButton = ({ columns, addColumns }) => {
	const [newColumnTitle, setNewColumnTitle] = useState("");
	const handleInputChange = (e) => {
		setNewColumnTitle(e.target.value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const newColumn = {
			id: uniqid(),
			name: newColumnTitle,
			tasks: [{ description: "Test item", urgency: 0 }],
		};
		addColumns(columns.concat(newColumn));
		setNewColumnTitle(null);
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<input
				type="text"
				id="newColumn"
				placeholder="Add another column"
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
