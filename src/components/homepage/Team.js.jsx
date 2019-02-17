import React, { Component } from 'react';

import '../../stylesheets/About.css'

class Team extends Component {

	render() {
		return (
			<div className="Team" >
				<div className="team-image-area">
					<div className='team-member-box'>
						<div className="team-member-image">REPLACE THIS DIV WITH PROFILE IMG </div>
						<br/>DANIEL KAWALSKY
						<br/>STUDENT DEVELOPER
						<br/><a>CONTACT</a>
					</div>
					<div className='team-member-box'>
						<div className="team-member-image">REPLACE THIS DIV WITH PROFILE IMG </div>
						<br/>JYOTSNA PANT
						<br/>STUDENT DEVELOPER
						<br/><a>CONTACT</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Team;
