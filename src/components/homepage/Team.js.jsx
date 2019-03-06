import React, { Component } from 'react';

import '../../stylesheets/About.css'

class Team extends Component {

	render() {
		return (
			<div className="Team" >
				<div className="team-image-area">
					<div className='team-member-box'>
						<img className='team-member-image' src={require('../../media/images/Dan_Profile.jpeg')} alt={'Daniel Kawalsky Profile'}/>
						<br/>DANIEL KAWALSKY
						<br/>STUDENT DEVELOPER
						<br/><a>CONTACT</a>
					</div>
					<div className='team-member-box'>
						<img className='team-member-image' src={require('../../media/images/Jyotsna_Profile.jpeg')} alt={'Jyotsna Pant Profile'}/>
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
