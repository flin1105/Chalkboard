const FilteredButton = ({ searchInput, onSearchChange }) => {
	//Currently a work in process
	const handleSearchChange = (e) => {
		onSearchChange(e.target.value);
	};

	return (
		<>
			<input
				type="text"
				placeholder="Search..."
				onChange={handleSearchChange}
			></input>
			<button>{searchInput}</button>
		</>
	);
};

export default FilteredButton;
