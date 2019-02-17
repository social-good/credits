import React, { Component } from 'react';

import '../../stylesheets/Feed.css'

class FeedRow extends Component {
	render() {
		// TODO: be more cognizant of how and when this image loads. 
		return (
			<div className="FeedRow">
				<img className="feed-row-image" alt={'Could not display.'} />
				<div className="feed-row-title">{this.props.title}</div>
				<div className="feed-row-preview">{this.props.preview.substring(0, 200) + '...'}</div>
				<hr />
			</div>
		);
	}
}

export default class Feed extends Component {

	render() {

		// Data goes here
		var feedRows = [{
			image: null,
			title: 'Target: Discrimination and Representational Inequality in the Film Industry (U.S.)',
			content: 'Lorem ipsum dolorem and happy go lucky penguins made it to Madagascar shortly before ad hoc ergot. It is a trivial pursuit if I have ever started on, one in which I could embark for weeks upon days, until the dawn frays.'
		}, {
			image: null,
			title: 'It is What it Looks Like: White People Dominate the Screen',
			content: 'Lorem ipsum dolorem and happy go lucky penguins made it to Madagascar shortly before ad hoc ergot. It is a trivial pursuit if I have ever started on, one in which I could embark for weeks upon days, until the dawn frays.'
		}, {
			image: null,
			title: 'Doughnuts, Sliders, and Time Series, Oh My!',
			content: 'Lorem ipsum dolorem and happy go lucky penguins made it to Madagascar shortly before ad hoc ergot. It is a trivial pursuit if I have ever started on, one in which I could embark for weeks upon days, until the dawn frays.'
		}].map(row => 
			<FeedRow image={row.image} title={row.title} preview={row.content} />
		)

		return (
			<div className="Feed" >
				{feedRows}
			</div>
		);
	}
}

