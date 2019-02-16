import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

import '../../stylesheets/Crew.css';

// Data
import DiasporaCount from '../../data/topCenturyDiasporaCount.json';

export default class CrewDiasporaChart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			labels: Array.from({length: 119}, (x,i) => `${i + 1900}`),
		}; 
	}

	componentDidMount() {
		this.setState({
			diasporaArrays: DiasporaCount
		});
	}

	render() {
		const options = {
			scales: {
				yAxes: [{
					stacked: true
				}]
			}

		}

		const data = {
			labels: this.state.labels,
			datasets: Object.entries(DiasporaCount).map((diasporaCoupling) => {
				return {
					label: diasporaCoupling[0],
					lineTension: 0.51,
					borderWidth: 1,
					backgroundColor: 'rgba(255,170,170,0.4)',
					borderColor: 'rgba(255,170,170,1)',
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(255,170,170,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(255,170,170,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: (diasporaCoupling[1] ? diasporaCoupling[1] : null),
					fill: false
				}
			})

			

			
		};
		
		return (
			<div className="CrewDiasporaChart">
				<div className="crew-diaspora-chart-graph-container">
					<Line data={data} options={options} width={4} height={3}/>
				</div>
			</div>
		);
	}
};
