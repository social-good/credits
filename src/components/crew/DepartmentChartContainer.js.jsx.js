import React, { Component } from 'react';

import CrewDepartmentGraph from './CrewDepartmentGraph.js.jsx';
import CrewDepartmentDonut from './CrewDepartmentDonut.js.jsx';

import '../../stylesheets/Crew.css';

export default class DepartmentChartContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: 0,
			captions: {}
		}; 
		this.onTabClickListener = this.onTabClickListener.bind(this);
	}

	componentDidMount() {
		this.setState({
			captions: {
				0:'More and more roles account for larger portions of the credits.',
				1:'Take a look at these specific years: 19XX 19XX 200X 201X (what you can observe).',
			}
		})
	}

	onTabClickListener(event, index) {
		this.setState({
			selected: index
		});
	}

	render() {	

		var currentChart;
		switch(this.state.selected) {
			case 0:
				currentChart = <CrewDepartmentGraph />;
				break;			
			case 1:
				currentChart = <CrewDepartmentDonut />;
				break;
			default:
				break;
		}

		return (
			<div className="DiasporaChartContainer">
				{currentChart}
				<div className="crew-diaspora-graph-tab" 
					id="crew-diaspora-graph-tab_major"
					onClick={(e) => this.onTabClickListener(e, 0)}>
					Continuous
				</div>
				<div className="crew-diaspora-graph-tab" 
					id="crew-diaspora-graph-tab_minor"
					onClick={(e) => this.onTabClickListener(e, 1)}>
					Cross-Section 
				</div>
				<div className="crew-diaspora-graph-caption-box">
					{this.state.captions[this.state.selected]}
				</div>
			</div>
		);
	}
};
