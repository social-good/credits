import React, { Component } from 'react';
import ReactGA from 'react-ga';

import TopBar from './TopBar.js.jsx';

import CrewDepartmentDonut from '../crew/CrewDepartmentDonut.js';
import CrewDepartmentGraph from '../crew/CrewDepartmentGraph.js.jsx';
import CrewGenderGraph from '../crew/CrewGenderGraph.js';
import DiasporaChartContainer from '../crew/DiasporaChartContainer.js.jsx';
import DepartmentChartContainer from '../crew/DepartmentChartContainer.js.jsx';
import GenderChartContainer from '../crew/GenderChartContainer.js.jsx';
import OnomasticDisplayContainer from '../crew/OnomasticDisplayContainer.js.jsx';
import CrewChordDiagram from '../crew/CrewChordDiagram.js.jsx'

import HomepageBannerImage from '../../media/images/Credits_Blur_Graph_Superimposed.png';
import Feed from './Feed.js.jsx';
import Team from './Team.js.jsx';
import Contact from './Contact.js.jsx';

import '../../stylesheets/Homepage.css';

class Homepage extends Component {

	componentDidMount() {
		ReactGA.initialize('UA-123742385-2');
		ReactGA.pageview('/homepage');
	}

	render() {
		return (
			<div className="Homepage" >
				<div className="homepage-banner-container">
					<img className="homepage-banner-image" src={HomepageBannerImage} alt={'This did not render'}/>
					<div className="homepage-banner-header">A DEEPER LOOK INTO<br/> THE CREDITS</div>
				</div>
				<div className="topbar-bottom-bar"></div>
				<div className="homepage-intro">
					Various classifications of the people involved through the history of American film production highlights uneven distributions in ethnonational and gender representation.
				</div>
				<TopBar />
				<GenderChartContainer />
				<div className="homepage-diaspora-section">
					<DiasporaChartContainer />
				</div>
				<DepartmentChartContainer />
				<div className="topbar-bottom-bar"></div>
				<div className="learn-more">
					<a href="https://social-good.github.io/final-site/">Learn more</a> about this project and our conclusion: <a href="https://towardsdatascience.com/the-trouble-with-classification-312cc6fe8b79">Part I</a> and <a href="https://towardsdatascience.com/spicing-up-feature-film-credits-with-classification-part-ii-c715d8375975">Part II</a>.
				</div>
			</div>
		);
	}
}

export default Homepage;


