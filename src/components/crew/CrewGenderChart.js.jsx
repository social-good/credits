import React, { Component } from 'react';
import CrewGenderChartPanel from './chart/CrewGenderChartPanel.js.jsx'
import {Line} from 'react-chartjs-2';

import '../../stylesheets/Crew.css';

// Data
import GenderCount from '../../data/topCenturyGenderCount.json';
import DepartmentGenderCounts from '../../data/topCenturyGenderBreakdowns.json';

export default class CrewGenderChart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			labels: Object.keys(DepartmentGenderCounts),
		}; 
		this.changeDisplay = this.changeDisplay.bind(this);
		this.getSum = this.getSum.bind(this);
	}

	getSum(total, num) {
		return total + num;
	}

	componentDidMount() {
		this.setState({
			departmentArrays: {
				Cast: 					Object.values(DepartmentGenderCounts).map(yearMap => yearMap['Cast']).map(array => array.map(value => value / array.reduce((total, num) => total + num))),
				Directing: 			Object.values(DepartmentGenderCounts).map(yearMap => yearMap['Directing']).map(array => array.map(value => value / array.reduce((total, num) => total + num))),
				Writing: 				Object.values(DepartmentGenderCounts).map(yearMap => yearMap['Writing']).map(array => array.map(value => value / array.reduce((total, num) => total + num))),
				Production: 		Object.values(DepartmentGenderCounts).map(yearMap => yearMap['Production']).map(array => array.map(value => value / array.reduce((total, num) => total + num))),
				Editing: 				Object.values(DepartmentGenderCounts).map(yearMap => yearMap['Editing']).map(array => array.map(value => value / array.reduce((total, num) => total + num))),
				Camera:					Object.values(DepartmentGenderCounts).map(yearMap => yearMap['Camera']).map(array => array.map(value => value / array.reduce((total, num) => total + num))),
				Crew: 					Object.values(DepartmentGenderCounts).map(yearMap => yearMap['Crew']).map(array => array.map(value => value / array.reduce((total, num) => total + num))),
				VisualEffects: 	Object.values(DepartmentGenderCounts).map(yearMap => yearMap['VisualEffects']).map(array => array.map(value => value / array.reduce((total, num) => total + num))),
				Sound: 					Object.values(DepartmentGenderCounts).map(yearMap => yearMap['Sound']).map(array => array.map(value => value / array.reduce((total, num) => total + num))),
				Art: 						Object.values(DepartmentGenderCounts).map(yearMap => yearMap['Art']).map(array => array.map(value => value / array.reduce((total, num) => total + num))),
				Lighting: 			Object.values(DepartmentGenderCounts).map(yearMap => yearMap['Lighting']).map(array => array.map(value => value / array.reduce((total, num) => total + num))),
				CostumeMakeUp: 	Object.values(DepartmentGenderCounts).map(yearMap => yearMap['CostumeMakeUp']).map(array => array.map(value => value / array.reduce((total, num) => total + num)))
			},
			departments: ['Cast','Directing','Writing','Production','Editing','Camera','Crew','VisualEffects','Sound','Art','Lighting','CostumeMakeUp'],
			displayIndex: this.props.chosenDepartment,
			genderArray: [[],[],[]].map((array, i) => Object.values(DepartmentGenderCounts).map(yearMap => yearMap[this.props.chosenDepartment]).map(array => array.map(value => value / array.reduce((total, num) => total + num))).map(normalizedYearmap => normalizedYearmap[i]))
		});
	}

	changeDisplay(display) {
		var toggleIndex;
		if (isNaN(display))
			toggleIndex = display.substring(33);
		else
			toggleIndex = display;
		var newDisplayIndex = this.state.departments[toggleIndex];
		this.setState({
			displayIndex: newDisplayIndex,
			genderArray: [
				Object.values(this.state.departmentArrays[newDisplayIndex]).map(array => array[0]),
				Object.values(this.state.departmentArrays[newDisplayIndex]).map(array => array[1]),
				Object.values(this.state.departmentArrays[newDisplayIndex]).map(array => array[2])]
		});
		console.log('Hello' + this.state.departments[toggleIndex])
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
			labels: Object.keys(DepartmentGenderCounts),
			datasets: [
				{
					label: 'Female',
					lineTension: 0.51,
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
					data: (this.state.genderArray ? this.state.genderArray[1] : [null, null, null]),
					fill: true
				},
				{
					label: 'Male',
					lineTension: 0.51,
					backgroundColor: 'rgba(190,190,255,0.4)',
					borderColor: 'rgba(190,190,255,1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(190,190,255,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(190,190,255,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: (this.state.genderArray ? this.state.genderArray[2] : [null, null, null]),
					fill: 0
				},
				{
					label: 'Unknown',
					lineTension: 0.51,
					backgroundColor: 'rgba(200,200,200,0.4)',
					borderColor: 'rgba(200,200,200,1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(200,200,200,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(200,200,200,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: (this.state.genderArray ? this.state.genderArray[0] : [null, null, null]),
					fill: +1
				},

			]
		};
		
		return (
			<div className="CrewGenderChart">
				<CrewGenderChartPanel onConfigurationChange={this.changeDisplay}/>
				<div className="crew-gender-chart-graph-container">
					<Line data={data} options={options} width={4} height={3}/>
				</div>
			</div>
		);
	}
};
