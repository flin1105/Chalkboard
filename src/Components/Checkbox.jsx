const Checkbox = ({ name, checked, change }) => {
	return (
		<li>
			<input
				type="checkbox"
				id={name}
				name={name}
				checked={checked}
				onChange={change}
			/>
			<label htmlFor={name}>{name}</label>
		</li>
	);
};

export default Checkbox;
