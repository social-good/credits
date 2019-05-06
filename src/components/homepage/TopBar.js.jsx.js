import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TopBar extends Component {

	render() {
		return (
			<div className="TopBar" >
				<div className="topbar-content">
					<a href="https://social-good.github.io/final-site/">LEARN MORE ABOUT THIS PROJECT </a>
					<div className="topbar-space" />OUR CONCLUSION:
					<div className="topbar-space" />
					<a href="https://towardsdatascience.com/the-trouble-with-classification-312cc6fe8b79">Part I</a>
					<div className="topbar-space" />
					<a href="https://towardsdatascience.com/the-trouble-with-classification-312cc6fe8b79">Part II</a>
				</div>
				<div className="topbar-bottom-bar"></div>
			</div>
		);
	}
}

export default TopBar;
