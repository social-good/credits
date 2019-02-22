import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

import '../../stylesheets/Crew.css';

// Data
import GenderCount from '../../data/topCenturyGenderCount_1550872987143.json';

export default class CrewGenderGraph extends Component {

	constructor(props) {
		super(props);
		this.state = {
			labels: [],
			datasets: []
		}; 
	}

	componentDidMount() {
		this.setState({
			labels: Array.from({length: 119}, (x,i) => `${i + 1900}`),
			datasets: Object.entries(GenderCount).reverse().map((departmentGenderCoupling, i) => {
				var borderColor = '', fillColor = '';
				if (departmentGenderCoupling[0] === 'Male') {
					fillColor = 'rgba(190,190,255,0.4)';
					borderColor = 'rgba(190,190,255,1)';
				} else if (departmentGenderCoupling[0] === 'Female') {
					fillColor = 'rgba(255,170,170,0.4)';
					borderColor = 'rgba(255,170,170,1)';
				} else if (departmentGenderCoupling[0] === 'Unknown') {
					fillColor = 'rgba(200,200,200,0.4)';
					borderColor = 'rgba(200,200,200,1)';
				}
				return {
					label: departmentGenderCoupling[0],
					lineTension: 0,
					backgroundColor: fillColor,
					borderColor: borderColor,
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: borderColor,
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: borderColor,
					pointHoverBorderColor: fillColor,
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: (departmentGenderCoupling[1] ? departmentGenderCoupling[1] : null),
					fill: (i === 0 ? 'origin' : '-1')
				}
			})
		});
	}

	render() {
		const options = {
			scales: {
				yAxes: [{
					stacked: true,
					ticks: {
						suggestedMin: 0,
						suggestedMax: 1.2
					}
				}]
			}
		}

		const data = {
			labels: this.state.labels,
			datasets: this.state.datasets	
		};
		
		return (
			<div className="CrewGenderGraph">
				<div className="crew-gender-chart-graph-container">
					<Line data={data} options={options} width={14} height={7.5}/>
				</div>
			</div>
		);
	}
};
