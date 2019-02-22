import React, { Component } from 'react';
import TopBar from './TopBar.js.jsx';

import CrewDepartmentChart from '../crew/CrewDepartmentChart.js'
import CrewGenderChart from '../crew/CrewGenderChart.js'
import CrewDiasporaChart from '../crew/CrewDiasporaChart.js'

import HomepageBannerImage from '../../media/images/Credits_Blur_Graph_Superimposed.png';
import Feed from './Feed.js.jsx'
import Team from './Team.js.jsx'
import Contact from './Contact.js.jsx'

import '../../stylesheets/Homepage.css';

class Homepage extends Component {

	render() {
		return (
			<div className="Homepage" >
				<TopBar />
				<div className="homepage-banner-container">
					<img className="homepage-banner-image" src={HomepageBannerImage} alt={'This did not render'}/>
					<div className="homepage-banner-header">A DEEPER LOOK INTO<br/> THE CREDITS</div>
				</div>
				<Feed />
				<Team />
				<Contact />
			</div>
		);
	}
}

export default Homepage;


