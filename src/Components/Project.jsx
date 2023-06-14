import { useState } from "react";
import Phase from "./Phase";
import AddPhaseButton from "./AddPhaseButton";
import FilteredButton from "./FilterButton";

const Project = () => {
	const [currentPhases, setCurrentPhases] = useState([
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
					description:
						"Lorem ipsum dolor sit amet, ea nec feugait torquatos. Mea ne ancillae facilisi erroribus, eu mel regione atomorum suscipiantur. Duo justo phaedrum cu. Eu pri mazim posidonium.",
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
					description:
						"Per utroque tibique deseruisse no. Et omnis homero quo, sit ei dolorum omnesque contentiones, ius vivendo invenire et. Ne officiis delicata eum. Id vel detraxit intellegat, sea fastidii probatus ut.",
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
					description:
						"Quodsi oportere voluptatibus nec cu. Sit id laoreet quaestio salutandi. Per consul propriae at. Posse consulatu complectitur sed ea, sit quando dicunt iriure in. Sed ad elit nominati ocurreret, debet denique voluptaria vel in.",
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
					description:
						"No ius nemore platonem, no mea quidam atomorum ocurreret, pro in assentior conceptam suscipiantur. Dicunt minimum facilisis eam ei, at nec omnium quaeque. At dolor omnes iudicabit per, at eum causae timeam oblique, enim liber prodesset eu mel. Posse fabulas omnesque ne usu. Homero debitis mediocritatem quo ad, ipsum error scripta te sea.",
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
					description:
						"Nonumes similique ex mea, velit putant no eos. Id quo tantas legimus, no timeam detraxit explicari sit. Vix eu eligendi noluisse vulputate. Te nam solet voluptaria, pro eu audiam aliquip euismod. No his hinc putant instructior, at veritus adipiscing has.",
					priority: "normal",
					tags: ["Bug"],
				},
			],
		},
	]);

	const [projectTitle, setProjectTitle] = useState("Current Project Name"); //Will work on editable title later, current placeholder

	const [searchInput, setSearchInput] = useState("");

	const handleDeletePhase = (id) => {
		const updatedPhases = currentPhases.filter((phase) => phase.id !== id);
		setCurrentPhases(updatedPhases);
	};

	const filteredPhases = currentPhases.map((phase) => {
		return phase.tasks.filter((task) => {
			return task.description.includes(searchInput);
		});
	});

	return (
		<>
			<h2>{projectTitle}</h2>
			<AddPhaseButton
				phases={currentPhases}
				setPhases={setCurrentPhases}
			/>
			<FilteredButton
				searchInput={searchInput}
				onSearchChange={setSearchInput}
			/>
			<div className="main-board flex items-start gap-10">
				{currentPhases.map((phase) => (
					<Phase
						key={phase.id}
						phase={phase}
						onDeletePhase={handleDeletePhase}
					/>
				))}
			</div>
		</>
	);
};

export default Project;
