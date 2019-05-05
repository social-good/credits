import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

import '../../stylesheets/Crew.css';

// Data
import DiasporaCount from '../../data/topCenturyDiasporaCount_1551863234840.json';

export default class CrewDiasporaGini extends Component {

	constructor(props) {
		super(props);
		this.state = {
			labels: [],
			datasets: [],
		}; 
	}

	componentDidMount() {
		const fairness = [];
		const entries = Object.entries(DiasporaCount);
		for (var year = 0; year < 119; year++) {
			var fair = 0, top = 0, bottom = 0;
			for (var j = 0; j < entries.length; j++) {
				top += entries[j][1][year];
				bottom += entries[j][1][year] * entries[j][1][year];
			}
			fair = (top * top) / (entries.length * bottom);
			fairness.push(fair);
		}


		this.setState({
			labels: Array.from({length: 119}, (x,i) => `${i + 1900}`),
			datasets: [{
				label: 'Ethnonational Distribution Fairness',
				lineTension: 0,
				borderWidth: 1,
				backgroundColor: `hsla(${100}, 50%, 70%, 0.4)`,
				borderColor: `hsla(${100}, 50%, 70%, 1.0)`,
				borderJoinStyle: 'miter',
				pointBorderColor: `hsla(${100}, 50%, 70%, 1.0)`,
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: `hsla(${100}, 50%, 70%, 1.0)`,
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: fairness,
				fill: 0,
				hidden: false,
			}]
		});
	}

	render() {
		const options = {
			scales: {
				yAxes: [{
					stacked: true,
					ticks: {
						suggestedMin: 0,
						suggestedMax: 0.1
					}
				}]
			},
		}

		const data = {
			labels: this.state.labels,
			datasets: this.state.datasets	
		};
		
		return (
			<div className="CrewDiasporaGini">
				<div className="crew-diaspora-chart-graph-container">
					<Line data={data} options={options} width={14} height={7.5}/>
				</div>
			</div>
		);
	}
};
