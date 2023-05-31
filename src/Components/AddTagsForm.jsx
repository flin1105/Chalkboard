import { useState, useEffect } from "react";
import Checkbox from "./Checkbox";

const AddTagsForm = ({ onClose }) => {
	const handleOnSubmit = (e) => {
		e.preventDefault();
		const newTagsForTask = allTags.filter((tag) => tag.checked);
	};

	const [allTags, setAllTags] = useState([
		{ id: 1, tagName: "Bug", checked: false },
		{ id: 2, tagName: "Quality of Life", checked: false },
		{ id: 3, tagName: "New Feature", checked: false },
		{ id: 4, tagName: "Other", checked: false },
	]);

	const handleCheckboxChange = (e) => {
		const updatedTags = allTags.map((tag) => {
			if (tag.tagName === e.target.name) {
				return { ...tag, checked: !tag.checked };
			} else {
				return { ...tag };
			}
		});
		setAllTags(updatedTags);
	};

	return (
		<section>
			<form onSubmit={handleOnSubmit}>
				<h3>Tags</h3>
				<ul>
					{" "}
					{allTags.map((tag) => {
						return (
							<Checkbox
								key={`checkbox-${tag.id}-${tag.checked}`}
								name={tag.tagName}
								checked={tag.checked}
								allTags={allTags}
								setAllTags={setAllTags}
								change={handleCheckboxChange}
							/>
						);
					})}
				</ul>
				<button
					onClick={onClose}
					className="mr-1"
				>
					Cancel
				</button>
				<button type="submit">SAVE</button>
			</form>
		</section>
	);
};

export default AddTagsForm;
