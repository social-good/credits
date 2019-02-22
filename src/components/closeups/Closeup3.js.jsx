import React, { Component } from 'react';

import TopBar from '../homepage/TopBar.js.jsx';
import CrewGenderChart from '../crew/CrewGenderChart.js.jsx';
import CrewDiasporaChart from '../crew/CrewDiasporaChart.js.jsx';

// import '../../Closeup.css'

export default class Closeup3 extends Component {

	render() {
		return (
			<div className="Closeup3" >
				<TopBar />
				<div className="closeup-2-title-container">
					<h1>It's Godzilla.</h1>
				</div>
				<iframe width="420" height="315" src="https://www.youtube.com/embed/vTEtjNoA-_U" />
				

				<form class="col s8 offset-s2">
				<div class="row">
				<label>Choose voice</label>
				<select id="voices"></select>
				</div>
				<div class="row">
				<div class="col s6">
				<label>Rate</label>
				<p class="range-field">
				<input type="range" id="rate" min="1" max="100" value="10" />
				</p>
				</div>
				<div class="col s6">
				<label>Pitch</label>
				<p class="range-field">
				<input type="range" id="pitch" min="0" max="2" value="1" />
				</p>
				</div>
				<div class="col s12">
				<p>N.B. Rate and Pitch only work with native voice.</p>
				</div>
				</div>
				<div class="row">
				<div class="input-field col s12">
				<textarea id="message" class="materialize-textarea"></textarea>
				<label>Write message</label>
				</div>
				</div>
				<a href="#contacts" id="speak" class="waves-effect waves-light btn">Speak</a>
				</form>  

				<div id="modal1" class="modal">
				<h4>Speech Synthesis not supported</h4>
				<p>Your browser does not support speech synthesis.</p>
				<p>We recommend you use Google Chrome.</p>
				<div class="action-bar">
				<a href="#" class="waves-effect waves-green btn-flat modal-action modal-close">Close</a>
				</div>
				</div>

			</div>
		);
	}
}
