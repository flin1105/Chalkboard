import { useState } from "react";
import Checkbox from "./Checkbox";

const AddTagsForm = () => {
	const handleOnSubmit = (e) => {
		e.preventDefault();
	};

	const [allTags, setAllTags] = useState([
		{ id: 1, tagName: "Bug", checked: false },
		{ id: 2, tagName: "Quality of Life", checked: false },
		{ id: 3, tagName: "New Feature", checked: false },
		{ id: 4, tagName: "Other", checked: false },
	]);

	return (
		<section>
			<form onSubmit={handleOnSubmit}>
				<h3>Tags</h3>
				<ul>
					{" "}
					{allTags.map((tag) => {
						return (
							<Checkbox
								key={tag.id}
								name={tag.tagName}
								checked={tag.checked}
								allTags={allTags}
								setAllTags={setAllTags}
							/>
						);
					})}
				</ul>

				<button type="submit">SAVE</button>
			</form>
		</section>
	);
};

export default AddTagsForm;
