import React, { Component } from 'react';

import '../../../stylesheets/Crew.css';

export default class CrewGenderChartPanel extends Component {
	constructor(props) {
		super(props);
		this.onToggle = this.onToggle.bind(this);
	}

	onToggle(event) {
		this.props.onConfigurationChange(event.target.id);
	}

  render() {
    return (
      <div className="CrewGenderChartPanel">
      	<table>
      	<tbody>
      		<tr>
      			<td className="crew-gender-chart-department-box-left" 
      				id="crew-gender-chart-department-box-0" 
      				onClick={this.onToggle}>
      				Cast
      			</td>
      			<td className="crew-gender-chart-department-box-right" 
      				id="crew-gender-chart-department-box-1" 
      				onClick={this.onToggle}>
      				Directing
      			</td>
      		</tr>
      		<tr>
      			<td className="crew-gender-chart-department-box-left" 
      				id="crew-gender-chart-department-box-2" 
      				onClick={this.onToggle}>
      				Writing
      			</td>
      			<td className="crew-gender-chart-department-box-right" 
      				id="crew-gender-chart-department-box-3" 
      				onClick={this.onToggle}>
      				Production
      			</td>
      		</tr>
      		<tr>
      			<td className="crew-gender-chart-department-box-left" 
      				id="crew-gender-chart-department-box-4" 
      				onClick={this.onToggle}>
      				Editing
      			</td>
      			<td className="crew-gender-chart-department-box-right" 
      				id="crew-gender-chart-department-box-5" 
      				onClick={this.onToggle}>
      				Camera
      			</td>
      		</tr>
      		<tr>
      			<td className="crew-gender-chart-department-box-left" 
      				id="crew-gender-chart-department-box-6" 
      				onClick={this.onToggle}>
      				Crew
      			</td>
      			<td className="crew-gender-chart-department-box-right" 
      				id="crew-gender-chart-department-box-7" 
      				onClick={this.onToggle}>
      				Visual Effects
      			</td>
      		</tr>
      		<tr>
      			<td className="crew-gender-chart-department-box-left" 
      				id="crew-gender-chart-department-box-8" 
      				onClick={this.onToggle}>
      				Sound
      			</td>
      			<td className="crew-gender-chart-department-box-right" 
      				id="crew-gender-chart-department-box-9" 
      				onClick={this.onToggle}>
      				Art
      			</td>
      		</tr>
      		<tr>
      			<td className="crew-gender-chart-department-box-left" 
      				id="crew-gender-chart-department-box-10" 
      				onClick={this.onToggle}>
      				Lighting
      			</td>
      			<td className="crew-gender-chart-department-box-right" 
      				id="crew-gender-chart-department-box-11" 
      				onClick={this.onToggle}>
      				Costume & Make-up
      			</td>
      		</tr>
    		</tbody>
    		</table>
      </div>
    );
  }
};
