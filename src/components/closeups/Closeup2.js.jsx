import React, { Component } from 'react';

import TopBar from '../homepage/TopBar.js.jsx';
import CrewOnomasticTree from '../crew/CrewOnomasticTree.js.jsx';

import '../../stylesheets/Crew.css'

export default class Closeup2 extends Component {

	render() {
		return (
			<div className="Closeup2" >
				<TopBar />
				<div className="closeup-2-title-container">
					<h1>It's Godzilla.</h1>
				</div>
				<div>
					<CrewOnomasticTree />
				</div>
			</div>
		);
	}
}

