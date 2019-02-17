import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TopBar extends Component {

	render() {
		return (
			<div className="TopBar" >
				<div className="topbar-topbar">
					<Link to="/"><div className='topbar-logo-box'>CREW</div></Link>
					<Link to="/"><div className='topbar-tab-box'>HOME</div></Link>
					<Link to="/about"><div className='topbar-tab-box'>ABOUT</div></Link>
					<div className='topbar-tab-box'>SEARCH</div>
					<a href="https://github.com/social-good"><div className='topbar-tab-box'>GITHUB</div></a>
				</div>
				<div className="topbar-bottom-bar"></div>
			</div>
		);
	}
}

export default TopBar;
