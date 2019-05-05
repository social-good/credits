import React, { Component } from 'react';

import CrewGenderGraph from './CrewGenderGraph.js.jsx';

import '../../stylesheets/Crew.css';

export default class GenderChartContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: 0,
			captions: {
				0:{ configuration: 'Shown is gender breakdown of the five most successful movies as recorded by The Movie Database (as of March 2019).',
					explanation: [
						'At first glance, the most obvious feature of this graph is the minimal contribution of women to the U.S. motion picture industry.',
						'Then you notice the tremendous amount of UNKNOWN information. Before 1920 and after 1991, over half of the contributors\' genders are unrecorded.',
						'NamSor offers a gender classifier, which takes names and resident regions as input. Here, we see the findings of TMDb\'s dilligent research without prediction tools.',
						]
					},
			}
		}; 
		this.onTabClickListener = this.onTabClickListener.bind(this);
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
				currentChart = <CrewGenderGraph preset={0} />;
				break;			
			default:
				break;
		}

		return (
			<div className="DiasporaChartContainer">
				<div className="crew-diaspora-container-title">
					Gender Representation in U.S. Film from 1900-2018 by Percentage
				</div>
				<div className="crew-diaspora-container-container">
					{currentChart}
					<div className="crew-diaspora-graph-caption-box">
						<div className="crew-diaspora-graph-caption-box-configuration-title">
							CONFIGURATION: 
						</div>
						<div className="crew-diaspora-graph-caption-box-configuration-content">
							{this.state.captions[this.state.selected].configuration}
						</div>
						<div className="crew-diaspora-graph-caption-box-explanation-title">
							CHECK IT OUT: 
						</div>
						{this.state.captions[this.state.selected].explanation.map(item => (
							<div className="crew-diaspora-graph-caption-box-explanation-contentitem">
								• {item /* Just a string, anyways. */} 
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
};
