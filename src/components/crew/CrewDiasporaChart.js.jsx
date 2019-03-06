import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

import '../../stylesheets/Crew.css';

// Data
import DiasporaCount from '../../data/topCenturyDiasporaCount_1551863234840.json';

// TODO: Rename to 'CrewDiasporaStackedArea'
export default class CrewDiasporaChart extends Component {

	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			labels: [],
			datasets: [],
		}; 
	}


	render() {

		const datasets = Object.entries(DiasporaCount).map((diasporaCoupling, i) => {
				return {
					label: diasporaCoupling[0],
					lineTension: 0,
					borderWidth: 1,
					backgroundColor: `hsla(${i * 7}, 50%, 70%, 0.4)`,
					borderColor: `hsla(${i * 7}, 50%, 70%, 1.0)`,
					borderJoinStyle: 'miter',
					pointBorderColor: `hsla(${i * 7}, 50%, 70%, 1.0)`,
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: `hsla(${i * 7}, 50%, 70%, 1.0)`,
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: (diasporaCoupling[1] ? diasporaCoupling[1] : null),
					fill: (i === 0 ? 'origin' : '-1'),
					hidden: (this.props.preset === 0) ? i >= 8 : i <= 40,
				}
			});

		const options = {
			scales: {
				yAxes: [{
					stacked: true,
					ticks: {
						suggestedMin: 0,
						suggestedMax: (this.props.preset === 0) ? 1.2 : 0.02
					}
				}]
			},
		}

		const data = {
			labels: Array.from({length: 119}, (x,i) => `${i + 1900}`),
			datasets: datasets	
		};
		
		return (
			<div className="CrewDiasporaChart">
				<Line data={data} options={options} width={14} height={7.5}/>
			</div>
		);
	}
};
