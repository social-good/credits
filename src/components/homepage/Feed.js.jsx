import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../../stylesheets/Feed.css'

class FeedRow extends Component {

	render() {
		// TODO: be more cognizant of how and when this image loads. 
		return (
			<Link to={`/feed/${this.props.linkPath}`} style={{ textDecoration: 'none', color: 'black' }}>
				<div className="FeedRow">
					<img className="feed-row-image" src={this.props.imagePath} alt={'Could not display.'} />
					<div className="feed-row-words">
						<div className="feed-row-title"><h2>{this.props.title}</h2></div>
						<div className="feed-row-preview">{this.props.preview.substring(0, 200) + '...'}</div>
					</div>
					<hr />
				</div>
			</Link>
		);
	}
}

export default class Feed extends Component {

	render() {

		// Data goes here
		var feedRows = [{
			imagePath: require('../../media/images/Ninth_Academy_Awards.jpg'),
			linkPath: '0',
			title: 'Target: Representational Inequality in the U.S. Film Industry',
			content: 'Lorem ipsum dolorem and happy go lucky penguins made it to Madagascar shortly before ad hoc ergot. It is a trivial pursuit if I have ever started on, one in which I could embark for weeks upon days, until the dawn frays.'
		}, {
			imagePath: require('../../media/images/TopCenturyDiasporaBreakdown.png'),
			linkPath: '1',
			title: 'It\'s Exactly What It Looks Like: White People Dominate the Screen Since 1900',
			content: 'Lorem ipsum dolorem and happy go lucky penguins made it to Madagascar shortly before ad hoc ergot. It is a trivial pursuit if I have ever started on, one in which I could embark for weeks upon days, until the dawn frays.'
		}, {
			imagePath: require('../../media/images/Doughnut.png'),
			linkPath: '2',
			title: 'Doughnuts, Sliders, and Time Series, Oh My!',
			content: 'Lorem ipsum dolorem and happy go lucky penguins made it to Madagascar shortly before ad hoc ergot. It is a trivial pursuit if I have ever started on, one in which I could embark for weeks upon days, until the dawn frays.'
		}, {
			imagePath: require('../../media/images/Doughnut.png'),
			linkPath: '3',
			title: 'Talk to me!',
			content: 'Lorem ipsum dolorem and happy go lucky penguins made it to Madagascar shortly before ad hoc ergot. It is a trivial pursuit if I have ever started on, one in which I could embark for weeks upon days, until the dawn frays.'
		}].map(row => 
			<FeedRow imagePath={row.imagePath} linkPath={row.linkPath} title={row.title} preview={row.content} />
		)

		return (
			<div className="Feed" >
				{feedRows}
			</div>
		);
	}
}

