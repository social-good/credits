import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ChordDiagram from 'react-chord-diagram'

import CrewSlider from '../crew/CrewSlider.js.jsx'
import TopBar from '../homepage/TopBar.js.jsx';
import CrewChordDiagram from '../crew/CrewChordDiagram.js.jsx'

export default class Closeup4 extends Component {

	render() {
		return (
			<div className="Closeup4" >
				<TopBar />
				<div className="closeup-4-title-container">
					<h1>Test Mapbox</h1>
				</div>
				<div>
					<CrewChordDiagram />
				</div>
			</div>
		);
	}
}

