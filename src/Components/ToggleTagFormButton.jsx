import { useState } from "react";
import { createPortal } from "react-dom";
import AddTagsForm from "./AddTagsForm";

const ToggleTagFormButton = () => {
	const [showTagWindow, setShowTagWindow] = useState(false);

	return (
		<>
			<button
				className="mr-4"
				onClick={() => setShowTagWindow(true)}
			>
				Edit Tags
			</button>
			{showTagWindow &&
				createPortal(
					<AddTagsForm onClose={() => setShowTagWindow(false)} />,
					document.body
				)}
		</>
	);
};

export default ToggleTagFormButton;
