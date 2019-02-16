import React, { Component } from 'react';

import '../../stylesheets/Crew.css';

export default class CrewSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			position: 1904
		}; 

		this.onMove = this.onMove.bind(this);
	}

	onMove(event) {
		this.props.onSlide(event.target.value);
	}

  render() {
    return (
      <div className="CrewSlider">
      	<input type="range" min="1900" max="2018" value={this.props.position} onChange={this.onMove} className="crew-slider-input-range" id="crew-slider-input-range-0" />
      	<div>{this.props.position}</div>
      </div>

    );
  }
};
