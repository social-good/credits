import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ChordDiagram from 'react-chord-diagram'

import CrewSlider from '../crew/CrewSlider.js.jsx'
import TopBar from '../homepage/TopBar.js.jsx';

export default class Closeup4 extends Component {

	constructor(props) {
		super(props);
		const matrix = [
			[11975, 5871, 8916, 2868],
			[1951, 10048, 2060, 6171],
			[8010, 16145, 8090, 8045],
			[1013, 990, 940, 6907]
		]; 

		const years = Array.from({length: 119}, (x,i) => `${1900 + i}`);
		const countryNames = Array.from({length: 15}, (x,i) => `Country_${i}`);

		// parseInt(Math.random() * 100
		const matrices = years.map(year => {
			return countryNames.map(country => {
				return Array.from({length: 15}, (x, i) => (Math.random() < 0.05) ? 100/(i+2) : 0);
			})
		})

		const labels = Array.from({length: 15}, (x, i) => `Country_${i}`);


		this.state = {
			matrices: matrices,
			labels: labels,
			displayYear: 1984
		};
		// L.mapbox.accessToken = 'pk.eyJ1IjoiZGFua3NreSIsImEiOiJjanNmbTA0YWkwdWx5NDNtdG1idHpwNTE3In0.Y16huX7_p26tsDlcJTWWFQ';
		
		this.onSliderMove = this.onSliderMove.bind(this);
		this.animate = this.animate.bind(this);
	}

	onSliderMove(newYear) {
		this.setState({
			displayYear: newYear
		})
	}

	animate(event) {
		var context = this;
		console.log(event.target)
		setInterval(() => {context.setState(prevState => {
			return {
				displayYear: (prevState.displayYear < 2018) ? prevState.displayYear + 1 : 1900
			};
		})}, 200);
	}

	render() {
		return (
			<div className="Closeup4" >
				<TopBar />
				<div className="closeup-4-title-container">
					<h1>Test Mapbox</h1>
				</div>
				<div>
					<div onClick={this.animate}> ANIMATE </div>
					<ChordDiagram
						matrix={this.state.matrices[this.state.displayYear-1900]}
						componentId={1}
						groupLabels={this.state.labels}
						groupColors={["#000000", "#FFDD89", "#957244", "#F26223"]}
					/>
					<CrewSlider min={1900} max={2018} position={this.state.displayYear} onSlide={this.onSliderMove} />
				</div>
			</div>
		);
	}
}

