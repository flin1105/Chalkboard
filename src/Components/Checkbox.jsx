const Checkbox = ({ name, checked, allTags, setAllTags }) => {
	const handleCheckBoxChange = (e) => {
		const newTags = allTags.map((tag) => {
			if (tag.tagName === name) {
				return { ...tag, checked: !checked };
			} else {
				return { ...tag };
			}
		});

		setAllTags(newTags);
	};

	return (
		<li>
			<input
				type="checkbox"
				id={name}
				name={name}
				checked={checked}
				onChange={handleCheckBoxChange}
			/>
			<label htmlFor={name}>{name}</label>
		</li>
	);
};

export default Checkbox;
