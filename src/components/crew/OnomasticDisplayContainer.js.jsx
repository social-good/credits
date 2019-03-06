import React, { Component } from 'react';

import CrewOnomasticTree from './CrewOnomasticTree.js.jsx';

import '../../stylesheets/Crew.css';

export default class OnomasticDisplayContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: 0
		}; 

		this.onNodeClick = this.onNodeClick.bind(this);
	}

	onNodeClick(event) {
		console.log(event);
		// TODO: Change this to handle more unique identifiers somehow...
		if (event.depth === 0) {
			this.setState({
				selected: 0
			});
		} else if (event.depth === 1) {
			this.setState({
				selected: 1
			});
		}
	}

	render() {	

		var choroplethMap;
		switch(this.state.selected) {
			case 0:
				choroplethMap = <img className='onomastic-choropleth-image' src={require('../../media/images/Natalie_Portman.png')} alt={'Natalie Portman Map'}/>
				break;
			case 1:
				choroplethMap = <img className='onomastic-choropleth-image' src={require('../../media/images/Natalie_Herschlag.png')} alt={'Natalie Herschlag Map'}/>
				break;
			default:
				break;
		}

		return (
			<div className="OnomasticDisplayContainer">
				<CrewOnomasticTree handleClick={this.onNodeClick} />
				{choroplethMap}
			</div>
		);
	}
};
