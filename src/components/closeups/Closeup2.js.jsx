import React, { Component } from 'react';

import TopBar from '../homepage/TopBar.js.jsx';
import CrewGenderGraph from '../crew/CrewGenderGraph.js.jsx';
import DiasporaChartContainer from '../crew/DiasporaChartContainer.js.jsx';

export default class Closeup2 extends Component {

	render() {
		return (
			<div className="Closeup2" >
				<TopBar />
				<div className="closeup-2-title-container">
					<h1>It's Godzilla.</h1>
				</div>
				<div>
					This is where it starts to get interesting.
					<CrewGenderGraph />
					<br /> You can actually see where there are holes in the database. "Dark data" hungry for more metadata submission. 
					<br /> Check out the unknown gender (gray)! That's a lot of people that are registered that don't have a gender assigned to them.
					<br /> It'd be nice to be able to say that we can conclusively measure the amount of representation to be drastically more male, but for all we know... THE REST COULD BE FEMALE.
					<br /> Coming up: Something even more interesting! (any laggy)
					<br /> With all of the names acquired from the open-source database TMDb, we have a wealth of onomastic (link) data. Cue NamSor.
					<br /> NamSor provides an API to determine the diaspora of a person given their name. This is the distribution of countries of likely ethnic origin for the top movie of each year, 1900-2018. 
					<DiasporaChartContainer />
				</div>
			</div>
		);
	}
}

