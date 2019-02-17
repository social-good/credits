import React, { Component } from 'react';

import TopBar from '../homepage/TopBar.js.jsx';

export default class Closeup0 extends Component {

	render() {
		return (
			<div className="Closeup0" >
				<TopBar />
				<div className="closeup-0-title-container">
					<h1>Target: Representational Inequality in the U.S. Film Industry</h1>
				</div>
				<div>
					<p> Quote from previous site. </p>
					<p> What are we looking at and why? ... which also happens to pair really well with the above image ... consider changing the title.</p>
					<p> I see white people gif. You probably see a lot of white people. (link) </p>
					<img src={require('../../media/images/Ninth_Academy_Awards.jpg')} alt={'Cannot display this.'}/>
					<p> Credits seem to scroll by... and nobody cares </p>
					<img src={require('../../media/images/Credits Blur.png')} alt={'Cannot display this.'}/>
					<p> Challenges we anticipate. Questions we have about the validity of the data readily available to the public. </p>
				</div>
			</div>
		);
	}
}

