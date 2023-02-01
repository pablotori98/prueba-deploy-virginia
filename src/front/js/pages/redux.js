import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Counter } from '../features/counter/Counter';
import "../../styles/home.css";

export const Redux = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="App">
		<header className="App-header">
		  <Counter />
		  <p>
			Edit <code>src/App.js</code> and save to reload.
		  </p>
		  <span>
			<span>Learn </span>
			<a
			  className="App-link"
			  href="https://reactjs.org/"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  React
			</a>
			<span>, </span>
			<a
			  className="App-link"
			  href="https://redux.js.org/"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  Redux
			</a>
			<span>, </span>
			<a
			  className="App-link"
			  href="https://redux-toolkit.js.org/"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  Redux Toolkit
			</a>
			,<span> and </span>
			<a
			  className="App-link"
			  href="https://react-redux.js.org/"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  React Redux
			</a>
		  </span>
		</header>
	  </div>
	);
};
