import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TopBar extends Component {

	render() {
		return (
			<div className="TopBar" >
				<div className="topbar-topbar">
					<a href="file:///Users/danielkawalsky/Documents/Code/SocialGood/final-site/index.html"><div className='topbar-tab-box'>ABOUT THIS PROJECT</div></a>
					<div className='topbar-tab-box'>OUR CONCLUSION:</div>
					<a href="https://towardsdatascience.com/the-trouble-with-classification-312cc6fe8b79"><div className='topbar-tab-box'>Part I</div></a>
					<a href="https://towardsdatascience.com/the-trouble-with-classification-312cc6fe8b79"><div className='topbar-tab-box'>Part II</div></a>
				</div>
				<div className="topbar-bottom-bar"></div>
			</div>
		);
	}
}

export default TopBar;
