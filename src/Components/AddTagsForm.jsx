import { useState, useEffect } from "react";
import Checkbox from "./Checkbox";

const OVERLAY_STYLES =
	"fixed top-0 right-0 bottom-0 left-0 bg-gray-400/75 z-10";
// {
// 	position: "fixed",
// 	top: 0,
// 	left: 0,
// 	right: 0,
// 	bottom: 0,
// 	backgroundColor: "rgba(0, 0, 0, .7)",
// 	zIndex: 10,
// };

const MODAL_STYLES =
	"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 z-20";
// {
// 	position: "fixed",
// 	top: "50%",
// 	left: "50%",
// 	transform: "translate(-50%, -50%)",
// 	backgroundColor: "#FFF",
// 	padding: "50px",
// 	zIndex: 20,
// };

// "fixed inset-x-0 bottom-0 -translate-x-1/2 translate-y-1/2 bg-white p-10 z-20"

const AddTagsForm = ({ onClose, id, phaseTasks, editNote }) => {
	const defaultTags = [
		{ id: 1, tagName: "Bug", checked: false },
		{ id: 2, tagName: "Quality of Life", checked: false },
		{ id: 3, tagName: "New Feature", checked: false },
		{ id: 4, tagName: "Other", checked: false },
	];

	const currentCheckedTags = phaseTasks
		.filter((task) => task.taskId === id)
		.map((task) => task.tags);

	const currentTags = defaultTags.map((currentTag) => {
		if (currentCheckedTags[0].includes(currentTag.tagName)) {
			return { ...currentTag, checked: true };
		} else {
			return { ...currentTag };
		}
	});

	const [allTags, setAllTags] = useState(currentTags);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const newTagsForTask = allTags
			.filter((tag) => tag.checked)
			.map((tag) => tag.tagName);

		const updatedNotes = phaseTasks.map((task) => {
			if (task.taskId === id) {
				return { ...task, tags: newTagsForTask };
			} else {
				return { ...task };
			}
		});

		editNote(updatedNotes);
		onClose();
	};

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
			<div className={OVERLAY_STYLES} />
			<form
				onSubmit={handleOnSubmit}
				className={MODAL_STYLES}
			>
				<h3>Tags</h3>
				<ul>
					{allTags.map((tag) => {
						return (
							<Checkbox
								key={`checkbox-${tag.id}-${tag.checked}`}
								name={tag.tagName}
								checked={tag.checked}
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
