import { useState } from "react";
import Chalkboard from "./Components/Chalkboard";
import "./App.css";

function App() {
	return (
		<div className="App text-center">
			<h1 className="text-3xl font-bold text-red-500 underline text-center">
				Chalkboard Planner
			</h1>
			<Chalkboard />
		</div>
	);
}

export default App;
