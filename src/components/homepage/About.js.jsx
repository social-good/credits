import React, { Component } from 'react';

import TopBar from './TopBar.js.jsx'
import Contact from './Contact.js.jsx'

class About extends Component {

	render() {
		return (
			<div className="About" >
				<TopBar />
				<div className='about-header'> ABOUT </div>
				Something about the goal of this project.
				<br />
				<div className='about-header'> WAIT BUT WHY </div>
				Something about why this project is a thing, who we are.
				<div className='about-credits'> MAKE SURE TO PROVIDE LINKS TO EACH OF THE PHOTOGRAPHS (mostly imgur) </div>
				<Contact />
			</div>
		);
	}
}

export default About;
