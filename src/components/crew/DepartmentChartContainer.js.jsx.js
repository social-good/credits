import React, { Component } from 'react';

import CrewDepartmentGraph from './CrewDepartmentGraph.js.jsx';
import CrewDepartmentDonut from './CrewDepartmentDonut.js.jsx';

import '../../stylesheets/Crew.css';

export default class DepartmentChartContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: 0,
			captions: {
				0:{ configuration: 'ALL the department breakdowns for films between 1900-2018 are shown.',
					explanation: ['As U.S. film matures, more and more roles account for a larger portion of the credits. In 2018, the distribution of roles is roughly equal across each department.']
					},
				1:{ configuration: 'Discretely view the the department breakdowns for films between 1900-2018 by dragging the time slider.',
					explanation: [
						'1900-1912: Notice that directors and writers dominate the (short) credit sequence.',
						'1900-1924: The credits remain predominantly top-heavy.',
						'1905 & 1923: Writers make their peak contributions.',
						'1937: Visual effects personnel get their first major recognition.',
						'1939 & 1948: The credits don\'t recognize the Cast at all. This seems really unlikely, since an average sample size of 5 popular movies are taken for every year. This anomaly would requires diving into the records. Curious? Reach out!',
						'2010: Visual effects account for over 30% of the creditted roles.',
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
				<div className="crew-diaspora-container-title">
					Department Representation in U.S. Film from 1900-2018 by Percentage
				</div>
				<div className="crew-diaspora-container-container">
					{currentChart}
					<div className="crew-diaspora-graph-tab" 
						id="crew-diaspora-graph-tab_major"
						onClick={(e) => this.onTabClickListener(e, 0)}>
						CONTINUOUS
					</div>
					<div className="crew-diaspora-graph-tab" 
						id="crew-diaspora-graph-tab_minor"
						onClick={(e) => this.onTabClickListener(e, 1)}>
						CROSS-SECTION
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
