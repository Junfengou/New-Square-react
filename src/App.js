import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Banner />
				<About />
			</Router>
		</div>
	);
}

export default App;
