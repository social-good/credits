import React, { Component } from 'react';

import CrewDiasporaChart from './CrewDiasporaChart.js.jsx';
import CrewDiasporaGini from './CrewDiasporaGini.js.jsx';

import '../../stylesheets/Crew.css';

export default class DiasporaChartContainer extends Component {

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
				0:'Here we see that 8 average around 90% of the makeup of the most popular movies. Among them are British, Portguese, and German.',
				1:'We\'re looking at the "back half" of the represented ethnicities. The 40 countries listed here cummulatively account for <1% until 2011.',
				2:'This is the Gini Coefficient calculation for the dataset. The later, the more fair.'
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
				currentChart = <CrewDiasporaChart preset={0} />;
				break;			
			case 1:
				currentChart = <CrewDiasporaChart preset={1} />;
				break;
			case 2:
				currentChart = <CrewDiasporaGini />;
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
					Major
				</div>
				<div className="crew-diaspora-graph-tab" 
					id="crew-diaspora-graph-tab_minor"
					onClick={(e) => this.onTabClickListener(e, 1)}>
					Minor
				</div>
				<div className="crew-diaspora-graph-tab" 
					id="crew-diaspora-graph-tab_gini"
					onClick={(e) => this.onTabClickListener(e, 2)}>
					Gini
				</div>
				<div className="crew-diaspora-graph-caption-box">
					{this.state.captions[this.state.selected]}
				</div>
			</div>
		);
	}
};
