import React, { Component } from 'react';

import CrewDiasporaChart from './CrewDiasporaChart.js.jsx';
import CrewDiasporaGini from './CrewDiasporaGini.js.jsx';

import '../../stylesheets/Crew.css';

export default class DiasporaChartContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: 0,
			captions: {
				0:{ configuration: 'The 8 most significant ethnonational contributors to the U.S. film industry.',
					explanation: [
						'90% of the most popular movies\' contributors are made up of the British, Portguese, German, French, Irish, Jewish, Italian, and Japanese ethnonational groups.',
						'The British consistently account for about 50% of the ethnonational contributions over the entire U.S. film history.',
						'1961 & 1963: Notice that the British contribution dips significantly these two year. Remember this for later.'
						]
					},
				1:{ configuration: 'The "back half," or 40 least significant ethnonational contributors, are shown.',
					explanation: [
						'The 40 countries listed here cummulatively account for <1% until 2011.',
						'This breakdown is of ethnonational contribution to the U.S. film industry, and while a ethnonational group might be negligibly represented here, they might be significantly recognized in another nation\'s film industry.',
						]
					},
				2:{ configuration: 'The "back half," or 40 least significant ethnonational contributors, are shown.',
					explanation: [
						'Hardly gets more fair as time goes on.',
						'1961 & 1963: Notice that the British "dips" align with an increase in fairness. When one dominant group subsides, it creates "room" for more diverse ethnic groups to make a more significant contribution.',
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
				<div className="crew-diaspora-container-title">
					Ethnonational Representation in U.S. Film from 1900-2018 by Percentage
				</div>
				<div className="crew-diaspora-container-container">
					{currentChart}
					<div className="crew-diaspora-graph-tab" 
						id="crew-diaspora-graph-tab_major"
						onClick={(e) => this.onTabClickListener(e, 0)}>
						MAJOR
					</div>
					<div className="crew-diaspora-graph-tab" 
						id="crew-diaspora-graph-tab_minor"
						onClick={(e) => this.onTabClickListener(e, 1)}>
						MINOR
					</div>
					<div className="crew-diaspora-graph-tab" 
						id="crew-diaspora-graph-tab_gini"
						onClick={(e) => this.onTabClickListener(e, 2)}>
						FAIRNESS
					</div>
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
