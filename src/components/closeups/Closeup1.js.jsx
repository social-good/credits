import React, { Component } from 'react';

import TopBar from '../homepage/TopBar.js.jsx';
import CrewDepartmentDonut from '../crew/CrewDepartmentDonut.js.jsx';
import CrewDepartmentGraph from '../crew/CrewDepartmentGraph.js.jsx';
import CrewGenderGraph from '../crew/CrewGenderGraph.js.jsx';

export default class Closeup1 extends Component {

	render() {
		return (
			<div className="Closeup1" >
				<TopBar />
				<div className="closeup-1-title-container">
					<h1>Break it Down</h1>
				</div>
				<div>
					Crew have hardly made it into the credits (link to the article again)
					I need to put Google Analytics into this site. I also need to loft it up into GitHub Pages.
					I might buy a domain... Or make this part of my personal website. 
					<br /> Below, we're looking at the top feature film (by popularity) of each year from 1900 to 2018. The credits are provided by TMDb. 
					<br /> Move the slider to view the breakdown of each year. 
					<br /> For now, there's no movie name paired with the chart because it's supposed to sample more of the movies.
					<br /> I just happened to notice that oftentimes there weren't credits associated with really early movies. That could either be because the database is not complete or the movie simply didn't have (any) credits (or had very very few).
					<br /> And so you'll see for some years that there is anamolous breakdowns.
					<br /> Which brings us to another thing that we can't find out. How complete the sample is that we've grabbed, because we don't have a way to find the base truth.
					<br /> Anyhow, it's fun. Play around with the slider (i recommend using the arrow keys) and let me know what you think?
					<CrewDepartmentDonut />
					<br /> Also I feel like this is more 
					<CrewDepartmentGraph />
					<CrewGenderGraph />
				</div>
			</div>
		);
	}
}

