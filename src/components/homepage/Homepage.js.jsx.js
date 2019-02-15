import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import CrewSlider from '../crew/CrewSlider.js.jsx'

// Data
import Breakdowns from '../../data/topCenturyBreakdowns.json';

class Homepage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			displayYear: 1904
		}

		this.onSliderMove = this.onSliderMove.bind(this);
	}

	componentDidMount() {

	}

	onSliderMove(newYear) {
		this.setState({
			displayYear: newYear
		})
	}

	render() {
		var charts = [];
		for (var year in Breakdowns) {
			var data = {
				datasets: [{
					data: Object.values(Breakdowns[year]),
					backgroundColor: ['#FF6385', '#63FFE0', '#E3FF63','#FFA063', '#FF63F8', '#6FB8FF','#FFD763', '#B9FF63', '#6AD2FF','#FF7563', '#FFCE63', '#FF63B8']
				}],
				labels: Object.keys(Breakdowns[year])

			}
			charts.push(
				<Doughnut data={data} height={80} />
			)
		}

		return (
			<div className="Homepage" >
				OMG it's the homepage
				{charts[this.state.displayYear-1900]}
				<CrewSlider min={1900} max={2018} position={this.state.displayYear} onSlide={this.onSliderMove} />
			</div>
		);
	}
}

export default Homepage;
